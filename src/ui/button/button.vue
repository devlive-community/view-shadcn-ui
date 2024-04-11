<template>
  <Button :style="{
              '--button-bg': computedType,
              '--button-bg-hover': calculateHoverColor(computedType),
              backgroundColor: color
            }"
          :class="cn(
              computedSize,
              'bg-[--button-bg] hover:bg-[--button-bg-hover]',
              { 'rounded-full': round },
              { 'rounded-full': circle }
          )"
          :size="circle ? 'icon' : 'default'">
    <span :class="cn({'animate-spin mr-1.5': (loading || $slots.loading)})">
      <slot v-if="!$slots.icon && $slots.loading" name="loading"/>
      <Loader2 v-else-if="loading"/>
    </span>

    <span v-if="$slots.icon" :class="cn({'mr-1.5': (text || $slots.default)})">
      <slot name="icon"/>
    </span>

    <span>
      <span v-if="text">{{ text }}</span>
      <slot v-else/>
    </span>
  </Button>
</template>

<script lang="ts">
import { defineComponent, ref, watchEffect } from 'vue'
import { Size } from '@/ui/enum/Size.ts'
import { Button } from '@/components/ui/button'
import { Type } from '@/ui/enum/Type.ts'
import { cn } from '@/lib/utils.ts'
import { Loader2 } from 'lucide-vue-next'
import { calculateHoverColor } from '@/utils/Color.ts'

export default defineComponent({
  name: 'IButton',
  components: {
    Button,
    Loader2
  },
  props: {
    text: {
      type: String
    },
    size: {
      type: String,
      default: 'default'
    },
    type: {
      type: String,
      default: 'primary'
    },
    round: {
      type: Boolean,
      default: false
    },
    circle: {
      type: Boolean,
      default: false
    },
    loading: {
      type: Boolean,
      default: false
    },
    color: {
      type: String
    }
  },
  setup(props)
  {
    const computedSize = ref<string>('default')
    const computedType = ref<string>('primary')

    watchEffect(() => {
      computedSize.value = Size[props.size as keyof typeof Size]
      computedType.value = Type[props.type as keyof typeof Type]
    })

    return {
      cn,
      calculateHoverColor,
      computedSize,
      computedType
    }
  }
})
</script>
