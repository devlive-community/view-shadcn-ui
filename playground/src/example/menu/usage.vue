<template>
  <div class="space-y-4">
    <ShadcnMenu>
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
    </ShadcnMenu>
  </div>
</template>

<script setup lang="ts">
</script>
