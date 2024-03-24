<template>
  <LayoutSidebar :navigators="navigators" @changeCollapsed="isCollapsed = $event"/>
  <div :class="cn(`h-full w-fulloverflow-auto ${isCollapsed ? 'md:ml-14' : 'md:ml-64'}`)">
    <LayoutHeader :navigators="navigators"/>
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
import { NavigationModel } from '@/model/Navigation.ts';
import NavigationService from '@/services/Navigation.ts';

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
      isCollapsed: false,
      navigators: [] as NavigationModel[]
    }
  },
  created()
  {
    this.handlerInitialize()
  },
  methods: {
    handlerInitialize()
    {
      this.navigators = NavigationService.getNavigation()
    }
  }
})
</script>
