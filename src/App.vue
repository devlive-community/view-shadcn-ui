<template>
  <div class="border border-gray-300 bg-gray-200 relative rounded overflow-hidden p-5 text-white text-center space-y-5">
    <div class="text-gray-800 text-left font-semibold mb-2 mt-8">Transfer 组件示例</div>

    <div class="text-gray-800 text-left text-sm mb-2">基础用法</div>
    <ShadcnTransfer v-model="transferSelected1"
                    :data="transferData1"
                    type="success"
                    @on-change="handleTransferChange"/>

    <div class="text-gray-800 text-left text-sm mb-2 mt-4">自定义列表标题</div>
    <ShadcnTransfer v-model="transferSelected2"
                    :data="transferData2"
                    left-title="待选择"
                    right-title="已选择"/>

    <div class="text-gray-800 text-left text-sm mb-2 mt-4">自定义高度</div>
    <ShadcnTransfer v-model="transferSelected8"
                    :data="transferData8"
                    height="100px"/>

    <div class="text-gray-800 text-left text-sm mb-2 mt-4">液态玻璃效果</div>
    <div class="bg-gradient-to-br from-purple-400 via-pink-500 to-red-500 p-6 rounded-lg">
      <ShadcnTransfer v-model="transferSelected3"
                      :data="transferData3"
                      :glass="true"/>
    </div>

    <div class="text-gray-800 text-left text-sm mb-2 mt-4">不同尺寸</div>
    <div class="space-y-4">
      <div>
        <div class="text-gray-600 text-xs mb-1">Small</div>
        <ShadcnTransfer v-model="transferSelected4"
                        :data="transferData4"
                        size="small"/>
      </div>
      <div>
        <div class="text-gray-600 text-xs mb-1">Default (默认)</div>
        <ShadcnTransfer v-model="transferSelected5"
                        :data="transferData5"
                        size="default"/>
      </div>
      <div>
        <div class="text-gray-600 text-xs mb-1">Large</div>
        <ShadcnTransfer v-model="transferSelected6"
                        :data="transferData6"
                        size="large"/>
      </div>
    </div>

    <div class="text-gray-800 text-left text-sm mb-2 mt-4">自定义渲染</div>
    <ShadcnTransfer v-model="transferSelected7" :data="transferData7">
      <template #item="{ item }">
        <div class="flex items-center gap-2">
          <ShadcnIcon :icon="item.icon" class="w-4 h-4"/>
          <span>{{ item.label }}</span>
        </div>
      </template>
    </ShadcnTransfer>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { ShadcnTransfer } from "@/ui/transfer";
import { ShadcnIcon } from "@/ui/icon";

// Transfer 示例数据
const transferSelected1 = ref([2, 3]);
const transferData1 = ref([
  { key: 1, label: '选项 1' },
  { key: 2, label: '选项 2' },
  { key: 3, label: '选项 3' },
  { key: 4, label: '选项 4' },
  { key: 5, label: '选项 5' },
]);

const transferSelected2 = ref([2]);
const transferData2 = ref([
  { key: 1, label: 'Angular' },
  { key: 2, label: 'React' },
  { key: 3, label: 'Vue' },
  { key: 4, label: 'Svelte' },
]);

const transferSelected3 = ref([2]);
const transferData3 = ref([
  { key: 1, label: '选项 1' },
  { key: 2, label: '选项 2' },
  { key: 3, label: '选项 3' },
  { key: 4, label: '选项 4' },
]);

const transferSelected4 = ref([1]);
const transferData4 = ref([
  { key: 1, label: '选项 1' },
  { key: 2, label: '选项 2' },
  { key: 3, label: '选项 3' },
]);

const transferSelected5 = ref([1]);
const transferData5 = ref([
  { key: 1, label: '选项 1' },
  { key: 2, label: '选项 2' },
  { key: 3, label: '选项 3' },
]);

const transferSelected6 = ref([1]);
const transferData6 = ref([
  { key: 1, label: '选项 1' },
  { key: 2, label: '选项 2' },
  { key: 3, label: '选项 3' },
]);

const transferSelected7 = ref([1]);
const transferData7 = ref([
  { key: 1, label: '首页', icon: 'Home' },
  { key: 2, label: '用户', icon: 'User' },
  { key: 3, label: '设置', icon: 'Settings' },
  { key: 4, label: '文件', icon: 'File' },
]);

const transferSelected8 = ref([1, 2]);
const transferData8 = ref([
  { key: 1, label: '选项 1' },
  { key: 2, label: '选项 2' },
  { key: 3, label: '选项 3' },
  { key: 4, label: '选项 4' },
  { key: 5, label: '选项 5' },
  { key: 6, label: '选项 6' },
  { key: 7, label: '选项 7' },
  { key: 8, label: '选项 8' },
]);

const handleTransferChange = (value: (string | number)[], direction: 'left' | 'right', movedKeys: (string | number)[]) => {
  console.log('value:', value);
  console.log('direction:', direction);
  console.log('movedKeys:', movedKeys);
};
</script>
