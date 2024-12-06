<template>
  <div class="p-32 space-y-2">
    <ShadcnCard title="Custom Time Block">
      <ShadcnCountDown title="Activity events" :time="new Date(Date.now() + 6 * 1000)">
        <template #days="{ value, isWarning }">
          <div class="flex flex-col items-center">
            <div class="text-5xl font-bold" :class="{ 'text-red-500': isWarning }">
              {{ value }}
            </div>
            <div class="text-sm">Days Left</div>
          </div>
        </template>
      </ShadcnCountDown>
    </ShadcnCard>

    <ShadcnCard title="Custom Label">
      <ShadcnCountDown title="Activity events" :time="new Date(Date.now() + 6 * 1000)">
        <template #days-label>
          <span class="text-sm mt-2 text-blue-500">DAYS</span>
        </template>
      </ShadcnCountDown>
    </ShadcnCard>

    <ShadcnCard title="Custom Full">
      <ShadcnCountDown :time="new Date(Date.now() + 6 * 1000)">
        <template #blocks="{ timeLeft, isWarning }">
          <div class="flex flex-col gap-2">
            <div class="text-2xl" :class="{ 'text-red-500': isWarning }">
              Time Left: {{ timeLeft.days }} D
            </div>
            <div class="flex gap-2">
              <span>{{ timeLeft.hours }} H</span>
              <span>{{ timeLeft.minutes }} M</span>
              <span>{{ timeLeft.seconds }} S</span>
            </div>
          </div>
        </template>
      </ShadcnCountDown>
    </ShadcnCard>
  </div>
</template>

<script setup>
</script>
