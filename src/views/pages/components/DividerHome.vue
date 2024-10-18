<template>
  <div class="flex w-full flex-col gap-4 md:gap-8 md:p-8 lg:grid lg:grid-cols-3">
    <ShadcnCard title="Basic">
        <div class="justify-center h-32 p-3">
          <div>Hello, View Shadcn UI, Divider</div>
          <ShadcnDivider/>
        </div>
    </ShadcnCard>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'DividerHome',
})
</script>
