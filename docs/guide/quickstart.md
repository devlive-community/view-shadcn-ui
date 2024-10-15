# Quickstart

View Shadcn UI supports two ways to introduce components.

- Global introduction
- Introduced on demand

## Global introduction

View Shadcn UI supports global introduction of components.

Generally, the configuration in the entry file `main.ts` is as follows:

```ts
import { createApp } from 'vue'
import App from './App.vue'
const app = createApp(App)

// Import View Shadcn UI
import ViewShadcnUI from 'view-shadcn-ui'
app.use(ViewShadcnUI)
```

## Introduced on demand

View Shadcn UI supports introducing components on demand.

```ts
import { ShadcnButton } from 'view-shadcn-ui'
app.component('ShadcnButton', ShadcnButton)
```

## Special reminder

Whether it is a global introduction or an on-demand reference, there is no need to add `import 'view-shadcn-ui/dist/view-shadcn-ui.min.css'` in `main.ts`

The component has imported styles by default during the compilation process.

## Component usage

```vue
<template>
    <ShadcnButton>Button</ShadcnButton>
</template>

<script setup>
    import { ShadcnButton } from 'view-shadcn-ui'
</script>
```
