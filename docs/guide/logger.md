---
title: 日志 (Logger)
---

# 介绍

<br />

本文档主要用于描述 `formatLogger` 函数的一些功能和用法。

## formatLogger

使用 `formatLogger` 函数来格式化日志。

功能概述和限制：

- 使用案例：单个日志解析，需要自定义配置
- 限制：不用于批量处理，每次都需要配置参数
- 资源使用率：低，但处理速度快

<br />

::: raw

<CodeRunner title="formatLogger">
    <ShadcnText>转换响应:</ShadcnText>
    <div>{ "timestamp": "2024-12-04 23:14:27,765", "level": "INFO", "thread": "main", "logger": "io.edurt.datacap.service.initializer.InitializerConfigure", "file": "InitializerConfigure.java:100", "message": "Datacap registration enable: true" }</div>
</CodeRunner>

:::

::: details 查看代码

```vue
<script setup lang="ts">
  import { formatLogger } from 'view-shadcn-ui'

  const formatLoggerValue = formatLogger("2024-12-04 23:14:27,765 INFO [main] io.edurt.datacap.service.initializer.InitializerConfigure [InitializerConfigure.java:100] Datacap registration enable: true")
</script>
```

:::

## formatMultipleLines

使用 `formatMultipleLines` 函数格式化多行。

功能概述和限制：

- 使用案例：已知日志量的批处理
- 限制：需要一次加载所有日志，大卷的内存使用率很高
- 资源使用率：高，但处理速度快

<br />

::: raw

<CodeRunner title="formatMultipleLines">
    <ShadcnText>转换响应:</ShadcnText>
    <div>[ { "timestamp": "2024-12-04 23:14:27,765", "level": "INFO", "thread": "main", "logger": "io.edurt.datacap.service.initializer.InitializerConfigure", "file": "InitializerConfigure.java:100", "message": "Datacap registration enable: true" }, { "timestamp": "2024-12-04 23:14:28,225", "level": "WARN", "thread": "main", "logger": "io.edurt.datacap.plugin.utils.PluginPathUtils", "file": "PluginPathUtils.java:136", "message": "Could not find project root, using fallback: /Users/shicheng/Desktop/tests/datacap-2024.4.0-SNAPSHOT" } ]</div>
</CodeRunner>

:::

::: details 查看代码

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

使用 `formatFromExample` 函数从 example 格式化。

功能概述和限制：

- 使用案例：具有示例日志的未知格式，需要格式学习
- 限制：取决于样品质量，可能不匹配
- 资源使用情况：中等

<br />

::: raw

<CodeRunner title="formatFromExample">
    <ShadcnText>转换响应:</ShadcnText>
    <div>{ "timestamp": "12-01 23:59", "level": "ERROR", "thread": "main", "logger": "MyApp", "file": "", "message": ": Hello" }</div>
</CodeRunner>

:::

::: details 查看代码

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

使用 `formatLoggerFromStream` 函数从 stream 进行格式化。

功能概述和限制：

- 使用案例：实时处理大型日志、内存受限的环境
- 限制：需要生成器语法，无需并行处理
- 资源使用率：低，内存效率高

::: raw

<CodeRunner title="formatLoggerFromStream">
    <ShadcnText>转换响应:</ShadcnText>
    <div>[ { "timestamp": "2024-12-04 23:14:27,765", "level": "INFO", "thread": "main", "logger": "io.edurt.datacap.service.initializer.InitializerConfigure", "file": "InitializerConfigure.java:100", "message": "Datacap registration enable: true" }, { "timestamp": "2024-12-04 23:14:28,225", "level": "WARN", "thread": "main", "logger": "io.edurt.datacap.plugin.utils.PluginPathUtils", "file": "PluginPathUtils.java:136", "message": "Could not find project root, using fallback: /Users/shicheng/Desktop/tests/datacap-2024.4.0-SNAPSHOT" } ]</div>
</CodeRunner>

:::

::: details 查看代码

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

## 选型指南

- 单个日志 → `formatLogger`
- 特殊格式学习 → `formatFromExample`
- 大日志/内存敏感→ `formatLoggerFromStream`
- 中等对数量/快速处理 → `formatMultipleLines`