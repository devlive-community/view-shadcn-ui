<template>
  <Button :class="cn(computedSize, 'bg-[--button-bg] hover:bg-[--button-bg-hover]', {
              'rounded-full': round || circle
            })"
          :style="{
            '--button-bg': computedType,
            '--button-bg-hover': calculateHoverColor(computedType),
            backgroundColor: color
          }"
          :size="circle ? 'icon' : 'default'">
    <div v-if="loading" class="flex items-center">
      <Loader2 class="animate-spin mr-1.5"/>
      <slot v-if="$slots.loading" name="loading"/>
    </div>

    <div v-else class="flex items-center">
      <slot v-if="$slots.icon" name="icon" :class="{'mr-1.5': text || $slots.default}"/>
      <span v-if="text">{{ text }}</span>
      <slot v-else/>
    </div>
  </Button>
</template>

<script setup lang="ts">
import { ref, watchEffect } from 'vue'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { Loader2 } from 'lucide-vue-next'
import { calculateHoverColor } from '@/utils/Color.ts'
import { Size } from '@/ui/enum/Size.ts'
import { Type } from '@/ui/enum/Type.ts'

const props = defineProps<{
  text?: string
  size?: keyof typeof Size
  type?: keyof typeof Type
  round?: boolean
  circle?: boolean
  loading?: boolean
  color?: string
}>()

const computedSize = ref<string>('default')
const computedType = ref<string>('primary')

watchEffect(() => {
  computedSize.value = Size[props.size || 'default']
  computedType.value = Type[props.type || 'primary']
})
</script>
