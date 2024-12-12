<template>
  <div class="p-32 space-y-2">
    <ShadcnForm ref="formRef" v-model="formState" @on-submit="console.log($event)">
      <ShadcnFormItem name="map"
                      label="Map"
                      :rules="[ { required: true, message: 'Please add map!' } ]">
        <ShadcnMap v-model="formState.value" :max="3" name="map"/>
      </ShadcnFormItem>
      <ShadcnButton submit>Submit</ShadcnButton>
    </ShadcnForm>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const formState = ref({
  value: []
})
</script>
