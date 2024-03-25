<template>
  <div class="hidden items-start justify-center gap-6 rounded-lg p-8 md:grid lg:grid-cols-2 xl:grid-cols-3">
    <div class="col-span-2 grid items-start gap-6 lg:col-span-1">
      <CardContainer>
        <CardUser/>
      </CardContainer>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import CardContainer from '@/views/pages/card/components/CardContainer.vue'
import CardUser from '@/views/pages/card/components/CardUser.vue'

export default defineComponent({
  name: 'CardHome',
  components: {CardUser, CardContainer}
})
</script>
