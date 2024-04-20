<template>
  <ICard body-class="p-0">
    <template #title>Default</template>
    <ModernFooter :footers="footers"/>
  </ICard>
  <ICard body-class="p-0">
    <template #title>Left</template>
    <ModernFooter :footers="footers">
      <template #left>
        <IRouterLink link="/">
          <img src="https://cdn.north.devlive.org/devlive.org/2024-04-17/2F28BD8A-5AB4-46BA-B614-287A0020FAE7.png" alt="logo" class="w-28 rounded-full"/>
        </IRouterLink>
        <ul class="mt-10 flex space-x-6">
          <li>
            <IRouterLink link="https://github.com/devlive-community/shadcn-ui-vue-admin" external>
              <Github class="text-white"/>
            </IRouterLink>
          </li>
          <li>
            <IRouterLink link="https://github.com/devlive-community/shadcn-ui-vue-admin" external>
              <Github class="text-white"/>
            </IRouterLink>
          </li>
          <li>
            <IRouterLink link="https://github.com/devlive-community/shadcn-ui-vue-admin" external>
              <Github class="text-white"/>
            </IRouterLink>
          </li>
        </ul>
      </template>
    </ModernFooter>
  </ICard>
  <ICard body-class="p-0">
    <template #title>Right</template>
    <ModernFooter :footers="footers">
      <template #right>
        <h4 class="text-white text-lg font-bold mb-5">Right Content</h4>
        <p class="text-gray-300 mb-4 text-sm">Please setting me</p>
        <form class="mb-4">
          <div class="flex items-center">
            <input type="email" placeholder="Enter your email" class="bg-gray-800 px-4 py-3.5 rounded-l-lg w-full text-sm text-gray-300 outline-none"/>
            <button type="button" class="bg-gray-700 text-sm text-gray-300 tracking-wide px-4 py-3.5 rounded-r-lg">Button</button>
          </div>
        </form>
      </template>
    </ModernFooter>
  </ICard>
  <ICard body-class="p-0">
    <template #title>Copyright</template>
    <ModernFooter :footers="footers">
      <template #copyright>
        <div class="md:flex md:item-center mt-8">
          <ul class="md:flex md:space-x-6 max-md:space-y-2">
            <li>
              <IRouterLink link="/" class='hover:text-white text-gray-300 text-sm'>Link 1</IRouterLink>
            </li>
            <li>
              <IRouterLink link="/" class='hover:text-white text-gray-300 text-sm'>Link 2</IRouterLink>
            </li>
          </ul>
          <p class='text-gray-300 text-sm ml-auto max-md:mt-5'>
            © 2024 Devlive. All rights reserved.
          </p>
        </div>
      </template>
    </ModernFooter>
  </ICard>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import ICard from '@/ui/card/card.vue'
import ModernFooter from '@/views/components/footer/modern/ModernFooter.vue'
import { Footer } from '@/views/components/footer/Footer.ts'
import IRouterLink from '@/views/components/link/IRouterLink.vue'
import IAvatar from '@/ui/avatar/index.vue'
import IButton from '@/ui/button/button.vue'
import { Github } from 'lucide-vue-next'

export default defineComponent({
  name: 'FooterModern',
  components: {
    IButton, IAvatar, IRouterLink, ModernFooter, ICard,
    Github
  },
  data()
  {
    return {
      footers: [
        {
          title: 'Group 1',
          children: [
            {
              title: 'Link 1',
              link: '/',
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
          ]
        },
        {
          title: 'Group 2'
        },
        {
          title: 'Group 3',
          children: [
            {
              title: 'Link 1',
              link: '/',
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
          ]
        },
        {
          title: 'Group 4'
        }
      ] as Array<Footer>
    }
  }
})
</script>
