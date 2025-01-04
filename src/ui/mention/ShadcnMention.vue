<template>
  <div class="relative w-full">
    <div class="relative w-full border rounded-md overflow-hidden flex items-center"
         :class="[
             Size[finalSize],
             [HoverType[type]],
             { 'cursor-not-allowed opacity-50 bg-gray-100': disabled }
         ]">
      <div class="w-full px-1 flex flex-nowrap gap-1 overflow-x-auto items-center min-h-full"
           style="scrollbar-width: none;">
        <template v-for="tag in selectedTags" :key="tag.id">
          <span class="inline-flex items-center rounded px-1.5 text-sm select-none text-white shrink-0"
                :class="[
                    WrapSize[finalSize],
                     { 'animate-shake bg-red-100': tag.id === highlightedId },
                     [BaseBackgroundType[type]]
                ]">
            {{ trigger }}{{ tag.name }}
          </span>
        </template>

        <input ref="inputRef"
               type="text"
               class="flex-1 outline-none bg-transparent min-w-[60px]"
               :class="{ 'cursor-not-allowed opacity-50 bg-gray-100': disabled }"
               :disabled="disabled"
               :placeholder="selectedTags.length ? '' : placeholder"
               :value="inputValue"
               @input="handleInput"
               @keydown.up.prevent.stop="handleKeyUp"
               @keydown.down.prevent.stop="handleKeyDown"
               @keydown.enter.prevent.stop="handleKeyEnter"
               @keydown.esc.prevent.stop="handleKeyEsc"
               @keydown.backspace="handleBackspace"
               @focus="handleFocus"
               @blur="handleBlur"/>
      </div>
    </div>

    <Transition
        enter-active-class="transition ease-out duration-200"
        enter-from-class="opacity-0 translate-y-1"
        enter-to-class="opacity-100 translate-y-0"
        leave-active-class="transition ease-in duration-150"
        leave-from-class="opacity-100 translate-y-0"
        leave-to-class="opacity-0 translate-y-1">
      <div v-if="showItems && filteredItems.length > 0"
           ref="dropdownRef"
           class="absolute z-50 w-full max-h-[200px] mt-1 overflow-auto bg-white border rounded-md shadow-lg space-y-1 px-2 py-2"
           @scroll="handleScroll">
        <div v-for="(item, index) in filteredItems"
             :key="item.id"
             class="p-2 justify-between items-center flex rounded-md"
             :class="{
                 'bg-gray-100': selectedIndex === index,
                 'cursor-not-allowed opacity-50 bg-gray-100': isItemSelected(item) || item.disabled,
                 'cursor-pointer': !isItemSelected(item) && !item.disabled,
                 [BaseTextType[type]]: isItemSelected(item),
                 [HoverType[type]]: !item.disabled && !isItemSelected(item)
             }"
             @click.stop="(event) => handleItemClick(item, event)"
             @mouseenter="() => handleItemHover(index, item)">
          <slot name="item" :item="item" :selected="isItemSelected(item)">
            {{ item.name }}
            <span v-if="isItemSelected(item)">
              <ShadcnIcon icon="Check"/>
            </span>
          </slot>
        </div>

        <!-- 加载状态 -->
        <div v-if="loading" class="py-2 text-center text-gray-500">
          <ShadcnSpin :type="type" :model-value="loading"/>
        </div>
      </div>
    </Transition>
  </div>
</template>

<script setup lang="ts">
import { computed, inject, nextTick, ref, watch } from 'vue'
import { t } from '@/utils/locale'
import type { MentionEmits, MentionOption, MentionProps } from './types'
import { Size, WrapSize } from '@/ui/common/size.ts'
import { BaseBackgroundType, BaseTextType, HoverType } from '@/ui/common/type.ts'
import { FormItemContext } from '@/ui/form/context.ts'

const props = withDefaults(defineProps<MentionProps>(), {
  placeholder: t('mention.text.placeholder') as string,
  size: 'default',
  type: 'primary',
  disabled: false,
  trigger: '@',
  loadData: undefined,
  max: Infinity
})

const emit = defineEmits<MentionEmits>()

const formItemContext = props.name ? inject<FormItemContext | null>(`form-item-${ props.name }`) : null

const finalSize = computed(() => props.size)
const inputRef = ref<HTMLInputElement>()
const dropdownRef = ref<HTMLDivElement>()
const inputValue = ref('')
const showItems = ref(false)
const selectedIndex = ref(0)
const selectedTags = ref<MentionOption[]>([])
const highlightedId = ref<number | null>(null)
const loading = ref(false)

const isBottom = (el: HTMLElement) => {
  const { scrollHeight, scrollTop, clientHeight } = el
  return scrollHeight <= Math.ceil(scrollTop + clientHeight)
}

// 处理滚动加载
const handleScroll = (e: Event) => {
  e.stopPropagation()

  if (loading.value) {
    return
  }

  const target = e.target as HTMLElement
  if (isBottom(target)) {
    loadMoreData()
  }
}

// 加载更多数据
const loadMoreData = () => {
  if (!props.loadData || loading.value) {
    return
  }

  loading.value = true
  emit('on-load-data')

  props.loadData((_newItems: MentionOption[]) => {
    loading.value = false
  })
}

const initSelectedTags = (value: any[] | undefined) => {
  if (!value || !Array.isArray(value)) {
    selectedTags.value = []
    return
  }

  selectedTags.value = value.map(id => {
    const numId = typeof id === 'string' ? parseInt(id) : id
    return props.items.find(item => item.id === numId)
  }).filter((item): item is MentionOption => item != null)
}

const isItemSelected = (item: MentionOption) => {
  return selectedTags.value.some(tag => tag.id === item.id)
}

const highlightTag = (id: number) => {
  highlightedId.value = id
  setTimeout(() => {
    highlightedId.value = null
  }, 500)
}

const filteredItems = computed(() => {
  if (!inputValue.value.startsWith(props.trigger)) {
    return []
  }
  const query = inputValue.value.slice(props.trigger.length).toLowerCase()
  if (!query) {
    return props.items
  }
  return props.items.filter(item =>
      item.name.toLowerCase().includes(query)
  )
})

const handleInput = (event: Event) => {
  event.stopPropagation()
  const target = event.target as HTMLInputElement
  inputValue.value = target.value

  if (inputValue.value.startsWith(props.trigger)) {
    showItems.value = true
    selectedIndex.value = 0 // 重置选中索引
    emit('on-search', inputValue.value.slice(props.trigger.length))
  }
  else {
    showItems.value = false
  }

  emit('on-change', formatTags())
  emit('update:modelValue', formatTags())

  if (formItemContext) {
    formItemContext.onBlur()
  }
}

const handleItemHover = (index: number, item: MentionOption) => {
  if (!item.disabled) {
    selectedIndex.value = index
  }
}

const handleItemClick = (item: MentionOption, event?: Event) => {
  event?.stopPropagation()

  if (item.disabled) {
    return
  }

  if (isItemSelected(item)) {
    highlightTag(item.id as any)
    return
  }

  selectItem(item)
}

const selectItem = (item: MentionOption) => {
  if (selectedTags.value.length >= props.max) {
    return
  }

  selectedTags.value.push(item)
  inputValue.value = ''
  showItems.value = false
  selectedIndex.value = 0
  emit('on-select', item)
  emit('on-change', formatTags())
  emit('update:modelValue', formatTags())

  if (formItemContext) {
    formItemContext.onBlur()
  }

  nextTick(() => {
    inputRef.value?.focus()
  })
}

const handleKeyUp = (event: KeyboardEvent) => {
  event.stopPropagation()
  if (!showItems.value || filteredItems.value.length === 0) {
    return
  }

  if (selectedIndex.value > 0) {
    selectedIndex.value--
  }
  else {
    selectedIndex.value = filteredItems.value.length - 1
  }

  nextTick(() => {
    scrollToSelected()
  })
}

const handleKeyDown = (event: KeyboardEvent) => {
  event.stopPropagation()
  if (!showItems.value || filteredItems.value.length === 0) {
    return
  }

  if (selectedIndex.value < filteredItems.value.length - 1) {
    selectedIndex.value++
  }
  else {
    selectedIndex.value = 0
  }

  nextTick(() => {
    scrollToSelected()
  })
}

const handleKeyEnter = (event: KeyboardEvent) => {
  event.stopPropagation()
  if (!showItems.value || filteredItems.value.length === 0) {
    return
  }

  const selectedItem = filteredItems.value[selectedIndex.value]
  if (selectedItem && !selectedItem.disabled) {
    selectItem(selectedItem)
  }
}

const handleKeyEsc = (event: KeyboardEvent) => {
  event.stopPropagation()
  showItems.value = false
  selectedIndex.value = 0
  inputRef.value?.blur()
}

const handleBackspace = (event: KeyboardEvent) => {
  event.stopPropagation()
  if (!inputValue.value && selectedTags.value.length > 0) {
    selectedTags.value.pop()
    emit('on-change', formatTags())
    emit('update:modelValue', formatTags())
  }
}

const handleFocus = (event: FocusEvent) => {
  event.stopPropagation()
  if (inputValue.value.startsWith(props.trigger)) {
    showItems.value = true
  }
}

const handleBlur = (event: FocusEvent) => {
  event.stopPropagation()

  if (formItemContext) {
    formItemContext.onBlur()
  }

  setTimeout(() => {
    showItems.value = false
    selectedIndex.value = 0
  }, 200)
}

const scrollToSelected = () => {
  if (!dropdownRef.value) {
    return
  }

  const container = dropdownRef.value
  const items = container.getElementsByTagName('div')
  const selectedItem = items[selectedIndex.value]

  if (!selectedItem) {
    return
  }

  const containerTop = container.scrollTop
  const containerBottom = containerTop + container.clientHeight
  const elementTop = selectedItem.offsetTop
  const elementBottom = elementTop + selectedItem.offsetHeight

  if (elementTop < containerTop) {
    container.scrollTop = elementTop
  }
  else if (elementBottom > containerBottom) {
    container.scrollTop = elementBottom - container.clientHeight
  }
}

const formatTags = () => {
  return selectedTags.value.map(item => item.id)
}

watch(() => props.modelValue, (newVal) => {
  initSelectedTags(newVal)
}, { immediate: true, deep: true })
</script>