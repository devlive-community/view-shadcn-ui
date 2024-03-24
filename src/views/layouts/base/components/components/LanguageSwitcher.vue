<template>
  <Select v-model="language" @update:modelValue="injectLanguage">
    <SelectTrigger class="w-[150px]">
      <SelectValue :placeholder="$t('region.common.selectLanguage')"/>
    </SelectTrigger>
    <SelectContent>
      <SelectGroup>
        <SelectLabel>{{ $t('region.common.asia.default') }}</SelectLabel>
        <SelectItem class="pl-6 cursor-pointer" value="language_zh_cn">{{ $t('region.common.asia.chineseSimple') }}</SelectItem>
        <SelectLabel>{{ $t('region.common.northAmerica.default') }}</SelectLabel>
        <SelectItem class="pl-6 cursor-pointer" value="language_en">{{ $t('region.common.northAmerica.english') }}</SelectItem>
      </SelectGroup>
    </SelectContent>
  </Select>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from '@/components/ui/select'
import { useI18n } from 'vue-i18n'
import { StoreUtils } from '@/utils/Store'
import moment from 'moment'
import zhCn from '@/moment/zhCn'

export default defineComponent({
  name: 'LanguageSwitcher',
  components: {
    Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue
  },
  setup()
  {
    const language = ref(StoreUtils.getLanguage() ? StoreUtils.getLanguage() : 'language_zh_cn')
    const {locale} = useI18n()

    const injectLanguage = (language: string) => {
      StoreUtils.setLanguage(language)
      const prefix = 'language_'
      if (language.startsWith(prefix)) {
        locale.value = language.substring(prefix.length)
      }
      else {
        locale.value = language
      }
      if (language === 'language_zh_cn') {
        moment.locale('zh-cn', zhCn as any)
      }
      else {
        moment.locale('en')
      }
    }

    injectLanguage(language.value)
    return {
      language,
      injectLanguage
    }
  }
})
</script>
