<template>
  <DropdownMenu>
    <DropdownMenuTrigger as-child>
      <Button size="icon" class="rounded-full" variant="outline">
        <User/>
      </Button>
    </DropdownMenuTrigger>
    <DropdownMenuContent class="w-56">
      <DropdownMenuLabel class="font-normal">
        <div class="flex flex-col space-y-1">
          <p class="text-sm font-medium leading-none">Shadcn UI Admin</p>
          <p class="text-xs leading-none text-muted-foreground">community@devlive.org</p>
        </div>
      </DropdownMenuLabel>
      <DropdownMenuSeparator/>
      <DropdownMenuGroup>
        <DropdownMenuItem>
          <span>Test</span>
          <DropdownMenuShortcut>⌘+T</DropdownMenuShortcut>
        </DropdownMenuItem>
        <DropdownMenuSub>
          <DropdownMenuSubTrigger class="cursor-pointer">{{ $t('common.common.codeMirror') }}</DropdownMenuSubTrigger>
          <DropdownMenuPortal>
            <DropdownMenuSubContent>
              <a href="https://github.com/devlive-community/shadcn-ui-vue-admin" target="_blank">
                <DropdownMenuItem class="cursor-pointer">GitHub</DropdownMenuItem>
              </a>
              <a href="https://gitee.com/devlive-community/shadcn-ui-vue-admin" target="_blank">
                <DropdownMenuItem class="cursor-pointer">Gitee</DropdownMenuItem>
              </a>
            </DropdownMenuSubContent>
          </DropdownMenuPortal>
        </DropdownMenuSub>
      </DropdownMenuGroup>
      <DropdownMenuSeparator/>
      <RouterLink to="/auth/signin">
        <DropdownMenuItem class="cursor-pointer">
          <span>{{ $t('common.common.logout') }}</span>
          <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
        </DropdownMenuItem>
      </RouterLink>
    </DropdownMenuContent>
  </DropdownMenu>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu'
import { User } from 'lucide-vue-next'

export default defineComponent({
  name: 'NavigationUser',
  components: {
    Button,
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuPortal,
    DropdownMenuSeparator,
    DropdownMenuShortcut,
    DropdownMenuSub,
    DropdownMenuSubContent,
    DropdownMenuSubTrigger,
    DropdownMenuTrigger,
    User
  }
})
</script>
