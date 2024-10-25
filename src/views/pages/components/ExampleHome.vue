<template>
  <div class="flex w-full flex-col gap-4 md:gap-8 md:p-8 ">
    Default Value : {{ defaultValue }}
    <ShadcnSkeleton animation :title="{ width: '30%' }"/>
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
  }
})
</script>
