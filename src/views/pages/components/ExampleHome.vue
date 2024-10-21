<template>
  <div class="flex w-full flex-col gap-4 md:gap-8 md:p-8 lg:grid lg:grid-cols-3">
    <ShadcnCard title="Avatar">
      <ShadcnAvatar src="https://cdn.north.devlive.org/devlive.org/2024-04-17/2F28BD8A-5AB4-46BA-B614-287A0020FAE7.png"
                    alt="Shadcn UI"
                    size="small"
                    square
                    @on-success="onSuccess"/>
    </ShadcnCard>

    <ShadcnCard title="Badge">
      <div class="space-x-10 p-3">
        <ShadcnBadge text="Badge">
          <span class="demo-badge"/>
        </ShadcnBadge>
        <ShadcnBadge>
          <span class="demo-badge"/>
          <template #text>
            <ShadcnIcon icon="Save" size="12"/>
          </template>
        </ShadcnBadge>
        <ShadcnBadge dot>
          <span class="demo-badge"/>
        </ShadcnBadge>
        <ShadcnBadge text="10000" max="1000">
          <span class="demo-badge"/>
        </ShadcnBadge>
      </div>
    </ShadcnCard>

    <ShadcnCard title="Alert">
      <div class="space-y-2 p-3">
        <ShadcnAlert>Alert</ShadcnAlert>
        <ShadcnAlert title="Alert title">Alert Content</ShadcnAlert>

        <ShadcnAlert title="Alert" type="info" show-icon>Alert</ShadcnAlert>
        <ShadcnAlert>
          <template #icon>
            <ShadcnIcon icon="Save"/>
          </template>
          Alert
        </ShadcnAlert>

        <ShadcnAlert type="info" banner>Alert</ShadcnAlert>

        <ShadcnAlert type="success" closable>Alert</ShadcnAlert>
        <ShadcnAlert type="warning" closable>
          <template #close>
            Close
          </template>
          Alert
        </ShadcnAlert>
      </div>
    </ShadcnCard>

    <ShadcnCard title="Progress">
      <div class="p-3 space-y-2">
        <ShadcnProgress v-model="defaultProgress"/>
        <ShadcnProgress v-model="defaultProgress" status="error"/>
        <ShadcnProgress v-model="defaultProgress" status="warning"/>
        <ShadcnProgress v-model="defaultProgress" status="success"/>

        <ShadcnProgress v-model="defaultProgress" size="large"/>

        <ShadcnProgress v-model="defaultProgress" show-label/>
      </div>
    </ShadcnCard>

    <ShadcnCard title="Space">
      <ShadcnSpace>
        <ShadcnButton type="primary">Button</ShadcnButton>
        <ShadcnButton type="primary">Button</ShadcnButton>
        <ShadcnButton type="primary">Button</ShadcnButton>
      </ShadcnSpace>
    </ShadcnCard>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'ExampleHome',
  data()
  {
    return {
      defaultProgress: 50
    }
  },
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
