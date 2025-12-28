<template>
  <div :class="['min-h-screen px-6 pb-6', isDark ? 'bg-gray-900' : 'bg-white']">
    <ShadcnButton @click="isDark = !isDark" :dark="isDark" class="mt-2">
      切换暗黑模式
    </ShadcnButton>

    <div class="space-y-6 mt-6">
      <div>
        <h3 :class="['text-lg font-semibold mb-4', isDark ? 'text-gray-200' : '']">ShadcnTable - 液态玻璃效果</h3>
        <div :class="['p-6 rounded-lg', isDark ? 'bg-gradient-to-r from-blue-900 to-purple-900' : 'bg-gradient-to-r from-blue-400 to-purple-400']">
          <div :class="['p-8 rounded-lg', isDark ? 'bg-gray-800/50' : 'bg-white/50']">
            <ShadcnTable
              :columns="columns"
              :data="tableData"
              glass
              :dark="isDark"
              border
              stripe
              width="100%"
              min-height="400"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { ShadcnButton } from "@/ui/button";
import { ShadcnTable } from "@/ui/table";

const isDark = ref(false)

const columns = [
  { label: 'Name', key: 'name', width: 150 },
  { label: 'Email', key: 'email', width: 200 },
  { label: 'Role', key: 'role', width: 120 },
  { label: 'Status', key: 'status', width: 100 },
  { label: 'Action', key: 'action', width: 150 }
]

const tableData = [
  { name: 'John Doe', email: 'john@example.com', role: 'Admin', status: 'Active', action: 'Edit' },
  { name: 'Jane Smith', email: 'jane@example.com', role: 'User', status: 'Active', action: 'Edit' },
  { name: 'Bob Johnson', email: 'bob@example.com', role: 'User', status: 'Inactive', action: 'Edit' },
  { name: 'Alice Williams', email: 'alice@example.com', role: 'Manager', status: 'Active', action: 'Edit' },
  { name: 'Charlie Brown', email: 'charlie@example.com', role: 'User', status: 'Active', action: 'Edit' },
  { name: 'David Lee', email: 'david@example.com', role: 'Admin', status: 'Inactive', action: 'Edit' },
  { name: 'Emma Davis', email: 'emma@example.com', role: 'User', status: 'Active', action: 'Edit' },
  { name: 'Frank Miller', email: 'frank@example.com', role: 'Manager', status: 'Active', action: 'Edit' }
]
</script>
