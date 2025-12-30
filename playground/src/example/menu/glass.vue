<template>
  <div class="space-y-4">
    <div class="relative">
      <div class="h-96 rounded-lg bg-gradient-to-r from-blue-400 to-purple-400"></div>
      <div class="absolute inset-0 flex items-center justify-center p-4">
        <ShadcnMenu glass>
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
    <div class="relative">
      <div class="h-96 rounded-lg bg-gradient-to-r from-green-400 to-teal-400"></div>
      <div class="absolute inset-0 flex items-center justify-center p-4">
        <ShadcnMenu glass direction="horizontal">
          <ShadcnMenuItem name="home">首页</ShadcnMenuItem>
          <ShadcnMenuSub name="products">
            <template #title>产品</template>
            <ShadcnMenuItem name="product-1">产品 1</ShadcnMenuItem>
            <ShadcnMenuItem name="product-2">产品 2</ShadcnMenuItem>
            <ShadcnMenuSub name="more">
              <template #title>更多产品</template>
              <ShadcnMenuItem name="product-3">产品 3</ShadcnMenuItem>
              <ShadcnMenuItem name="product-4">产品 4</ShadcnMenuItem>
            </ShadcnMenuSub>
          </ShadcnMenuSub>
          <ShadcnMenuSub name="services">
            <template #title>服务</template>
            <ShadcnMenuItem name="service-1">服务 1</ShadcnMenuItem>
            <ShadcnMenuItem name="service-2">服务 2</ShadcnMenuItem>
          </ShadcnMenuSub>
          <ShadcnMenuItem name="about">关于</ShadcnMenuItem>
        </ShadcnMenu>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
</script>
