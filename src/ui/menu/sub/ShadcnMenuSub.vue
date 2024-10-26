<template>
  <div :class="[isHorizontal ? 'inline-block relative' : 'block']">
    <div :class="[
          'px-3 py-2 text-sm rounded-md hover:bg-gray-100 focus:outline-none focus:bg-gray-100 cursor-pointer',
          'flex items-center justify-between gap-2',
          { 'bg-gray-100': isExpanded || hasActiveChild }
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
    <Transition enter-active-class="transition duration-100 ease-out"
                enter-from-class="transform scale-95 opacity-0"
                enter-to-class="transform scale-100 opacity-100"
                leave-active-class="transition duration-75 ease-in"
                leave-from-class="transform scale-100 opacity-100"
                leave-to-class="transform scale-95 opacity-0">
      <div v-show="isExpanded"
           :class="[
            'space-y-1',
            isHorizontal ? 'absolute left-0 mt-2.5 bg-white w-fit shadow-lg px-2 py-2 z-20' : 'pl-4 mt-1'
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
}

provide('menuContext', {
  ...menuContext,
  parentName: props.name
})

const isHorizontal = computed(() => menuContext.direction === 'horizontal')
const isExpanded = computed(() => menuContext.expandedKey.value === props.name)

const hasActiveChild = ref(false)

const checkActiveChild = () => {
  const slotElements = document.querySelectorAll(`[data-parent="${ props.name }"]`)
  hasActiveChild.value = Array.from(slotElements).some(
      (element: HTMLElement) => element.dataset.name === menuContext.activeKey.value
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
  // If the current expanded item is this component, collapse it; otherwise expand it
  if (menuContext.expandedKey.value === props.name) {
    menuContext.setExpandedKey(null)
    // Keep the selected state when manually folding, if there is still a selected item in the subitem
    checkActiveChild()
  }
  else {
    menuContext.setExpandedKey(props.name)
  }
}
</script>
