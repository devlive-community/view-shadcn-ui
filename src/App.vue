<template>
  <div class="p-32 space-y-7">
    {{value}}
    <ShadcnMention v-model="value"
                   :items="items"
                   placeholder="Type your message with @ to mention"
                   @on-select="handleSelect"
                   @on-search="handleSearch"
                   @on-change="handleChange">
    </ShadcnMention>

    <ShadcnMention :items="items" size="small" />
    <ShadcnMention :items="items" size="default" />
    <ShadcnMention :items="items" size="large" />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const value = ref([1, 2, 3])

const items = ref([
  { id: 1, name: 'John Doe' },
  { id: 2, name: 'Jane Smith' },
  { id: 3, name: 'Bob Johnson' },
  { id: 4, name: 'Alice Brown' },
  { id: 5, name: 'Charlie Davis' },
  { id: 6, name: 'Eve Wilson' },
  { id: 7, name: 'Frank Miller' },
  { id: 8, name: 'Grace Anderson' },
  { id: 9, name: 'Hank Thomas' }
])

const handleSelect = (user: { id: string | number; name: string }) => {
  console.log('Selected user:', user)
}

const handleSearch = (query: string) => {
  console.log('Search query:', query)
  // You can implement API calls here to fetch suggestions
}

const handleChange = (text: string) => {
  console.log('Content changed:', text)
}
</script>