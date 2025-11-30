<template>
  <div :class="['min-h-screen p-6', isDark ? 'bg-gray-900' : 'bg-white']">
    <ShadcnButton @click="isDark = !isDark" :dark="isDark">
      切换暗黑模式
    </ShadcnButton>

    <div class="space-y-6">
      <div>
        <h3 :class="['text-lg font-semibold mb-4', isDark ? 'text-gray-200' : '']">ShadcnCheckbox</h3>
        <ShadcnCheckbox v-model="checkboxValue1" value="option1" :dark="isDark">
          选项 1
        </ShadcnCheckbox>
        <ShadcnCheckbox v-model="checkboxValue2" value="option2" :dark="isDark" type="success">
          选项 2
        </ShadcnCheckbox>
        <ShadcnCheckbox v-model="checkboxValue3" value="option3" :dark="isDark" type="warning">
          选项 3
        </ShadcnCheckbox>
      </div>

      <div>
        <h3 :class="['text-lg font-semibold mb-4', isDark ? 'text-gray-200' : '']">ShadcnCheckboxGroup</h3>
        <ShadcnCheckboxGroup v-model="checkboxGroupValue" :dark="isDark">
          <ShadcnCheckbox value="apple">苹果</ShadcnCheckbox>
          <ShadcnCheckbox value="banana">香蕉</ShadcnCheckbox>
          <ShadcnCheckbox value="orange">橙子</ShadcnCheckbox>
        </ShadcnCheckboxGroup>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const isDark = ref(false)

const checkboxValue1 = ref(null)
const checkboxValue2 = ref(null)
const checkboxValue3 = ref(null)
const checkboxGroupValue = ref(['apple'])

const carouselItems = [
  { src: 'https://images.pexels.com/photos/33929657/pexels-photo-33929657.jpeg', text: 'Slide 1' },
  { src: 'https://images.pexels.com/photos/31571128/pexels-photo-31571128.jpeg', text: 'Slide 2' },
  { src: 'https://images.pexels.com/photos/27153650/pexels-photo-27153650.jpeg', text: 'Slide 3' }
]
</script>