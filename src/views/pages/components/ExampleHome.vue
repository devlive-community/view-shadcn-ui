<template>
  <div class="flex w-full flex-col gap-4 md:gap-8 md:p-8 lg:grid lg:grid-cols-3">
    Rate Value : {{ defaultValue }}
    <ShadcnRate v-model="defaultValue" max="10" allow-half></ShadcnRate>

    <ShadcnRate v-model="defaultValue" max="10" allow-half>
      <template #character>好</template>
    </ShadcnRate>

    <ShadcnSpace>
      <ShadcnRate v-model="defaultValue" max="10" type="primary"/>
      <ShadcnRate v-model="defaultValue" max="10" type="success"/>
      <ShadcnRate v-model="defaultValue" max="10" type="warning"/>
      <ShadcnRate v-model="defaultValue" max="10" allow-half type="error"/>
    </ShadcnSpace>
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

<style scoped>
.demo-badge {
  width: 42px;
  height: 42px;
  background: #eee;
  border-radius: 6px;
  display: inline-block;
}
</style>
