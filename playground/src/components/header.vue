<template>
  <header class="border-b border-gray-200">
    <div class="container mx-auto px-4 h-16">
      <div class="flex items-center justify-between h-full">
        <!-- Logo and Title Section -->
        <div class="flex items-center space-x-4">
          <div class="flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg"
                 viewBox="0 0 24 24"
                 fill="none"
                 stroke="currentColor"
                 class="w-6 h-6 mr-2">
              <path stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M13 10V3L4 14h7v7l9-11h-7z"/>
            </svg>
            <h1 class="text-xl font-semibold text-gray-900">{{ title }}</h1>
          </div>
        </div>

        <!-- Select and Actions Section -->
        <div class="flex items-center space-x-4">
          <ShadcnSelect :model-value="modelValue"
                        @update:model-value="$emit('update:modelValue', $event)"
                        style="min-width: 200px"
                        placeholder="Choose example">
            <template #options>
              <ShadcnSelectGroup v-if="ungroupedExamples.length > 0"
                                 label="General">
                <ShadcnSelectOption v-for="example in ungroupedExamples"
                                    :key="example.key"
                                    :label="example.label"
                                    :value="example.key"/>
              </ShadcnSelectGroup>

              <template v-for="(groupExamples, groupName) in groupedExamples"
                        :key="groupName">
                <ShadcnSelectGroup :label="groupName">
                  <ShadcnSelectOption v-for="example in groupExamples"
                                      :key="example.key"
                                      :label="example.label"
                                      :value="example.key"/>
                </ShadcnSelectGroup>
              </template>
            </template>
          </ShadcnSelect>

          <div class="flex items-center space-x-2">
            <ShadcnTooltip content="New Example" position="bottom">
              <a href="https://github.com/devlive-community/view-shadcn-ui/issues/new" target="_blank">
                <ShadcnButton circle type="text">
                  <ShadcnIcon icon="Plus" size="18" class="text-black"/>
                </ShadcnButton>
              </a>
            </ShadcnTooltip>

            <button class="px-3 py-2 text-sm font-medium text-gray-700 hover:text-gray-900"
                    @click="$emit('onMore')">
              <svg xmlns="http://www.w3.org/2000/svg"
                   class="w-5 h-5"
                   viewBox="0 0 24 24"
                   fill="none"
                   stroke="currentColor">
                <path stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"/>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{
  modelValue: string
  title: string
  examples: any[]
}>()

defineEmits<{
  'update:modelValue': [value: string]
  'onMore': []
}>()

const ungroupedExamples = computed(() =>
    props.examples.filter(example => !example.group)
)

const groupedExamples = computed(() => {
  return props.examples
              .filter(example => example.group)
              .reduce((groups, example) => {
                if (!example.group) {
                  return groups
                }

                if (!groups[example.group]) {
                  groups[example.group] = []
                }
                groups[example.group].push(example)
                return groups
              }, {} as Record<string, any[]>)
})
</script>