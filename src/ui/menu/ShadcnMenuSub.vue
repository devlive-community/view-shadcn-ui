<template>
  <div :class="[isHorizontal ? 'inline-block relative' : 'block']">
    <div :class="[
          'px-3 py-2 text-sm rounded-md focus:outline-none cursor-pointer',
          'flex items-center justify-between gap-2',
          dark ? 'hover:bg-gray-700 focus:bg-gray-700' : 'hover:bg-gray-100 focus:bg-gray-100',
          (isExpanded || hasActiveChild) ? (dark ? 'bg-gray-700' : 'bg-gray-100') : '',
          dark ? 'text-gray-200' : ''
        ]"
         @click="toggleExpand">
      <div class="flex items-center gap-2">
        <slot name="icon"/>
        <span>
          <slot name="title"/>
        </span>
      </div>
      <svg :class="['w-4 h-4 transition-transform duration-200',
                    { 'rotate-180': isExpanded }
            ]"
           fill="currentColor"
           viewBox="0 0 20 20"
           xmlns="http://www.w3.org/2000/svg">
        <path clip-rule="evenodd"
              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
              fill-rule="evenodd"/>
      </svg>
    </div>
    <Transition
      :name="isHorizontal ? 'menu-fade' : 'menu-slide'"
      @enter="onEnter"
      @after-enter="onAfterEnter"
      @leave="onLeave"
      @after-leave="onAfterLeave">
      <div v-show="isExpanded"
           ref="menuContent"
           :class="[
            'space-y-1 overflow-hidden',
            isHorizontal ? (dark ? 'absolute left-0 mt-2.5 bg-gray-800 w-fit shadow-lg px-2 py-2 z-20 rounded-md' : 'absolute left-0 mt-2.5 bg-white w-fit shadow-lg px-2 py-2 z-20 rounded-md') : 'pl-4 mt-1'
          ]">
        <slot/>
      </div>
    </Transition>
  </div>
</template>

<script setup lang="ts">
import { computed, inject, onMounted, provide, ref, watch } from 'vue'

const props = defineProps<{
  name: string
}>()

const menuContext = inject('menuContext') as {
  direction: 'horizontal' | 'vertical'
  expandedKey: { value: string | null }
  activeKey: { value: string | null }
  setExpandedKey: (key: string | null) => void
  dark?: boolean
}

provide('menuContext', {
  ...menuContext,
  parentName: props.name
})

const isHorizontal = computed(() => menuContext.direction === 'horizontal')
const isExpanded = computed(() => menuContext.expandedKey.value === props.name)
const dark = computed(() => menuContext.dark || false)

const hasActiveChild = ref(false)
const menuContent = ref<HTMLElement | null>(null)

const checkActiveChild = () => {
  const slotElements = document.querySelectorAll(`[data-parent="${ props.name }"]`)
  hasActiveChild.value = Array.from(slotElements).some(
      (element) => (element as HTMLElement).dataset.name === menuContext.activeKey.value
  )
}

watch(
    () => menuContext.activeKey.value,
    () => {
      checkActiveChild()
    },
    { immediate: true }
)

onMounted(() => {
  checkActiveChild()
})

const toggleExpand = () => {
  if (menuContext.expandedKey.value === props.name) {
    menuContext.setExpandedKey(null)
    checkActiveChild()
  }
  else {
    menuContext.setExpandedKey(props.name)
  }
}

const onEnter = (el: Element) => {
  const element = el as HTMLElement
  element.style.height = '0'
  element.style.opacity = '0'
}

const onAfterEnter = (el: Element) => {
  const element = el as HTMLElement
  const height = element.scrollHeight
  element.style.transition = 'height 0.3s ease, opacity 0.2s ease'
  element.style.height = `${height}px`
  element.style.opacity = '1'

  setTimeout(() => {
    element.style.height = 'auto'
  }, 300)
}

const onLeave = (el: Element) => {
  const element = el as HTMLElement
  element.style.height = `${element.scrollHeight}px`
  element.style.transition = 'height 0.3s ease, opacity 0.2s ease'

  requestAnimationFrame(() => {
    element.style.height = '0'
    element.style.opacity = '0'
  })
}

const onAfterLeave = (el: Element) => {
  const element = el as HTMLElement
  element.style.height = ''
  element.style.opacity = ''
  element.style.transition = ''
}
</script>

<style scoped>
.menu-fade-enter-active,
.menu-fade-leave-active {
  transition: opacity 0.2s ease, transform 0.2s ease;
}

.menu-fade-enter-from,
.menu-fade-leave-to {
  opacity: 0;
  transform: translateY(-8px);
}
</style>
