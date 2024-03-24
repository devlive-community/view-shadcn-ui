<template>
  <div class="flex h-[var(--header-height)] flex-none items-center gap-4 bg-background p-4 md:px-8 border-b">
    <NavigationHeader :navigators="navigators"/>
    <div class="ml-auto flex items-center space-x-4">
      <ThemeSwitcher/>
      <LanguageSwitcher/>
      <NotificationNavigation/>
      <NavigationUser/>
    </div>
  </div>
</template>


<script lang="ts">
import { defineComponent } from 'vue'
import { Button } from '@/components/ui/button'
import LanguageSwitcher from '@/views/layouts/base/components/components/LanguageSwitcher.vue'
import NavigationHeader from '@/views/layouts/base/components/components/NavigationHeader.vue'
import { NavigationModel } from '@/model/Navigation'
import ThemeSwitcher from '@/views/layouts/base/components/components/ThemeSwitcher.vue'
import NavigationUser from '@/views/layouts/base/components/components/NavigationUser.vue'
import NotificationNavigation from '@/views/layouts/base/components/components/NotificationNavigation.vue'

export default defineComponent({
  name: 'LayoutHeader',
  components: {
    NotificationNavigation, NavigationUser, NavigationHeader,
    ThemeSwitcher, LanguageSwitcher,
    Button
  },
  props: {
    navigators: {
      type: Array as () => NavigationModel[]
    }
  }
})
</script>
