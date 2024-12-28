<template>
  <div class="bg-white h-56 flex items-center justify-center">
    <h1 class="text-2xl font-bold mb-2">View Shadcn UI Playground</h1>
  </div>

  <div class="flex justify-between space-x-1 bg-white">
    <div class="w-1/2">
      <div class="flex justify-between items-center mb-4">
        <ShadcnCodeEditor v-model="value"
                          height="calc(100vh - 50px)"
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
      <div class="flex flex-col" style="height: calc(100vh - 96px)">
        <div class="w-full h-96 rounded-md p-4 overflow-auto">

          <div v-if="error" class="text-red-500 whitespace-pre-wrap font-mono mx-auto">
            <div v-for="(line, index) in error.split('\n')" class="space-y-4" :key="line">
              <div v-if="index === 0 || index === error.split('\n').length - 1" class="text-sm" v-html="line"></div>
              <div v-else class="text-sm bg-white p-2 rounded border border-red-200 overflow-x-auto font-mono my-2" v-html="line"></div>
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
import { onMounted, ref, shallowRef } from 'vue'
import { compileVueCode } from '@/utils/compiler'

const defaultCode = `<template>
  <ShadcnButton @click="onClick('Hello World')">Hello World</ShadcnButton>
</template>

<script setup lang="ts">
const onClick = (value) => {
  alert(value)
}
<\/script>`

const value = ref(defaultCode)
const error = ref(null)
const compiledComponent = shallowRef(null)

const copyCode = () => {
  navigator.clipboard.writeText(code.value)
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

onMounted(() => {
  onChange()
})
</script>