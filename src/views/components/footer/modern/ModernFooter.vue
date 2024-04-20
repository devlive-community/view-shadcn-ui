<template>
  <footer class="font-sans bg-black p-10">
    <div
        :class="cn('grid grid-cols-1',
            ($slots.left || $slots.right) && 'sm:grid-cols-6 md:grid-cols-6 xl:grid-cols-6',
            !($slots.left || $slots.right) && 'sm:grid-cols-4 md:grid-cols-4 xl:grid-cols-4',
            'gap-8'
        )">
      <div v-if="$slots.left" class="xl:col-span-2">
        <slot name="left"/>
      </div>
      <div v-for="item in footers">
        <h4 class="text-white font-semibold text-lg relative max-sm:cursor-pointer">{{ item.title }}</h4>
        <ul class="mt-4 space-y-5">
          <li v-for="children in item.children">
            <IRouterLink :class="cn(`hover:text-white text-gray-300 text-sm`)" :link="children.link" :external="children.external"
                         :target="children.external ? '_blank' : '_self'">
              {{ children.title }}
            </IRouterLink>
          </li>
        </ul>
      </div>
      <div v-if="$slots.right" class="xl:col-span-2">
        <slot name="right"/>
      </div>
    </div>
    <div v-if="$slots.copyright">
      <hr class="mt-8 border-gray-300"/>
      <slot name="copyright"/>
    </div>
  </footer>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { Footer } from '@/views/components/footer/Footer.ts'
import { cn } from '@/lib/utils.ts'
import IRouterLink from '@/views/components/link/IRouterLink.vue'

export default defineComponent({
  name: 'ModernFooter',
  components: { IRouterLink },
  props: {
    footers: {
      type: Array as () => Array<Footer>,
      default: []
    }
  },
  setup()
  {
    return {
      cn
    }
  }
})
</script>
