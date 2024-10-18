<template>
  <div class="flex w-full flex-col gap-4 md:gap-8 md:p-8 lg:grid lg:grid-cols-3">
    <ShadcnCard title="Basic">
      <div class="h-32 p-3">
        <div>Hello, View Shadcn UI, Divider</div>
        <ShadcnDivider/>
      </div>
    </ShadcnCard>

    <ShadcnCard title="Type">
      <div class="h-32 p-3 space-y-2">
        <div>Horizontal</div>
        <ShadcnDivider type="horizontal"/>

        <div class="flex space-x-2">
          <div>Vertical</div>
          <ShadcnDivider type="vertical"/>
          <a href="#">Link</a>
          <ShadcnDivider type="vertical"/>
          <a href="#">Link</a>
        </div>
      </div>
    </ShadcnCard>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'DividerHome'
})
</script>
