<template>
  <div :class="['min-h-screen p-6', isDark ? 'bg-gray-900' : 'bg-white']">
    <ShadcnButton @click="isDark = !isDark" :dark="isDark">
      切换暗黑模式
    </ShadcnButton>

    <div class="space-y-6 my-6">
      <div>
        <h3 :class="['text-lg font-semibold mb-4', isDark ? 'text-gray-200' : '']">ShadcnCollapse</h3>
        <ShadcnCollapse v-model="collapseValue" :dark="isDark">
          <ShadcnCollapseItem title="Section 1" name="1">
            This is the content of section 1
          </ShadcnCollapseItem>
          <ShadcnCollapseItem title="Section 2" name="2">
            This is the content of section 2
          </ShadcnCollapseItem>
          <ShadcnCollapseItem title="Section 3" name="3">
            This is the content of section 3
          </ShadcnCollapseItem>
        </ShadcnCollapse>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const isDark = ref(false)

const codeValue = ref(`function hello() {\n  console.log('Hello World');\n}`)

const collapseValue = ref(['1'])
</script>