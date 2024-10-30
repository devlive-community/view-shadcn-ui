<template>
  <div :class="['inline-flex items-center gap-1']">
    <div :class="['text-xs',
                  textColor ? [
                      isPositive ? 'text-red-500' : 'text-green-500'
                  ] : 'text-gray-500'
          ]">
      <slot>{{ value }}</slot>
    </div>

    <div v-if="isPositive" class="w-4 h-4 text-red-500">
      <slot name="rise">
        <svg viewBox="0 0 24 24"
             fill="none"
             stroke="currentColor"
             stroke-width="2">
          <path d="M23 6l-9.5 9.5-5-5L1 18"/>
          <path d="M17 6h6v6"/>
        </svg>
      </slot>
    </div>
    <div v-else class="w-4 h-4 text-green-500">
      <slot name="descend">
        <svg viewBox="0 0 24 24"
             fill="none"
             stroke="currentColor"
             stroke-width="2">
          <path d="M23 18l-9.5-9.5-5 5L1 6"/>
          <path d="M17 18h6v-6"/>
        </svg>
      </slot>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const props = withDefaults(defineProps<{
  value?: number
  reverse?: boolean
  textColor?: boolean
}>(), {
  value: 0,
  reverse: false,
  textColor: false
})

const isPositive = computed(() => props.reverse ? props.value < 0 : props.value > 0)
</script>
