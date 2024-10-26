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
</template>
```

:::

## Width

<CodeRunner title="Usage">
    <ShadcnMenu width="300">
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
</CodeRunner>

::: details Show code

```vue
<template>
  <ShadcnMenu width="300">
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
</template>
```

:::

## Direction

<CodeRunner title="Usage">
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
</CodeRunner>

::: details Show code

```vue
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
</template>
```

:::

## API

<ApiTable title="Menu"
    :headers="['Attribute', 'Description', 'Type', 'Default Value', 'List']"
    :columns="[
        ['modelValue', 'The model value of the menu', 'String', ''],
        ['width', 'The width of the menu', 'String | Number', '300', '-'],
        ['direction', 'The direction of the menu', 'String', 'horizontal', 'horizontal | vertical'],
    ]">
</ApiTable>

<br />

<ApiTable title="Menu Item"
    :headers="['Attribute', 'Description', 'Type', 'Default Value']"
    :columns="[
        ['name', 'The name of the menu item', 'String', ''],
    ]">
</ApiTable>

<br />

<ApiTable title="Menu Group"
    :headers="['Attribute', 'Description', 'Type', 'Default Value']"
    :columns="[
        ['name', 'The name of the menu group', 'String', ''],
    ]">
</ApiTable>

<br />

<ApiTable title="Menu Sub"
    :headers="['Attribute', 'Description', 'Type', 'Default Value']"
    :columns="[
        ['name', 'The name of the menu sub', 'String', ''],
        ['active', 'Whether the menu sub is active', 'boolean', 'false'],
    ]">
</ApiTable>

## Slots

<ApiTable title="Menu Item"
    :headers="['Slot', 'Description']"
    :columns="[
        ['default', 'Default slot'],
        ['icon', 'Icon slot'],
        ['suffix', 'Suffix slot'],
    ]">
</ApiTable>

<br />

<ApiTable title="Menu Group"
    :headers="['Slot', 'Description']"
    :columns="[
        ['default', 'Default slot'],
        ['title', 'Title slot'],
    ]">
</ApiTable>

<br />

<ApiTable title="Menu Sub"
    :headers="['Slot', 'Description']"
    :columns="[
        ['default', 'Default slot'],
        ['icon', 'Icon slot'],
        ['title', 'Title slot'],
    ]">
</ApiTable>
