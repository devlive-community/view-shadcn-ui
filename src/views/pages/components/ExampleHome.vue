<template>
  <div class="flex w-full flex-col gap-4 md:gap-8 md:p-8 lg:grid lg:grid-cols-3">
    <ShadcnTab>
      <ShadcnTabItem label="Linux" value="Linux">
        <div>这是 Tab 1 的内容</div>
      </ShadcnTabItem>

      <ShadcnTabItem label="Windows" value="Windows" disabled>
        <div>这是 Tab 2 的内容</div>
      </ShadcnTabItem>

      <ShadcnTabItem label="Mac OS X" value="Mac OS X">
        <div>这是 Tab 3 的内容</div>
      </ShadcnTabItem>
    </ShadcnTab>

    <ShadcnTab type="primary">
      <ShadcnTabItem label="Linux" value="Linux">这是 Tab 1 的内容</ShadcnTabItem>
      <ShadcnTabItem label="Windows" value="Windows" disabled>这是 Tab 2 的内容</ShadcnTabItem>
      <ShadcnTabItem label="Mac OS X" value="Mac OS X">这是 Tab 3 的内容</ShadcnTabItem>
    </ShadcnTab>

    <ShadcnTab type="success">
      <ShadcnTabItem label="Linux" value="Linux">这是 Tab 1 的内容</ShadcnTabItem>
      <ShadcnTabItem label="Windows" value="Windows" disabled>这是 Tab 2 的内容</ShadcnTabItem>
      <ShadcnTabItem label="Mac OS X" value="Mac OS X">这是 Tab 3 的内容</ShadcnTabItem>
    </ShadcnTab>

    <ShadcnTab type="warning">
      <ShadcnTabItem label="Linux" value="Linux">这是 Tab 1 的内容</ShadcnTabItem>
      <ShadcnTabItem label="Windows" value="Windows" disabled>这是 Tab 2 的内容</ShadcnTabItem>
      <ShadcnTabItem label="Mac OS X" value="Mac OS X">这是 Tab 3 的内容</ShadcnTabItem>
    </ShadcnTab>

    <ShadcnTab type="error">
      <ShadcnTabItem label="Linux" value="Linux">这是 Tab 1 的内容</ShadcnTabItem>
      <ShadcnTabItem label="Windows" value="Windows" disabled>这是 Tab 2 的内容</ShadcnTabItem>
      <ShadcnTabItem label="Mac OS X" value="Mac OS X">这是 Tab 3 的内容</ShadcnTabItem>
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
      defaultValue: 1
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
