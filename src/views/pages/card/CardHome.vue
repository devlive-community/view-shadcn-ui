<template>
  <div class="flex w-full flex-col">
    <div class="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-8">
      <div class="grid gap-3 md:grid-cols-2 md:gap-8 lg:grid-cols-3">
        <CardContainer>
          <CardUser/>
        </CardContainer>
        <CardContainer>
          <CardPayment/>
        </CardContainer>
        <CardContainer>
          <CardTeam/>
        </CardContainer>
      </div>
      <div class="grid gap-3 md:grid-cols-2 md:gap-8 lg:grid-cols-3">
        <CardContainer>
          <CardNotification/>
        </CardContainer>
        <CardContainer>
          <CardSetting/>
        </CardContainer>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import CardContainer from '@/views/pages/card/components/CardContainer.vue'
import CardUser from '@/views/pages/card/components/CardUser.vue'
import CardPayment from '@/views/pages/card/components/CardPayment.vue'
import CardTeam from '@/views/pages/card/components/CardTeam.vue'
import CardNotification from '@/views/pages/card/components/CardNotification.vue'
import CardSetting from '@/views/pages/card/components/CardSetting.vue'

export default defineComponent({
  name: 'CardHome',
  components: {CardSetting, CardNotification, CardTeam, CardPayment, CardUser, CardContainer}
})
</script>
