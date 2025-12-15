<template>
  <div :class="[
            'rounded-sm relative',
            glass ? 'backdrop-blur-xl backdrop-saturate-150' : '',
            glass ? (dark ? 'bg-white/10' : 'bg-white/60') : (dark ? 'bg-gray-800' : 'bg-white'),
            border && 'border',
            glass && border ? 'border-white/20' : (border && dark && 'border-gray-700'),
            glass ? 'shadow-lg shadow-black/5' : Shadow[shadow]
       ]">
    <div class="relative">
      <ShadcnSpin v-if="!onlyContentLoading" v-model="localLoading" :dark="dark" fixed/>

      <div v-if="$slots.title || title"
           :class="[
                'p-2',
                border && 'border-b',
                border && dark && 'border-gray-700',
                $slots.extra && 'flex flex-row items-center justify-between'
           ]">
        <div class="grid gap-2">
          <h3 :class="['text-lg font-semibold leading-none tracking-tight', dark && 'text-gray-100']">
            <span v-if="title">{{ title }}</span>
            <slot v-else name="title"/>
          </h3>
          <div v-if="$slots.description || description">
            <p :class="['text-sm', dark ? 'text-gray-400' : 'text-muted-foreground']">
              <span v-if="description">{{ description }}</span>
              <slot v-else name="description"/>
            </p>
          </div>
        </div>
        <div v-if="$slots.extra">
          <slot name="extra"/>
        </div>
      </div>

      <div :class="[onlyContentLoading && 'relative']">
        <ShadcnSpin v-if="onlyContentLoading" v-model="localLoading" :dark="dark" fixed/>
        <slot name="content"/>
        <slot/>
      </div>

      <div v-if="$slots.footer">
        <slot name="footer"/>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { CardProps, Shadow } from '@/ui/card/types.ts'
import { ShadcnSpin } from '@/ui/spin'
import { ref, watch } from 'vue'

const props = withDefaults(defineProps<CardProps>(), {
  shadow: 'never',
  border: true,
  loading: false,
  onlyContentLoading: false,
  dark: false,
  glass: false
})

const localLoading = ref(props.loading)

watch(() => props.loading, (value) => {
  localLoading.value = value
})
</script>