<template>
  <div class="space-y-2 space-x-2">
    <ShadcnAvatar src="https://cdn.north.devlive.org/devlive.org/2024-04-17/2F28BD8A-5AB4-46BA-B614-287A0020FAE7.png"
                  alt="Shadcn UI"
                  size="small"
                  square
                  @on-success="onSuccess"/>

    <div>
      <ShadcnBadge text="Badge">
        <span class="demo-badge"/>
      </ShadcnBadge>
    </div>

    <div>
      <ShadcnBadge>
        <span class="demo-badge"/>
        <template #text>
          <ShadcnIcon icon="Save" size="12"/>
        </template>
      </ShadcnBadge>
    </div>

    <div>
      <ShadcnBadge dot>
        <span class="demo-badge"/>
      </ShadcnBadge>
    </div>

    <div>
      <ShadcnBadge text="10000" max="1000">
        <span class="demo-badge"/>
      </ShadcnBadge>
    </div>

    <div class="space-y-2">
      <ShadcnAlert>Alert</ShadcnAlert>
      <ShadcnAlert title="Alert title">Alert Content</ShadcnAlert>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'ExampleHome',
  methods: {
    onSuccess()
    {
      console.log('onSuccess')
    }
  }
})
</script>

<style scoped>
.demo-badge {
  width: 42px;
  height: 42px;
  background: #eee;
  border-radius: 6px;
  display: inline-block;
}
</style>
