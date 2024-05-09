<template>
  <ICard body-class="p-0">
    <template #title>Default</template>
    <DefaultNavbar :navigators="navigators">
      <template #icon>
        <a href="/">
          <img src="https://cdn.north.devlive.org/devlive.org/2024-04-17/2F28BD8A-5AB4-46BA-B614-287A0020FAE7.png" alt="logo" class='w-12 h-12'/>
        </a>
      </template>
      <template #extra>
        <IButton>Login</IButton>
        <IButton>Sign Up</IButton>
      </template>
    </DefaultNavbar>
  </ICard>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import ICard from '@/ui/card/card.vue'
import DefaultNavbar from '@/views/components/navbar/default/DefaultNavbar.vue'
import IButton from '@/ui/button/button.vue'
import { Navbar } from '@/views/components/navbar/Navbar.ts'

export default defineComponent({
  name: 'NavbarHome',
  components: { IButton, DefaultNavbar, ICard },
  data()
  {
    return {
      navigators: [
        {
          title: 'Navbar',
          link: '/navbar',
          external: false
        },
        {
          title: 'Link 2',
          link: '/',
          external: false
        },
        {
          title: 'Link 3 (External)',
          link: 'https://datacap.devlive.org',
          external: true
        }
      ] as Array<Navbar>
    }
  }
})
</script>
