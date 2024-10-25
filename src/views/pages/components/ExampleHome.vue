<template>
  <div class="flex w-full flex-col gap-4 md:gap-8 md:p-8 ">
    <ShadcnLayout>
      <ShadcnLayoutHeader class="bg-blue-200 h-12">Header</ShadcnLayoutHeader>
      <ShadcnLayoutContent class="bg-blue-300 h-32">Content</ShadcnLayoutContent>
      <ShadcnLayoutFooter class="bg-blue-400 h-20">Footer</ShadcnLayoutFooter>
    </ShadcnLayout>

    <ShadcnLayout>
      <ShadcnLayoutWrapper>
        <ShadcnLayoutSider class="w-48 bg-blue-100">Sider</ShadcnLayoutSider>
        <ShadcnLayoutMain>
          <ShadcnLayoutHeader class="bg-blue-200 h-12">Header</ShadcnLayoutHeader>
          <ShadcnLayoutContent class="bg-blue-300 h-32">Content</ShadcnLayoutContent>
          <ShadcnLayoutFooter class="bg-blue-400 h-20">Footer</ShadcnLayoutFooter>
        </ShadcnLayoutMain>
      </ShadcnLayoutWrapper>
    </ShadcnLayout>

    <ShadcnLayout>
      <ShadcnLayoutWrapper>
        <ShadcnLayoutMain>
          <ShadcnLayoutHeader class="bg-blue-200 h-12">Header</ShadcnLayoutHeader>
          <ShadcnLayoutContent class="bg-blue-300 h-32">Content</ShadcnLayoutContent>
          <ShadcnLayoutFooter class="bg-blue-400 h-20">Footer</ShadcnLayoutFooter>
        </ShadcnLayoutMain>
        <ShadcnLayoutSider class="w-48 bg-blue-100">Sider</ShadcnLayoutSider>
      </ShadcnLayoutWrapper>
    </ShadcnLayout>

    <ShadcnLayout>
      <ShadcnLayoutHeader class="bg-blue-200 h-12">Header</ShadcnLayoutHeader>
      <ShadcnLayoutWrapper>
        <ShadcnLayoutSider class="w-48 bg-blue-100">Sider</ShadcnLayoutSider>
        <ShadcnLayoutContent class="bg-blue-300 h-32">Content</ShadcnLayoutContent>
      </ShadcnLayoutWrapper>
      <ShadcnLayoutFooter class="bg-blue-400 h-20">Footer</ShadcnLayoutFooter>
    </ShadcnLayout>

    <ShadcnLayout>
      <ShadcnLayoutHeader class="bg-blue-200 h-12">Header</ShadcnLayoutHeader>
      <ShadcnLayoutWrapper>
        <ShadcnLayoutContent class="bg-blue-300 h-32">Content</ShadcnLayoutContent>
        <ShadcnLayoutSider class="w-48 bg-blue-100">Sider</ShadcnLayoutSider>
      </ShadcnLayoutWrapper>
      <ShadcnLayoutFooter class="bg-blue-400 h-20">Footer</ShadcnLayoutFooter>
    </ShadcnLayout>

    <ShadcnLayout>
      <ShadcnLayoutWrapper>
        <ShadcnLayoutSider class="bg-blue-100" collapsible :defaultCollapsed="false" trigger
                           @on-collapse="handleCollapse">
          <div class="space-y-4">
            <div class="flex items-center space-x-2">
              <ShadcnIcon icon="Home"/>
              <span>Home</span>
            </div>
          </div>

          <template #collapsed>
            <div class="space-y-4">
              <div class="flex items-center space-x-2">
                <ShadcnIcon icon="Home"/>
              </div>
            </div>
          </template>
        </ShadcnLayoutSider>
        <ShadcnLayoutMain>
          <ShadcnLayoutHeader class="bg-blue-200 h-12">Header</ShadcnLayoutHeader>
          <ShadcnLayoutContent class="bg-blue-300 h-32">Content</ShadcnLayoutContent>
          <ShadcnLayoutFooter class="bg-blue-400 h-20">Footer</ShadcnLayoutFooter>
        </ShadcnLayoutMain>
      </ShadcnLayoutWrapper>
    </ShadcnLayout>
  </div>
</template>

<script setup lang="ts">

const handleCollapse = (collapsed: boolean) => {
  console.log('Sider collapsed:', collapsed)
}
</script>
