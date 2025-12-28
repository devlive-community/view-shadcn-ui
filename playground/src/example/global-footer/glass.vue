<template>
  <div class="space-y-6 p-6">
    <div>
      <h3 class="text-lg font-semibold mb-4">液态玻璃效果</h3>
      <div class="p-6 rounded-lg bg-gradient-to-r from-blue-400 to-indigo-400">
        <div class="rounded-lg overflow-hidden bg-white/50">
          <ShadcnGlobalFooter
            glass
            company="Your Company"
            description="为开发者提供优质的组件库和工具"
            :links="footerLinks"
            :socials="footerSocials"
          />
        </div>
      </div>
    </div>

    <div>
      <h3 class="text-lg font-semibold mb-4">暗黑模式</h3>
      <div class="p-6 bg-gray-900 rounded-lg">
        <div class="p-6 rounded-lg bg-gradient-to-r from-blue-900 to-indigo-900">
          <div class="rounded-lg overflow-hidden bg-gray-800/50">
            <ShadcnGlobalFooter
              glass
              dark
              company="Your Company"
              description="为开发者提供优质的组件库和工具"
              :links="footerLinks"
              :socials="footerSocials"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ShadcnGlobalFooter } from '@/ui/footer'

const footerLinks = [
  {
    title: '产品',
    links: [
      { label: '功能', href: '#', icon: 'lucide:sparkles' },
      { label: '定价', href: '#', icon: 'lucide:dollar-sign' },
      { label: '更新日志', href: '#', icon: 'lucide:history' }
    ]
  },
  {
    title: '资源',
    links: [
      { label: '文档', href: '#', icon: 'lucide:book-open' },
      { label: 'API', href: '#', icon: 'lucide:code' },
      { label: '博客', href: '#', icon: 'lucide:newspaper' }
    ]
  },
  {
    title: '社区',
    links: [
      { label: 'GitHub', href: 'https://github.com', icon: 'lucide:github', external: true },
      { label: 'Discord', href: '#', icon: 'lucide:message-circle' },
      { label: '论坛', href: '#', icon: 'lucide:users' }
    ]
  }
]

const footerSocials = [
  { label: 'GitHub', href: 'https://github.com', icon: 'lucide:github' },
  { label: 'Twitter', href: 'https://twitter.com', icon: 'lucide:twitter' },
  { label: 'Discord', href: '#', icon: 'lucide:message-circle' }
]
</script>
