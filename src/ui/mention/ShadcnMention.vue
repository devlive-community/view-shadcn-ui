<template>
  <div class="relative w-full">
    <div class="relative w-full border rounded-md overflow-hidden flex items-center"
         :class="[Size[finalSize]]">
      <div class="w-full px-1 flex flex-wrap gap-1 items-center min-h-full">
        <template v-for="tag in selectedTags" :key="tag.id">
          <span class="inline-flex items-center bg-blue-100 rounded px-1.5 text-sm select-none text-gray-500"
                :class="[WrapSize[finalSize], { 'animate-shake bg-red-100': tag.id === highlightedId }]">
            @{{ tag.name }}
          </span>
        </template>
        <input ref="inputRef"
               type="text"
               class="flex-1 outline-none bg-transparent min-w-[60px]"
               :placeholder="selectedTags.length ? '' : placeholder"
               :value="inputValue"
               @input="handleInput"
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
        leave-to-class="opacity-0 translate-y-1"
    >
      <div v-if="showItems && filteredItems.length > 0"
           class="absolute z-50 w-full max-h-[200px] mt-1 overflow-auto bg-white border rounded-md shadow-lg space-y-1 px-2 py-2">
        <div v-for="(item, index) in filteredItems"
             :key="item.id"
             class="p-2 hover:bg-gray-100 justify-between items-center flex rounded-md"
             :class="{
                 'bg-gray-100': selectedIndex === index,
                 'cursor-not-allowed opacity-50 bg-gray-100': isItemSelected(item),
                 'cursor-pointer': !isItemSelected(item)
             }"
             @click="(event) => selectItem(item, event)"
             @mouseenter="selectedIndex = index">
          {{ item.name }}
          <span v-if="isItemSelected(item)">
            <ShadcnIcon icon="Check"/>
          </span>
        </div>
      </div>
    </Transition>
  </div>
</template>

<script setup lang="ts">
import { computed, nextTick, ref, watch } from 'vue'
import { t } from '@/utils/locale'
import type { MentionEmits, MentionOption, MentionProps } from './types'
import { Size, WrapSize } from '@/ui/common/size.ts'

const props = withDefaults(defineProps<MentionProps>(), {
  placeholder: t('mention.text.placeholder') as string,
  size: 'default'
})

const emit = defineEmits<MentionEmits>()

const finalSize = computed(() => props.size)
const inputRef = ref<HTMLInputElement>()
const inputValue = ref('')
const showItems = ref(false)
const selectedIndex = ref(0)
const selectedTags = ref<MentionOption[]>([])
const highlightedId = ref<number | null>(null)

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
  if (!inputValue.value.startsWith('@')) {
    return []
  }
  const query = inputValue.value.slice(1).toLowerCase()
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

  if (inputValue.value.startsWith('@')) {
    showItems.value = true
    emit('on-search', inputValue.value.slice(1))
  }
  else {
    showItems.value = false
  }

  emit('on-change', formatTags())
  emit('update:modelValue', formatTags())
}

const handleBackspace = () => {
  if (!inputValue.value && selectedTags.value.length > 0) {
    selectedTags.value.pop()
    emit('on-change', formatTags())
    emit('update:modelValue', formatTags())
  }
}

const handleFocus = () => {
  if (inputValue.value.startsWith('@')) {
    showItems.value = true
  }
}

const handleBlur = () => {
  setTimeout(() => {
    showItems.value = false
  }, 200)
}

const selectItem = (item: MentionOption, event?: Event) => {
  event?.stopPropagation()

  if (isItemSelected(item)) {
    highlightTag(item.id)
    return
  }

  selectedTags.value.push(item)
  inputValue.value = ''
  showItems.value = false
  selectedIndex.value = 0
  emit('on-select', item)
  emit('on-change', formatTags())
  emit('update:modelValue', formatTags())

  nextTick(() => {
    inputRef.value?.focus()
  })
}

const formatTags = () => {
  return selectedTags.value.map(item => item.id)
}

watch(() => props.modelValue, (newVal) => {
  initSelectedTags(newVal)
}, { immediate: true, deep: true })
</script>