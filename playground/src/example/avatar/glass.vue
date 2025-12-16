<template>
  <div class="space-y-6">
    <div class="relative">
      <div class="h-40 rounded-lg flex items-center justify-center gap-6 bg-gradient-to-r from-purple-400 to-pink-400">
        <ShadcnAvatar glass src="https://cdn.north.devlive.org/devlive.org/2024-04-17/2F28BD8A-5AB4-46BA-B614-287A0020FAE7.png" size="small" />
        <ShadcnAvatar glass src="https://cdn.north.devlive.org/devlive.org/2024-04-17/2F28BD8A-5AB4-46BA-B614-287A0020FAE7.png" size="default" />
        <ShadcnAvatar glass src="https://cdn.north.devlive.org/devlive.org/2024-04-17/2F28BD8A-5AB4-46BA-B614-287A0020FAE7.png" size="large" />
      </div>
    </div>

    <div class="relative">
      <div class="h-40 rounded-lg flex items-center justify-center gap-6 bg-gradient-to-r from-blue-400 to-cyan-400">
        <ShadcnAvatar glass alt="UI" size="small" />
        <ShadcnAvatar glass alt="VUE" size="default" />
        <ShadcnAvatar glass alt="SH" size="large" />
      </div>
    </div>

    <div class="relative">
      <div class="h-40 rounded-lg flex items-center justify-center gap-6 bg-gradient-to-r from-orange-400 to-red-400">
        <ShadcnAvatarGroup glass :items="items" />
        <ShadcnAvatarGroup glass :items="items" max="3" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const items = [
  { src: 'https://cdn.north.devlive.org/devlive.org/2024-04-17/2F28BD8A-5AB4-46BA-B614-287A0020FAE7.png', name: 'User 1' },
  { src: 'https://cdn.north.devlive.org/devlive.org/2024-04-17/2F28BD8A-5AB4-46BA-B614-287A0020FAE7.png', name: 'User 2' },
  { src: 'https://cdn.north.devlive.org/devlive.org/2024-04-17/2F28BD8A-5AB4-46BA-B614-287A0020FAE7.png', name: 'User 3' },
  { src: 'https://cdn.north.devlive.org/devlive.org/2024-04-17/2F28BD8A-5AB4-46BA-B614-287A0020FAE7.png', name: 'User 4' },
  { src: 'https://cdn.north.devlive.org/devlive.org/2024-04-17/2F28BD8A-5AB4-46BA-B614-287A0020FAE7.png', name: 'User 5' }
]
</script>
