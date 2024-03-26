<template>
  <Card>
    <CardHeader class="grid grid-cols-[minmax(0,1fr)_110px] items-start gap-4 space-y-0 p-0 border-b">
      <div class="space-y-1 p-3 pl-5">
        <CardTitle>
          <a href="https://github.com/devlive-community/shadcn-ui-vue-admin" target="_blank">
            devlive-community/shadcn-ui-vue-admin
            <Badge variant="outline" class="mt-1">{{ $t('common.common.public') }}</Badge>
          </a>
        </CardTitle>
      </div>
      <div class="flex items-center justify-center w-full h-full">
        <div class="flex items-center cursor-pointer">
          <StarIcon class="mr-1 h-4 w-4"/>
          0 k
        </div>
        <div class="flex items-center cursor-pointer ml-2">
          <CircleDotIcon class="mr-1 h-4 w-4"/>
          0
        </div>
      </div>
    </CardHeader>
    <CardContent class="p-3 pl-5">
      <CardDescription>Admin crafted with Shadcn ui and Vite and Vue. Built with responsiveness and accessibility in mind.</CardDescription>
      <div class="flex items-center justify-between space-x-4 mt-2">
        <div class="flex items-center space-x-4">
          <div class="space-y-2 space-x-4">
            <p class="text-sm font-medium leading-none pt-2 pb-2">{{ $t('card.common.lastCommit') }}</p>
            <p class="text-sm text-muted-foreground">commit 1</p>
            <p class="text-sm text-muted-foreground">commit 2</p>
            <p class="text-sm text-muted-foreground">commit 3</p>
          </div>
        </div>
      </div>
    </CardContent>
    <CardFooter class="p-3 pl-5 border-t">
      <p class="text-sm text-muted-foreground">dev {{ $t('card.common.branch') }}</p>
    </CardFooter>
  </Card>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { BarChart, ChevronDownIcon, CircleDotIcon, CircleIcon, GitForkIcon, PlusIcon, ScaleIcon, SquareDashedKanban, StarIcon } from 'lucide-vue-next'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu'
import { Separator } from '@/components/ui/separator'
import { Badge } from '@/components/ui/badge'

export default defineComponent({
  name: 'CardGit4',
  components: {
    Badge,
    ChevronDownIcon, CircleIcon, PlusIcon, StarIcon, GitForkIcon, SquareDashedKanban, ScaleIcon, CircleDotIcon, BarChart,
    Button,
    CardFooter, Card, CardContent, CardDescription, CardHeader, CardTitle,
    DropdownMenu, DropdownMenuCheckboxItem, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger,
    Separator
  }
})
</script>
