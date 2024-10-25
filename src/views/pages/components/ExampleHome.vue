<template>
  <div class="flex w-full flex-col gap-4 md:gap-8 md:p-8 ">
    Tab Value : {{ defaultValue }}
    <ShadcnTab v-model="defaultValue" size="small" card closable @on-change="onChange">
      <template #extra>
        <ShadcnButton @click="addTab">Add</ShadcnButton>
      </template>
      <ShadcnTabItem v-for="item in tabs" :label="item.label" :value="item.value" :icon="item.icon" :disabled="item.disabled">
        This is {{ item.label }}
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
      defaultValue: 'Mac OS X',
      tabs: [
        {
          label: 'Linux',
          value: 'Linux',
          disabled: false
        },
        {
          label: 'Windows',
          value: 'Windows',
          disabled: true
        },
        {
          label: 'Mac OS X',
          value: 'Mac OS X',
          icon: 'Save'
        }
      ]
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
    },
    addTab()
    {
      const tab = `Tab ${ this.tabs.length + 1 }`
      this.tabs.push({
        label: tab,
        value: tab,
        disabled: false
      })
      this.defaultValue = tab
    }
  }
})
</script>
