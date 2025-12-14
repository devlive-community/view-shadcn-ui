---
title: 模态框 (Modal)
---

# 介绍

<br />

本文档主要用于描述 `ShadcnModal` 组件的一些特性和用法。

## 用法

<CodeRunner title="用法">
    <ShadcnButton @click="basicModal = true" :dark="darkMode">Click</ShadcnButton>
    <ShadcnModal v-model="basicModal" title="Modal Title" description="This is a modal description" :dark="darkMode">
        <div class="flex items-center justify-center h-32">Content</div>
    </ShadcnModal>
</CodeRunner>

::: details 查看代码

```vue
<template>
    <ShadcnButton @click="modal = true" :dark="darkMode">Click</ShadcnButton>
    <ShadcnModal v-model="modal" title="Modal Title" description="This is a modal description" :dark="darkMode">
        <div class="flex items-center justify-center h-32">Content</div>
    </ShadcnModal>
</template>

<script setup lang="ts">
import { useData } from 'vitepress'
import { computed } from 'vue'

const { isDark } = useData()
const darkMode = computed(() => isDark.value)

import { ref } from 'vue';

const modal = ref(false);
</script>
```

:::

## 无标题 (no-title)

<CodeRunner title="无标题 (no-title)">
    <ShadcnButton @click="noTitleModal = true" :dark="darkMode">Click</ShadcnButton>
    <ShadcnModal v-model="noTitleModal" :dark="darkMode">
        <div class="flex items-center justify-center h-32">Content</div>
    </ShadcnModal>
</CodeRunner>

::: details 查看代码

```vue
<template>
    <ShadcnButton @click="modal = true" :dark="darkMode">Click</ShadcnButton>
    <ShadcnModal v-model="modal" :dark="darkMode">
        <div class="flex items-center justify-center h-32">Content</div>
    </ShadcnModal>
</template>

<script setup lang="ts">
import { useData } from 'vitepress'
import { computed } from 'vue'

const { isDark } = useData()
const darkMode = computed(() => isDark.value)

import { ref } from 'vue';

const modal = ref(false);
</script>
```

:::

## 标题 (title)

<CodeRunner title="标题 (title)">
    <ShadcnButton @click="customTitleModal = true" :dark="darkMode">Click</ShadcnButton>
    <ShadcnModal v-model="customTitleModal" :dark="darkMode">
        <template #title>Custom Title</template>
        <div class="flex items-center justify-center h-32">Content</div>
    </ShadcnModal>
</CodeRunner>

::: details 查看代码

```vue
<template>
    <ShadcnButton @click="modal = true" :dark="darkMode">Click</ShadcnButton>
    <ShadcnModal v-model="modal" :dark="darkMode">
        <template #title>Custom Title</template>
        <div class="flex items-center justify-center h-32">Content</div>
    </ShadcnModal>
</template>

<script setup lang="ts">
import { useData } from 'vitepress'
import { computed } from 'vue'

const { isDark } = useData()
const darkMode = computed(() => isDark.value)

import { ref } from 'vue';

const modal = ref(false);
</script>
```

:::

## 底部 (footer)

<CodeRunner title="底部 (footer)">
    <ShadcnButton @click="customFooterModal = true" :dark="darkMode">Click</ShadcnButton>
    <ShadcnModal v-model="customFooterModal" title="Custom Footer" :dark="darkMode">
        <div class="flex items-center justify-center h-32">Content</div>
        <template #footer>This is a footer</template>
    </ShadcnModal>
</CodeRunner>

::: details 查看代码

```vue
<template>
    <ShadcnButton @click="modal = true" :dark="darkMode">Click</ShadcnButton>
    <ShadcnModal v-model="modal" title="Custom Footer" :dark="darkMode">
        <div class="flex items-center justify-center h-32">Content</div>
        <template #footer>This is a footer</template>
    </ShadcnModal>
</template>

<script setup lang="ts">
import { useData } from 'vitepress'
import { computed } from 'vue'

const { isDark } = useData()
const darkMode = computed(() => isDark.value)

import { ref } from 'vue';

const modal = ref(false);
</script>
```

:::

## 内容 (content)

<CodeRunner title="内容 (content)">
    <ShadcnButton @click="customContentModal = true" :dark="darkMode">Click</ShadcnButton>
    <ShadcnModal v-model="customContentModal" title="Custom Content" :dark="darkMode">
        <template #content>Custom Content</template>
    </ShadcnModal>
</CodeRunner>

::: details 查看代码

```vue
<template>
    <ShadcnButton @click="modal = true" :dark="darkMode">Click</ShadcnButton>
    <ShadcnModal v-model="modal" title="Custom Content" :dark="darkMode">
        <template #content>Custom Content</template>
    </ShadcnModal>
</template>

<script setup lang="ts">
import { useData } from 'vitepress'
import { computed } from 'vue'

const { isDark } = useData()
const darkMode = computed(() => isDark.value)

import { ref } from 'vue';

const modal = ref(false);
</script>
```

:::

## 宽度 (width)

<CodeRunner title="宽度 (width)">
    <ShadcnButton @click="customWidthModal = true" :dark="darkMode">Click</ShadcnButton>
    <ShadcnModal v-model="customWidthModal" title="Custom Width" width="200" :dark="darkMode">
        <div class="flex items-center justify-center h-32">Content</div>
    </ShadcnModal>
</CodeRunner>

::: details 查看代码

```vue
<template>
    <ShadcnButton @click="modal = true" :dark="darkMode">Click</ShadcnButton>
    <ShadcnModal v-model="modal" title="Custom Width" width="200" :dark="darkMode">
        <div class="flex items-center justify-center h-32">Content</div>
    </ShadcnModal>
</template>

<script setup lang="ts">
import { useData } from 'vitepress'
import { computed } from 'vue'

const { isDark } = useData()
const darkMode = computed(() => isDark.value)

import { ref } from 'vue';

const modal = ref(false);
</script>
```

:::

## 高度 (height)

<CodeRunner title="高度 (height)">
    <ShadcnButton @click="customHeightModal = true" :dark="darkMode">Click</ShadcnButton>
    <ShadcnModal v-model="customHeightModal" title="Custom Height" height="200" :dark="darkMode">
        <div class="flex items-center justify-center h-32">Content</div>
    </ShadcnModal>
</CodeRunner>

::: details 查看代码

```vue
<template>
    <ShadcnButton @click="modal = true" :dark="darkMode">Click</ShadcnButton>
    <ShadcnModal v-model="modal" title="Custom Height" height="200" :dark="darkMode">
        <div class="flex items-center justify-center h-32">Content</div>
    </ShadcnModal>
</template>

<script setup lang="ts">
import { useData } from 'vitepress'
import { computed } from 'vue'

const { isDark } = useData()
const darkMode = computed(() => isDark.value)

import { ref } from 'vue';

const modal = ref(false);
</script>
```

:::

## 可关闭 (closeable)

::: raw

<CodeRunner title="可关闭 (closeable)">
    <ShadcnButton @click="closeableModal = true" :dark="darkMode">Closeable</ShadcnButton>
    <ShadcnModal v-model="closeableModal" title="Closeable" closable :dark="darkMode">
        <div class="flex items-center justify-center h-32">Content</div>
    </ShadcnModal>
    <ShadcnButton @click="noClosableModal = true" :dark="darkMode">No Closeable</ShadcnButton>
    <ShadcnModal v-model="noClosableModal" title="Not Closeable" :closable="false" :dark="darkMode">
        <div class="flex items-center justify-center h-32">Content</div>
    </ShadcnModal>
    <ShadcnButton @click="customClosableModal = true" :dark="darkMode">Custom Closable</ShadcnButton>
    <ShadcnModal v-model="customClosableModal" title="Custom Closable" :dark="darkMode">
        <template #close>Custom Close</template>
        <div class="flex items-center justify-center h-32">Content</div>
    </ShadcnModal>
</CodeRunner>

:::

::: details 查看代码

```vue
<template>
    <ShadcnButton @click="closeableModal = true" :dark="darkMode">Closeable</ShadcnButton>
    <ShadcnModal v-model="closeableModal" title="Closeable" closable :dark="darkMode">
        <div class="flex items-center justify-center h-32">Content</div>
    </ShadcnModal>
    <ShadcnButton @click="noClosableModal = true" :dark="darkMode">No Closeable</ShadcnButton>
    <ShadcnModal v-model="noClosableModal" title="Not Closeable" :closable="false" :dark="darkMode">
        <div class="flex items-center justify-center h-32">Content</div>
    </ShadcnModal>
    <ShadcnButton @click="customClosableModal = true" :dark="darkMode">Custom Closable</ShadcnButton>
    <ShadcnModal v-model="customClosableModal" title="Custom Closable" :dark="darkMode">
        <template #close>Custom Close</template>
        <div class="flex items-center justify-center h-32">Content</div>
    </ShadcnModal>
</template>

<script setup lang="ts">
import { useData } from 'vitepress'
import { computed } from 'vue'

const { isDark } = useData()
const darkMode = computed(() => isDark.value)

import { ref } from 'vue';

const closeableModal = ref(false);
const noClosableModal = ref(false);
const customClosableModal = ref(false);
</script>
```

:::

## 背景关闭 (mask-closable)

::: raw

<CodeRunner title="背景关闭 (mask-closable)">
    <ShadcnButton @click="customClosableModal = true" :dark="darkMode">Mask Closable</ShadcnButton>
    <ShadcnModal v-model="customClosableModal" title="Mask Closable" :mask-closable="false" :dark="darkMode">
        <div class="flex items-center justify-center h-32">Content</div>
    </ShadcnModal>
</CodeRunner>

:::

::: details 查看代码

```vue
<template>
    <ShadcnButton @click="value = true" :dark="darkMode">Mask Closable</ShadcnButton>
    <ShadcnModal v-model="value" title="Mask Closable" :mask-closable="false" :dark="darkMode">
        <div class="flex items-center justify-center h-32">Content</div>
    </ShadcnModal>
</template>

<script setup lang="ts">
import { useData } from 'vitepress'
import { computed } from 'vue'

const { isDark } = useData()
const darkMode = computed(() => isDark.value)

import { ref } from 'vue';

const value = ref(false);
</script>
```

:::

## 模态框 (Modal) 属性

<ApiTable title="模态框 (Modal) 属性"
    :headers="['属性', '描述', '类型', '默认值', '依赖']"
    :columns="[
        ['modelValue', '组件的值', 'boolean', 'false', '-'],
        ['title', '对话框的标题。如果页眉是使用 slot 自定义的，则标题将无效。', 'string', '-', '-'],
        ['description', '组件的描述', 'string', '-', 'title'],
        ['width', '组件的宽度', 'number | string', '30%', '-'],
        ['height', '组件的高度', 'number | string', 'auto', '-'],
        ['okText', 'OK 按钮的文本', 'string', 'OK', '-'],
        ['cancelText', '取消按钮的文本', 'string', 'Cancel', '-'],
        ['closable', '是否可关闭', 'boolean', 'true', '-'],
        ['maskClosable', '是否可通过点击遮罩关闭', 'boolean', 'true', '-'],
    ]">
</ApiTable>

## 模态框 (Modal) 事件

<ApiTable title="模态框 (Modal) 事件"
    :headers="['事件', '描述', '回调参数']"
    :columns="[
        ['update:modelValue', '组件的值更新时触发', 'true | false'],
        ['on-close', '组件关闭时触发', '-'],
    ]">
</ApiTable>

## 模态框 (Modal) 插槽

<ApiTable title="模态框 (Modal) 插槽"
    :headers="['插槽', '描述']" 
    :columns="[
        ['title', '标题区域'],
        ['description', '描述区域'],
        ['close', '关闭按钮区域'],
        ['content', '内容区域'],
        ['footer', '底部区域'],
    ]">
</ApiTable>

<script setup lang="ts">
import { useData } from 'vitepress'
import { computed } from 'vue'

const { isDark } = useData()
const darkMode = computed(() => isDark.value)

import { ref } from 'vue';

const basicModal = ref(false);
const noTitleModal = ref(false);
const customTitleModal = ref(false);
const customFooterModal = ref(false);
const customContentModal = ref(false);
const customWidthModal = ref(false);
const customHeightModal = ref(false);
const closeableModal = ref(false);
const noClosableModal = ref(false);
const customClosableModal = ref(false);
</script>