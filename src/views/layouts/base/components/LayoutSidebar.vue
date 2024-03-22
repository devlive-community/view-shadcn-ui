<template>
  <aside
      :class="cn(`fixed left-0 right-0 top-0 z-50 w-full border-r-2 border-r-muted transition-[width] md:bottom-0 md:right-auto md:h-svh ${isCollapsed ? 'md:w-14' : 'md:w-64'}`)">
    <div :class="cn('relative flex h-full w-full flex-col')">
      <!-- Navigation links -->
      <div :class="cn(`h-full flex-1 overflow-auto ${isCollapsed ? 'max-h-screen' : 'max-h-0 py-0 md:max-h-screen'}`)">
        <div class="bg-background py-2 h-full duration-500 data-[collapsed=true]:py-2 md:border-none space-y-1">
          <div v-for="item in navigators" class="text-center">
            <NavigationOpened v-if="isCollapsed" :navigator="item"/>
            <NavigationClosed v-else :navigator="item"/>
          </div>
        </div>
      </div>
      <!-- Scrollbar width toggle button -->
      <Button variant='outline' size='icon' class="absolute -right-5 top-1/2 hidden rounded-full md:inline-flex" @click="setIsCollapsed(!isCollapsed)">
        <ChevronsLeft :class="cn(`h-5 w-5 ${isCollapsed ? 'rotate-180' : ''}`)"/>
      </Button>
    </div>
  </aside>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import { ChevronsLeft } from 'lucide-vue-next'
import NavigationOpened from '@/views/layouts/base/components/components/NavigationOpened.vue'
import NavigationClosed from '@/views/layouts/base/components/components/NavigationClosed.vue'
import { NavigationModel } from '@/model/Navigation'
import NavigationService from '@/services/Navigation'

export default defineComponent({
  name: 'LayoutSidebar',
  components: {
    NavigationClosed,
    NavigationOpened,
    Button,
    ChevronsLeft
  },
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
    },
    setIsCollapsed(opened: boolean)
    {
      this.isCollapsed = opened
    }
  }
})
</script>
