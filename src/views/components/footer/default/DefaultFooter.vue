<template>
  <footer :style="{ '--bg-color': color,
                    '--link-color': linkColor
                  }"
          :class="cn(`font-sans bg-[--bg-color] py-8 px-10`)">
    <div :class="cn(`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-${footers.length} gap-8`)">
      <div v-for="footer in footers">
        <h4 :class="cn(`text-[--link-color] font-bold text-lg mb-5`)">{{ footer.title }}</h4>
        <ul class="space-y-4">
          <li v-for="children in footer.children">
            <IRouterLink :class="cn(`hover:text-[--link-color] text-gray-300 text-[15px] font-semibold transition-all`)" :link="children.link" :external="children.external"
                         :target="children.external ? '_blank' : '_self'">
              {{ children.title }}
            </IRouterLink>
          </li>
        </ul>
      </div>
    </div>
    <div v-if="copyright" class="border-t text-center border-[#6b5f5f] pt-8 mt-8">
      <p class="text-gray-300 text-[15px] font-semibold">
        {{ copyright }}
      </p>
    </div>
  </footer>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { Footer } from '@/views/components/footer/Footer.ts'
import { cn } from '@/lib/utils.ts'
import { calculateHoverColor } from '@/utils/Color.ts'
import IRouterLink from '@/views/components/link/IRouterLink.vue'

export default defineComponent({
  name: 'DefaultFooter',
  components: { IRouterLink },
  props: {
    color: {
      type: String,
      default: '#213343'
    },
    linkColor: {
      type: String,
      default: '#FFA726'
    },
    footers: {
      type: Array as () => Array<Footer>,
      default: []
    },
    copyright: {
      type: String
    }
  },
  setup()
  {
    return {
      cn,
      calculateHoverColor
    }
  }
})
</script>
