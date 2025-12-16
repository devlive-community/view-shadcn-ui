---
title: 选择器 (Select)
---

# 介绍

<br />

本文档主要用于描述 `ShadcnSelect` 组件的一些特性和用法。

## 用法

<CodeRunner title="用法">
    <ShadcnSelect v-model="defaultSelect" :options="defaultSelectOptions"  :dark="darkMode" />
</CodeRunner>

::: details 查看代码

```vue
<template>
    <ShadcnSelect v-model="defaultSelect" :options="defaultSelectOptions"  :dark="darkMode" />
</template>

<script setup lang="ts">
import { useData } from 'vitepress'
import { computed } from 'vue'

const { isDark } = useData()
const darkMode = computed(() => isDark.value)


const defaultSelect = ref('')
const defaultSelectOptions = [
    { label: 'Vue', value: 'Vue' },
    { label: 'Nuxt', value: 'Nuxt' },
    { label: 'Svelte', value: 'Svelte' }
]
</script>
```

:::

## 禁用 (disabled)

<CodeRunner title="禁用 (disabled)">
    <ShadcnSelect v-model="defaultSelect" :options="defaultSelectOptions" disabled  :dark="darkMode" />
</CodeRunner>

::: details 查看代码

```vue
<template>
    <ShadcnSelect v-model="defaultSelect" :options="defaultSelectOptions" disabled  :dark="darkMode" />
</template>

<script setup lang="ts">
import { ref } from 'vue';

const defaultSelect = ref('')
const defaultSelectOptions = [
    { label: 'Vue', value: 'Vue' },
    { label: 'Nuxt', value: 'Nuxt', disabled: true },
    { label: 'Svelte', value: 'Svelte' }
]
</script>
```

:::

## 尺寸 (size)

<CodeRunner title="尺寸 (size)">
    <div class="space-y-2">
        <ShadcnSelect v-model="defaultSelect" :options="defaultSelectOptions" size="small"  :dark="darkMode" />
        <ShadcnSelect v-model="defaultSelect" :options="defaultSelectOptions" size="default"  :dark="darkMode" />
        <ShadcnSelect v-model="defaultSelect" :options="defaultSelectOptions" size="large"  :dark="darkMode" />
    </div>
</CodeRunner>

::: details 查看代码

```vue
<template>
    <p>Select Value: {{ defaultSelect }}</p>
    <ShadcnSelect v-model="defaultSelect" :options="defaultSelectOptions" size="small"  :dark="darkMode" />
    <ShadcnSelect v-model="defaultSelect" :options="defaultSelectOptions" size="default"  :dark="darkMode" />
    <ShadcnSelect v-model="defaultSelect" :options="defaultSelectOptions" size="large"  :dark="darkMode" />
</template>

<script setup lang="ts">
import { ref } from 'vue';

const defaultSelect = ref('')
const defaultSelectOptions = [
    { label: 'Vue', value: 'Vue' },
    { label: 'Nuxt', value: 'Nuxt', disabled: true },
    { label: 'Svelte', value: 'Svelte' }
]
</script>
```

:::

## 类型 (type)

<CodeRunner title="类型 (type)">
    <div class="space-y-2">
        <ShadcnSelect v-model="defaultSelect" :options="defaultSelectOptions" type="primary"  :dark="darkMode" />
        <ShadcnSelect v-model="defaultSelect" :options="defaultSelectOptions" type="success"  :dark="darkMode" />
        <ShadcnSelect v-model="defaultSelect" :options="defaultSelectOptions" type="warning"  :dark="darkMode" />
        <ShadcnSelect v-model="defaultSelect" :options="defaultSelectOptions" type="error"  :dark="darkMode" />
    </div>
</CodeRunner>

::: details 查看代码

```vue
<template>
    <p>Select Value: {{ defaultSelect }}</p>
    <ShadcnSelect v-model="defaultSelect" :options="defaultSelectOptions" type="primary"  :dark="darkMode" />
    <ShadcnSelect v-model="defaultSelect" :options="defaultSelectOptions" type="success"  :dark="darkMode" />
    <ShadcnSelect v-model="defaultSelect" :options="defaultSelectOptions" type="warning"  :dark="darkMode" />
    <ShadcnSelect v-model="defaultSelect" :options="defaultSelectOptions" type="error"  :dark="darkMode" />
</template>

<script setup lang="ts">
import { ref } from 'vue';

const defaultSelect = ref('')
const defaultSelectOptions = [
    { label: 'Vue', value: 'Vue' },
    { label: 'Nuxt', value: 'Nuxt', disabled: true },
    { label: 'Svelte', value: 'Svelte' }
]
</script>
```

:::

## 边框 (border)

::: raw

<CodeRunner title="边框 (border)">
    <div class="space-y-2">
        <ShadcnSelect v-model="defaultSelect" :options="defaultSelectOptions"  :dark="darkMode" />
        <ShadcnSelect v-model="defaultSelect" :options="defaultSelectOptions" :border="false"  :dark="darkMode" />
    </div>
</CodeRunner>

:::

::: details 查看代码

```vue
<template>
    <p>Select Value: {{ defaultSelect }}</p>
    <ShadcnSelect v-model="defaultSelect" :options="defaultSelectOptions"  :dark="darkMode" />
    <ShadcnSelect v-model="defaultSelect" :options="defaultSelectOptions" :border="false"  :dark="darkMode" />
</template>

<script setup lang="ts">
import { ref } from 'vue';

const defaultSelect = ref('')
const defaultSelectOptions = [
    { label: 'Vue', value: 'Vue' },
    { label: 'Nuxt', value: 'Nuxt', disabled: true },
    { label: 'Svelte', value: 'Svelte' }
]
</script>
```

:::

## 组 (group)

::: raw

<CodeRunner title="组 (group)">
    <ShadcnSelect v-model="defaultSelect" :dark="darkMode">
      <template #options>
        <ShadcnSelectGroup label="Group 1" :dark="darkMode">
          <ShadcnSelectOption v-for="i in 2"
            :key="i"
            :label="`Option ${i}`"
            :value="`Value ${i}`" :dark="darkMode" />
        </ShadcnSelectGroup>
        <ShadcnSelectOption v-for="i in 2"
                            :key="i"
                            :label="`Option ${i}`"
                            :value="`Value ${i}`" :dark="darkMode" />
      </template>
    </ShadcnSelect>
</CodeRunner>

:::

::: details 查看代码

```vue
<template>
    <ShadcnSelect v-model="defaultSelect" :dark="darkMode">
      <template #options>
        <ShadcnSelectGroup label="Group 1" :dark="darkMode">
          <ShadcnSelectOption v-for="i in 2"
            :key="i"
            :label="`Option ${i}`"
            :value="`Value ${i}`" :dark="darkMode" />
        </ShadcnSelectGroup>
        <ShadcnSelectOption v-for="i in 2"
                            :key="i"
                            :label="`Option ${i}`"
                            :value="`Value ${i}`" :dark="darkMode" />
      </template>    
    </ShadcnSelect>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const defaultSelect = ref('')
</script>
```

:::

## 多选 (multiple)

::: raw

<CodeRunner title="多选 (multiple)">
    <ShadcnSelect v-model="defaultSelect" multiple :options="defaultSelectOptions"  :dark="darkMode" />
</CodeRunner>

:::

::: details 查看代码

```vue
<template>
    <ShadcnSelect v-model="defaultSelect" multiple :options="defaultSelectOptions"  :dark="darkMode" />
</template>

<script setup lang="ts">
import { ref } from 'vue';

const defaultSelect = ref('')
const defaultSelectOptions = [
    { label: 'Vue', value: 'Vue' },
    { label: 'Nuxt', value: 'Nuxt', disabled: true },
    { label: 'Svelte', value: 'Svelte' }
]
</script>
```

:::

## 加载 (loading)

::: raw

<CodeRunner title="加载 (loading)">
    <ShadcnButton @click="onClick" :dark="darkMode">{{ !loading ? '显示 Loading' : '隐藏 Loading' }}</ShadcnButton>
    <ShadcnSelect v-model="defaultSelect" :options="defaultSelectOptions" :loading="loading"  :dark="darkMode" />
</CodeRunner>

:::

## 液态玻璃效果 (glass)

::: raw

<CodeRunner title="液态玻璃效果 (glass)">
  <div class="space-y-6">
    <div :class="['p-6 rounded-lg', darkMode ? 'bg-gradient-to-r from-green-900 to-teal-900' : 'bg-gradient-to-r from-green-400 to-teal-400']">
      <div class="flex flex-col gap-4">
        <div>
          <p :class="['text-sm mb-2', darkMode ? 'text-gray-200' : 'text-gray-700']">单选模式</p>
          <ShadcnSelect v-model="glassSelectValue" :options="defaultSelectOptions" glass :dark="darkMode" placeholder="请选择选项"/>
        </div>
        <div>
          <p :class="['text-sm mb-2', darkMode ? 'text-gray-200' : 'text-gray-700']">多选模式</p>
          <ShadcnSelect v-model="glassMultiValue" :options="defaultSelectOptions" glass :dark="darkMode" multiple placeholder="请选择多个选项"/>
        </div>
      </div>
    </div>
  </div>
</CodeRunner>

:::

::: details 查看代码

```vue
<template>
  <div class="space-y-6">
    <div :class="['p-6 rounded-lg', darkMode ? 'bg-gradient-to-r from-green-900 to-teal-900' : 'bg-gradient-to-r from-green-400 to-teal-400']">
      <div class="flex flex-col gap-4">
        <div>
          <p :class="['text-sm mb-2', darkMode ? 'text-gray-200' : 'text-gray-700']">单选模式</p>
          <ShadcnSelect v-model="glassSelectValue" :options="defaultSelectOptions" glass :dark="darkMode" placeholder="请选择选项"/>
        </div>
        <div>
          <p :class="['text-sm mb-2', darkMode ? 'text-gray-200' : 'text-gray-700']">多选模式</p>
          <ShadcnSelect v-model="glassMultiValue" :options="defaultSelectOptions" glass :dark="darkMode" multiple placeholder="请选择多个选项"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useData } from 'vitepress'
import { computed } from 'vue'

const { isDark } = useData()
const darkMode = computed(() => isDark.value)

const glassSelectValue = ref(null)
const glassMultiValue = ref([])
const defaultSelectOptions = [
  { value: '1', label: '选项 1' },
  { value: '2', label: '选项 2' },
  { value: '3', label: '选项 3' },
  { value: '4', label: '选项 4' },
  { value: '5', label: '选项 5' }
]
</script>
```

:::

## 懒加载 (lazy)

::: raw

<CodeRunner title="懒加载 (lazy)">
  <ShadcnSelect v-model="lazySelect"
                lazy
                :options="options"
                :load-data="loadMoreData"
                @update:options="handleOptionsUpdate" :dark="darkMode" />
</CodeRunner>

:::

::: details 查看代码

```vue
<template>
  <ShadcnSelect v-model="selectedValue"
                lazy
                :options="options"
                :load-data="loadMoreData"
                @update:options="handleOptionsUpdate" :dark="darkMode" />
</template>

<script setup lang="ts">
import { ref } from 'vue'

const selectedValue = ref()
const options = ref<any[]>([])
let page = 1

const generateChildNodes = () => {
  return Array.from({ length: 10 }, (_, index) => ({
    value: `value-${ page }-${ index }`,
    label: `Option ${ page }-${ index }`,
    disabled: false,
    type: 'primary'
  }))
}

const handleOptionsUpdate = (newOptions: SelectOptionProps[]) => {
  options.value = newOptions
}

const loadMoreData = (callback: (children: any[]) => void) => {
  setTimeout(() => {
    console.log('Loading page:', page)
    const children = generateChildNodes()
    callback(children)
    page++
  }, 1000)
}

loadMoreData((children) => {
  options.value = children
})
</script>
```

:::

::: raw

<CodeRunner title="Lazy data (v-model)">
  <ShadcnSelect v-model="lazySelect"
                v-model:options="options"
                lazy
                :options="options"
                :load-data="loadMoreData" :dark="darkMode" />
</CodeRunner>

:::

::: details 查看代码

```vue
<template>
  <ShadcnSelect v-model="selectedValue"
                v-model:options="options"
                lazy
                :options="options"
                :load-data="loadMoreData" :dark="darkMode" />
</template>

<script setup lang="ts">
import { ref } from 'vue'

const selectedValue = ref()
const options = ref<any[]>([])
let page = 1

const generateChildNodes = () => {
  return Array.from({ length: 10 }, (_, index) => ({
    value: `value-${ page }-${ index }`,
    label: `Option ${ page }-${ index }`,
    disabled: false,
    type: 'primary'
  }))
}

const loadMoreData = (callback: (children: any[]) => void) => {
  setTimeout(() => {
    console.log('Loading page:', page)
    const children = generateChildNodes()
    callback(children)
    page++
  }, 1000)
}

loadMoreData((children) => {
  options.value = children
})
</script>
```

:::

## 选择器 (Select) 属性

<ApiTable title="选择器 (Select) 属性"
    :headers="['属性', '描述', '类型', '默认值', '支持列表']"
    :columns="[
        ['modelValue', '当前选择的值', 'any | any\[\]', '-', '-'],
        ['options', '选择器的选项，格式为 { label: string, value: any, disabled?: boolean, selected?: boolean }', 'array', '-', '-'],
        ['disabled', '是否为禁用', 'boolean', 'false', 'true | false'],
        ['size', '选择器的尺寸', 'enum', 'default', 'small | default | large'],
        ['type', '选择器的类型', 'enum', 'default', 'primary | success | warning | error'],
        ['placeholder', '选择器的占位符', 'string', '-', '-'],
        ['multiple', '是否为多选', 'boolean', 'false', 'true | false'],
        ['border', '是否显示边框', 'boolean', 'true', 'true | false'],
        ['lazy', '是否为懒加载', 'boolean', 'false', 'true | false'],
        ['loading', '是否为加载中', 'boolean', 'false', 'true | false'],
        ['loadData', '懒加载数据函数', 'function', '-', '-'],
        ['dark', '暗黑模式', 'boolean', 'false', '-'],
        ['glass', '液态玻璃效果', 'boolean', 'false', '-'],
    ]">
</ApiTable>

## 选择器选项 (Select Option) 属性

<ApiTable title="选择器选项 (Select Option) 属性"
    :headers="['属性', '描述', '类型', '默认值']"
    :columns="[
        ['label', '选项标签', 'string', '-'],
        ['value', '选项值', 'any', '-'],
        ['disabled', '是否为禁用', 'boolean', 'false'],
        ['selected', '是否为选中', 'boolean', 'false'],
    ]">
</ApiTable>

## 选择器分组 (Select Group) 属性

<ApiTable title="选择器分组 (Select Group) 属性"
    :headers="['属性', '描述', '类型', '默认值']"
    :columns="[
        ['label', '分组标签', 'string', '-'],
    ]">
</ApiTable>

## 选择器 (Select) 插槽

<ApiTable title="选择器 (Select) 插槽"
    :headers="['插槽', '描述']" 
    :columns="[
        ['options', '选择器的选项'],
    ]">
</ApiTable>

## 选择器 (Select) 事件

<ApiTable title="选择器 (Select) 事件"
    :headers="['事件', '描述', '回调参数']"
    :columns="[
        ['on-change', '更改选择器的值时触发', 'any'],
        ['on-click-outside', '点击选择器外部时触发', 'boolean'],
    ]">
</ApiTable>

<script setup lang="ts">
import { ref } from 'vue';
import { useData } from 'vitepress' 
import { computed } from 'vue' 
const { isDark } = useData()
const darkMode = computed(() => isDark.value)

const loading = ref(false)
const defaultSelect = ref('Value 1')
const defaultSelectOptions = [
    { label: 'Vue', value: 'Vue' },
    { label: 'Nuxt', value: 'Nuxt', disabled: true },
    { label: 'Svelte', value: 'Svelte' }
]
const slotSelect = ref(null)

const lazySelect = ref()
const lazySelect2 = ref()
const options = ref<any[]>([])
let page = 1

const generateChildNodes = () => {
  return Array.from({ length: 10 }, (_, index) => ({
    value: `value-${ page }-${ index }`,
    label: `Option ${ page }-${ index }`,
    disabled: false,
    type: 'primary'
  }))
}

const handleOptionsUpdate = (newOptions: any[]) => options.value = newOptions

const loadMoreData = (callback: (children: any[]) => void) => {
  setTimeout(() => {
    console.log('Loading page:', page)
    const children = generateChildNodes()
    callback(children)
    page++
  }, 1000)
}

loadMoreData((children) => {
  options.value = children
})

const onClick = () => {
  loading.value = !loading.value
}

const glassSelectValue = ref(null)
const glassMultiValue = ref([])
</script>