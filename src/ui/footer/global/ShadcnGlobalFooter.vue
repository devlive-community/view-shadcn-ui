<template>
  <footer class="w-full bg-background border-t">
    <!-- Main Footer Content -->
    <div class="container mx-auto px-4 py-8">
      <!-- Top Section with Links -->
      <div class="grid grid-cols-2 md:grid-cols-4 gap-8 pb-8">
        <!-- Company Info -->
        <div class="col-span-2 md:col-span-1">
          <div class="flex items-center gap-2 mb-4">
            <!-- Logo slot -->
            <slot name="logo">
              <div class="w-8 h-8 bg-gray-200 rounded-md"></div>
            </slot>
            <span class="text-lg font-semibold">{{ company }}</span>
          </div>
          <p class="text-sm text-muted-foreground">{{ description }}</p>
        </div>

        <!-- Link Groups -->
        <template v-for="(group, _index) in links" :key="`group-${_index}`">
          <div class="flex flex-col gap-2">
            <h3 class="font-semibold mb-2">{{ group.title }}</h3>
            <template v-for="(link, _linkIndex) in group.links" :key="`group-${_index}-link-${_linkIndex}`">
              <ShadcnLink class="text-sm text-muted-foreground transition-colors flex items-center gap-2"
                          :link="link.href"
                          :external="link.external"
                          :target="link.target">
                <div class="inline-flex items-center gap-2">
                  <Icon v-if="link.icon"
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
      <div class="pt-8 border-t">
        <div class="flex flex-col md:flex-row justify-between items-center gap-4">
          <!-- Copyright -->
          <div class="text-sm text-muted-foreground">
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
                          class="text-muted-foreground hover:text-foreground transition-colors">
                <Icon v-if="social.icon"
                            :icon="social.icon"
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
import ShadcnLink from '@/ui/link'
import Icon from '@/ui/icon'

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
}

withDefaults(defineProps<Props>(), {
  company: 'Devlive Community',
  description: 'The Devlive Software Foundation is a community of developers who are passionate about creating innovative software solutions.',
  links: () => [] as LinkGroup[],
  socials: () => [] as LinkItem[]
})
</script>
