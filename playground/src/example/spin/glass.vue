<template>
  <div class="space-y-4">
    <div class="relative">
      <div class="h-64 rounded-lg bg-gradient-to-r from-blue-400 to-purple-400"></div>
      <div class="absolute inset-0 flex items-center justify-center p-4">
        <div class="w-full h-full relative">
          <ShadcnSpin :model-value="true" glass fixed />
        </div>
      </div>
    </div>

    <div class="relative">
      <div class="h-64 rounded-lg bg-gradient-to-r from-green-400 to-teal-400"></div>
      <div class="absolute inset-0 flex items-center justify-center p-4">
        <div class="w-full h-full relative">
          <ShadcnSpin :model-value="true" glass fixed type="success" />
        </div>
      </div>
    </div>

    <div class="relative">
      <div class="h-64 rounded-lg bg-gradient-to-r from-yellow-400 to-orange-400"></div>
      <div class="absolute inset-0 flex items-center justify-center p-4">
        <div class="w-full h-full relative">
          <ShadcnSpin :model-value="true" glass fixed type="warning" size="large" />
        </div>
      </div>
    </div>

    <div class="relative">
      <div class="h-64 rounded-lg bg-gradient-to-r from-red-400 to-pink-400"></div>
      <div class="absolute inset-0 flex items-center justify-center p-4">
        <div class="w-full h-full relative">
          <ShadcnSpin :model-value="true" glass fixed type="error" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
</script>
