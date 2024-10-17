<template>
  <div class="flex w-full flex-col gap-4 md:gap-8 md:p-8 lg:grid lg:grid-cols-4">
    <ShadcnCard title="Basic Usage">
      <template #content>
        <div class="flex items-center justify-center space-x-2 h-32 p-3">
          <ShadcnRow>
            <ShadcnCol class="bg-blue-200 h-12"></ShadcnCol>
            <ShadcnCol class="bg-blue-300 h-12"></ShadcnCol>
            <ShadcnCol class="bg-blue-400 h-12"></ShadcnCol>
            <ShadcnCol class="bg-blue-500 h-12"></ShadcnCol>
          </ShadcnRow>
        </div>
      </template>
    </ShadcnCard>

    <ShadcnCard title="Gutter">
      <template #content>
        <div class="flex items-center justify-center space-x-2 h-32 p-3">
          <ShadcnRow :gutter="30">
            <ShadcnCol class="bg-blue-200 h-12"></ShadcnCol>
            <ShadcnCol class="bg-blue-300 h-12"></ShadcnCol>
            <ShadcnCol class="bg-blue-400 h-12"></ShadcnCol>
            <ShadcnCol class="bg-blue-500 h-12"></ShadcnCol>
          </ShadcnRow>
        </div>
      </template>
    </ShadcnCard>

    <ShadcnCard title="Align">
      <template #content>
        <div class="space-y-2 p-3 content-center">
          <ShadcnRow align="top">
            <ShadcnCol class="bg-blue-200 h-16"></ShadcnCol>
            <ShadcnCol class="bg-blue-300 h-14"></ShadcnCol>
            <ShadcnCol class="bg-blue-400 h-10"></ShadcnCol>
            <ShadcnCol class="bg-blue-500 h-14"></ShadcnCol>
          </ShadcnRow>
          <ShadcnRow align="middle">
            <ShadcnCol class="bg-blue-200 h-16"></ShadcnCol>
            <ShadcnCol class="bg-blue-300 h-14"></ShadcnCol>
            <ShadcnCol class="bg-blue-400 h-10"></ShadcnCol>
            <ShadcnCol class="bg-blue-500 h-14"></ShadcnCol>
          </ShadcnRow>
          <ShadcnRow align="bottom">
            <ShadcnCol class="bg-blue-200 h-16"></ShadcnCol>
            <ShadcnCol class="bg-blue-300 h-14"></ShadcnCol>
            <ShadcnCol class="bg-blue-400 h-10"></ShadcnCol>
            <ShadcnCol class="bg-blue-500 h-14"></ShadcnCol>
          </ShadcnRow>
        </div>
      </template>
    </ShadcnCard>

    <ShadcnCard title="Justify">
      <template #content>
        <div class="space-y-2 p-3">
          <ShadcnRow justify="start">
            <ShadcnCol class="bg-blue-200 h-16"></ShadcnCol>
            <ShadcnCol class="bg-blue-300 h-14"></ShadcnCol>
            <ShadcnCol class="bg-blue-400 h-10"></ShadcnCol>
            <ShadcnCol class="bg-blue-500 h-14"></ShadcnCol>
          </ShadcnRow>
          <ShadcnRow justify="center">
            <ShadcnCol class="bg-blue-200 h-16"></ShadcnCol>
            <ShadcnCol class="bg-blue-300 h-14"></ShadcnCol>
            <ShadcnCol class="bg-blue-400 h-10"></ShadcnCol>
            <ShadcnCol class="bg-blue-500 h-14"></ShadcnCol>
          </ShadcnRow>
          <ShadcnRow justify="end">
            <ShadcnCol class="bg-blue-200 h-16"></ShadcnCol>
            <ShadcnCol class="bg-blue-300 h-14"></ShadcnCol>
            <ShadcnCol class="bg-blue-400 h-10"></ShadcnCol>
            <ShadcnCol class="bg-blue-500 h-14"></ShadcnCol>
          </ShadcnRow>
          <ShadcnRow justify="between">
            <ShadcnCol class="bg-blue-200 h-16"></ShadcnCol>
            <ShadcnCol class="bg-blue-300 h-14"></ShadcnCol>
            <ShadcnCol class="bg-blue-400 h-10"></ShadcnCol>
            <ShadcnCol class="bg-blue-500 h-14"></ShadcnCol>
          </ShadcnRow>
        </div>
      </template>
    </ShadcnCard>

    <ShadcnCard title="Wrap">
      <template #content>
        <div class="space-y-2 p-3">
          <ShadcnRow wrap>
            <ShadcnCol v-for="i in 20" :class="cn(i % 2 == 0 ? 'bg-blue-200 h-16' : 'bg-blue-300 h-14')"></ShadcnCol>
          </ShadcnRow>
        </div>
      </template>
    </ShadcnCard>

    <ShadcnCard title="Col">
      <template #content>
        <div class="space-y-2 p-3">
          <ShadcnRow class="bg-amber-100">
            <ShadcnCol class="bg-blue-200 h-16" span="2"/>
            <ShadcnCol class="bg-blue-300 h-14" span="4"/>
            <ShadcnCol class="bg-blue-400 h-10"/>
          </ShadcnRow>
          <ShadcnRow class="bg-amber-100">
            <ShadcnCol class="bg-blue-200 h-16" span="10"/>
          </ShadcnRow>
          <ShadcnRow class="bg-amber-100">
            <ShadcnCol class="bg-blue-200 h-16" span="12"/>
          </ShadcnRow>
          <ShadcnRow class="bg-amber-100">
            <ShadcnCol v-for="i in 20" :class="cn('h-16 mt-1', i % 2 == 0 ? 'bg-blue-200' : 'bg-blue-300')"/>
          </ShadcnRow>
          <ShadcnRow class="bg-amber-100">
            <ShadcnCol class="bg-blue-200 h-16" span="10"/>
            <ShadcnCol class="bg-blue-300 h-14" span="11"/>
            <ShadcnCol class="bg-blue-400 h-10" span="1"/>
          </ShadcnRow>
        </div>
      </template>
    </ShadcnCard>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { cn } from '@/lib/utils.ts'

export default defineComponent({
  name: 'RowColHome',
  methods: { cn }
})
</script>

<style scoped>
.content-center {
  display: grid;
  justify-items: center;
  align-items: center;
}
</style>
