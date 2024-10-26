<template>
  <div class="w-full space-y-4">
    <div class="bg-blue-200 p-3">
      <ShadcnMenu>
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
            <ShadcnMenuItem name="username">Change Username</ShadcnMenuItem>
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
    </div>

    <div class="bg-blue-200 p-3">
      <ShadcnMenu direction="horizontal">
        <ShadcnMenuItem name="home">
          <template #icon>
            <ShadcnIcon icon="Home" size="18"/>
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
            <ShadcnMenuItem name="username">Change Username</ShadcnMenuItem>
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
    </div>
  </div>
</template>

<script setup lang="ts">
</script>
