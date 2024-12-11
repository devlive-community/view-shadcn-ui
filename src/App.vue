<template>
  <div class="p-32 space-y-2">
    <ShadcnText>Value: {{ value }}</ShadcnText>
    <ShadcnInputTag v-model="value" size="small"/>
    <ShadcnInputTag v-model="value"/>
    <ShadcnInputTag v-model="value" size="large"/>

    <ShadcnInputTag v-model="value" type="error"/>
    <ShadcnInputTag v-model="value" type="warning"/>
    <ShadcnInputTag v-model="value" type="success"/>

    <ShadcnInputTag v-model="value" :max="3" disabled/>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const value = ref([])
</script>
