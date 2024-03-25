<template>
  <div class="hidden flex items-start justify-center gap-6 rounded-lg p-8 md:grid lg:grid-cols-2 xl:grid-cols-3">
    <div class="col-span-2 grid items-start gap-6 lg:col-span-1">
      <CardContainer>
        <CardUser/>
      </CardContainer>
      <CardContainer>
        <CardPayment/>
      </CardContainer>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import CardContainer from '@/views/pages/card/components/CardContainer.vue'
import CardUser from '@/views/pages/card/components/CardUser.vue'
import CardPayment from '@/views/pages/card/components/CardPayment.vue'

export default defineComponent({
  name: 'CardHome',
  components: {CardPayment, CardUser, CardContainer}
})
</script>
