<template>
  <div class="p-32 space-y-2">
    <ShadcnLogger :items="rawItems" :custom-patterns="customPatterns"/>
  </div>
</template>

<script setup lang="ts">

const customPatterns = {
  timestamp: [/^(\d{4}-\d{2}-\d{2}\s+\d{2}:\d{2}:\d{2},\d{3})/],
  level: [/\b(INFO|ERROR|WARN|DEBUG)\b/],
  thread: [/\[(pool-\d+-thread-\d+)\]/],
  file: [/\[([^[\]]+\.java:\d+)\]/]
}

const rawItems = [
  '2024-12-19 18:30:12,984 ERROR [pool-5-thread-1] [ProcessBuilderCommander.java:92] /bin/sh: null/bin/start-seatunnel-spark-connector-v2.sh: No such file or directory',
  '2024-12-19 18:30:12,985 INFO [pool-5-thread-1] [ProcessBuilderCommander.java:100] Execute task exit code [ 127 ]',
  '2024-12-19 18:30:12,985 INFO [pool-5-thread-1] [ProcessBuilderCommander.java:114] Destroy logger executor'
]
</script>