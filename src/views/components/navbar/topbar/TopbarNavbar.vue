<template>

</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { Navbar } from '@/views/components/navbar/Navbar.ts'

export default defineComponent({
  name: 'TopbarNavbar',
  props: {
    navigators: {
      type: Array as () => Array<Navbar>
    }
  }
})
</script>
