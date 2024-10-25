<template>
  <div class="flex w-full flex-col gap-4 md:gap-8 md:p-8 ">
    Default Value : {{ defaultValue }}
    <ShadcnSkeletonItem animation type="circle"/>
    <ShadcnSkeletonItem animation type="square"/>
    <ShadcnSkeletonItem animation type="rect"/>
    <ShadcnSkeletonItem animation type="image"/>
    Small
    <ShadcnSkeletonItem animation type="circle" size="small"/>
    <ShadcnSkeletonItem animation type="square" size="small"/>
    <ShadcnSkeletonItem animation type="rect" size="small"/>
    <ShadcnSkeletonItem animation type="image" size="small"/>
    Large
    <ShadcnSkeletonItem animation type="circle" size="large"/>
    <ShadcnSkeletonItem animation type="square" size="large"/>
    <ShadcnSkeletonItem animation type="rect" size="large"/>
    <ShadcnSkeletonItem animation type="image" size="large"/>
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
