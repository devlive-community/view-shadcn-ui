<template>
  <LayoutSidebar @changeCollapsed="isCollapsed = $event"/>
  <div :class="cn(`overflow-auto space-y-2 p-2 ${isCollapsed ? 'md:ml-14' : 'md:ml-64'}`)">
    <RouterView/>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import LayoutSidebar from '@/views/layouts/base/components/LayoutSidebar.vue'
import { cn } from '@/lib/utils'

export default defineComponent({
  name: 'LayoutContainer',
  components: {LayoutSidebar},
  setup()
  {
    return {
      cn
    }
  },
  data()
  {
    return {
      isCollapsed: false
    }
  }
})
</script>
