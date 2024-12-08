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
          <ShadcnTabItem :label="String(t('workflow.text.dataConfigure'))" value="configure">
            <ShadcnFormItem v-for="item in selectedNode.configure"
                            :key="item.label"
                            :description="item.description"
                            :label="item.label"
                            :name="item.label"
                            class="my-4">
              <ShadcnNumber v-if="item.type === 'number'"
                            v-model="item.value"
                            :clearable="item.clearable"
                            :disabled="item.disabled"
                            :max="item.max"
                            :min="item.min"
                            :name="item.label"
                            :placeholder="item.placeholder"
                            @on-change="onPositionUpdate"/>

              <ShadcnInput v-else-if="item.type === 'textarea'"
                           v-model="item.value"
                           :disabled="item.disabled"
                           :max-count="item.maxCount"
                           :name="item.label"
                           :placeholder="item.placeholder"
                           :word-count="item.wordCount"
                           type="textarea"
                           @on-change="onPositionUpdate"/>

              <ShadcnInput v-else-if="item.type === 'password'"
                           v-model="item.value"
                           :disabled="item.disabled"
                           :name="item.label"
                           :placeholder="item.placeholder"
                           type="password"
                           @on-change="onPositionUpdate"/>

              <ShadcnSwitch v-else-if="item.type === 'switch'"
                            v-model="item.value"
                            :disabled="item.disabled"
                            :false-value="item.falseValue"
                            :name="item.label"
                            :true-value="item.trueValue"
                            @on-change="onPositionUpdate"/>

              <ShadcnRadioGroup v-else-if="item.type === 'radio'" v-model="item.value" @on-change="onPositionUpdate">
                <ShadcnRadio v-for="option in item.options"
                             :key="option"
                             :disabled="option.disabled"
                             :value="option.value">
                  {{ option.label }}
                </ShadcnRadio>
              </ShadcnRadioGroup>

              <ShadcnCheckboxGroup v-else-if="item.type === 'checkbox'" v-model="item.value" @on-change="onPositionUpdate">
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
                          :allow-half="item.allowHalf"
                          :disabled="item.disabled"
                          :max="item.max"
                          :min="item.min"
                          :show-text="item.showText"
                          @on-change="onPositionUpdate"/>

              <ShadcnInput v-else
                           v-model="item.value"
                           :disabled="item.disabled"
                           :name="item.label"
                           :placeholder="item.placeholder"
                           @on-change="onPositionUpdate"/>
            </ShadcnFormItem>
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
