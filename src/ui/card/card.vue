<template>
  <Card :class="cn('rounded-sm', computedShadow)">
    <CardHeader v-if="$slots.title || title" :class="`flex flex-row items-center justify-between border-b p-4 ${titleClass}`">
      <div class="grid gap-2">
        <CardTitle>
          <span v-if="title">{{ title }}</span>
          <slot v-else name="title"/>
        </CardTitle>
      </div>
      <div>
        <slot name="extra"/>
      </div>
    </CardHeader>
    <CardContent :class="`${bodyClass}`">
      <slot/>
    </CardContent>
    <CardFooter class="border-t p-4" v-if="$slots.footer">
      <slot name="footer"/>
    </CardFooter>
  </Card>
</template>

<script lang="ts">
import { defineComponent, ref, watchEffect } from 'vue'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { cn } from '@/lib/utils.ts'
import { Shadow } from '@/ui/enum/Shadow.ts'

export default defineComponent({
  name: 'ICard',
  components: {
    CardFooter, Card, CardContent, CardHeader, CardTitle
  },
  props: {
    title: {
      type: String
    },
    titleClass: {
      type: String
    },
    bodyClass: {
      type: String
    },
    shadow: {
      type: String,
      default: 'never'
    }
  },
  setup(props)
  {
    const computedShadow = ref<string>('never')

    watchEffect(() => {
      computedShadow.value = Shadow[props.shadow as keyof typeof Shadow]
    })

    return {
      cn,
      computedShadow
    }
  }
})
</script>