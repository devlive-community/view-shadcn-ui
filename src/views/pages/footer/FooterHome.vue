<template>
  <ICard body-class="p-0">
    <template #title>Default</template>
    <DefaultFooter :footers="footers" :copyright="copyright"/>
  </ICard>
  <ICard body-class="p-0">
    <template #title>Custom Color</template>
    <DefaultFooter :footers="footers" :copyright="copyright" color="#000000" link-color="#FFFFFF"/>
  </ICard>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { Footer } from '@/views/components/footer/Footer.ts'
import ICard from '@/ui/card/card.vue'
import DefaultFooter from '@/views/components/footer/default/DefaultFooter.vue'

export default defineComponent({
  name: 'FooterHome',
  components: { DefaultFooter, ICard },
  data() {
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
        }
      ] as Array<Footer>,
      copyright: '© 2024 Devlive. All rights reserved.'
    }
  },
})
</script>
