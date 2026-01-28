import type { InjectionKey } from 'vue'

export interface SiderHookProvider {
  addSider: (id: string) => void
  removeSider: (id: string) => void
}

export const SiderHookProviderKey: InjectionKey<SiderHookProvider> = Symbol('SiderHookProvider')
