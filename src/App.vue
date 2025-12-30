<template>
  <div :class="['min-h-screen px-6 pb-6', isDark ? 'bg-gray-900' : 'bg-white']">
    <ShadcnButton @click="isDark = !isDark" :dark="isDark" class="mt-2">
      切换暗黑模式
    </ShadcnButton>

    <div class="mt-6">
      <h3 :class="['text-lg font-semibold mb-4', isDark ? 'text-white' : 'text-gray-900']">Menu 液态玻璃效果</h3>
      <div class="p-6 rounded-lg bg-gradient-to-r from-blue-400 to-purple-400">
        <div class="p-8 rounded-lg bg-white/50">
          <ShadcnMenu glass :dark="isDark" v-model="activeKey">
            <ShadcnMenuItem name="home">首页</ShadcnMenuItem>
            <ShadcnMenuSub name="products">
              <template #title>产品</template>
              <ShadcnMenuItem name="product-1">产品 1</ShadcnMenuItem>
              <ShadcnMenuItem name="product-2">产品 2</ShadcnMenuItem>
              <ShadcnMenuItem name="product-3">产品 3</ShadcnMenuItem>
            </ShadcnMenuSub>
            <ShadcnMenuSub name="services">
              <template #title>服务</template>
              <ShadcnMenuItem name="service-1">服务 1</ShadcnMenuItem>
              <ShadcnMenuItem name="service-2">服务 2</ShadcnMenuItem>
            </ShadcnMenuSub>
            <ShadcnMenuItem name="about">关于</ShadcnMenuItem>
            <ShadcnMenuItem name="contact">联系</ShadcnMenuItem>
          </ShadcnMenu>
        </div>
      </div>
    </div>

  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { ShadcnButton } from "@/ui/button";
import { ShadcnMenu, ShadcnMenuItem, ShadcnMenuSub } from "@/ui/menu";

const isDark = ref(false)
const activeKey = ref('home')
</script>
