<template>
  <Card>
    <CardHeader class="grid grid-cols-[minmax(0,1fr)_110px] items-start gap-4 space-y-0">
      <div class="space-y-1">
        <CardTitle>
          <a href="https://github.com/devlive-community/shadcn-ui-vue-admin" target="_blank">devlive-community/shadcn-ui-vue-admin</a>
        </CardTitle>
        <CardDescription>Admin crafted with Shadcn ui and Vite and Vue. Built with responsiveness and accessibility in mind.</CardDescription>
      </div>
      <div class="flex items-center space-x-1 rounded-md bg-secondary text-secondary-foreground">
        <Button variant="secondary" class="px-3 shadow-none cursor-pointer">
          <StarIcon class="mr-2 h-4 w-4"/>
          Star
        </Button>
        <Separator orientation="vertical" class="h-5"/>
        <DropdownMenu>
          <DropdownMenuTrigger as-child>
            <Button variant="secondary" class="px-2 shadow-none">
              <ChevronDownIcon class="h-4 w-4 text-secondary-foreground"/>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" :align-offset="-5" class="w-[200px]">
            <DropdownMenuLabel>{{ $t('card.common.functionList') }}</DropdownMenuLabel>
            <DropdownMenuSeparator/>
            <DropdownMenuCheckboxItem class="cursor-pointer" checked>{{ $t('card.common.function1') }}</DropdownMenuCheckboxItem>
            <DropdownMenuCheckboxItem class="cursor-pointer">{{ $t('card.common.function2') }}</DropdownMenuCheckboxItem>
            <DropdownMenuCheckboxItem class="cursor-pointer">{{ $t('card.common.function3') }}</DropdownMenuCheckboxItem>
            <DropdownMenuSeparator/>
            <DropdownMenuItem class="cursor-pointer">
              <PlusIcon class="mr-2 h-4 w-4"/>
              {{ $t('card.common.newList') }}
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </CardHeader>
    <CardContent>
      <div class="flex space-x-4 text-sm text-muted-foreground">
        <div class="flex items-center cursor-pointer">
          <CircleIcon class="mr-1 h-3 w-3 fill-sky-400 text-sky-400"/>
          TypeScript
        </div>
        <div class="flex items-center cursor-pointer">
          <StarIcon class="mr-1 h-3 w-3"/>
          0 k
        </div>
        <div>Updated April 2024</div>
      </div>
    </CardContent>
  </Card>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { ChevronDownIcon, CircleIcon, PlusIcon, StarIcon } from 'lucide-vue-next'
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

export default defineComponent({
  name: 'CardGit',
  components: {
    ChevronDownIcon, CircleIcon, PlusIcon, StarIcon,
    Button,
    Card, CardContent, CardDescription, CardHeader, CardTitle,
    DropdownMenu, DropdownMenuCheckboxItem, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger,
    Separator
  }
})
</script>
