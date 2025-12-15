<template>
  <div class="space-y-6">
    <div class="relative">
      <div class="h-40 rounded-lg flex items-center justify-center gap-8 bg-gradient-to-r from-blue-400 to-indigo-400">
        <ShadcnBadge glass type="primary" text="5">
          <div class="px-6 py-3 rounded-lg bg-white/50 text-gray-900">
            Primary
          </div>
        </ShadcnBadge>
        <ShadcnBadge glass type="success" text="10">
          <div class="px-6 py-3 rounded-lg bg-white/50 text-gray-900">
            Success
          </div>
        </ShadcnBadge>
        <ShadcnBadge glass type="warning" text="99+">
          <div class="px-6 py-3 rounded-lg bg-white/50 text-gray-900">
            Warning
          </div>
        </ShadcnBadge>
        <ShadcnBadge glass type="danger" text="New">
          <div class="px-6 py-3 rounded-lg bg-white/50 text-gray-900">
            Danger
          </div>
        </ShadcnBadge>
      </div>
    </div>
    <div class="relative">
      <div class="h-40 rounded-lg flex items-center justify-center gap-8 bg-gradient-to-r from-pink-400 to-rose-400">
        <ShadcnBadge glass dot>
          <div class="px-6 py-3 rounded-lg bg-white/50 text-gray-900">
            Dot Badge
          </div>
        </ShadcnBadge>
        <ShadcnBadge glass text="10" max="5">
          <div class="px-6 py-3 rounded-lg bg-white/50 text-gray-900">
            Max 5
          </div>
        </ShadcnBadge>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
</script>
