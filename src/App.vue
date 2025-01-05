<template>
  <div class="p-32 space-y-7">
    <ShadcnInput name="username" placeholder="请输入用户名">
      <template #prefix>
        <ShadcnIcon icon="User" size="18"/>
      </template>

      <template #suffix>
        <ShadcnIcon icon="Search" size="18"/>
      </template>
    </ShadcnInput>

    <ShadcnImage src="https://view-shadcn-ui.devlive.org/logo.svg" alt="View Shadcn UI" />
  </div>
</template>

<script setup lang="ts">
</script>