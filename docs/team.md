---
layout: page
---

<VPTeamPage>
  <VPTeamPageTitle>
    <template #title>Our Team</template>
    <template #lead>
        The development of the View Shadcn UI was guided by an open source team, 
        some of whose members have chosen to be showcased below.
    </template>
  </VPTeamPageTitle>
  <VPTeamMembers :members="members"/>
</VPTeamPage>

<script setup>
import { VPTeamPage, VPTeamPageTitle, VPTeamMembers } from 'vitepress/theme'

const members = [
  {
    avatar: 'https://www.github.com/qianmoq.png',
    name: 'qianmoQ',
    title: 'Creator',
    links: [
      { icon: 'github', link: 'https://github.com/qianmoq' },
      { icon: 'twitter', link: 'https://twitter.com/qianmoq' }
    ]
  },
  {
    avatar: 'https://www.github.com/devlive-community.png',
    name: 'Devlive Community',
    title: 'Reviewer',
    links: [
      { icon: 'github', link: 'https://github.com/devlive-community' }
    ]
  },
]
</script>
