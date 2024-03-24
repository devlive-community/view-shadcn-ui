<template>
  <Button size="icon" variant="ghost" class="rounded-full" @click="setTheme(theme === 'light' ? 'dark' : 'light')">
    <Moon v-if="theme === 'light'" :size="20"/>
    <Sun v-else :size="20"/>
  </Button>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref, watch } from 'vue'
import { Button } from '@/components/ui/button'
import { Moon, Sun } from 'lucide-vue-next'

export default defineComponent({
  name: 'ThemeSwitcher',
  components: {
    Button,
    Sun, Moon
  },
  setup()
  {
    const theme = ref('light')

    onMounted(() => {
      const themeColor = theme.value === 'dark' ? '#020817' : '#fff'
      const metaThemeColor = document.querySelector('meta[name=\'theme-color\']')
      metaThemeColor && metaThemeColor.setAttribute('content', themeColor)
      const root = window.document.documentElement
      root.classList.remove('light', 'dark')
      root.classList.add(theme.value)
    })

    watch(
        () => theme.value,
        (newValue) => {
          const root = window.document.documentElement
          root.classList.remove('light', 'dark')
          root.classList.add(newValue)
        }
    )

    const setTheme = (value: string) => {
      theme.value = value
    }

    return {
      theme,
      setTheme
    }
  }
})
</script>
