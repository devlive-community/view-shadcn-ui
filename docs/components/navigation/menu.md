---
title: 菜单 (Menu)
---

# 介绍

<br />

本文档主要用于描述 `ShadcnMenu` 组件的一些特性和用法。

## 用法

<CodeRunner title="用法">
    <ShadcnMenu :dark="darkMode">
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

::: details 查看代码

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

## 宽度 (width)

<CodeRunner title="宽度 (width)">
    <ShadcnMenu width="300" :dark="darkMode">
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

::: details 查看代码

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

## 方向 (direction)

<CodeRunner title="方向 (direction)">
    <ShadcnMenu direction="horizontal" :dark="darkMode">
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
            <ShadcnMenuSub name="securitySub">
              <template #title>Security</template>
              <template #icon>
                <ShadcnIcon icon="Shield"/>
              </template>
              <ShadcnMenuItem name="2fa">Two-Factor Auth</ShadcnMenuItem>
              <ShadcnMenuItem name="sessions">Active Sessions</ShadcnMenuItem>
            </ShadcnMenuSub>
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

::: details 查看代码

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

## 触发方式 (trigger)

支持点击和悬停两种触发方式。

<CodeRunner title="触发方式 - 悬停">
    <ShadcnMenu direction="horizontal" trigger="hover" :dark="darkMode">
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
      </ShadcnMenu>
</CodeRunner>

::: details 查看代码

```vue
<template>
  <ShadcnMenu direction="horizontal" trigger="hover">
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
  </ShadcnMenu>
</template>
```

:::

## 自定义插槽

ShadcnMenuSub 支持 `header` 插槽，可以完全自定义子菜单的标题部分。

<CodeRunner title="自定义插槽">
    <ShadcnMenu direction="horizontal" :dark="darkMode">
        <ShadcnMenuItem name="home">
          <template #icon>
            <ShadcnIcon icon="Home"/>
          </template>
          Home
        </ShadcnMenuItem>
        <ShadcnMenuSub name="profileSub">
          <template #header="{ expanded, hasActiveChild }">
            <div class="flex items-center gap-2">
              <ShadcnIcon icon="User"/>
              <span :class="{ 'font-bold': hasActiveChild }">Custom Profile</span>
              <span v-if="expanded" class="text-xs">▼</span>
            </div>
          </template>
          <ShadcnMenuItem name="username">Change Username</ShadcnMenuItem>
          <ShadcnMenuItem name="email">Change Email</ShadcnMenuItem>
        </ShadcnMenuSub>
      </ShadcnMenu>
</CodeRunner>

::: details 查看代码

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
      <template #header="{ expanded, hasActiveChild }">
        <div class="flex items-center gap-2">
          <ShadcnIcon icon="User"/>
          <span :class="{ 'font-bold': hasActiveChild }">Custom Profile</span>
          <span v-if="expanded" class="text-xs">▼</span>
        </div>
      </template>
      <ShadcnMenuItem name="username">Change Username</ShadcnMenuItem>
      <ShadcnMenuItem name="email">Change Email</ShadcnMenuItem>
    </ShadcnMenuSub>
  </ShadcnMenu>
</template>
```

:::

## 菜单 (Menu) 属性

<ApiTable title="菜单 (Menu) 属性"
    :headers="['属性', '描述', '类型', '默认值', '支持列表']"
    :columns="[
        ['modelValue', '当前选中的菜单值', 'string', '-', '-'],
        ['width', '菜单的宽度', 'string | number', '200', '-'],
        ['direction', '菜单的方向', 'string', 'vertical', 'horizontal | vertical'],
        ['dark', '暗黑模式', 'boolean', 'false', '-'],
        ['trigger', '子菜单触发方式', 'string', 'click', 'click | hover'],
    ]">
</ApiTable>

## 菜单项 (Menu Item) 属性

<ApiTable title="菜单项 (Menu Item) 属性"
    :headers="['属性', '描述', '类型', '默认值']"
    :columns="[
        ['name', '菜单项的名称', 'string', '-'],
        ['to', '菜单项的跳转，通过 <code>vue-router</code> 支持', 'string', '-'],
        ['active', '菜单项是否处于激活状态', 'boolean', 'false'],
    ]">
</ApiTable>

## 菜单组 (Menu Group) 属性

<ApiTable title="菜单组 (Menu Group) 属性"
    :headers="['属性', '描述', '类型', '默认值']"
    :columns="[
        ['name', '菜单组的名称', 'string', '-'],
    ]">
</ApiTable>

## 菜单子项 (Menu Sub) 属性

<ApiTable title="菜单子项 (Menu Sub) 属性"
    :headers="['属性', '描述', '类型', '默认值']"
    :columns="[
        ['name', '菜单子项的名称', 'String', '-'],
        ['active', '菜单子项是否处于激活状态', 'boolean', 'false'],
    ]">
</ApiTable>

## 菜单项 (Menu Item) 插槽

<ApiTable title="菜单项 (Menu Item) 插槽"
    :headers="['插槽', '描述']" 
    :columns="[
        ['default', '默认插槽'],
        ['icon', '图标插槽'],
        ['suffix', '后缀插槽']
    ]">
</ApiTable>

## 菜单组 (Menu Group) 插槽

<ApiTable title="菜单组 (Menu Group) 插槽"
    :headers="['插槽', '描述']" 
    :columns="[
        ['default', '默认插槽'],
        ['title', '标题插槽'],
    ]">
</ApiTable>

## 菜单子项 (Menu Sub) 插槽

<ApiTable title="菜单子项 (Menu Sub) 插槽"
    :headers="['插槽', '描述', '参数']"
    :columns="[
        ['default', '默认插槽', '-'],
        ['icon', '图标插槽', '-'],
        ['title', '标题插槽', '-'],
        ['header', '完全自定义标题部分', '{ expanded: boolean, hasActiveChild: boolean }'],
    ]">
</ApiTable>

<script setup lang="ts">
import { useData } from 'vitepress'
import { computed } from 'vue'

const { isDark } = useData()
const darkMode = computed(() => isDark.value)
</script>