<template>
  <div class="p-32 space-y-7">
    <ShadcnForm v-model="formState">
      <ShadcnFormItem name="mentions" label="提及对象" :rules="[{ required: true, message: '请选择提及对象' }]">
        <ShadcnMention v-model="formState.mentions"
                       name="mentions"
                       :items="items"
                       :load-data="loadMoreData">
        </ShadcnMention>
      </ShadcnFormItem>
    </ShadcnForm>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const formState = ref({
  mentions: []
})

const items = ref([
  { id: 1, name: 'John Doe' },
  { id: 2, name: 'Jane Smith' },
  { id: 3, name: 'Bob Johnson', disabled: true },
  { id: 4, name: 'Alice Brown' },
  { id: 5, name: 'Charlie Davis' }
])

const currentPage = ref(1)

const loadMoreData = async (callback: (children: any[]) => void) => {
  try {
    const newItems = await fetchMoreItems(currentPage.value)
    items.value = [...items.value, ...newItems]
    callback(newItems)
    currentPage.value++
  }
  catch (error) {
    console.error('Failed to load more items:', error)
  }
}

const fetchMoreItems = async (page: number): Promise<any[]> => {
  await new Promise(resolve => setTimeout(resolve, 500))
  return Array.from({ length: 10 }, (_, i) => ({
    id: page * 10 + i,
    name: `User ${ page }-${ i }`
  }))
}
</script>