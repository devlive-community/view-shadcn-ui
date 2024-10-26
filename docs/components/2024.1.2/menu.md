---
title: Shadcn Menu
---

# Introduction

This document is mainly used to describe some features and usage of the ShadcnMenu component.

- ShadcnMenu
- ShadcnMenuItem
- ShadcnMenuGroup
- ShadcnMenuSub

## Usage

<CodeRunner title="Usage">
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
</CodeRunner>

::: details Show code

```vue
<template>
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
</template>
```

:::
