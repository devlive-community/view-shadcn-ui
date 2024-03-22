<template>
  <LayoutSidebar @changeCollapsed="isCollapsed = $event"/>
  <div :class="cn(`overflow-auto ${isCollapsed ? 'md:ml-14' : 'md:ml-64'}`)">
    <LayoutHeader/>
    <div class="p-2 space-y-2">
      <RouterView/>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import LayoutSidebar from '@/views/layouts/base/components/LayoutSidebar.vue'
import { cn } from '@/lib/utils'
import LayoutHeader from '@/views/layouts/base/components/LayoutHeader.vue'

export default defineComponent({
  name: 'LayoutContainer',
  components: {LayoutHeader, LayoutSidebar},
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
