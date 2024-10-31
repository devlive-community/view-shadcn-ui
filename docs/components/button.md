---
title: Shadcn Button
---

# Introduction

This document is mainly used to describe some features and usage of the ShadcnButton component.

## Type

::: raw

<CodeRunner title="Button Type">
    <ShadcnButton type="primary">Primary</ShadcnButton>
    <ShadcnButton type="success">Success</ShadcnButton>
    <ShadcnButton type="warning">Warning</ShadcnButton>
    <ShadcnButton type="danger">Danger</ShadcnButton>
    <ShadcnButton type="info">Info</ShadcnButton>
    <ShadcnButton type="text">Text</ShadcnButton>
    <ShadcnButton type="default">Default</ShadcnButton>
</CodeRunner>

:::

::: details Show code

```vue
<template>
    <ShadcnButton type="primary">Primary</ShadcnButton>
    <ShadcnButton type="success">Success</ShadcnButton>
    <ShadcnButton type="warning">Warning</ShadcnButton>
    <ShadcnButton type="danger">Danger</ShadcnButton>
    <ShadcnButton type="info">Info</ShadcnButton>
    <ShadcnButton type="text">Text</ShadcnButton>
    <ShadcnButton type="default">Default</ShadcnButton>
</template>

<script setup lang="ts">
</script>
```

:::

## Size

<CodeRunner title="Button Size"
            description="Create buttons of different sizes by setting size, not setting it to the default size.">
    <ShadcnButton size="small">Small</ShadcnButton>
    <ShadcnButton size="default">Default</ShadcnButton>
    <ShadcnButton size="large">Large</ShadcnButton>
</CodeRunner>

::: details Show code

```vue
<template>
    <ShadcnButton size="small">Small</ShadcnButton>
    <ShadcnButton size="default">Default</ShadcnButton>
    <ShadcnButton size="large">Large</ShadcnButton>
</template>

<script setup lang="ts">
</script>
```

:::

## Icon

<CodeRunner title="Button Icon"
            description="Create buttons with icons.">
    <ShadcnButton>
        <template #icon>
            <ShadcnIcon icon="Save"/>
        </template>
        Icon
    </ShadcnButton>
    <ShadcnButton type="success">
        <template #icon>
            <ShadcnIcon icon="Save"/>
        </template>
        Icon + Type
    </ShadcnButton>
    <ShadcnButton type="success" size="small">
        <template #icon>
            <ShadcnIcon icon="Save"/>
        </template>
        Icon + Type + Size
    </ShadcnButton>
</CodeRunner>

::: details Show code

```vue
<template>
    <ShadcnButton>
        <template #icon>
            <ShadcnIcon icon="Save"/>
        </template>
        Icon
    </ShadcnButton>
    <ShadcnButton type="success">   
        <template #icon>            
            <ShadcnIcon icon="Save"/>        
        </template>
        Icon + Type
    </ShadcnButton>
    <ShadcnButton type="success" size="small">
        <template #icon>
            <ShadcnIcon icon="Save"/>
        </template>
        Icon + Type + Size
    </ShadcnButton>
</template>

<script setup lang="ts">
</script>
```

:::

## Rounded

<CodeRunner title="Button Rounded"
            description="Create buttons with rounded corners.">
    <ShadcnButton round>Round</ShadcnButton>
    <ShadcnButton type="danger" round>Round + Type</ShadcnButton>
    <ShadcnButton type="success" size="small" round>Round + Type + Size</ShadcnButton>
</CodeRunner> 

::: details Show code

```vue
<template>
    <ShadcnButton round>Round</ShadcnButton>
    <ShadcnButton type="danger" round>Round + Type</ShadcnButton>
    <ShadcnButton type="success" size="small" round>Round + Type + Size</ShadcnButton>
</template>

<script setup lang="ts">
</script>
```

:::

## Disabled

<CodeRunner title="Button Disabled"
            description="Create disabled buttons.">
    <ShadcnButton disabled>Disabled</ShadcnButton>
    <ShadcnButton type="danger" disabled>Disabled + Type</ShadcnButton>
    <ShadcnButton type="success" size="small" disabled>Disabled + Type + Size</ShadcnButton>
</CodeRunner> 

::: details Show code

```vue
<template>
    <ShadcnButton disabled>Disabled</ShadcnButton>
    <ShadcnButton type="danger" disabled>Disabled + Type</ShadcnButton>
    <ShadcnButton type="success" size="small" disabled>Disabled + Type + Size</ShadcnButton>
</template>

<script setup lang="ts">
</script>
```

:::

## Circle

<CodeRunner title="Button Circle"
            description="Create circle buttons.">
    <ShadcnButton circle></ShadcnButton>
    <ShadcnButton type="danger" circle></ShadcnButton>
    <ShadcnButton type="success" size="small" circle></ShadcnButton>
</CodeRunner> 

::: details Show code

```vue
<template>
    <ShadcnButton circle></ShadcnButton>
    <ShadcnButton type="danger" circle></ShadcnButton>
    <ShadcnButton type="success" size="small" circle></ShadcnButton>
</template>

<script setup lang="ts">
</script>
```

:::

## Loading

<CodeRunner title="Button Loading"
            description="Create loading buttons.">
    <ShadcnButton loading>Loading</ShadcnButton>    
    <ShadcnButton type="success" loading>Loading + Type</ShadcnButton>
    <ShadcnButton type="success" size="small" loading>Loading + Type + Size</ShadcnButton>
</CodeRunner> 

::: details Show code

```vue
<template>
    <ShadcnButton loading>Loading</ShadcnButton>
    <ShadcnButton type="success" loading>Loading + Type</ShadcnButton>
    <ShadcnButton type="success" size="small" loading>Loading + Type + Size</ShadcnButton>
</template>

<script setup lang="ts">
</script>
```

:::

## Color

<CodeRunner title="Button Color"
            description="Create buttons with different colors.">
    <ShadcnButton color="red">Red</ShadcnButton>
    <ShadcnButton type="danger" color="red">Red + Type</ShadcnButton>
    <ShadcnButton type="success" size="small" color="red">Red + Type + Size</ShadcnButton>
</CodeRunner> 

::: details Show code

```vue
<template>
    <ShadcnButton color="red">Red</ShadcnButton>
    <ShadcnButton type="danger" color="red">Red + Type</ShadcnButton>
    <ShadcnButton type="success" size="small" color="red">Red + Type + Size</ShadcnButton>
</template>

<script setup lang="ts">
</script>
```

:::

## Ghost

<CodeRunner title="Ghost">
    <ShadcnButton type="primary" ghost>Primary</ShadcnButton>
    <ShadcnButton type="success" ghost>Success</ShadcnButton>
    <ShadcnButton type="warning" ghost>Warning</ShadcnButton>
    <ShadcnButton type="danger" ghost>Danger</ShadcnButton>
    <ShadcnButton type="info" ghost>Info</ShadcnButton>
    <ShadcnButton type="text" ghost>Text</ShadcnButton>
    <ShadcnButton type="default" ghost>Default</ShadcnButton>
</CodeRunner>

::: details Show code

```vue
<template>
    <ShadcnButton type="primary" ghost>Primary</ShadcnButton>
    <ShadcnButton type="success" ghost>Success</ShadcnButton>
    <ShadcnButton type="warning" ghost>Warning</ShadcnButton>
    <ShadcnButton type="danger" ghost>Danger</ShadcnButton>
    <ShadcnButton type="info" ghost>Info</ShadcnButton>
    <ShadcnButton type="text" ghost>Text</ShadcnButton>
    <ShadcnButton type="default" ghost>Default</ShadcnButton>
</template>

<script setup lang="ts">
</script>
```

:::

## Group

::: raw

<CodeRunner title="Button Group">
    <ShadcnButtonGroup>
      <ShadcnButton>Left</ShadcnButton>
      <ShadcnButton>Middle</ShadcnButton>
      <ShadcnButton>Right</ShadcnButton>
    </ShadcnButtonGroup>
</CodeRunner>

:::

::: details Show code

```vue
<template>
    <ShadcnButtonGroup>
      <ShadcnButton>Left</ShadcnButton>
      <ShadcnButton>Middle</ShadcnButton>
      <ShadcnButton>Right</ShadcnButton>
    </ShadcnButtonGroup>
</template>

<script setup lang="ts">
</script>
```

:::

## Group Direction

<CodeRunner title="Button Group Direction">
    <ShadcnButtonGroup direction="vertical">
        <ShadcnButton type="primary">T</ShadcnButton>
        <ShadcnButton type="primary">C</ShadcnButton>
        <ShadcnButton type="primary">B</ShadcnButton>
    </ShadcnButtonGroup>
</CodeRunner>

::: details Show code

```vue
<template>
    <ShadcnButtonGroup direction="vertical">
        <ShadcnButton type="primary">T</ShadcnButton>
        <ShadcnButton type="primary">C</ShadcnButton>
        <ShadcnButton type="primary">B</ShadcnButton>
    </ShadcnButtonGroup>
</template>

<script setup lang="ts">
</script>
```

:::

## API Attributes

<ApiTable title="Button Props" 
            :headers="['Attribute', 'Description', 'Type', 'Default Value', 'List']" 
            :columns="[
                ['text', 'Button text', 'String', '-', '-'],
                ['size', 'Button size', 'Enum', 'default', 'small, default, large'],
                ['type', 'Button type', 'Enum', 'primary', 'primary, success, warning, danger, info, text, default'],
                ['round', 'Whether to add surrounding fillets', 'Boolean', 'false', '-'],
                ['circle', 'Whether to create a circle button', 'Boolean', 'false', '-'],
                ['loading', 'Whether to display loading', 'Boolean', 'false', '-'],
                ['color', 'Custom colors, supports all colors, and automatically calculates the color difference such as hover used', 'String', '-', 'All supported color values'],
                ['ghost', 'Whether to create a ghost button', 'Boolean', 'false', '-'],
                ['disabled', 'Whether to disable the button', 'Boolean', 'false', '-'],
                ['submit', 'Whether to trigger form submission', 'Boolean', 'false', '-'],
                ['reset', 'Whether to trigger form reset', 'Boolean', 'false', '-'],
            ]">
</ApiTable>

<br />

<ApiTable title="Button Group Props"
            :headers="['Attribute', 'Description', 'Type', 'Default Value', 'List']"
            :columns="[
                ['size', 'The size of the button group', 'Enum', 'default', 'small, default, large'],
                ['direction', 'The direction of the button group', 'Enum', 'horizontal', 'horizontal, vertical'],
            ]">
</ApiTable>

<br />

<ApiTable title="Button Events" 
            :headers="['Event', 'Description', 'Callback Parameters']" 
            :columns="[
                ['click', 'Click event', 'event'],
            ]">
</ApiTable>

<br />

<ApiTable title="Button Slots" 
            :headers="['Slot', 'Description']" 
            :columns="[
                ['default', 'Button text slot'],
                ['icon', 'Icon slot'],
                ['loading', 'Loading slot'],
            ]">
</ApiTable>
