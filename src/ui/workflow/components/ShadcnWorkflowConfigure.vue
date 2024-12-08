<template>
  <div class="py-4 pl-4">
    <div v-if="selectedNode" class="space-y-4">
      <h3 class="text-lg font-medium">{{ t('dataBuilder.text.configureCenter') }}</h3>

      <ShadcnTab v-model="activeTab" direction="vertical" position="right">
        <ShadcnTabItem :label="String(t('workflow.text.nodeConfigure'))" value="basic">
          <ShadcnRow :gutter="10">
            <ShadcnCol span="12">
              <ShadcnFormItem :label="String(t('workflow.text.nodeId'))" name="nodeId">
                <ShadcnInput v-model="selectedNode.id" disabled/>
              </ShadcnFormItem>
            </ShadcnCol>

            <!-- Position configuration -->
            <ShadcnCol class="my-2" span="6">
              <ShadcnFormItem :label="String(t('dataBuilder.text.xCoordinate'))" name="x">
                <ShadcnNumber v-model="componentConfig.position.x" :min="0"
                              @on-change="onPositionUpdate"/>
              </ShadcnFormItem>
            </ShadcnCol>

            <ShadcnCol class="my-2" span="6">
              <ShadcnFormItem :label="String(t('dataBuilder.text.yCoordinate'))" name="y">
                <ShadcnNumber v-model="componentConfig.position.y" :min="0"
                              @on-change="onPositionUpdate"/>
              </ShadcnFormItem>
            </ShadcnCol>
          </ShadcnRow>
        </ShadcnTabItem>

        <template v-if="hasConfiguration">
          <ShadcnTabItem class="space-y-3" :label="String(t('workflow.text.dataConfigure'))" value="configure">
            <div class="space-y-1.5" v-for="item in selectedNode.configure" :key="item.label">
              <div class="flex items-center justify-between">
                <span>{{ item.label }}</span>

                <span v-if="item.description" class="cursor-pointer">
                  <ShadcnTooltip :content="item.description">
                    <ShadcnIcon icon="CircleHelp" size="18"/>
                  </ShadcnTooltip>
                </span>
              </div>

              <ShadcnNumber v-if="item.type === 'number'"
                            v-model="item.value"
                            :clearable="item.clearable"
                            :disabled="item.disabled"
                            :max="item.max"
                            :min="item.min"
                            :name="item.label"
                            :placeholder="item.placeholder"
                            @on-change="() => {
                              validateField(item)
                              onPositionUpdate()
                           }"
                            :class="{ 'border-red-500': !validationState[item.field]?.valid }"/>

              <ShadcnInput v-else-if="item.type === 'textarea'"
                           v-model="item.value"
                           :disabled="item.disabled"
                           :max-count="item.maxCount"
                           :name="item.label"
                           :placeholder="item.placeholder"
                           :word-count="item.wordCount"
                           type="textarea"
                           @on-change="() => {
                              validateField(item)
                              onPositionUpdate()
                           }"
                           :class="{ 'border-red-500': !validationState[item.field]?.valid }"/>

              <ShadcnInput v-else-if="item.type === 'password'"
                           v-model="item.value"
                           :disabled="item.disabled"
                           :name="item.label"
                           :placeholder="item.placeholder"
                           type="password"
                           @on-change="() => {
                              validateField(item)
                              onPositionUpdate()
                           }"
                           :class="{ 'border-red-500': !validationState[item.field]?.valid }"/>

              <ShadcnSwitch v-else-if="item.type === 'switch'"
                            v-model="item.value"
                            :disabled="item.disabled"
                            :false-value="item.falseValue"
                            :name="item.label"
                            :true-value="item.trueValue"
                            @on-change="() => {
                              validateField(item)
                              onPositionUpdate()
                           }"
                            :class="{ 'border-red-500': !validationState[item.field]?.valid }"/>

              <ShadcnRadioGroup v-else-if="item.type === 'radio'"
                                v-model="item.value"
                                @on-change="() => {
                                    validateField(item)
                                    onPositionUpdate()
                                }"
                                :class="{ 'border-red-500': !validationState[item.field]?.valid }">
                <ShadcnRadio v-for="option in item.options"
                             :key="option"
                             :disabled="option.disabled"
                             :value="option.value">
                  {{ option.label }}
                </ShadcnRadio>
              </ShadcnRadioGroup>

              <ShadcnCheckboxGroup v-else-if="item.type === 'checkbox'"
                                   v-model="item.value"
                                   @on-change="() => {
                                      validateField(item)
                                      onPositionUpdate()
                                   }"
                                   :class="{ 'border-red-500': !validationState[item.field]?.valid }">
                <ShadcnCheckbox v-for="option in item.options"
                                :key="option"
                                :disabled="option.disabled"
                                :value="option.value">
                  {{ option.label }}
                </ShadcnCheckbox>
              </ShadcnCheckboxGroup>

              <ShadcnSelect v-else-if="item.type === 'select'" v-model="item.value"
                            :disabled="item.disabled"
                            :name="item.label"
                            :placeholder="item.placeholder"
                            @on-change="() => {
                                validateField(item)
                                onPositionUpdate()
                           }"
                            :class="{ 'border-red-500': !validationState[item.field]?.valid }">
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
                            @on-change="() => {
                              validateField(item)
                              onPositionUpdate()
                           }"
                            :class="{ 'border-red-500': !validationState[item.field]?.valid }"/>

              <ShadcnRate v-else-if="item.type === 'rate'"
                          v-model="item.value"
                          :allow-half="item.allowHalf"
                          :disabled="item.disabled"
                          :max="item.max"
                          :min="item.min"
                          :show-text="item.showText"
                          @on-change="() => {
                              validateField(item)
                              onPositionUpdate()
                           }"
                          :class="{ 'border-red-500': !validationState[item.field]?.valid }"/>

              <ShadcnInput v-else
                           v-model="item.value"
                           :disabled="item.disabled"
                           :name="item.label"
                           :placeholder="item.placeholder"
                           @on-change="() => {
                              validateField(item)
                              onPositionUpdate()
                           }"
                           :class="{ 'border-red-500': !validationState[item.field]?.valid }"/>

              <span v-if="!validationState[item.field]?.valid" class="text-red-400 text-xs">
                {{ validationState[item.field].message }}
              </span>
            </div>
          </ShadcnTabItem>
        </template>
      </ShadcnTab>
    </div>

    <div v-else class="text-center text-gray-500">
      {{ t('workflow.placeholder.selectNode') }}
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, ref, watch } from 'vue'
import { t } from '@/utils/locale'
import { WorkflowConfigureEmits, WorkflowConfigureProps } from '../types'

const emit = defineEmits<WorkflowConfigureEmits>()
const props = defineProps<WorkflowConfigureProps>()

const nodeData = ref('')
const activeTab = ref('basic')
const componentConfig = ref({
  position: {
    x: 0,
    y: 0
  }
})
const hasConfiguration = computed(() => {
  return Boolean(props.selectedNode?.configure?.length)
})

const validationState = ref<Record<string, { valid: boolean; message: string }>>({})
const validateField = (item: any) => {
  const rules = [
    // 如果已经在 rules 中配置了 required 规则，就不需要添加默认的
    // If the required rule is already configured in the rules, do not add the default
    ...(item.required && !item.rules?.some(rule => rule.required)
        ? [{ required: true, message: t('workflow.validated.required') }]
        : []),
    ...(item.rules || [])
  ]

  let valid = true
  let message = ''

  // 检查所有规则
  // Check all rules
  for (const rule of rules) {
    if (rule.required && !item.value) {
      valid = false
      message = rule.message
      break
    }
  }

  // 更新验证状态
  // Update validation state
  validationState.value[item.field] = { valid, message }

  item.validated = { valid, message }
}

watch(() => props.selectedNode?.configure, (configure) => {
  if (configure) {
    configure.forEach(item => {
      validateField(item)
    })
  }
}, { immediate: true })

watch(() => props.selectedNode, (node) => {
  if (node) {
    nodeData.value = JSON.stringify(node.data, null, 2)

    componentConfig.value = {
      position: {
        x: node.position?.x || 0,
        y: node.position?.y || 0
      }
    }
  }
  else {
    nodeData.value = ''
  }
}, { immediate: true })

const constrainPosition = (value: number, min: number, max: number) => {
  return Math.min(Math.max(parseInt(value.toString()) || 0, min), max)
}

const onPositionUpdate = () => {
  if (!props.selectedNode) {
    return
  }

  const position = {
    x: constrainPosition(componentConfig.value.position.x, 0, 1920),
    y: constrainPosition(componentConfig.value.position.y, 0, 1080)
  }

  const data = props.selectedNode?.configure?.map(item => ({
    [item.field]: item.value
  })) || []

  componentConfig.value.position = position
  emit('update:node', {
    ...props.selectedNode,
    position,
    data
  })
}
</script>
