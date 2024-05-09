<template>
  <ICard body-class="p-2 space-y-2">
    <template #title>Default</template>
    <ICard body-class="p-0" title="Full">
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
    <ICard body-class="p-0" title="No Icon">
      <DefaultNavbar :navigators="navigators">
        <template #extra>
          <IButton>Login</IButton>
          <IButton>Sign Up</IButton>
        </template>
      </DefaultNavbar>
    </ICard>
    <ICard body-class="p-0" title="No Extra">
      <DefaultNavbar :navigators="navigators">
        <template #icon>
          <a href="/">
            <img src="https://cdn.north.devlive.org/devlive.org/2024-04-17/2F28BD8A-5AB4-46BA-B614-287A0020FAE7.png" alt="logo" class='w-12 h-12'/>
          </a>
        </template>
      </DefaultNavbar>
    </ICard>
    <ICard body-class="p-0" title="No Extra & No Center">
      <DefaultNavbar :navigators="navigators" :center="false">
        <template #icon>
          <a href="/">
            <img src="https://cdn.north.devlive.org/devlive.org/2024-04-17/2F28BD8A-5AB4-46BA-B614-287A0020FAE7.png" alt="logo" class='w-12 h-12'/>
          </a>
        </template>
      </DefaultNavbar>
    </ICard>
  </ICard>
  <ICard body-class="p-2 space-y-2">
    <template #title>Top Bar</template>
    <ICard body-class="p-0" title="Full">
      <TopbarNavbar :navigators="navigators">
        <template #section>
          <p class="text-sm">
            <strong class="mx-3">Address:</strong>
            xxxxx
            <strong class="mx-3">Contact No:</strong>
            xxxxx
          </p>
        </template>
        <template #icon>
          <a href="/">
            <img src="https://cdn.north.devlive.org/devlive.org/2024-04-17/2F28BD8A-5AB4-46BA-B614-287A0020FAE7.png" alt="logo" class='w-12 h-12'/>
          </a>
        </template>
        <template #extra>
          <IButton>Login</IButton>
          <IButton>Sign Up</IButton>
        </template>
      </TopbarNavbar>
    </ICard>
    <ICard body-class="p-0" title="No Section">
      <TopbarNavbar :navigators="navigators">
        <template #icon>
          <a href="/">
            <img src="https://cdn.north.devlive.org/devlive.org/2024-04-17/2F28BD8A-5AB4-46BA-B614-287A0020FAE7.png" alt="logo" class='w-12 h-12'/>
          </a>
        </template>
        <template #extra>
          <IButton>Login</IButton>
          <IButton>Sign Up</IButton>
        </template>
      </TopbarNavbar>
    </ICard>
    <ICard body-class="p-0" title="No Icon">
      <TopbarNavbar :navigators="navigators">
        <template #section>
          <p class="text-sm">
            <strong class="mx-3">Address:</strong>
            xxxxx
            <strong class="mx-3">Contact No:</strong>
            xxxxx
          </p>
        </template>
        <template #extra>
          <IButton>Login</IButton>
          <IButton>Sign Up</IButton>
        </template>
      </TopbarNavbar>
    </ICard>
    <ICard body-class="p-0" title="No Extra & No Center">
      <TopbarNavbar :navigators="navigators" :center="false">
        <template #section>
          <p class="text-sm">
            <strong class="mx-3">Address:</strong>
            xxxxx
            <strong class="mx-3">Contact No:</strong>
            xxxxx
          </p>
        </template>
        <template #icon>
          <a href="/">
            <img src="https://cdn.north.devlive.org/devlive.org/2024-04-17/2F28BD8A-5AB4-46BA-B614-287A0020FAE7.png" alt="logo" class='w-12 h-12'/>
          </a>
        </template>
      </TopbarNavbar>
    </ICard>
  </ICard>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import ICard from '@/ui/card/card.vue'
import DefaultNavbar from '@/views/components/navbar/default/DefaultNavbar.vue'
import IButton from '@/ui/button/button.vue'
import { Navbar } from '@/views/components/navbar/Navbar.ts'
import TopbarNavbar from '@/views/components/navbar/topbar/TopbarNavbar.vue'

export default defineComponent({
  name: 'NavbarHome',
  components: { TopbarNavbar, IButton, DefaultNavbar, ICard },
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
