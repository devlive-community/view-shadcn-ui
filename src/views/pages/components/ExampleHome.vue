<template>
  <ShadcnAvatar src="https://cdn.north.devlive.org/devlive.org/2024-04-17/2F28BD8A-5AB4-46BA-B614-287A0020FAE7.png"
                alt="Shadcn UI"
                size="small"
                square
                @on-success="onSuccess"/>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'ExampleHome',
  methods: {
    onSuccess()
    {
      console.log('onSuccess')
    }
  }
})
</script>
