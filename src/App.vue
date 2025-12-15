<template>
  <div :class="['min-h-screen p-6 pb-32', isDark ? 'bg-gray-900' : 'bg-white']">
    <ShadcnButton @click="isDark = !isDark" :dark="isDark">
      切换暗黑模式
    </ShadcnButton>

    <div class="space-y-6 my-6" style="height: 100vh;">
      <div>
        <h3 :class="['text-lg font-semibold mb-4', isDark ? 'text-gray-200' : '']">ShadcnCollapse - 液态玻璃效果</h3>
        <div class="space-y-6">
          <div :class="['p-6 rounded-lg', isDark ? 'bg-gradient-to-r from-blue-900 to-indigo-900' : 'bg-gradient-to-r from-blue-400 to-indigo-400']">
            <ShadcnCollapse glass :dark="isDark" v-model="expandedItems">
              <ShadcnCollapseItem title="Section 1" name="1">
                Content for section 1
              </ShadcnCollapseItem>
              <ShadcnCollapseItem title="Section 2" name="2">
                Content for section 2
              </ShadcnCollapseItem>
              <ShadcnCollapseItem title="Section 3" name="3">
                Content for section 3
              </ShadcnCollapseItem>
            </ShadcnCollapse>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { ShadcnButton } from "@/ui/button";
import { ShadcnCollapse, ShadcnCollapseItem } from "@/ui/collapse";

const isDark = ref(false)
const expandedItems = ref<string[]>(['1'])
</script>