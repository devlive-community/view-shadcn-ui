<template>
  <div class="flex w-full flex-col">
    <div class="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-8">
      <div class="grid gap-3 md:grid-cols-2 md:gap-8 lg:grid-cols-3">
        <CardContainer>
          <CardTeam/>
        </CardContainer>
        <CardContainer>
          <CardTeamDocument/>
        </CardContainer>
        <CardContainer>
          <CardTeamIssue/>
        </CardContainer>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import CardContainer from '@/views/pages/card/components/CardContainer.vue'
import CardTeam from '@/views/pages/card/components/CardTeam.vue'
import CardTeamDocument from '@/views/pages/card/components/CardTeamDocument.vue'
import CardTeamIssue from '@/views/pages/card/components/CardTeamIssue.vue'

export default defineComponent({
  name: 'CardWithTeam',
  components: {CardTeamIssue, CardTeamDocument, CardTeam, CardContainer}
})
</script>
