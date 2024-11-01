<template>
  <ShadcnMenu direction="horizontal">
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
        <ShadcnMenuItem name="username" to="/user">Change Username</ShadcnMenuItem>
        <ShadcnMenuItem name="password">Change Password</ShadcnMenuItem>
      </ShadcnMenuGroup>
    </ShadcnMenuSub>
    <ShadcnMenuItem name="email">Change Email</ShadcnMenuItem>
    <ShadcnMenuItem name="logout">
      <template #icon>
        <ShadcnIcon icon="LogOut"/>
      </template>
      Logout
    </ShadcnMenuItem>
  </ShadcnMenu>
</template>

<script setup lang="ts">
</script>