---
title: Shadcn LoadingBar
---

# Introduction

This document is mainly used to describe some features and usage of the ShadcnLoadingBar component.

## Usage

::: raw

<CodeRunner title="Usage">
    <ShadcnLoadingBar v-model="progress"/>
</CodeRunner>

:::

## LoadingBar Props

<ApiTable title="Props"
    :headers="['Attribute', 'Description', 'Type', 'Default Value']"
    :columns="[
        ['progress', 'The value of the loading bar.', 'number', '0'],
        ['height', 'The height of the loading bar.', 'number | string', '2'],
        ['color', 'The color of the loading bar.', 'string', '#2563eb'],
        ['duration', 'The duration of the loading bar.', 'number | string', '300'],
        ['animate', 'Whether to animate the loading bar.', 'Boolean', 'true'],
    ]">
</ApiTable>

<script setup lang="ts">
import {ref} from "vue"

const progress = ref(50)

setInterval(() => {
  progress.value = Math.floor(Math.random() * 100)
}, 1000)
</script>
