<template>
  <div class="mt-4 space-y-4">
    <div class="flex items-center space-x-2">
      <ShadcnRadio v-model="type" value="every" name="second-type">
        {{ t('cron.text.everySecond') }}
      </ShadcnRadio>
    </div>

    <div class="flex items-center space-x-2 select-none">
      <ShadcnRadio v-model="type" value="period" name="second-type">
        {{ t('cron.text.periodFrom') }}
      </ShadcnRadio>
      <div class="flex items-center space-x-2">
        <ShadcnNumber v-model="periodStart"
                      class="w-16"
                      :min="1"
                      :max="59"/>
        <span>-</span>
        <ShadcnNumber v-model="periodEnd"
                      class="w-16"
                      :min="1"
                      :max="59"/>
        <span class="text-sm">{{ t('cron.text.second') }}</span>
      </div>
    </div>

    <div class="flex items-center space-x-2 select-none">
      <ShadcnRadio v-model="type" value="start" name="second-type">
        {{ t('cron.text.fromStart') }}
      </ShadcnRadio>
      <div class="flex items-center space-x-2">
        <ShadcnNumber v-model="start"
                      class="w-16"
                      :min="0"
                      :max="59"/>
        <span class="text-sm">{{ t('cron.text.secondStart') }}，</span>
        <span class="text-sm">{{ t('cron.text.every') }}</span>
        <ShadcnNumber v-model="interval"
                      class="w-16"
                      :min="1"
                      :max="59"/>
        <span class="text-sm">{{ t('cron.text.secondExecute') }}</span>
      </div>
    </div>

    <div class="flex items-center space-x-2">
      <ShadcnRadio v-model="type" value="specify" name="second-type">
        {{ t('cron.text.specify') }}
      </ShadcnRadio>
      <ShadcnSelect v-model="specify"
                    multiple
                    :options="options"
                    :placeholder="t('cron.placeholder.multiple')"/>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'
import { t } from '@/utils/locale'

interface Props
{
  modelValue: string
}

defineProps<Props>()
const emit = defineEmits<{
  (e: 'update:modelValue', value: string): void
}>()

const type = ref('every')
const periodStart = ref(1)
const periodEnd = ref(2)
const start = ref(0)
const interval = ref(1)
const specify = ref<number[]>([])

const options = Array.from({ length: 60 }, (_, i) => ({
  label: i.toString(),
  value: i
}))

watch(
    [type, periodStart, periodEnd, start, interval, specify],
    () => {
      let expression = ''
      switch (type.value) {
        case 'every':
          expression = '*'
          break
        case 'period':
          expression = `${ periodStart.value }-${ periodEnd.value }`
          break
        case 'start':
          expression = `${ start.value }/${ interval.value }`
          break
        case 'specify':
          expression = specify.value.join(',')
          break
      }
      emit('update:modelValue', expression)
    },
    { immediate: true }
)
</script>