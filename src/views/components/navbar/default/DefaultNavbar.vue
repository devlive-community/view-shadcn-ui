<template>
  <header class="flex shadow-md py-4 px-4 sm:px-10 bg-white font-[sans-serif] min-h-[70px] tracking-wide relative z-50">
    <div :class="`flex flex-wrap items-center gap-5 w-full ${center ? 'justify-between' : ''}`">
      <slot name="icon"/>

      <div class="max-lg:hidden lg:!block max-lg:before:fixed max-lg:before:bg-black max-lg:before:opacity-50 max-lg:before:inset-0 max-lg:before:z-50">
        <ul class="lg:flex gap-x-5 max-lg:space-y-3 max-lg:fixed max-lg:bg-white max-lg:w-1/2 max-lg:min-w-[300px] max-lg:top-0 max-lg:left-0 max-lg:p-6 max-lg:h-full max-lg:shadow-md max-lg:overflow-auto z-50">
          <li v-for="item in navigators" class="max-lg:border-b border-gray-300 max-lg:py-3 px-3">
            <IRouterLink :link="item.link" :external="item.external" :target="item.external ? '_blank' : '_self'"
                         :class="$route.path === `${item?.link}` ? 'lg:hover:text-[#007bff] text-[#007bff]' : 'lg:hover:text-[#007bff] text-gray-500'">
              {{ item.title }}
            </IRouterLink>
          </li>
        </ul>
      </div>

      <div class="flex max-lg:ml-auto space-x-3">
        <slot name="extra"/>
      </div>
    </div>
  </header>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { Navbar } from '@/views/components/navbar/Navbar.ts'
import IRouterLink from '@/views/components/link/IRouterLink.vue'

export default defineComponent({
  name: 'DefaultNavbar',
  components: { IRouterLink },
  props: {
    navigators: {
      type: Array as () => Array<Navbar>
    },
    center: {
      type: Boolean,
      default: true
    }
  }
})
</script>
