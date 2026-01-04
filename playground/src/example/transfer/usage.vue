<template>
  <div class="space-y-6">
    <div>
      <p class="text-sm mb-2 font-semibold">基础用法</p>
      <ShadcnTransfer
        v-model="selected1"
        :data="data1"
        @on-change="handleChange" />
    </div>

    <div>
      <p class="text-sm mb-2 font-semibold">自定义列表标题</p>
      <ShadcnTransfer
        v-model="selected2"
        :data="data2"
        left-title="待选择"
        right-title="已选择" />
    </div>

    <div>
      <p class="text-sm mb-2 font-semibold">自定义高度</p>
      <ShadcnTransfer
        v-model="selected6"
        :data="data6"
        height="400px" />
    </div>

    <div>
      <p class="text-sm mb-2 font-semibold">不同尺寸</p>
      <div class="space-y-4">
        <div>
          <p class="text-xs mb-1 text-gray-600">Small</p>
          <ShadcnTransfer
            v-model="selected3"
            :data="data3"
            size="small" />
        </div>
        <div>
          <p class="text-xs mb-1 text-gray-600">Default</p>
          <ShadcnTransfer
            v-model="selected4"
            :data="data4"
            size="default" />
        </div>
        <div>
          <p class="text-xs mb-1 text-gray-600">Large</p>
          <ShadcnTransfer
            v-model="selected5"
            :data="data5"
            size="large" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const selected1 = ref([2, 3])
const data1 = ref([
  { key: 1, label: '选项 1' },
  { key: 2, label: '选项 2' },
  { key: 3, label: '选项 3' },
  { key: 4, label: '选项 4' },
  { key: 5, label: '选项 5' },
])

const selected2 = ref([2])
const data2 = ref([
  { key: 1, label: 'Angular' },
  { key: 2, label: 'React' },
  { key: 3, label: 'Vue' },
  { key: 4, label: 'Svelte' },
])

const selected3 = ref([1])
const data3 = ref([
  { key: 1, label: '选项 1' },
  { key: 2, label: '选项 2' },
  { key: 3, label: '选项 3' },
])

const selected4 = ref([1])
const data4 = ref([
  { key: 1, label: '选项 1' },
  { key: 2, label: '选项 2' },
  { key: 3, label: '选项 3' },
])

const selected5 = ref([1])
const data5 = ref([
  { key: 1, label: '选项 1' },
  { key: 2, label: '选项 2' },
  { key: 3, label: '选项 3' },
])

const selected6 = ref([1, 2])
const data6 = ref([
  { key: 1, label: '选项 1' },
  { key: 2, label: '选项 2' },
  { key: 3, label: '选项 3' },
  { key: 4, label: '选项 4' },
  { key: 5, label: '选项 5' },
  { key: 6, label: '选项 6' },
  { key: 7, label: '选项 7' },
  { key: 8, label: '选项 8' },
])

const handleChange = (value: (string | number)[], direction: 'left' | 'right', movedKeys: (string | number)[]) => {
  console.log('value:', value)
  console.log('direction:', direction)
  console.log('movedKeys:', movedKeys)
}
</script>
