<template>
  <div class="flex w-full flex-col gap-4 md:gap-8 md:p-8 lg:grid lg:grid-cols-3">

    <ShadcnCard title="Checkbox">
      <div class="p-3">
        Checkbox Value: {{ defaultCheckbox }}
        <ShadcnSpace size="large" wrap>
          <ShadcnCheckbox v-model="defaultCheckbox" value="Vue" @on-change="onChange">Vue</ShadcnCheckbox>
          <ShadcnCheckbox v-model="defaultCheckbox" value="Nuxt" @on-change="onChange">Nuxt</ShadcnCheckbox>
          <ShadcnCheckbox v-model="defaultCheckbox" value="Java" @on-change="onChange">Java</ShadcnCheckbox>
        </ShadcnSpace>
      </div>
    </ShadcnCard>


    <ShadcnCard title="Radio">
      <div class="p-3">
        Radio Value: {{ defaultRadio }}
        <ShadcnSpace size="large" wrap>
          <ShadcnRadio v-model="defaultRadio" value="ON" @on-change="onChange">ON</ShadcnRadio>
          <ShadcnRadio v-model="defaultRadio" value="OFF" @on-change="onChange">OFF</ShadcnRadio>
        </ShadcnSpace>
        Disabled
        <ShadcnSpace size="large" wrap>
          <ShadcnRadio v-model="defaultRadio" value="ON" disabled @on-change="onChange">ON</ShadcnRadio>
          <ShadcnRadio v-model="defaultRadio" value="OFF" @on-change="onChange">OFF</ShadcnRadio>
        </ShadcnSpace>
        Size
        <ShadcnSpace size="large" wrap>
          <ShadcnRadio v-model="defaultRadio" value="Default" size="default" @on-change="onChange">Default</ShadcnRadio>
          <ShadcnRadio v-model="defaultRadio" value="Small" size="small" @on-change="onChange">Small</ShadcnRadio>
          <ShadcnRadio v-model="defaultRadio" value="Large" size="large" @on-change="onChange">Large</ShadcnRadio>
        </ShadcnSpace>
        Type
        <ShadcnSpace size="large" wrap>
          <ShadcnRadio v-model="defaultRadio" value="Primary" type="primary" @on-change="onChange">Primary</ShadcnRadio>
          <ShadcnRadio v-model="defaultRadio" value="Success" type="success" @on-change="onChange">Success</ShadcnRadio>
          <ShadcnRadio v-model="defaultRadio" value="Warning" type="warning" @on-change="onChange">Warning</ShadcnRadio>
          <ShadcnRadio v-model="defaultRadio" value="Error" type="error" @on-change="onChange">Error</ShadcnRadio>
        </ShadcnSpace>
      </div>
    </ShadcnCard>

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
      <div class="space-y-2">
        <ShadcnSpace>
          <ShadcnButton type="primary">Button</ShadcnButton>
          <ShadcnButton type="primary">Button</ShadcnButton>
          <ShadcnButton type="primary">Button</ShadcnButton>
        </ShadcnSpace>

        <ShadcnSpace size="large">
          <ShadcnButton type="primary">Button</ShadcnButton>
          <ShadcnButton type="primary">Button</ShadcnButton>
          <ShadcnButton type="primary">Button</ShadcnButton>
        </ShadcnSpace>

        <ShadcnSpace size="30">
          <ShadcnButton type="primary">Button</ShadcnButton>
          <ShadcnButton type="primary">Button</ShadcnButton>
          <ShadcnButton type="primary">Button</ShadcnButton>
        </ShadcnSpace>

        <ShadcnSpace wrap>
          <ShadcnButton v-for="i in 6" type="primary">Wrap {{ i }}</ShadcnButton>
        </ShadcnSpace>

        <ShadcnSpace wrap :size="[40, 80]">
          <ShadcnButton v-for="i in 6" type="primary">Wrap {{ i }}</ShadcnButton>
        </ShadcnSpace>
      </div>
    </ShadcnCard>

    <ShadcnCard title="Switch">
      <div class="p-3">
        Switch Value: {{ defaultSwitch }}
        <ShadcnSpace size="large" wrap>
          <ShadcnSwitch v-model="defaultSwitch"/>
          <ShadcnSwitch v-model="defaultSwitch" type="error"/>
          <ShadcnSwitch v-model="defaultSwitch" type="warning"/>
          <ShadcnSwitch v-model="defaultSwitch" type="success"/>
        </ShadcnSpace>
        Size
        <ShadcnSpace size="large" wrap>
          <ShadcnSwitch v-model="defaultSwitch" size="small"/>
          <ShadcnSwitch v-model="defaultSwitch" size="default"/>
          <ShadcnSwitch v-model="defaultSwitch" size="large"/>
        </ShadcnSpace>
        Disabled
        <ShadcnSpace size="large" wrap>
          <ShadcnSwitch v-model="defaultSwitch" disabled/>
          <ShadcnSwitch v-model="defaultSwitch" type="error" disabled/>
          <ShadcnSwitch v-model="defaultSwitch" type="warning" disabled/>
          <ShadcnSwitch v-model="defaultSwitch" type="success" disabled/>
        </ShadcnSpace>
        Slot
        <ShadcnSpace size="large" wrap>
          <ShadcnSwitch v-model="defaultSwitch" @on-change="onChange">
            <template #open>ON</template>
            <template #close>OFF</template>
          </ShadcnSwitch>
        </ShadcnSpace>
      </div>
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
      defaultProgress: 50,
      defaultSwitch: false,
      defaultRadio: 'ON',
      defaultCheckbox: 'Vue'
    }
  },
  methods: {
    onSuccess()
    {
      console.log('onSuccess')
    },
    onChange(value: boolean)
    {
      console.log('onChange', value)
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
