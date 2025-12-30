<template>
  <div :class="['min-h-screen px-6 pb-6', isDark ? 'bg-gray-900' : 'bg-white']">
    <ShadcnButton @click="isDark = !isDark" :dark="isDark" class="mt-2">
      切换暗黑模式
    </ShadcnButton>

    <ShadcnMenu direction="horizontal" :dark="isDark">
      <ShadcnMenuItem name="home">
        <template #icon>
          <ShadcnIcon icon="Home"/>
        </template>
        Home
      </ShadcnMenuItem>
      <ShadcnMenuSub name="profileSub">
        <template #title>Profile</template>
        <template #icon>
          <ShadcnIcon icon="User"/>
        </template>
        <ShadcnMenuGroup name="settingGroup">
          <template #title>Settings</template>
          <ShadcnMenuItem name="username">Change</ShadcnMenuItem>
          <ShadcnMenuItem name="password">Change Password</ShadcnMenuItem>
          <ShadcnMenuSub name="securitySub">
            <template #title>Security</template>
            <template #icon>
              <ShadcnIcon icon="Shield"/>
            </template>
            <ShadcnMenuItem name="2fa">Two-Factor Auth</ShadcnMenuItem>
            <ShadcnMenuItem name="sessions">Active Sessions</ShadcnMenuItem>
            <ShadcnMenuItem name="devices">Trusted Devices</ShadcnMenuItem>
            <ShadcnMenuSub name="securitySub1">
              <template #title>Security</template>
              <template #icon>
                <ShadcnIcon icon="Shield"/>
              </template>
              <ShadcnMenuItem name="2fa">Two-Factor Auth</ShadcnMenuItem>
              <ShadcnMenuItem name="sessions">Active Sessions</ShadcnMenuItem>
              <ShadcnMenuItem name="devices">Trusted Devices</ShadcnMenuItem>
            </ShadcnMenuSub>
          </ShadcnMenuSub>
        </ShadcnMenuGroup>
        <ShadcnMenuItem name="preferences">Preferences</ShadcnMenuItem>
      </ShadcnMenuSub>
      <ShadcnMenuItem name="email">Change Email</ShadcnMenuItem>
      <ShadcnMenuItem name="logout">
        <template #icon>
          <ShadcnIcon icon="LogOut"/>
        </template>
        Logout
      </ShadcnMenuItem>
    </ShadcnMenu>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { ShadcnButton } from "@/ui/button";

const isDark = ref(false)
</script>
