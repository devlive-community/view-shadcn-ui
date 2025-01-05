<template>
  <div class="p-32 space-y-7 space-x-4">
    <ShadcnDivider text="图片组"/>
    <ShadcnImageGroup :images="images" :columns="8" :gap="4" preview/>

    <ShadcnDivider text="图片边框"/>
    <ShadcnImage src="https://picsum.photoss/800/400" alt="View Shadcn UI" border/>

    <ShadcnImage src="https://picsum.photoss/800/400" alt="View Shadcn UI"/>

    <ShadcnDivider text="图片加载"/>
    <ShadcnImage src="https://picsum.photos/800/400" alt="View Shadcn UI"/>
    <ShadcnImage src="https://picsum.photos/800/400" alt="View Shadcn UI" lazy/>

    <ShadcnDivider text="图片填充"/>
    <ShadcnImage src="https://picsum.photos/800/400" alt="View Shadcn UI" fit="cover"/>
    <ShadcnImage src="https://picsum.photos/800/400" alt="View Shadcn UI" fit="contain"/>
    <ShadcnImage src="https://picsum.photos/800/400" alt="View Shadcn UI" fit="fill"/>
    <ShadcnImage src="https://picsum.photos/800/400" alt="View Shadcn UI" fit="none"/>
    <ShadcnImage src="https://picsum.photos/800/400" alt="View Shadcn UI" fit="scale-down"/>

    <ShadcnImage src="https://picsum.photos/800/400" alt="View Shadcn UI"/>
  </div>
</template>

<script setup lang="ts">
const images = [] as any[]

for (let i = 0; i < 100; i++) {
  images.push({ src: `https://picsum.photos/800/400?random=${ i }`, alt: `Image ${ i }`, lazy: i % 2 === 0, border: i % 3 === 0 })
}
</script>