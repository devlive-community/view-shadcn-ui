---
title: 穿梭框 (Transfer)
---

# 介绍

<br />

本文档主要用于描述 `ShadcnTransfer` 组件的一些特性和用法。

## 用法

<CodeRunner title="用法">
    <ShadcnTransfer
        v-model="selected1"
        :data="data1"
        :dark="darkMode"
        @on-change="handleChange" />
</CodeRunner>

::: details 查看代码

```vue
<template>
<ShadcnTransfer
    v-model="selected"
    :data="data"
    :dark="darkMode"
    @on-change="handleChange" />
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useData } from 'vitepress'
import { computed } from 'vue'

const { isDark } = useData()
const darkMode = computed(() => isDark.value)

const selected = ref([2, 3])

const data = ref([
    { key: 1, label: '选项 1' },
    { key: 2, label: '选项 2' },
    { key: 3, label: '选项 3' },
    { key: 4, label: '选项 4' },
    { key: 5, label: '选项 5' },
])

const handleChange = (value, direction, movedKeys) => {
    console.log('value:', value)
    console.log('direction:', direction)
    console.log('movedKeys:', movedKeys)
}
</script>
```

:::

## 自定义列表标题

<CodeRunner title="自定义列表标题">
    <ShadcnTransfer
        v-model="selected2"
        :data="data2"
        :dark="darkMode"
        left-title="待选择"
        right-title="已选择" />
</CodeRunner>

::: details 查看代码

```vue
<template>
<ShadcnTransfer
    v-model="selected"
    :data="data"
    :dark="darkMode"
    left-title="待选择"
    right-title="已选择" />
</template>

<script setup lang="ts">
import { ref } from 'vue'

const selected = ref([2])

const data = ref([
    { key: 1, label: 'Angular' },
    { key: 2, label: 'React' },
    { key: 3, label: 'Vue' },
    { key: 4, label: 'Svelte' },
])
</script>
```

:::

## 自定义高度

<CodeRunner title="自定义高度">
    <ShadcnTransfer
        v-model="selected13"
        :data="data13"
        :dark="darkMode"
        height="400px" />
</CodeRunner>

::: details 查看代码

```vue
<template>
<ShadcnTransfer
    v-model="selected"
    :data="data"
    :dark="darkMode"
    height="400px" />
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useData } from 'vitepress'
import { computed } from 'vue'

const { isDark } = useData()
const darkMode = computed(() => isDark.value)

const selected = ref([1, 2])

const data = ref([
    { key: 1, label: '选项 1' },
    { key: 2, label: '选项 2' },
    { key: 3, label: '选项 3' },
    { key: 4, label: '选项 4' },
    { key: 5, label: '选项 5' },
    { key: 6, label: '选项 6' },
    { key: 7, label: '选项 7' },
    { key: 8, label: '选项 8' },
])
</script>
```

:::

## 可搜索 (filterable)

<CodeRunner title="可搜索 (filterable)">
    <ShadcnTransfer
        v-model="selected14"
        :data="data14"
        :dark="darkMode"
        :filterable="true" />
</CodeRunner>

::: details 查看代码

```vue
<template>
<ShadcnTransfer
    v-model="selected"
    :data="data"
    :dark="darkMode"
    :filterable="true" />
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useData } from 'vitepress'
import { computed } from 'vue'

const { isDark } = useData()
const darkMode = computed(() => isDark.value)

const selected = ref([1, 2])

const data = ref([
    { key: 1, label: 'JavaScript' },
    { key: 2, label: 'TypeScript' },
    { key: 3, label: 'Python' },
    { key: 4, label: 'Java' },
    { key: 5, label: 'C++' },
    { key: 6, label: 'Go' },
    { key: 7, label: 'Rust' },
    { key: 8, label: 'Ruby' },
    { key: 9, label: 'PHP' },
    { key: 10, label: 'Swift' },
])
</script>
```

:::

## 自定义搜索方法

<CodeRunner title="自定义搜索方法">
    <ShadcnTransfer
        v-model="selected15"
        :data="data15"
        :dark="darkMode"
        :filterable="true"
        :filter-method="customFilterMethod"
        filter-placeholder="按拼音首字母搜索" />
</CodeRunner>

::: details 查看代码

```vue
<template>
<ShadcnTransfer
    v-model="selected"
    :data="data"
    :dark="darkMode"
    :filterable="true"
    :filter-method="customFilterMethod"
    filter-placeholder="按拼音首字母搜索" />
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useData } from 'vitepress'
import { computed } from 'vue'

const { isDark } = useData()
const darkMode = computed(() => isDark.value)

const selected = ref([1])

const data = ref([
    { key: 1, label: '北京', pinyin: 'beijing' },
    { key: 2, label: '上海', pinyin: 'shanghai' },
    { key: 3, label: '广州', pinyin: 'guangzhou' },
    { key: 4, label: '深圳', pinyin: 'shenzhen' },
    { key: 5, label: '杭州', pinyin: 'hangzhou' },
    { key: 6, label: '成都', pinyin: 'chengdu' },
])

const customFilterMethod = (query: string, item: any) => {
    return item.label.includes(query) || item.pinyin.includes(query.toLowerCase())
}
</script>
```

:::

## 禁用 (disabled)

<CodeRunner title="禁用 (disabled)">
    <ShadcnTransfer
        v-model="selected3"
        :data="data3"
        :dark="darkMode" />
</CodeRunner>

::: details 查看代码

```vue
<template>
<ShadcnTransfer
    v-model="selected"
    :data="data"
    :dark="darkMode" />
</template>

<script setup lang="ts">
import { ref } from 'vue'

const selected = ref([])

const data = ref([
    { key: 1, label: '可选项 1' },
    { key: 2, label: '禁用项 1', disabled: true },
    { key: 3, label: '可选项 2' },
    { key: 4, label: '禁用项 2', disabled: true },
    { key: 5, label: '可选项 3' },
])
</script>
```

:::

## 尺寸 (size)

<CodeRunner title="尺寸 (size)">
    <div class="space-y-4">
        <ShadcnTransfer
            v-model="selected5"
            :data="data5"
            size="small"
            :dark="darkMode" />
        <ShadcnTransfer
            v-model="selected6"
            :data="data6"
            size="default"
            :dark="darkMode" />
        <ShadcnTransfer
            v-model="selected7"
            :data="data7"
            size="large"
            :dark="darkMode" />
    </div>
</CodeRunner>

::: details 查看代码

```vue
<template>
<div class="space-y-4">
    <ShadcnTransfer
        v-model="selected"
        :data="data"
        size="small"
        :dark="darkMode" />

    <ShadcnTransfer
        v-model="selected"
        :data="data"
        size="default"
        :dark="darkMode" />

    <ShadcnTransfer
        v-model="selected"
        :data="data"
        size="large"
        :dark="darkMode" />
</div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useData } from 'vitepress'
import { computed } from 'vue'

const { isDark } = useData()
const darkMode = computed(() => isDark.value)

const selected = ref([1])

const data = ref([
    { key: 1, label: '选项 1' },
    { key: 2, label: '选项 2' },
    { key: 3, label: '选项 3' },
])
</script>
```

:::

## 类型 (type)

<CodeRunner title="类型 (type)">
    <div class="space-y-4">
        <ShadcnTransfer
            v-model="selected8"
            :data="data8"
            type="primary"
            :dark="darkMode" />
        <ShadcnTransfer
            v-model="selected9"
            :data="data9"
            type="success"
            :dark="darkMode" />
        <ShadcnTransfer
            v-model="selected10"
            :data="data10"
            type="warning"
            :dark="darkMode" />
        <ShadcnTransfer
            v-model="selected11"
            :data="data11"
            type="danger"
            :dark="darkMode" />
    </div>
</CodeRunner>

::: details 查看代码

```vue
<template>
<div class="space-y-4">
    <ShadcnTransfer
        v-model="selected"
        :data="data"
        type="primary"
        :dark="darkMode" />
    <ShadcnTransfer
        v-model="selected"
        :data="data"
        type="success"
        :dark="darkMode" />
    <ShadcnTransfer
        v-model="selected"
        :data="data"
        type="warning"
        :dark="darkMode" />
    <ShadcnTransfer
        v-model="selected"
        :data="data"
        type="danger"
        :dark="darkMode" />
</div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useData } from 'vitepress'
import { computed } from 'vue'

const { isDark } = useData()
const darkMode = computed(() => isDark.value)

const selected = ref([1])

const data = ref([
    { key: 1, label: '选项 1' },
    { key: 2, label: '选项 2' },
    { key: 3, label: '选项 3' },
])
</script>
```

:::

## 液态玻璃效果 (glass)

::: raw

<CodeRunner title="液态玻璃效果 (glass)">
    <div :class="['p-8 rounded-lg', darkMode ? 'bg-gradient-to-br from-purple-900 via-pink-900 to-red-900' : 'bg-gradient-to-br from-purple-400 via-pink-500 to-red-500']">
        <ShadcnTransfer
            v-model="selected12"
            :data="data12"
            :glass="true"
            :dark="darkMode" />
    </div>
</CodeRunner>

:::

::: details 查看代码

```vue
<template>
<div :class="['p-8 rounded-lg', darkMode ? 'bg-gradient-to-br from-purple-900 via-pink-900 to-red-900' : 'bg-gradient-to-br from-purple-400 via-pink-500 to-red-500']">
    <ShadcnTransfer
        v-model="selected"
        :data="data"
        :glass="true"
        :dark="darkMode" />
</div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useData } from 'vitepress'
import { computed } from 'vue'

const { isDark } = useData()
const darkMode = computed(() => isDark.value)

const selected = ref([2])

const data = ref([
    { key: 1, label: '选项 1' },
    { key: 2, label: '选项 2' },
    { key: 3, label: '选项 3' },
    { key: 4, label: '选项 4' },
])
</script>
```

:::

## 自定义渲染

<CodeRunner title="自定义渲染">
    <ShadcnTransfer
        v-model="selected4"
        :data="data4"
        :dark="darkMode">
        <template #item="{ item }">
            <div class="flex items-center gap-2">
                <ShadcnIcon :icon="item.icon" class="w-4 h-4" />
                <span>{{ item.label }}</span>
            </div>
        </template>
    </ShadcnTransfer>
</CodeRunner>

::: details 查看代码

```vue
<template>
<ShadcnTransfer
    v-model="selected"
    :data="data"
    :dark="darkMode">
    <template #item="{ item }">
        <div class="flex items-center gap-2">
            <ShadcnIcon :icon="item.icon" class="w-4 h-4" />
            <span>{{ item.label }}</span>
        </div>
    </template>
</ShadcnTransfer>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const selected = ref([1])

const data = ref([
    { key: 1, label: '首页', icon: 'Home' },
    { key: 2, label: '用户', icon: 'User' },
    { key: 3, label: '设置', icon: 'Settings' },
    { key: 4, label: '文件', icon: 'File' },
])
</script>
```

:::

## 在表单中使用

<CodeRunner title="在表单中使用">
    <ShadcnForm ref="formRef" v-model="formData" @on-submit="onSubmit">
        <ShadcnFormItem name="skills" label="技能选择" :rules="[{ required: true, message: '请选择技能' }]">
            <ShadcnTransfer
                v-model="formData.skills"
                :data="skillsData"
                :dark="darkMode"
                left-title="可选技能"
                right-title="已选技能" />
        </ShadcnFormItem>
        <div class="flex justify-end space-x-2 mt-6">
            <ShadcnButton reset @click="resetForm">
                重置
            </ShadcnButton>
            <ShadcnButton submit>
                提交
            </ShadcnButton>
        </div>
    </ShadcnForm>
</CodeRunner>

::: details 查看代码

```vue
<template>
<ShadcnForm ref="formRef" v-model="formData" @on-submit="onSubmit">
    <ShadcnFormItem name="skills" label="技能选择" :rules="[{ required: true, message: '请选择技能' }]">
        <ShadcnTransfer
            v-model="formData.skills"
            :data="skillsData"
            :dark="darkMode"
            left-title="可选技能"
            right-title="已选技能" />
    </ShadcnFormItem>
    <div class="flex justify-end space-x-2 mt-6">
        <ShadcnButton reset @click="resetForm">
            重置
        </ShadcnButton>
        <ShadcnButton submit>
            提交
        </ShadcnButton>
    </div>
</ShadcnForm>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useData } from 'vitepress'
import { computed } from 'vue'

const { isDark } = useData()
const darkMode = computed(() => isDark.value)

const formRef = ref()

const formData = ref({
    skills: [1, 2]
})

const skillsData = ref([
    { key: 1, label: 'JavaScript' },
    { key: 2, label: 'TypeScript' },
    { key: 3, label: 'Vue.js' },
    { key: 4, label: 'React' },
    { key: 5, label: 'Angular' },
    { key: 6, label: 'Node.js' },
])

const onSubmit = (data: any) => {
    console.log('Form submitted:', data)
}

const resetForm = () => {
    formRef.value.reset()
}
</script>
```

:::

## 穿梭框 (Transfer) 属性

<ApiTable title="穿梭框 (Transfer) 属性"
    :headers="['属性', '描述', '类型', '默认值', '支持列表']"
    :columns="[
        ['data', '数据源', 'TransferItem[]', '[]', '-'],
        ['modelValue', '已选择的数据', '(string | number)[]', '[]', '-'],
        ['key', '数据项的唯一标识属性名', 'string', '\'key\'', '-'],
        ['label', '数据项的显示文本属性名', 'string', '\'label\'', '-'],
        ['leftTitle', '左侧列表标题（支持国际化）', 'string', 'transfer.text.leftTitle', '-'],
        ['rightTitle', '右侧列表标题（支持国际化）', 'string', 'transfer.text.rightTitle', '-'],
        ['height', '列表高度', 'string', '\'256px\'', '-'],
        ['filterable', '是否可搜索', 'boolean', 'false', '-'],
        ['filterPlaceholder', '搜索框占位符（支持国际化）', 'string', 'transfer.text.filterPlaceholder', '-'],
        ['filterMethod', '自定义搜索方法', '(query: string, item: TransferItem) => boolean', '-', '-'],
        ['dark', '暗黑模式', 'boolean', 'false', '-'],
        ['glass', '液态玻璃效果', 'boolean', 'false', '-'],
        ['type', '按钮和复选框类型', 'enum', 'primary', 'primary | success | warning | danger | info'],
        ['size', '组件尺寸', 'enum', 'default', 'small | default | large'],
    ]">
</ApiTable>

## 穿梭框 (Transfer) 事件

<ApiTable title="穿梭框 (Transfer) 事件"
    :headers="['事件', '描述', '回调参数']"
    :columns="[
        ['update:modelValue', '选中值改变时触发', 'value: (string | number)[]'],
        ['on-change', '选中值改变时触发', 'value: (string | number)[], direction: \'left\' | \'right\', movedKeys: (string | number)[]'],
    ]">
</ApiTable>

## 穿梭框 (Transfer) 插槽

<ApiTable title="穿梭框 (Transfer) 插槽"
    :headers="['插槽', '描述', '参数']"
    :columns="[
        ['item', '自定义列表项内容', '{ item: TransferItem }'],
    ]">
</ApiTable>

<script setup lang="ts">
import { ref } from 'vue'
import { useData } from 'vitepress'
import { computed } from 'vue'

const { isDark } = useData()
const darkMode = computed(() => isDark.value)

const selected1 = ref([2, 3])
const data1 = ref([
    { key: 1, label: '选项 1' },
    { key: 2, label: '选项 2' },
    { key: 3, label: '选项 3' },
    { key: 4, label: '选项 4' },
    { key: 5, label: '选项 5' },
])

const selected2 = ref([2])
const data2 = ref([
    { key: 1, label: 'Angular' },
    { key: 2, label: 'React' },
    { key: 3, label: 'Vue' },
    { key: 4, label: 'Svelte' },
])

const selected3 = ref([])
const data3 = ref([
    { key: 1, label: '可选项 1' },
    { key: 2, label: '禁用项 1', disabled: true },
    { key: 3, label: '可选项 2' },
    { key: 4, label: '禁用项 2', disabled: true },
    { key: 5, label: '可选项 3' },
])

const selected4 = ref([1])
const data4 = ref([
    { key: 1, label: '首页', icon: 'Home' },
    { key: 2, label: '用户', icon: 'User' },
    { key: 3, label: '设置', icon: 'Settings' },
    { key: 4, label: '文件', icon: 'File' },
])

const selected5 = ref([1])
const data5 = ref([
    { key: 1, label: '选项 1' },
    { key: 2, label: '选项 2' },
    { key: 3, label: '选项 3' },
])

const selected6 = ref([1])
const data6 = ref([
    { key: 1, label: '选项 1' },
    { key: 2, label: '选项 2' },
    { key: 3, label: '选项 3' },
])

const selected7 = ref([1])
const data7 = ref([
    { key: 1, label: '选项 1' },
    { key: 2, label: '选项 2' },
    { key: 3, label: '选项 3' },
])

const selected8 = ref([1])
const data8 = ref([
    { key: 1, label: '选项 1' },
    { key: 2, label: '选项 2' },
    { key: 3, label: '选项 3' },
])

const selected9 = ref([1])
const data9 = ref([
    { key: 1, label: '选项 1' },
    { key: 2, label: '选项 2' },
    { key: 3, label: '选项 3' },
])

const selected10 = ref([1])
const data10 = ref([
    { key: 1, label: '选项 1' },
    { key: 2, label: '选项 2' },
    { key: 3, label: '选项 3' },
])

const selected11 = ref([1])
const data11 = ref([
    { key: 1, label: '选项 1' },
    { key: 2, label: '选项 2' },
    { key: 3, label: '选项 3' },
])

const selected12 = ref([2])
const data12 = ref([
    { key: 1, label: '选项 1' },
    { key: 2, label: '选项 2' },
    { key: 3, label: '选项 3' },
    { key: 4, label: '选项 4' },
])

const selected13 = ref([1, 2])
const data13 = ref([
    { key: 1, label: '选项 1' },
    { key: 2, label: '选项 2' },
    { key: 3, label: '选项 3' },
    { key: 4, label: '选项 4' },
    { key: 5, label: '选项 5' },
    { key: 6, label: '选项 6' },
    { key: 7, label: '选项 7' },
    { key: 8, label: '选项 8' },
])

const selected14 = ref([1, 2])
const data14 = ref([
    { key: 1, label: 'JavaScript' },
    { key: 2, label: 'TypeScript' },
    { key: 3, label: 'Python' },
    { key: 4, label: 'Java' },
    { key: 5, label: 'C++' },
    { key: 6, label: 'Go' },
    { key: 7, label: 'Rust' },
    { key: 8, label: 'Ruby' },
    { key: 9, label: 'PHP' },
    { key: 10, label: 'Swift' },
])

const selected15 = ref([1])
const data15 = ref([
    { key: 1, label: '北京', pinyin: 'beijing' },
    { key: 2, label: '上海', pinyin: 'shanghai' },
    { key: 3, label: '广州', pinyin: 'guangzhou' },
    { key: 4, label: '深圳', pinyin: 'shenzhen' },
    { key: 5, label: '杭州', pinyin: 'hangzhou' },
    { key: 6, label: '成都', pinyin: 'chengdu' },
])

const customFilterMethod = (query: string, item: any) => {
    return item.label.includes(query) || item.pinyin.includes(query.toLowerCase())
}

const formRef = ref()
const formData = ref({
    skills: [1, 2]
})

const skillsData = ref([
    { key: 1, label: 'JavaScript' },
    { key: 2, label: 'TypeScript' },
    { key: 3, label: 'Vue.js' },
    { key: 4, label: 'React' },
    { key: 5, label: 'Angular' },
    { key: 6, label: 'Node.js' },
])

const onSubmit = (data: any) => {
    console.log('Form submitted:', data)
}

const resetForm = () => {
    formRef.value.reset()
}

const handleChange = (value, direction, movedKeys) => {
    console.log('value:', value)
    console.log('direction:', direction)
    console.log('movedKeys:', movedKeys)
}
</script>
