<template>
  <div class="flex w-full flex-col gap-4 md:gap-8 md:p-8 lg:grid lg:grid-cols-3">
    Tab Value : {{ defaultValue }}
    <ShadcnTab v-model="defaultValue" size="default" card @on-change="onChange">
      <ShadcnTabItem label="Linux" value="Linux">这是 Tab 1 的内容</ShadcnTabItem>
      <ShadcnTabItem label="Windows" value="Windows" disabled>这是 Tab 2 的内容</ShadcnTabItem>
      <ShadcnTabItem label="Mac OS X" value="Mac OS X" icon="Save">这是 Tab 3 的内容</ShadcnTabItem>
    </ShadcnTab>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'ExampleHome',
  data()
  {
    return {
      defaultValue: 'Mac OS X'
    }
  },
  methods: {
    onSuccess()
    {
      console.log('onSuccess')
    },
    onChange(value: boolean)
    {
      console.log('onChange', value)
    }
  }
})
</script>
