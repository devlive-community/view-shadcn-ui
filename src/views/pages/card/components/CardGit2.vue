<template>
  <Card>
    <CardHeader class="grid grid-cols-[minmax(0,1fr)_110px] items-start gap-4 space-y-0">
      <div class="space-y-1">
        <CardTitle>
          <a href="https://github.com/devlive-community/shadcn-ui-vue-admin" target="_blank">
            devlive-community/shadcn-ui-vue-admin
            <Badge variant="outline" class="mt-1">{{ $t('common.common.public') }}</Badge>
          </a>
        </CardTitle>
        <CardDescription>Admin crafted with Shadcn ui and Vite and Vue. Built with responsiveness and accessibility in mind.</CardDescription>
      </div>
      <div class="flex items-center justify-end">
        <Button variant="secondary" size="icon" class="cursor-pointer">
          <SquareDashedKanban/>
        </Button>
      </div>
    </CardHeader>
    <CardContent>
      <div class="flex space-x-4 text-sm text-muted-foreground">
        <div class="flex items-center cursor-pointer">
          <CircleIcon class="mr-1 h-3 w-3 fill-sky-400 text-sky-400"/>
          TypeScript
        </div>
        <div class="flex items-center cursor-pointer">
          <StarIcon class="mr-1 h-4 w-4"/>
          0 k
        </div>
        <div class="flex items-center cursor-pointer">
          <GitForkIcon class="mr-1 h-4 w-4"/>
          0 k
        </div>
      </div>
    </CardContent>
  </Card>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { ChevronDownIcon, CircleIcon, GitForkIcon, PlusIcon, SquareDashedKanban, StarIcon } from 'lucide-vue-next'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
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
  name: 'CardGit2',
  components: {
    Badge,
    ChevronDownIcon, CircleIcon, PlusIcon, StarIcon, GitForkIcon, SquareDashedKanban,
    Button,
    Card, CardContent, CardDescription, CardHeader, CardTitle,
    DropdownMenu, DropdownMenuCheckboxItem, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger,
    Separator
  }
})
</script>
