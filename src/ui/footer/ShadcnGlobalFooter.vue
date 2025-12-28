<template>
  <footer :class="['w-full border-t',
                   glass && 'backdrop-blur-xl backdrop-saturate-150',
                   glass && 'shadow-lg shadow-black/5',
                   glass && (dark ? 'bg-white/10 border-white/20' : 'bg-white/30 border-gray-400/40'),
                   !glass && (dark ? 'bg-gray-800 border-gray-700' : 'bg-background border-gray-200')
          ]">
    <!-- Main Footer Content -->
    <div class="container mx-auto px-4 py-8">
      <!-- Top Section with Links -->
      <div class="grid grid-cols-2 md:grid-cols-4 gap-8 pb-8">
        <!-- Company Info -->
        <div class="col-span-2 md:col-span-1">
          <div class="flex items-center gap-2 mb-4">
            <!-- Logo slot -->
            <slot name="logo">
              <div :class="['w-8 h-8 rounded-md', dark ? 'bg-gray-600' : 'bg-gray-200']"></div>
            </slot>
            <span :class="['text-lg font-semibold', dark ? 'text-gray-200' : '']">{{ company }}</span>
          </div>
          <p :class="['text-sm', dark ? 'text-gray-400' : 'text-muted-foreground']">{{ description }}</p>
        </div>

        <!-- Link Groups -->
        <template v-for="(group, _index) in links" :key="`group-${_index}`">
          <div class="flex flex-col gap-2">
            <h3 :class="['font-semibold mb-2', dark ? 'text-gray-200' : '']">{{ group.title }}</h3>
            <template v-for="(link, _linkIndex) in group.links" :key="`group-${_index}-link-${_linkIndex}`">
              <ShadcnLink :class="['text-sm transition-colors flex items-center gap-2', dark ? 'text-gray-400' : 'text-muted-foreground']"
                          :link="link.href"
                          :external="link.external"
                          :target="link.target">
                <div class="inline-flex items-center gap-2">
                  <ShadcnIcon v-if="link.icon"
                              class="w-5 h-5"
                              :icon="link.icon"/>
                  <span>{{ link.label }}</span>
                </div>
              </ShadcnLink>
            </template>
          </div>
        </template>
      </div>

      <!-- Bottom Section -->
      <div :class="['pt-8 border-t', dark ? 'border-gray-700' : '']">
        <div class="flex flex-col md:flex-row justify-between items-center gap-4">
          <!-- Copyright -->
          <div :class="['text-sm', dark ? 'text-gray-400' : 'text-muted-foreground']">
            <slot name="copyright">
              © {{ new Date().getFullYear() }} {{ company }}. All rights reserved.
            </slot>
          </div>

          <!-- Social Links -->
          <div class="flex items-center gap-4">
            <template v-for="(social, _index) in socials" :key="`social-${_index}`">
              <ShadcnLink :link="social.href"
                          external
                          target="_blank"
                          :dark="dark"
                          :class="['transition-colors', dark ? 'text-gray-400 hover:text-gray-200' : 'text-muted-foreground hover:text-foreground']">
                <ShadcnIcon v-if="social.icon"
                            :icon="social.icon"
                            :dark="dark"
                            class="w-5 h-5"/>
                <span class="sr-only">{{ social.label }}</span>
              </ShadcnLink>
            </template>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { ShadcnLink } from '@/ui/link'
import { ShadcnIcon } from '@/ui/icon'

interface LinkItem
{
  label: string
  href: string
  icon: string
  external?: boolean
  target?: string
}

interface LinkGroup
{
  title: string
  links: LinkItem[]
}

interface Props
{
  company: string
  description?: string
  links?: LinkGroup[]
  socials?: LinkItem[]
  dark?: boolean
  glass?: boolean
}

withDefaults(defineProps<Props>(), {
  company: 'Devlive Community',
  description: 'The Devlive Software Foundation is a community of developers who are passionate about creating innovative software solutions.',
  links: () => [] as LinkGroup[],
  socials: () => [] as LinkItem[],
  dark: false,
  glass: false
})
</script>
