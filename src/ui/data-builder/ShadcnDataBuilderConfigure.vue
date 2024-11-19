<template>
  <div class="bg-white border-l border-gray-200 py-4 pl-4 select-none" :style="{ width: calcSize(width) }">
    <div class="text-sm font-medium mb-2">配置中心</div>
    <ShadcnTab direction="vertical" position="right">
      <template v-if="selectedComponent">
        <ShadcnTabItem label="基本配置" value="basic_configure">
          <div class="space-y-4">
            <!-- 位置配置 -->
            <!-- Position configuration -->
            <div class="space-y-2">
              <div class="text-sm font-medium text-gray-600">位置</div>
              <div class="grid grid-cols-2 gap-2">
                <div>
                  <div class="text-xs text-gray-500 mb-1">X 坐标</div>
                  <ShadcnNumber v-model="componentConfig.x"
                                :min="0"
                                :max="maxX"
                                @on-change="onPositionUpdate"/>
                </div>
                <div>
                  <div class="text-xs text-gray-500 mb-1">Y 坐标</div>
                  <ShadcnNumber v-model="componentConfig.y"
                                :min="0"
                                :max="maxY"
                                @on-change="onPositionUpdate"/>
                </div>
              </div>
            </div>

            <!-- 大小配置 -->
            <!-- Size configuration -->
            <div class="space-y-2">
              <div class="text-sm font-medium text-gray-600">大小</div>
              <div class="grid grid-cols-2 gap-2">
                <div>
                  <div class="text-xs text-gray-500 mb-1">宽度</div>
                  <ShadcnNumber v-model="componentConfig.width"
                                :min="minWidth"
                                :max="maxWidth"
                                @on-change="onSizeUpdate"/>
                </div>
                <div>
                  <div class="text-xs text-gray-500 mb-1">高度</div>
                  <ShadcnNumber v-model="componentConfig.height"
                                :min="minHeight"
                                :max="maxHeight"
                                @on-change="onSizeUpdate"/>
                </div>
              </div>
            </div>
          </div>
        </ShadcnTabItem>

        <ShadcnTabItem v-if="selectedComponent.configure"
                       v-for="configure in selectedComponent.configure"
                       :key="configure.group"
                       :label="configure.group"
                       :value="`${configure.group}_configure`">
          <ShadcnFormItem v-for="item in configure.items"
                          class="my-4"
                          :key="item.label"
                          :name="item.label"
                          :description="item.description"
                          :label="item.label">
            <ShadcnNumber v-if="item.type === 'number'"
                          v-model="item.value"
                          :disabled="item.disabled"
                          :name="item.label"
                          :placeholder="item.placeholder"
                          :max="item.max"
                          :clearable="item.clearable"
                          :min="item.min"
                          @on-change="onPositionUpdate"/>

            <ShadcnInput v-else-if="item.type === 'textarea'"
                         v-model="item.value"
                         type="textarea"
                         :disabled="item.disabled"
                         :word-count="item.wordCount"
                         :max-count="item.maxCount"
                         :placeholder="item.placeholder"
                         :name="item.label"
                         @on-change="onPositionUpdate"/>

            <ShadcnInput v-else-if="item.type === 'password'"
                         v-model="item.value"
                         type="password"
                         :disabled="item.disabled"
                         :placeholder="item.placeholder"
                         :name="item.label"
                         @on-change="onPositionUpdate"/>

            <ShadcnSwitch v-else-if="item.type === 'switch'"
                          v-model="item.value"
                          :disabled="item.disabled"
                          :true-value="item.trueValue"
                          :false-value="item.falseValue"
                          :name="item.label"
                          @on-change="onPositionUpdate"/>

            <ShadcnRadioGroup v-else-if="item.type === 'radio'" v-model="item.value" @on-change="onPositionUpdate">
              <ShadcnRadio v-for="option in item.options"
                           :key="option"
                           :value="option.value"
                           :disabled="option.disabled">
                {{ option.label }}
              </ShadcnRadio>
            </ShadcnRadioGroup>

            <ShadcnCheckboxGroup v-else-if="item.type === 'checkbox'" v-model="item.value" @on-change="onPositionUpdate">
              <ShadcnCheckbox v-for="option in item.options"
                              :key="option"
                              :value="option.value"
                              :disabled="option.disabled">
                {{ option.label }}
              </ShadcnCheckbox>
            </ShadcnCheckboxGroup>

            <ShadcnSelect v-else-if="item.type === 'select'" v-model="item.value"
                          :disabled="item.disabled"
                          :placeholder="item.placeholder"
                          :name="item.label"
                          @on-change="onPositionUpdate">
              <template #options>
                <ShadcnSelectOption v-for="option in item.options"
                                    :key="option.value"
                                    :disabled="option.disabled"
                                    :label="option.label"
                                    :value="option.value"/>
              </template>
            </ShadcnSelect>

            <ShadcnSlider v-else-if="item.type === 'slider'"
                          v-model="item.value"
                          :disabled="item.disabled"
                          :max="item.max"
                          :min="item.min"
                          :show-step="item.showStep"
                          :show-tip="item.showTip"
                          :step="item.step"
                          @on-change="onPositionUpdate"/>

            <ShadcnRate v-else-if="item.type === 'rate'"
                        v-model="item.value"
                        :disabled="item.disabled"
                        :max="item.max"
                        :min="item.min"
                        :allow-half="item.allowHalf"
                        :show-text="item.showText"
                        @on-change="onPositionUpdate"/>

            <ShadcnInput v-else
                         v-model="item.value"
                         :disabled="item.disabled"
                         :placeholder="item.placeholder"
                         :name="item.label"
                         @on-change="onPositionUpdate"/>
          </ShadcnFormItem>
        </ShadcnTabItem>
      </template>

      <div v-else>
        <ShadcnTabItem label="基本配置" value="basic_configure">
          <!-- 画布样式配置部分 -->
          <!-- Canvas style configuration section -->
          <div class="space-y-4">
            <div class="text-sm font-medium text-gray-600">画布样式</div>

            <!-- 背景颜色 -->
            <!-- Background color -->
            <div class="space-y-2">
              <div class="text-xs text-gray-500">背景颜色</div>
              <div class="flex items-center space-x-2">
                <div>
                  <input type="color"
                         class="p-0 border border-gray-200 rounded cursor-pointer"
                         v-model="canvasConfig.backgroundColor"
                         @change="onCanvasStyleUpdate">
                </div>
                <div class="flex-1 text-sm">
                  <ShadcnInput v-model="canvasConfig.backgroundColor" size="small" @on-change="onCanvasStyleUpdate"/>
                </div>
              </div>
            </div>

            <!-- 背景图片 -->
            <!-- Background image -->
            <div class="space-y-2">
              <div class="text-xs text-gray-500">背景图片URL</div>
              <ShadcnInput v-model="canvasConfig.backgroundImage" placeholder="输入图片URL" @on-change="onCanvasStyleUpdate"/>
            </div>

            <!-- 透明度 -->
            <!-- Transparency -->
            <div class="space-y-2">
              <div class="text-xs text-gray-500">透明度</div>
              <div class="flex items-center space-x-2">
                <ShadcnSlider v-model="canvasConfig.opacity"
                              min="0"
                              max="1"
                              step="0.1"
                              @on-change="onCanvasStyleUpdate"/>
                <span class="text-xs text-right">{{ Math.round(canvasConfig.opacity * 100) }}%</span>
              </div>
            </div>
          </div>
        </ShadcnTabItem>
      </div>
    </ShadcnTab>
  </div>
</template>

<script setup lang="ts">
import { computed, ref, watch } from 'vue'
import { ShadcnDataBuilderConfigureProps } from './types'
import { calcSize } from '@/utils/common.ts'

const emit = defineEmits(['update'])
const props = withDefaults(defineProps<ShadcnDataBuilderConfigureProps>(), {
  width: 200,
  selectedComponent: undefined,
  canvasWidth: 1920,
  canvasHeight: 1080,
  gridSize: 20,
  snapToGrid: true,
  canvasStyle: {
    backgroundColor: '#ffffff',
    backgroundImage: '',
    opacity: 1
  } as any
})

// 组件配置
// Component configuration
const componentConfig = ref({
  x: 0,
  y: 0,
  width: 0,
  height: 0
})

// 计算最大和最小边界
// Calculate maximum and minimum boundaries
const minWidth = computed(() => props.gridSize)
const minHeight = computed(() => props.gridSize)
const maxWidth = computed(() => props.canvasWidth)
const maxHeight = computed(() => props.canvasHeight)
const maxX = computed(() => props.canvasWidth - componentConfig.value.width)
const maxY = computed(() => props.canvasHeight - componentConfig.value.height)

// 画布配置
// Canvas configuration
const canvasConfig = ref({
  backgroundColor: props.canvasStyle?.backgroundColor || '#ffffff',
  backgroundImage: props.canvasStyle?.backgroundImage || '',
  opacity: props.canvasStyle?.opacity ?? 1
})

// 监听选中组件变化
// Watch selected component changes
watch(() => props.selectedComponent, (newVal) => {
  if (newVal) {
    componentConfig.value = {
      x: newVal.x,
      y: newVal.y,
      width: newVal.width,
      height: newVal.height
    }
  }
}, { deep: true })

// 约束坐标值
// Constrain coordinate values
const constrainPosition = (value, min, max) => {
  return Math.min(Math.max(parseInt(value) || 0, min), max)
}

// 约束尺寸值
// Constrain size values
const constrainSize = (value, min, max) => {
  return Math.min(Math.max(parseInt(value) || min, min), max)
}

// 更新位置
// Update position
const onPositionUpdate = () => {
  if (!props.selectedComponent) {
    return
  }

  const updatedConfig = {
    ...componentConfig.value,
    x: constrainPosition(componentConfig.value.x, 0, maxX.value),
    y: constrainPosition(componentConfig.value.y, 0, maxY.value)
  }

  componentConfig.value = updatedConfig
  emit('update', {
    ...props.selectedComponent,
    ...updatedConfig
  })
}

// 更新尺寸
// Update size
const onSizeUpdate = () => {
  if (!props.selectedComponent) {
    return
  }

  const updatedConfig = {
    ...componentConfig.value,
    width: constrainSize(componentConfig.value.width, minWidth.value, maxWidth.value),
    height: constrainSize(componentConfig.value.height, minHeight.value, maxHeight.value)
  }

  // 如果新的尺寸导致组件超出画布,调整位置
  // If the new size causes the component to exceed the canvas, adjust the position
  if (updatedConfig.x + updatedConfig.width > props.canvasWidth) {
    updatedConfig.x = props.canvasWidth - updatedConfig.width
  }
  if (updatedConfig.y + updatedConfig.height > props.canvasHeight) {
    updatedConfig.y = props.canvasHeight - updatedConfig.height
  }

  componentConfig.value = updatedConfig
  emit('update', {
    ...props.selectedComponent,
    ...updatedConfig
  })
}

// 处理画布样式
// Handle canvas style
const onCanvasStyleUpdate = () => {
  emit('update', {
    type: 'canvas-style',
    data: { ...canvasConfig.value }
  })
}
</script>
