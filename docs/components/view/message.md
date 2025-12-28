---
title: 消息 (Message)
---

# 介绍

<br />

本文档主要用于描述 `ShadcnMessage` 组件的一些特性和用法。

## 用法

<CodeRunner title="用法">
    <ShadcnButton @click="info(false)" :dark="darkMode">Show Message</ShadcnButton>
</CodeRunner>

::: details 查看代码

```vue
<template>
    <ShadcnButton @click="handleClick" :dark="darkMode">Show Message</ShadcnButton>
</template>

<script lang="ts">
import { useData } from 'vitepress'
import { computed } from 'vue'

const { isDark } = useData()
const darkMode = computed(() => isDark.value)

import { defineComponent } from 'vue'

export default defineComponent({
  methods: {
    handleClick() {
      this.$Message.info({
        content: 'This is an info message',
        duration: 2
      })
    }
  }
})
```

:::

## 显示图标 (show-icon)

<CodeRunner title="显示图标 (show-icon)">
    <ShadcnButton @click="info(false)" :dark="darkMode">Show Message</ShadcnButton>
</CodeRunner>

::: details 查看代码

```vue
<template>
    <ShadcnButton @click="handleClick" :dark="darkMode">Show Message</ShadcnButton>
</template>

<script lang="ts">
import { useData } from 'vitepress'
import { computed } from 'vue'

const { isDark } = useData()
const darkMode = computed(() => isDark.value)

import { defineComponent } from 'vue'

export default defineComponent({
  methods: {
    handleClick() {
      this.$Message.info({
        content: 'This is an info message',
        showIcon: true
      })
    }
  }
})
```

:::

## 类型 (type)

<CodeRunner title="类型 (type)">
  <ShadcnSpace wrap :dark="darkMode">
    <ShadcnButton @click="info(false)" :dark="darkMode">Info</ShadcnButton>
    <ShadcnButton @click="success(false)" :dark="darkMode">Success</ShadcnButton>
    <ShadcnButton @click="warning(false)" :dark="darkMode">Warning</ShadcnButton>
    <ShadcnButton @click="error(false)" :dark="darkMode">Error</ShadcnButton>
    <ShadcnButton @click="loading(false)" :dark="darkMode">Loading</ShadcnButton>
  </ShadcnSpace>
</CodeRunner>

::: details 查看代码

```vue
<template>
  <ShadcnSpace wrap :dark="darkMode">
    <ShadcnButton @click="info" :dark="darkMode">Info</ShadcnButton>
    <ShadcnButton @click="success" :dark="darkMode">Success</ShadcnButton>
    <ShadcnButton @click="warning" :dark="darkMode">Warning</ShadcnButton>
    <ShadcnButton @click="error" :dark="darkMode">Error</ShadcnButton>
    <ShadcnButton @click="loading" :dark="darkMode">Loading</ShadcnButton>
  </ShadcnSpace>
</template>

<script>
export default {
  methods: {
    info() {
      this.$Message.info({
        content: 'This is an info tip',
        type: 'info',
        showIcon: true
      });
    },
    success() {
      this.$Message.success({
        content: 'This is a success tip',
        type: 'success',
        showIcon: true
      });
    },
    warning() {
      this.$Message.warning({
        content: 'This is a warning tip',
        type: 'warning',
        showIcon: true
      });
    },
    error() {
      this.$Message.error({
        content: 'This is an error tip',
        type: 'error',
        showIcon: true
      });
    },
    loading() {
      this.$Message.loading({
        content: 'This is a loading tip',
        type: 'loading',
        showIcon: true
      });
    }
  }
}
</script>
```

:::

## 背景色 (background)

<CodeRunner title="背景色 (background)">
  <ShadcnSpace wrap :dark="darkMode">
    <ShadcnButton @click="info(true)" :dark="darkMode">Info</ShadcnButton>
    <ShadcnButton @click="success(true)" :dark="darkMode">Success</ShadcnButton>
    <ShadcnButton @click="warning(true)" :dark="darkMode">Warning</ShadcnButton>
    <ShadcnButton @click="error(true)" :dark="darkMode">Error</ShadcnButton>
    <ShadcnButton @click="loading(true)" :dark="darkMode">Loading</ShadcnButton>
  </ShadcnSpace>
</CodeRunner>

::: details 查看代码

```vue
<template>
  <ShadcnSpace wrap :dark="darkMode">
    <ShadcnButton @click="info" :dark="darkMode">Info</ShadcnButton>
    <ShadcnButton @click="success" :dark="darkMode">Success</ShadcnButton>
    <ShadcnButton @click="warning" :dark="darkMode">Warning</ShadcnButton>
    <ShadcnButton @click="error" :dark="darkMode">Error</ShadcnButton>
    <ShadcnButton @click="loading" :dark="darkMode">Loading</ShadcnButton>
  </ShadcnSpace>
</template>

<script>
export default {
  methods: {
    info() {
      this.$Message.info({
        content: 'This is an info tip',
        type: 'info',
        showIcon: true,
        background: true
      });
    },
    success() {
      this.$Message.success({
        content: 'This is a success tip',
        type: 'success',
        showIcon: true,
        background: true
      });
    },
    warning() {
      this.$Message.warning({
        content: 'This is a warning tip',
        type: 'warning',
        showIcon: true,
        background: true
      });
    },
    error() {
      this.$Message.error({
        content: 'This is an error tip',
        type: 'error',
        showIcon: true,
        background: true
      });
    },
    loading() {
      this.$Message.loading({
        content: 'This is a loading tip',
        type: 'loading',
        showIcon: true,
        background: true
      });
    }
  }
}
</script>
```

:::

## 可关闭 (closable)

<CodeRunner title="可关闭 (closable)">
    <ShadcnButton @click="closable" :dark="darkMode">Closable</ShadcnButton>
</CodeRunner>

::: details 查看代码

```vue
<template>
    <ShadcnButton @click="closable" :dark="darkMode">Show Message</ShadcnButton>
</template>

<script>
  export default {
    methods: {
      closable() {
        this.$Message.info({
          content: 'This is an info tip',
          type: 'info',
          showIcon: true,
          closable: true
        })
      }
    }
  }
</script>
```

:::

## 液态玻璃效果 (glass)

<CodeRunner title="液态玻璃效果 (glass)">
  <div class="p-6 rounded-lg bg-gradient-to-r from-blue-400 to-purple-400">
    <div class="p-8 rounded-lg bg-white/50">
      <ShadcnButton @click="glassMessage" :dark="darkMode">显示液态玻璃消息</ShadcnButton>
    </div>
  </div>
</CodeRunner>

::: details 查看代码

```vue
<template>
  <div class="p-6 rounded-lg bg-gradient-to-r from-blue-400 to-purple-400">
    <div class="p-8 rounded-lg bg-white/50">
      <ShadcnButton @click="glassMessage">显示液态玻璃消息</ShadcnButton>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    glassMessage() {
      this.$Message.info({
        content: '这是一个液态玻璃效果的消息',
        type: 'success',
        showIcon: true,
        glass: true,
        duration: 3
      })
    }
  }
}
</script>
```

:::

## 消息 (Message) 属性

<ApiTable title="消息 (Message) 属性"
    :headers="['属性', '描述', '类型', '默认值', '依赖']"
    :columns="[
            ['content', '内容文本', 'string', '-', '-'],
            ['duration', '消息的持续时间（以秒为单位），如果值为 0，则不会关闭消息', 'number', '1.5', '-'],
            ['showIcon', '是否显示图标', 'boolean', 'true', '-'],
            ['type', '组件的类型', 'string', 'info', 'info | success | warning | error | loading'],
            ['background', '是否显示背景，仅在设置类型时有效', 'boolean', 'false', '-'],
            ['closeable', '是否显示关闭按钮', 'boolean', 'false', '-'],
            ['glass', '是否启用液态玻璃效果', 'boolean', 'false', '-'],
            ['dark', '是否启用暗黑模式', 'boolean', 'false', '-'],
    ]">
</ApiTable>

## 消息 (Message) 插槽

<ApiTable title="消息 (Message) 插槽"
    :headers="['插槽', '描述']" 
    :columns="[
        ['default', '内容文本'],
        ['close', '关闭按钮'],
    ]">
</ApiTable>

## 消息 (Message) 事件

<ApiTable title="消息 (Message) 事件"
    :headers="['事件', '描述', '回调参数']"
    :columns="[
        ['on-close', '关闭消息时触发', 'event'],
    ]">
</ApiTable>

<script>
import { useData } from 'vitepress'
import { computed } from 'vue'
export default { 
setup() {
        const { isDark } = useData()
        const darkMode = computed(() => isDark.value)

return {darkMode}
},
  methods: {
    info(background = false) {
      this.$Message.info({
        content: 'This is an info tip',
        type: 'info',
        showIcon: true,
        background: background
      });
    },
    success(background = false) {
      this.$Message.success({
        content: 'This is a success tip',
        type: 'success',
        showIcon: true,
        background: background
      })
    },
    warning(background = false) {
      this.$Message.warning({
        content: 'This is a warning tip',
        type: 'warning',
        showIcon: true,
        background: background
      })
    },
    error(background = false) {
      this.$Message.error({
        content: 'This is an error tip',
        type: 'error',
        showIcon: true,
        background: background
      })
    },
    loading(background = false) {
      this.$Message.loading({
        content: 'This is a loading tip',
        type: 'loading',
        showIcon: true,
        background: background
      })
    },
    closable() {
        this.$Message.info({
            content: 'This is an info tip',
            type: 'info',
            showIcon: true,
            duration: 0,
            closable: true
        });
      },
    glassMessage() {
      this.$Message.info({
        content: '这是一个液态玻璃效果的消息',
        type: 'success',
        showIcon: true,
        glass: true,
        duration: 3
      })
    }
  }
}
</script>