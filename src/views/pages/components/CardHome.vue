<template>
  <div class="flex w-full flex-col flex-row gap-4 md:gap-8 md:p-8 lg:grid lg:grid-cols-4">

    <ShadcnCard title="Simple"/>

    <ShadcnCard>
      <template #content>
        <div class="flex items-center justify-center h-32 w-full font-black text-blue-300">
          No Title
        </div>
      </template>
    </ShadcnCard>

    <ShadcnCard>
      <template #title>
        <span>Custom Title Slot</span>
      </template>
    </ShadcnCard>

    <ShadcnCard title="Description" description="Description"></ShadcnCard>

    <ShadcnCard>
      <template #title>
        <span>Custom Description Slot</span>
      </template>
      <template #description>
        <span class="text-blue-300">Description</span>
      </template>
    </ShadcnCard>

    <ShadcnCard>
      <template #title>
        <span>No Content</span>
      </template>
    </ShadcnCard>

    <ShadcnCard>
      <template #title>Custom Content Slot</template>
      <template #content>
        <span class="text-blue-300">Content</span>
      </template>
    </ShadcnCard>

    <ShadcnCard>
      <template #title>No Footer</template>
      <template #content>Content</template>
    </ShadcnCard>

    <ShadcnCard>
      <template #title>Custom Footer Slot</template>
      <template #content>Content</template>
      <template #footer>
        <div class="w-full p-0 m-0">
          <hr class="border-t m-0 p-0"/>
          <div class="flex justify-between p-2">
            <ShadcnButton>Footer</ShadcnButton>
          </div>
        </div>
      </template>
    </ShadcnCard>

    <ShadcnCard>
      <template #title>Custom Extra Slot</template>
      <template #extra>
        <ShadcnButton>Extra</ShadcnButton>
      </template>
      <template #content>Content</template>
      <template #footer>
        <div class="w-full">
          <hr class="border-t"/>
          <div class="flex justify-between p-2">
            <ShadcnButton>Footer</ShadcnButton>
          </div>
        </div>
      </template>
    </ShadcnCard>

    <ShadcnCard>
      <template #title>
        <div class="text-blue-300">Custom Title Class</div>
      </template>
      <template #content>Note that if the title attribute is set, the title slot will not take effect.</template>
    </ShadcnCard>

    <ShadcnCard>
      <template #title>
        <div>Custom Body Class</div>
      </template>
      <template #content>
        <div class="text-blue-300 p-3">Content</div>
      </template>
    </ShadcnCard>

    <ShadcnCard title="Shadow Never" shadow="never"/>

    <ShadcnCard title="Shadow Always" shadow="always"/>

    <ShadcnCard title="Shadow Hover" shadow="hover"/>

    <div class="flex flex-col gap-4">
      <ShadcnCard title="Loading" :loading="loading"/>
      <ShadcnButton @click="loading = !loading">{{ loading ? 'Stop Loading' : 'Start Loading' }}</ShadcnButton>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'CardHome',
  data()
  {
    return {
      loading: false
    }
  }
})
</script>
