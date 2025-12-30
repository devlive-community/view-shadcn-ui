<template>
  <div :class="[isNested ? 'block relative' : (isHorizontal ? 'inline-block relative' : 'block')]"
       @mouseenter="trigger === 'hover' && handleMouseEnter()"
       @mouseleave="trigger === 'hover' && handleMouseLeave()">
    <div :class="[
          'px-3 py-2 text-sm rounded-md focus:outline-none cursor-pointer select-none',
          'flex items-center justify-between gap-2',
          glass && !dark ? 'text-gray-800 hover:bg-white/50 focus:bg-white/50' : '',
          glass && dark ? 'text-gray-100 hover:bg-white/20 focus:bg-white/20' : '',
          !glass && dark ? 'text-gray-200 hover:bg-gray-700 focus:bg-gray-700' : '',
          !glass && !dark ? 'text-gray-700 hover:bg-gray-100 hover:text-gray-900' : '',
          (isExpanded || hasActiveChild) && !glass ? (dark ? 'bg-gray-700' : 'bg-gray-100 text-gray-900') : '',
          (isExpanded || hasActiveChild) && glass ? (dark ? 'bg-white/20' : 'bg-white/50 text-gray-900') : ''
        ]"
         @click="trigger === 'click' && toggleExpand()">
      <slot name="header" :expanded="isExpanded" :hasActiveChild="hasActiveChild">
        <div class="flex items-center gap-2">
          <slot name="icon"/>
          <span>
            <slot name="title"/>
          </span>
        </div>
      </slot>
      <svg :class="['w-4 h-4 transition-transform duration-200',
                    isNested ? '-rotate-90' : '',
                    isExpanded && !isNested ? 'rotate-180' : ''
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
        @enter="onEnter"
        @leave="onLeave"
        @after-enter="onAfterEnter"
        @after-leave="onAfterLeave">
      <div v-show="isExpanded"
           ref="menuContent"
           :class="[
            'space-y-1',
            isNested && glass && 'absolute left-full top-0 ml-1 w-fit shadow-lg px-2 py-2 z-30 rounded-md backdrop-blur-xl backdrop-saturate-150',
            isNested && glass && (dark ? 'bg-gray-800/30 border border-white/20' : 'bg-white/30 border border-gray-400/40'),
            isNested && !glass && (dark ? 'absolute left-full top-0 ml-1 bg-gray-800 w-fit shadow-lg px-2 py-2 z-30 rounded-md' : 'absolute left-full top-0 ml-1 bg-white w-fit shadow-lg px-2 py-2 z-30 rounded-md border border-gray-200'),
            isHorizontal && !isNested && glass && 'absolute left-0 mt-2.5 w-fit shadow-lg px-2 py-2 z-20 rounded-md backdrop-blur-xl backdrop-saturate-150',
            isHorizontal && !isNested && glass && (dark ? 'bg-gray-800/30 border border-white/20' : 'bg-white/30 border border-gray-400/40'),
            isHorizontal && !isNested && !glass && (dark ? 'absolute left-0 mt-2.5 bg-gray-800 w-fit shadow-lg px-2 py-2 z-20 rounded-md' : 'absolute left-0 mt-2.5 bg-white w-fit shadow-lg px-2 py-2 z-20 rounded-md border border-gray-200'),
            !isHorizontal && !isNested && 'pl-4 mt-1'
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
  activeKey: { value: string | null }
  toggleExpandedKey: (key: string) => void
  isExpanded: (key: string) => boolean
  dark?: { value: boolean }
  glass?: { value: boolean }
  parentName?: string
  trigger?: 'click' | 'hover'
}

provide('menuContext', {
  ...menuContext,
  parentName: props.name
})

const isHorizontal = computed(() => menuContext.direction === 'horizontal')
const isNested = computed(() => !!menuContext.parentName && isHorizontal.value)
const isExpanded = computed(() => menuContext.isExpanded(props.name))
const dark = computed(() => menuContext.dark?.value || false)
const glass = computed(() => menuContext.glass?.value || false)
const trigger = computed(() => menuContext.trigger || 'click')

const hasActiveChild = ref(false)
const menuContent = ref<HTMLElement | null>(null)
let hoverTimer: NodeJS.Timeout | null = null

const checkActiveChild = () => {
  const slotElements = document.querySelectorAll(`[data-parent="${props.name}"]`)
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
  menuContext.toggleExpandedKey(props.name)
  if (!isExpanded.value) {
    checkActiveChild()
  }
}

const handleMouseEnter = () => {
  if (hoverTimer) {
    clearTimeout(hoverTimer)
    hoverTimer = null
  }
  if (!isExpanded.value) {
    menuContext.toggleExpandedKey(props.name)
  }
}

const handleMouseLeave = () => {
  hoverTimer = setTimeout(() => {
    if (isExpanded.value) {
      menuContext.toggleExpandedKey(props.name)
    }
  }, 200)
}

const onEnter = (el: Element) => {
  const element = el as HTMLElement
  if (isHorizontal.value || isNested.value) {
    element.style.opacity = '0'
    if (isNested.value) {
      element.style.transform = 'translateX(-8px)'
    } else {
      element.style.transform = 'translateY(-8px)'
    }
  }
  else {
    element.style.height = '0'
    element.style.opacity = '0'
  }
}

const onAfterEnter = (el: Element) => {
  const element = el as HTMLElement
  if (isHorizontal.value || isNested.value) {
    element.style.transition = 'opacity 0.2s ease, transform 0.2s ease'
    element.style.opacity = '1'
    element.style.transform = isNested.value ? 'translateX(0)' : 'translateY(0)'
  }
  else {
    const height = element.scrollHeight
    element.style.transition = 'height 0.3s ease, opacity 0.2s ease'
    element.style.height = `${height}px`
    element.style.opacity = '1'

    setTimeout(() => {
      element.style.height = 'auto'
    }, 300)
  }
}

const onLeave = (el: Element) => {
  const element = el as HTMLElement
  if (isHorizontal.value || isNested.value) {
    element.style.transition = 'opacity 0.2s ease, transform 0.2s ease'
    requestAnimationFrame(() => {
      element.style.opacity = '0'
      if (isNested.value) {
        element.style.transform = 'translateX(-8px)'
      } else {
        element.style.transform = 'translateY(-8px)'
      }
    })
  }
  else {
    element.style.height = `${element.scrollHeight}px`
    element.style.transition = 'height 0.3s ease, opacity 0.2s ease'

    requestAnimationFrame(() => {
      element.style.height = '0'
      element.style.opacity = '0'
    })
  }
}

const onAfterLeave = (el: Element) => {
  const element = el as HTMLElement
  element.style.height = ''
  element.style.opacity = ''
  element.style.transition = ''
  element.style.transform = ''
}
</script>
