---
layout: page
---

<VPTeamPage>
  <VPTeamPageTitle>
    <template #title>我们的团队</template>
    <template #lead>
        View Shadcn UI 的开发由一个开源团队指导。
        他们的一些成员选择在下面展示。
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
    title: '创始人',
    links: [
      { icon: 'github', link: 'https://github.com/qianmoq' },
      { icon: 'twitter', link: 'https://twitter.com/qianmoq' }
    ]
  },
  {
    avatar: 'https://www.github.com/devlive-community.png',
    name: 'Devlive Community',
    title: '成员',
    links: [
      { icon: 'github', link: 'https://github.com/devlive-community' }
    ]
  },
]
</script>
