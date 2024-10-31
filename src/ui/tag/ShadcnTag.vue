<template>
  <div :class="['inline-flex items-center rounded-sm border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2',
            'text-primary'
        ]">
    <slot>
      {{ text }}
    </slot>
  </div>
</template>

<script setup lang="ts">
interface Props
{
  text?: string
}

withDefaults(defineProps<Props>(), {})
</script>
