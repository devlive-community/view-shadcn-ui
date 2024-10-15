<template>
  <div class="flex w-full flex-col gap-4 md:gap-8 md:p-8 lg:grid lg:grid-cols-4">
    <ShadcnCard title="Default">
      <div class="flex items-center justify-center h-32 p-3">
        <ShadcnTooltip content="Hello Shadcn UI">
          <ShadcnIcon icon="Info" class="cursor-pointer"/>
        </ShadcnTooltip>
      </div>
    </ShadcnCard>

    <ShadcnCard title="Custom">
      <div class="flex items-center justify-center h-32 p-3">
        <ShadcnTooltip>
          <template #content>Custom Content</template>
          <ShadcnIcon icon="Info" class="cursor-pointer"/>
        </ShadcnTooltip>
      </div>
    </ShadcnCard>

    <ShadcnCard title="Delay 500">
      <div class="flex items-center justify-center h-32 p-3">
        <ShadcnTooltip content="Hello Shadcn UI" delay="500">
          <ShadcnIcon icon="Info" class="cursor-pointer"/>
        </ShadcnTooltip>
      </div>
    </ShadcnCard>

    <ShadcnCard title="Position">
      <div class="h-32 p-3 space-x-2 space-y-2">
        <ShadcnTooltip content="Position" position="top">
          <ShadcnButton>Top</ShadcnButton>
        </ShadcnTooltip>
        <ShadcnTooltip content="Position" position="bottom">
          <ShadcnButton>Bottom</ShadcnButton>
        </ShadcnTooltip>
        <ShadcnTooltip content="Position" position="left">
          <ShadcnButton>Left</ShadcnButton>
        </ShadcnTooltip>
        <ShadcnTooltip content="Position" position="right">
          <ShadcnButton>Right</ShadcnButton>
        </ShadcnTooltip>
      </div>
    </ShadcnCard>
  </div>
</template>

<script setup lang="ts">
</script>
