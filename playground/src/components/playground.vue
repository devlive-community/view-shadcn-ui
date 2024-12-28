<template>
  <PlaygroundHeader v-model="example"
                    :examples="examples"
                    title="View Shadcn UI Playground"
                    @on-more="handleMore"/>

  <div class="flex justify-between space-x-1 bg-white flex-1">
    <div class="w-1/2">
      <div class="flex justify-between items-center">
        <ShadcnCodeEditor v-model="value"
                          height="calc(100vh - 64px)"
                          :config="{
                              automaticLayout: true,
                              minimap: {
                                enabled: false
                              },
                              language: 'html',
                              theme: 'vs-dark',
                              fontSize: 16
                          }"
                          :context-menu-config="{
                              showDefaultItems: true,
                              items: [{
                                label: 'Format Code',
                                icon: 'Save',
                                action: ({ editor, selection}) => {
                                  console.log(editor.getModel()?.getValueInRange(selection))
                                }
                              }]
                          }"
                          @on-change="onChange">
        </ShadcnCodeEditor>
      </div>
    </div>

    <div class="w-1/2">
      <div class="flex flex-col" style="height: calc(100vh - 64px)">
        <div class="w-full rounded-md p-4">
          <div v-if="error" class="text-red-500 whitespace-pre-wrap font-mono mx-auto">
            <div v-for="(line, index) in error.split('\n')" class="space-y-4" :key="line">
              <div v-if="index === 0 || index === error.split('\n').length - 1"
                   class="text-sm"
                   v-html="line"/>
              <div v-else
                   class="text-sm bg-white p-2 rounded border border-red-200 overflow-x-auto font-mono my-2"
                   v-html="line"/>
            </div>
          </div>

          <div v-else>
            <component :is="compiledComponent" v-if="compiledComponent"/>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref, shallowRef, watch } from 'vue'
import PlaygroundHeader from './header.vue'
// @ts-ignore
import { compileVueCode } from '@/utils/compiler'
// @ts-ignore
import examples from 'virtual:examples'

const value = ref('')
const error = ref(null)
const example = ref('default')
const compiledComponent = shallowRef(null)

const onExampleChange = (_value: string) => {
  const example = examples.find((example: { key: string }) => example.key === _value)
  if (example) {
    value.value = example.content
  }
}

const onChange = async () => {
  try {
    error.value = null
    const result = await compileVueCode(value.value)
    compiledComponent.value = result
  }
  catch (err) {
    error.value = err.message
  }
}

const handleMore = () => {
  console.log('More clicked')
}

watch(example, onExampleChange, { immediate: true })

onMounted(() => {
  onChange()
})
</script>