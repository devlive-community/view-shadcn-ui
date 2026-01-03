<template>
  <div class="border border-gray-300 bg-gray-50 relative rounded overflow-hidden p-5 text-white text-center space-y-5">
    <ShadcnLayout>
      <ShadcnLayoutHeader class="bg-sky-300 text-white">Header</ShadcnLayoutHeader>
      <ShadcnLayoutContent class="bg-sky-600 min-h-[120px] leading-[120px]">Content</ShadcnLayoutContent>
      <ShadcnLayoutFooter class="bg-sky-300 text-white">Footer</ShadcnLayoutFooter>
    </ShadcnLayout>

    <ShadcnLayout>
      <ShadcnLayoutHeader class="bg-sky-300 text-white">Header</ShadcnLayoutHeader>
      <ShadcnLayout>
        <ShadcnLayoutSider class="bg-sky-400 min-h-[120px] leading-[120px]" :collapsible="false">Sider</ShadcnLayoutSider>
        <ShadcnLayoutContent class="bg-sky-600 min-h-[120px] leading-[120px]">Content</ShadcnLayoutContent>
      </ShadcnLayout>
      <ShadcnLayoutFooter class="bg-sky-300 text-white">Footer</ShadcnLayoutFooter>
    </ShadcnLayout>

    <ShadcnLayout>
      <ShadcnLayoutHeader class="bg-sky-300 text-white">Header</ShadcnLayoutHeader>
      <ShadcnLayout>
        <ShadcnLayoutContent class="bg-sky-600 min-h-[120px] leading-[120px]">Content</ShadcnLayoutContent>
        <ShadcnLayoutSider class="bg-sky-400 min-h-[120px] leading-[120px]" :collapsible="false">Sider</ShadcnLayoutSider>
      </ShadcnLayout>
      <ShadcnLayoutFooter class="bg-sky-300 text-white">Footer</ShadcnLayoutFooter>
    </ShadcnLayout>

    <ShadcnLayout>
      <ShadcnLayoutSider class="bg-sky-400 min-h-[120px] leading-[120px]" :collapsible="false">Sider</ShadcnLayoutSider>
      <ShadcnLayout>
        <ShadcnLayoutHeader class="bg-sky-300 text-white">Header</ShadcnLayoutHeader>
        <ShadcnLayoutContent class="bg-sky-600 min-h-[120px] leading-[120px]">Content</ShadcnLayoutContent>
        <ShadcnLayoutFooter class="bg-sky-300 text-white">Footer</ShadcnLayoutFooter>
      </ShadcnLayout>
    </ShadcnLayout>

    <div class="text-gray-800 text-left font-semibold mb-2">可折叠侧边栏示例（带触发器）</div>
    <ShadcnLayout>
      <ShadcnLayoutSider
        class="bg-sky-400 min-h-[120px] flex items-center justify-center"
        :collapsible="true"
        :trigger="true"
        @on-collapse="handleCollapse">
        <div>Sider</div>
      </ShadcnLayoutSider>
      <ShadcnLayout>
        <ShadcnLayoutHeader class="bg-sky-300 text-white">Header</ShadcnLayoutHeader>
        <ShadcnLayoutContent class="bg-sky-600 min-h-[120px] leading-[120px]">Content</ShadcnLayoutContent>
        <ShadcnLayoutFooter class="bg-sky-300 text-white">Footer</ShadcnLayoutFooter>
      </ShadcnLayout>
    </ShadcnLayout>

    <div class="text-gray-800 text-left font-semibold mb-2">可折叠侧边栏示例（自定义触发器）</div>
    <ShadcnLayout>
      <ShadcnLayoutSider
        ref="siderRef"
        class="bg-sky-400 min-h-[120px]"
        :collapsible="true"
        :trigger="false"
        @on-collapse="handleCollapse">
        <template #default>
          <div class="flex items-center justify-center h-full">Sider Content</div>
        </template>
        <template #collapsed>
          <div class="flex items-center justify-center h-full">S</div>
        </template>
      </ShadcnLayoutSider>
      <ShadcnLayout>
        <ShadcnLayoutHeader class="bg-sky-300 text-white flex items-center justify-between px-4">
          <span>Header</span>
          <button
            @click="toggleSider"
            class="px-3 py-1 bg-sky-500 hover:bg-sky-600 rounded text-white text-sm">
            Toggle Sider
          </button>
        </ShadcnLayoutHeader>
        <ShadcnLayoutContent class="bg-sky-600 min-h-[120px] leading-[120px]">Content</ShadcnLayoutContent>
        <ShadcnLayoutFooter class="bg-sky-300 text-white">Footer</ShadcnLayoutFooter>
      </ShadcnLayout>
    </ShadcnLayout>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { ShadcnLayout, ShadcnLayoutContent, ShadcnLayoutFooter, ShadcnLayoutHeader, ShadcnLayoutSider } from "@/ui/layout";

const siderRef = ref<InstanceType<typeof ShadcnLayoutSider> | null>(null);

const handleCollapse = (collapsed: boolean) => {
  console.log('Sider collapsed:', collapsed);
};

const toggleSider = () => {
  if (siderRef.value) {
    siderRef.value.toggle();
  }
};
</script>
