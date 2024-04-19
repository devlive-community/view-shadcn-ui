<template>
  <Avatar>
    <AvatarImage :src="src as string" :alt="alt as string" :width="width" :height="height" :class="imageClass"/>
    <AvatarFallback>{{ alt }}</AvatarFallback>
  </Avatar>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'

export default defineComponent({
  name: 'IAvatar',
  components: {
    Avatar, AvatarImage, AvatarFallback
  },
  props: {
    src: {
      type: String
    },
    alt: {
      type: String
    },
    width: {
      type: Number,
      default: 32
    },
    height: {
      type: Number,
      default: 32
    },
    imageClass: {
      type: String,
      default: ''
    }
  }
})
</script>
