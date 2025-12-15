<template>
  <div :class="['min-h-screen p-6 pb-32', isDark ? 'bg-gray-900' : 'bg-white']">
    <ShadcnButton @click="isDark = !isDark" :dark="isDark">
      切换暗黑模式
    </ShadcnButton>

    <div class="space-y-6 my-6">
      <div>
        <h3 :class="['text-lg font-semibold mb-4', isDark ? 'text-gray-200' : '']">ShadcnAvatar - 液态玻璃效果</h3>
        <div class="space-y-6">
          <div class="relative">
            <div :class="['h-40 rounded-lg flex items-center justify-center gap-6', isDark ? 'bg-gradient-to-r from-purple-900 to-pink-900' : 'bg-gradient-to-r from-purple-400 to-pink-400']">
              <ShadcnAvatar glass :dark="isDark" src="https://cdn.north.devlive.org/devlive.org/2024-04-17/2F28BD8A-5AB4-46BA-B614-287A0020FAE7.png" size="small" />
              <ShadcnAvatar glass :dark="isDark" src="https://cdn.north.devlive.org/devlive.org/2024-04-17/2F28BD8A-5AB4-46BA-B614-287A0020FAE7.png" size="default" />
              <ShadcnAvatar glass :dark="isDark" src="https://cdn.north.devlive.org/devlive.org/2024-04-17/2F28BD8A-5AB4-46BA-B614-287A0020FAE7.png" size="large" />
            </div>
          </div>

          <div class="relative">
            <div :class="['h-40 rounded-lg flex items-center justify-center gap-6', isDark ? 'bg-gradient-to-r from-blue-900 to-cyan-900' : 'bg-gradient-to-r from-blue-400 to-cyan-400']">
              <ShadcnAvatar glass :dark="isDark" alt="UI" size="small" />
              <ShadcnAvatar glass :dark="isDark" alt="VUE" size="default" />
              <ShadcnAvatar glass :dark="isDark" alt="SH" size="large" />
            </div>
          </div>

          <div class="relative">
            <div :class="['h-40 rounded-lg flex items-center justify-center gap-6', isDark ? 'bg-gradient-to-r from-orange-900 to-red-900' : 'bg-gradient-to-r from-orange-400 to-red-400']">
              <ShadcnAvatarGroup glass :dark="isDark" :items="avatarItems" />
              <ShadcnAvatarGroup glass :dark="isDark" :items="avatarItems" max="3" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { ShadcnButton } from "@/ui/button";
import { ShadcnAlert } from "@/ui/alert";
import { ShadcnAvatar, ShadcnAvatarGroup } from "@/ui/avatar";

const isDark = ref(false)

const avatarItems = [
  { src: 'https://cdn.north.devlive.org/devlive.org/2024-04-17/2F28BD8A-5AB4-46BA-B614-287A0020FAE7.png', name: 'User 1' },
  { src: 'https://cdn.north.devlive.org/devlive.org/2024-04-17/2F28BD8A-5AB4-46BA-B614-287A0020FAE7.png', name: 'User 2' },
  { src: 'https://cdn.north.devlive.org/devlive.org/2024-04-17/2F28BD8A-5AB4-46BA-B614-287A0020FAE7.png', name: 'User 3' },
  { src: 'https://cdn.north.devlive.org/devlive.org/2024-04-17/2F28BD8A-5AB4-46BA-B614-287A0020FAE7.png', name: 'User 4' },
  { src: 'https://cdn.north.devlive.org/devlive.org/2024-04-17/2F28BD8A-5AB4-46BA-B614-287A0020FAE7.png', name: 'User 5' }
]
</script>