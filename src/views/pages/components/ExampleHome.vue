<template>
  <div class="flex w-full flex-col gap-4 md:gap-8 md:p-8 lg:grid lg:grid-cols-3">
    <ShadcnTab>
      <ShadcnTabItem label="Tab 1">
        <div>这是 Tab 1 的内容</div>
      </ShadcnTabItem>

      <ShadcnTabItem label="Tab 2">
          <div>这是 Tab 2 的内容</div>
      </ShadcnTabItem>
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
