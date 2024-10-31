<template>
  <ShadcnGlobalFooter :links="links" :socials="socials"/>
</template>

<script setup lang="ts">
const links = [
  {
    title: 'Link Group',
    links: [
      { label: 'Router link', href: '/features' },
      { label: 'External link', href: '/pricing', external: true },
      { label: 'External target link', href: '/docs', external: true, target: '_blank' }
    ]
  },
  {
    title: 'Link Group 2',
    links: [
      { label: 'Link icon', href: '/about', icon: 'User' }
    ]
  },
  {
    title: 'Resources',
    links: [
      { label: 'Support', href: '/support' },
      { label: 'Terms of Service', href: '/terms' },
      { label: 'Privacy Policy', href: '/privacy' }
    ]
  }
]
const socials = [
  { icon: 'Github', href: 'https://github.com/devlive-community', label: 'GitHub' }
]
</script>
