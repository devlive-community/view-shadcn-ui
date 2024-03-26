<template>
  <div class="flex w-full flex-col">
    <div class="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-8">
      <div class="grid gap-3 md:grid-cols-2 md:gap-8 lg:grid-cols-3">
        <CardContainer>
          <CardGit/>
        </CardContainer>
        <CardContainer>
          <CardGit2/>
        </CardContainer>
      </div>
      <div class="grid gap-2 md:grid-cols-2 md:gap-8 lg:grid-cols-2">
        <CardContainer>
          <CardGit3/>
        </CardContainer>
        <CardContainer>
          <CardGit4/>
        </CardContainer>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import CardGit2 from '@/views/pages/card/components/CardGit2.vue'
import CardGit3 from '@/views/pages/card/components/CardGit3.vue'
import CardGit from '@/views/pages/card/components/CardGit.vue'
import CardContainer from '@/views/pages/card/components/CardContainer.vue'
import CardGit4 from '@/views/pages/card/components/CardGit4.vue'

export default defineComponent({
  name: 'CardWithGit',
  components: {CardGit4, CardContainer, CardGit, CardGit3, CardGit2}
})
</script>