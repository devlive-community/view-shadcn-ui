---
title: Shadcn FloatButton
---

# Introduction

This document is mainly used to describe some features and usage of the ShadcnFloatButton component.

## Usage

::: raw

<CodeRunner title="Usage">
    <ShadcnFloatButton circle>
        <ShadcnIcon icon="Save" />
    </ShadcnFloatButton>
</CodeRunner>

:::

## ShadcnFloatButton Props

<ApiTable title="Props"
    :headers="['Attribute', 'Description', 'Type', 'Default Value', 'List']"
    :columns="[
        ['position', 'The position of the float button', 'enum', 'bottom-right', 'top-right | top-left | bottom-right | bottom-left'],
        ['circle', 'Whether the float button is a circle', 'boolean', 'false', '-'],
        ['top', 'The top position of the float button', 'number | string', '40', '-'],
        ['right', 'The right position of the float button', 'number | string', '40', '-'],
        ['bottom', 'The bottom position of the float button', 'number | string', '40', '-'],
        ['left', 'The left position of the float button', 'number | string', '40', '-'],
    ]">
</ApiTable>

## ShadcnFloatButton Slots

<ApiTable title="Slots"
    :headers="['Name', 'Description']"
    :columns="[
        ['icon', 'The icon slot'],
    ]">
</ApiTable>
