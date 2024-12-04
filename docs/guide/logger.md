---
title: Logger Utility
---

# Introduction

This document is mainly used to describe some features and usage of the logger utility.

## formatLogger

use `formatLogger` function to format logger.

Functions Overview and Limitations:

- Use cases: Single log parsing, custom configuration needed
- Limitations: Not for bulk processing, requires config params each time
- Resource usage: Low

<br />

::: raw

<CodeRunner title="formatLogger">
    <ShadcnText>Convert response:</ShadcnText>
    <div>{{ formatLoggerValue }}</div>
</CodeRunner>

:::

::: details Show code

```vue
<script setup lang="ts">
  import { formatLogger } from 'view-shadcn-ui'

  const formatLoggerValue = formatLogger("2024-12-04 23:14:27,765 INFO [main] io.edurt.datacap.service.initializer.InitializerConfigure [InitializerConfigure.java:100] Datacap registration enable: true")
</script>
```

:::

## formatMultipleLines

use `formatMultipleLines` function to format multiple lines.

Functions Overview and Limitations:

- Use cases: Batch processing of known log volume
- Limitations: Requires loading all logs at once, high memory usage for large volumes
- Resource usage: High, but fast processing

<br />

::: raw

<CodeRunner title="formatMultipleLines">
    <ShadcnText>Convert response:</ShadcnText>
    <div>{{ formatMultipleLinesValue }}</div>
</CodeRunner>

:::

::: details Show code

```vue
<script setup lang="ts">
  import { formatMultipleLines } from 'view-shadcn-ui'

  const formatMultipleLinesValue = formatMultipleLines([
    "2024-12-04 23:14:27,765 INFO [main] io.edurt.datacap.service.initializer.InitializerConfigure [InitializerConfigure.java:100] Datacap registration enable: true",
    "2024-12-04 23:14:27,765 INFO [main] io.edurt.datacap.service.initializer.InitializerConfigure [InitializerConfigure.java:100] Datacap registration enable: true",
    "2024-12-04 23:14:27,765 INFO [main] io.edurt.datacap.service.initializer.InitializerConfigure [InitializerConfigure.java:100] Datacap registration enable: true"
  ])
```

:::

## formatFromExample

use `formatFromExample` function to format from example.

Functions Overview and Limitations:

- Use cases: Unknown formats with sample logs, format learning required
- Limitations: Depends on sample quality, potential mismatches
- Resource usage: Medium

<br />

::: raw

<CodeRunner title="formatFromExample">
    <ShadcnText>Convert response:</ShadcnText>
    <div>{{ formatFromExampleValue }}</div>
</CodeRunner>

:::

::: details Show code

```vue
<script setup lang="ts">
  import { formatFromExample } from 'view-shadcn-ui'

  const formatFromExampleValue = formatFromExample(
      '12-01 23:59 ERROR MyApp: Hello',
      '01-01 12:00 INFO MyApp: Example',
      {
        timestamp: '01-01 12:00',
        level: 'INFO',
        logger: 'MyApp'
      }
  )
</script>
```

:::

## formatLoggerFromStream

use `formatLoggerFromStream` function to format from stream.

Functions Overview and Limitations:

- Use cases: Real-time processing of large logs, memory-constrained environments
- Limitations: Generator syntax required, no parallel processing
- Resource usage: Low, memory-efficient

::: raw

<CodeRunner title="formatLoggerFromStream">
    <ShadcnText>Convert response:</ShadcnText>
    <div>{{ formatLoggerFromStreamValue }}</div>
</CodeRunner>

:::

::: details Show code

```vue
<script setup lang="ts">
import { formatLoggerFromStream } from 'view-shadcn-ui'

const rows = [
  '12-01 23:59 ERROR MyApp: Hello',
  '12-01 23:59 INFO MyApp: World'
]
const formatLoggerFromStreamValue = [...formatLoggerFromStream(rows)]
</script>
```

:::

## Selection Guide

- Single log → `formatLogger`
- Special format learning → `formatFromExample`
- Large logs/Memory sensitive → `formatLoggerFromStream`
- Medium log volume/Quick processing → `formatMultipleLines`

<script setup lang="ts">
import { formatLogger, formatMultipleLines, formatFromExample, formatLoggerFromStream } from 'view-shadcn-ui'

const items = [
  "2024-12-04 23:14:27,765 INFO [main] io.edurt.datacap.service.initializer.InitializerConfigure [InitializerConfigure.java:100] Datacap registration enable: true",
  "2024-12-04 23:14:28,225 WARN [main] io.edurt.datacap.plugin.utils.PluginPathUtils [PluginPathUtils.java:136] Could not find project root, using fallback: /Users/shicheng/Desktop/tests/datacap-2024.4.0-SNAPSHOT",
]

const formatLoggerValue = formatLogger(items[0])
const formatMultipleLinesValue = formatMultipleLines(items)

const formatFromExampleValue = formatFromExample(
  '12-01 23:59 ERROR MyApp: Hello',
  '01-01 12:00 INFO MyApp: Example',
  {
    timestamp: '01-01 12:00',
    level: 'INFO',
    logger: 'MyApp'
  }
)

const formatLoggerFromStreamValue = [...formatLoggerFromStream(items)]
</script>
