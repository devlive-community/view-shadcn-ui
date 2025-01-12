<template>
  <tbody>
  <tr v-for="(row, index) in data"
      :key="index"
      :class="[ 'border-b hover:bg-gray-50',
        BaseSize[size]
      ]">
    <td v-for="col in columns"
        :key="col.key"
        :style="col.width ? { width: calcSize(col.width) } : {}"
        :class="[ TablePaddingSize[size],
          `text-${col.align || 'left'}`,
          col.ellipsis !== false ? 'relative max-w-lg truncate whitespace-nowrap overflow-hidden' : 'break-words whitespace-normal'
        ]"
        @mousemove.stop.prevent="(col.ellipsis !== false && col.tooltip) && showTooltip($event, row[col.key])"
        @mouseleave.stop.prevent="hideTooltip">
      {{ row[col.key] }}
    </td>
  </tr>
  </tbody>
</template>

<script setup lang="ts">
import { DataTableProps } from '../types'
import { BaseSize } from '@/ui/common/size.ts'
import { TablePaddingSize } from '@/ui/data-table/size.ts'
import { calcSize } from '@/utils/common.ts'
import { onBeforeUnmount, onMounted } from 'vue'

withDefaults(defineProps<DataTableProps>(), {
  size: 'default'
})

let tooltipEl: HTMLElement | null = null

// 创建 tooltip 元素
onMounted(() => {
  tooltipEl = document.createElement('div')
  tooltipEl.className = 'hidden fixed z-50 bg-gray-800 text-white text-sm rounded-lg py-2 px-3 max-w-xs whitespace-normal'
  document.body.appendChild(tooltipEl)
})

// 清理 tooltip 元素
onBeforeUnmount(() => {
  tooltipEl?.remove()
})

// 显示 tooltip
const showTooltip = (event: MouseEvent, content: string) => {
  if (!tooltipEl) {
    return
  }

  tooltipEl.textContent = content
  tooltipEl.className = 'fixed z-50 bg-gray-800 text-white text-sm rounded-lg py-2 px-3 max-w-xs whitespace-normal'

  const tooltipRect = tooltipEl.getBoundingClientRect()

  // 计算位置，使 tooltip 在鼠标位置居中并默认显示在上方
  let left = event.clientX - (tooltipRect.width / 2)
  let top = event.clientY - tooltipRect.height - 12 // 默认在鼠标上方，留出 12px 间距

  // 检查右边界
  if (left + tooltipRect.width > window.innerWidth) {
    left = window.innerWidth - tooltipRect.width - 8
  }
  // 检查左边界
  if (left < 8) {
    left = 8
  }

  // 如果上方空间不足，则显示在下方
  if (top < 8) {
    top = event.clientY + 12 // 显示在鼠标下方
  }

  tooltipEl!.style.left = `${ left }px`
  tooltipEl!.style.top = `${ top }px`
}

// 隐藏 tooltip
const hideTooltip = () => {
  if (tooltipEl) {
    tooltipEl.className = 'hidden fixed z-50 bg-gray-800 text-white text-sm rounded-lg py-2 px-3 max-w-xs whitespace-normal'
  }
}
</script>