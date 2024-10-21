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

      <ShadcnAlert type="success">Alert</ShadcnAlert>
      <ShadcnAlert type="warning">Alert</ShadcnAlert>
      <ShadcnAlert type="error">Alert</ShadcnAlert>
      <ShadcnAlert type="info">Alert</ShadcnAlert>

      <ShadcnAlert type="success" show-icon>Alert</ShadcnAlert>
      <ShadcnAlert type="warning" show-icon>Alert</ShadcnAlert>
      <ShadcnAlert type="error" show-icon>Alert</ShadcnAlert>
      <ShadcnAlert title="Alert" type="info" show-icon>Alert</ShadcnAlert>
      <ShadcnAlert>
        <template #icon>
          <ShadcnIcon icon="Save"/>
        </template>
        Alert
      </ShadcnAlert>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import ShadcnAlert from '@/ui/alert'

export default defineComponent({
  name: 'ExampleHome',
  components: { ShadcnAlert },
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
