<template>
  <div class="flex w-full">
    <ShadcnMenu>
      <ShadcnMenuItem name="home">
        <template #icon>
          <ShadcnIcon icon="Home"/>
        </template>
        Home
      </ShadcnMenuItem>

      <ShadcnMenuGroup name="settingGroup">
        <template #title>Settings</template>
        <ShadcnMenuSub name="profileSub">
          <template #title>Profile</template>
          <template #icon>
            <ShadcnIcon icon="User"/>
          </template>
          <ShadcnMenuItem name="username">Change Username</ShadcnMenuItem>
          <ShadcnMenuItem name="password">Change Password</ShadcnMenuItem>
        </ShadcnMenuSub>
      </ShadcnMenuGroup>

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
</script>
