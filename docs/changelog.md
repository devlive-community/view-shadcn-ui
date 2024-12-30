---
title: "Release Notes"
---

# Changelog

## 2024.5.4 (2024-12-30)

#### Core

- fix: fix ci scope causing publishing failure

#### Contribution

- feat: support tooltip
- feat: support showLegend
- feat: support showWeek
- feat: support showMonth
- feat: support cellSize and cellGap
- feat: support year
- feat: support custom cell

#### Code Editor

- refactor: refactor code editor to use monaco editor
- feat: support auto completion
- feat: support context menu
- feat: support search
- feat: support caseSensitive for search
- feat: support replace and replaceAll for search
- feat: support matchWholeWord for search
- feat: support regex for search
- feat: support search history search
- feat: support search preview search

## 2024.5.3 (2024-12-23)

#### Core

- add component documentation generation script
- add publish ci

#### QrCode

- feat: support padding and rounded
- feat: support margin
- feat: support img slot

#### Workflow

- fix: repair data does not return data

#### Logger

- feat: support custom patterns

#### Number

- fix: fix the maximum and minimum value out of bounds

#### Time Picker

- feat: support formatter and parser
- feat: support disabled and clearable
- feat: support quick times
- feat: support format

#### Color Picker

- support disabled and readonly
- support presetColors
- support transparency
- support hsl
- support showPanel, showDropper, showTransparency, showFormat

#### Date Picker

- feat: support disabled and readonly
- feat: support format
- feat: support clearable
- feat: support show shortcuts
- feat: support previous and next year
- feat: support highlighting today
- feat: support range

#### Cron

- feat: support cron

## 2024.5.2 (2024-12-15)

### ✨ Features

- **i18n:** support responsive language switching
- **i18n:** support for dynamic languages
- **utility:** add uuid utility
- **workflow:** support workflow
- **input-tag:** support input tag
- **map** support map
- **loading-bar** support loading bar
- **float-button** support float button
- **data-filter** support data filter

## 2024.5.1 (2024-12-09)

### ✨ Features

* **logger:** support case sensitive ([c736d50](https://github.com/devlive-community/view-shadcn-ui/commit/c736d50c563c72f69f786dfffa1749653d33ad9e))
* **logger:** support height ([1fa5af1](https://github.com/devlive-community/view-shadcn-ui/commit/1fa5af10163fdf083201e4ddbac23cfaff44a607))
* **logger:** support logger ([0f241ba](https://github.com/devlive-community/view-shadcn-ui/commit/0f241baf101689aae88a0236ea6bc3530c68166c))
* **logger:** support slot ([0e641a1](https://github.com/devlive-community/view-shadcn-ui/commit/0e641a1725dcf8af917e826deeef0f89fbd8a5ba))
* **logger:** support toolbar ([0846055](https://github.com/devlive-community/view-shadcn-ui/commit/0846055d0319fea49fd539b9267d5aac50bb57a5))
* **logger:** support toolbar for search ([9d0170b](https://github.com/devlive-community/view-shadcn-ui/commit/9d0170bde9d534eeb63887a0d7eaf7909a53e69c))
* **scrollbar:** support custom scrollbar ([d844516](https://github.com/devlive-community/view-shadcn-ui/commit/d8445167d889d400b61266d3d5a45f98d74344f3))
* **scrollbar:** support scrollbar ([aef72d4](https://github.com/devlive-community/view-shadcn-ui/commit/aef72d4169a748a43b3c4d16812c0eacaec0c615))
* **count-down:** add `on-complete` event ([d829d77](https://github.com/devlive-community/view-shadcn-ui/commit/d829d774ea4b27a4f3c5654c78916ca5b2531472))
* **count-down:** add some slots ([6cd514c](https://github.com/devlive-community/view-shadcn-ui/commit/6cd514c1c3c6ddfd190b7400e3b85f86a1aece22))
* **count-down:** support count-down ([cc2157a](https://github.com/devlive-community/view-shadcn-ui/commit/cc2157ae1714e621adc8a765ff65595eb2b57de8))
* **count-down:** support progress ([d0b3920](https://github.com/devlive-community/view-shadcn-ui/commit/d0b39202d747e35580d603c189b46c37f6e13a36))
* **count-down:** support simple mode ([da3e85f](https://github.com/devlive-community/view-shadcn-ui/commit/da3e85f7b727e6b8d0b9766af8f10ba0862e25f5))
* **count-down:** support title and toolbar ([88bb8d9](https://github.com/devlive-community/view-shadcn-ui/commit/88bb8d97dfa5a20f2426875c00de75633c690c26))
* **count-down:** support warningThreshold ([ef86ffc](https://github.com/devlive-community/view-shadcn-ui/commit/ef86ffc6970526806c3874994c43c2f5e68f63fb))
* **empty:** support empty ([11876af](https://github.com/devlive-community/view-shadcn-ui/commit/11876afeab7fc32e7c15a0c184d53e468ea73f79))
* **backtop:** support backtop ([81c96e5](https://github.com/devlive-community/view-shadcn-ui/commit/81c96e5d83b242aecf56b97eb36923359b4fa95e))
* **workflow:** add connection line verification ([7c28082](https://github.com/devlive-community/view-shadcn-ui/commit/7c28082c7599b3f665d3c33055bcf3f54a34b53b))
* **workflow:** add i18n ([769c4f8](https://github.com/devlive-community/view-shadcn-ui/commit/769c4f86ce77b9556bfb274434e718772425a38c))
* **workflow:** add simple data report ([fe31043](https://github.com/devlive-community/view-shadcn-ui/commit/fe3104357105c2f0bfc997d04b816eddfaa2478e))
* **workflow:** add uniq id to node ([1875479](https://github.com/devlive-community/view-shadcn-ui/commit/1875479d5bb2930a89395a566a4f5195bc2ccdf7))
* **workflow:** add validation report for data ([c2c064d](https://github.com/devlive-community/view-shadcn-ui/commit/c2c064d10a533e3badbc6584c25ab2f86c59f58c))
* **workflow:** adding validation visuals ([03a1477](https://github.com/devlive-community/view-shadcn-ui/commit/03a1477c85ccba468f576c1b7722a6fecfb788e4))
* **workflow:** split components ([86ccb65](https://github.com/devlive-community/view-shadcn-ui/commit/86ccb659eedd8b63076d1b49532e7d25b920132d))
* **workflow:** support background grid ([00d62ee](https://github.com/devlive-community/view-shadcn-ui/commit/00d62ee22ec654a2f52f1ddc78646a4401bd72a2))
* **workflow:** support basic workflow ([a03f9b4](https://github.com/devlive-community/view-shadcn-ui/commit/a03f9b453099a54ce830be1616ea06d52c05dcdc))
* **workflow:** support node validated ([09629eb](https://github.com/devlive-community/view-shadcn-ui/commit/09629eb0a83575a62705f9d8098a932900d6555b))
* **workflow:** support panel slots ([126bc03](https://github.com/devlive-community/view-shadcn-ui/commit/126bc0318ec07df0b70772b134ee51d1d773c57f))
* **workflow:** support remove connection ([a8c1091](https://github.com/devlive-community/view-shadcn-ui/commit/a8c10913fbb91cccc878678c78804ba7873cd138))
* **workflow:** support remove node ([7f48af6](https://github.com/devlive-community/view-shadcn-ui/commit/7f48af6f6e1b88da887d7dfaf992de539890dd4a))
* **workflow:** support v-model ([5b6c70f](https://github.com/devlive-community/view-shadcn-ui/commit/5b6c70fc723d7d676d56fd5e9b95b02644393804))
* **workflow:** support workflow edit ([86f1c4c](https://github.com/devlive-community/view-shadcn-ui/commit/86f1c4c56d246fb36034a423a01f30e4eac2dabf))
* **workflow:** support workflow view ([647661b](https://github.com/devlive-community/view-shadcn-ui/commit/647661b320b03c157e9326923ad8406d8481cea9))
* **workflow:** update connection line status ([c5d4886](https://github.com/devlive-community/view-shadcn-ui/commit/c5d48862dfb6462275b8e1aed567691caa6998f4))

## 2024.5.0 (2024-12-03)

### 🐛 Bug Fixes

* **core:** fix ci ([5daea84](https://github.com/devlive-community/shadcn-ui-vue-admin/commit/5daea84a47bb3c7ce891cc22b3097d475727717c))
* **button:** fix slot ([d7f795c](https://github.com/devlive-community/shadcn-ui-vue-admin/commit/d7f795c2b34c57becc3463f64cf9f593040b60a3))
* **button:** fix the missing content in loading status ([ba29ece](https://github.com/devlive-community/shadcn-ui-vue-admin/commit/ba29ecede2d744178f72123405da3370429ed7dd))
* **button:** fixed the icon abnormality caused by setting the size in the loading state ([6d4bd4f](https://github.com/devlive-community/shadcn-ui-vue-admin/commit/6d4bd4f5035444c318e3a6f08e6043809548a7e7))
* **toggle:** fixed click events not being blocked correctly ([fa13012](https://github.com/devlive-community/shadcn-ui-vue-admin/commit/fa13012f0899cc0c3e0899583650eaee2f629fef))

### ✨ Features

* **data builder:** fit all field ([e25d9e9](https://github.com/devlive-community/shadcn-ui-vue-admin/commit/e25d9e9feb455fa3e686fa42a2e5ea045780a5c0))
* **data builder:** support bigscreen ([17acd5f](https://github.com/devlive-community/shadcn-ui-vue-admin/commit/17acd5f517a8cdbc99538e9c0f3f14f804697475))
* **data builder:** support editor ([3d17865](https://github.com/devlive-community/shadcn-ui-vue-admin/commit/3d1786513f259d7e7e51dc2fbaf4f8bff69c9042))
* **data builder:** support ruler ([ab5218d](https://github.com/devlive-community/shadcn-ui-vue-admin/commit/ab5218d72cc865a60897da136dbe90b6fd793b4a))
* **data builder:** supports starting position 0 ([2842f2b](https://github.com/devlive-community/shadcn-ui-vue-admin/commit/2842f2b7fe947c216a85f6d7ed225cae84b4ad81))
* **data builder:** adapter basic configure component ([96dccfc](https://github.com/devlive-community/shadcn-ui-vue-admin/commit/96dccfc9920a8343171b6c066fa0e1ad679dda38))
* **data builder:** adapter component configuration ([d9a2ebb](https://github.com/devlive-community/shadcn-ui-vue-admin/commit/d9a2ebb14a569aa066d60fe35ae7765d55dbd9b8))
* **data builder:** fixed component being able to go outside the canvas ([927d099](https://github.com/devlive-community/shadcn-ui-vue-admin/commit/927d09903c156d204b0183953d3d13f847eed663))
* **data builder:** support canvas center ([d4fdd35](https://github.com/devlive-community/shadcn-ui-vue-admin/commit/d4fdd358f0fe8f66ded7ee5aaf5636627fa4e451))
* **data builder:** support canvas style ([8069f57](https://github.com/devlive-community/shadcn-ui-vue-admin/commit/8069f57149ecebcd6b579901598c5181992e63eb))
* **data builder:** support clicking on the canvas to deselect components ([e4e561f](https://github.com/devlive-community/shadcn-ui-vue-admin/commit/e4e561f1efb69ed354f32c7df7ae605e5bf7ea56))
* **data builder:** support component remove ([9e5f4c9](https://github.com/devlive-community/shadcn-ui-vue-admin/commit/9e5f4c971067a86917cfe2d62c6d6c62e9c3f5c6))
* **data builder:** support component resize ([1370271](https://github.com/devlive-community/shadcn-ui-vue-admin/commit/1370271652c198c8e7669b87aefa2f48351f5042))
* **data builder:** support component slot ([c8789d2](https://github.com/devlive-community/shadcn-ui-vue-admin/commit/c8789d22efd1679b71c08b8fb710338a2e1861fa))
* **data builder:** support editor ([61930df](https://github.com/devlive-community/shadcn-ui-vue-admin/commit/61930df55ce2fe574dbac1ab3fbcb01fbaf2d8cc))
* **data builder:** support guideline ([6c03c63](https://github.com/devlive-community/shadcn-ui-vue-admin/commit/6c03c630afbc5133d077097885a55873a5622dce))
* **data builder:** support panel label slot ([63d0644](https://github.com/devlive-community/shadcn-ui-vue-admin/commit/63d0644a3f83532f8d771778972541d4a8a12833))
* **data builder:** support show toolbar ([bc27bc2](https://github.com/devlive-community/shadcn-ui-vue-admin/commit/bc27bc2c6b157db046e6da6559ca40b69252e3c7))
* **data builder:** support view ([307ec7e](https://github.com/devlive-community/shadcn-ui-vue-admin/commit/307ec7e4b2280603f05aaf838cc80a9f0c38c7bc))
* **data builder:** support width and height ([627d582](https://github.com/devlive-community/shadcn-ui-vue-admin/commit/627d58209d90f58bdce1b2d068c568cae3315bb2))
* **upload:** support upload ([65720c2](https://github.com/devlive-community/shadcn-ui-vue-admin/commit/65720c2ba9a15cdaf4d355406723ef8001327e94))
* **core:** replace `npm` to `pnpm` ([e8ba631](https://github.com/devlive-community/shadcn-ui-vue-admin/commit/e8ba63157968c445cd1ac0b41340aa1323c867c1))
* **core:** support i18n ([371932c](https://github.com/devlive-community/view-shadcn-ui/commit/371932c3a6755071b41445c5c4ff32033618e43c))

## 2024.4.0 (2024-11-17)

### 🐛 Bug Fixes

- **input:** fixed textarea border ([588b8dd](https://github.com/devlive-community/shadcn-ui-vue-admin/commit/588b8dd889d8846068c262c984c1e8dc5608043c))
- **tree:** fix the abnormal hover and selected styles in lazy loading ([b6610f1](https://github.com/devlive-community/shadcn-ui-vue-admin/commit/b6610f18ecbcc4b9f91581d04fc45064bfeac334))

### ✨ Features

- **contextmenu:** support contextmenu ([2f1620e](https://github.com/devlive-community/shadcn-ui-vue-admin/commit/2f1620e2f7b5b6f150a8bbb3499dd76f8aa12408))
- **contextmenu:** support custom position ([59a9b1c](https://github.com/devlive-community/shadcn-ui-vue-admin/commit/59a9b1c992dffa52f3fa0a787713e90c7b3d52ef))
- **contextmenu:** support item disabled ([13f0029](https://github.com/devlive-community/shadcn-ui-vue-admin/commit/13f0029aaae67bdadc5fd41c2c1f1b084212e0b9))
- **contextmenu:** support sub contextmenu ([5bc2533](https://github.com/devlive-community/shadcn-ui-vue-admin/commit/5bc2533a9ecb35f99cb47885da1915d0e9e95abd))
- **select:** support lazy options ([4bb4761](https://github.com/devlive-community/shadcn-ui-vue-admin/commit/4bb4761e7996cbfe4207c41da55199905fa9f08d))
- **spin**: optimize background layer
- **tabs:** support label slot for tab item ([41d4279](https://github.com/devlive-community/shadcn-ui-vue-admin/commit/41d4279fafd41169c6fe2c88672c98045363bff6))
- **tabs:** support on-click event for tab item ([d191501](https://github.com/devlive-community/shadcn-ui-vue-admin/commit/d191501a57ebfec892aa908c945d5574e085a3ff))
- **collapse:** support title for item ([0f0e99d](https://github.com/devlive-community/shadcn-ui-vue-admin/commit/0f0e99dc5aa2c2ec75d9d9502c450314198a6eee))
- **form:** support dynamic form ([bfd3997](https://github.com/devlive-community/shadcn-ui-vue-admin/commit/bfd39970e29357ae103dbd3cd693c12f9ae3adca))
- **hover card:** fixed code ([d22408c](https://github.com/devlive-community/shadcn-ui-vue-admin/commit/d22408c57b82907f8699619355fac1b18c485adf))
- **hover card:** support hover card ([712549a](https://github.com/devlive-community/shadcn-ui-vue-admin/commit/712549a37a34ea0c3913d86dcaeeb3e6aee9951a))
- **hover card:** support title and footer slots ([66f5b35](https://github.com/devlive-community/shadcn-ui-vue-admin/commit/66f5b35717255e0dec6d2e60390476828e184d15))
- **toggle:** add image example ([65703a8](https://github.com/devlive-community/shadcn-ui-vue-admin/commit/65703a8aea961ef9a347f6588a6e7f17ca60cc41))
- **toggle:** support disabled ([b151771](https://github.com/devlive-community/shadcn-ui-vue-admin/commit/b151771e3b8d76b693af1bbf285583101b659859))
- **toggle:** support group ([5b7bda1](https://github.com/devlive-community/shadcn-ui-vue-admin/commit/5b7bda14689bf808d8c9e605bc8fd761f9a98375))
- **toggle:** support group multiple mode ([ae09b8c](https://github.com/devlive-community/shadcn-ui-vue-admin/commit/ae09b8c560d474e7cd2b06de965a91b8f8e80750))
- **toggle:** support size ([0efec03](https://github.com/devlive-community/shadcn-ui-vue-admin/commit/0efec03439273445b928c22a3efdcf6e66890cc9))
- **toggle:** support toggle ([f732b08](https://github.com/devlive-community/shadcn-ui-vue-admin/commit/f732b08f27a183ff843f076988d5b2dac6bb0f65))
- **switch**: support true-value and false-value([036b7b3](https://github.com/devlive-community/view-shadcn-ui/commit/036b7b32a2186b87d5c53b9d458c86792a28109c))

## 2024.3.0 (2024-11-10)

### 🐛 Bug Fixes

- **avatar:** fix square ([bf4f831](https://github.com/devlive-community/shadcn-ui-vue-admin/commit/bf4f83107deb6a75851170a87ce413986a9bfc3d))
- **button:** fixed disabled hover ([cd1ea49](https://github.com/devlive-community/shadcn-ui-vue-admin/commit/cd1ea497eb8de4dee35bc3c6317097629d31b914))
- **modal:** fix width and height ([456ecc1](https://github.com/devlive-community/shadcn-ui-vue-admin/commit/456ecc1817b762028ad855ba61b998afb3d39072))
- **modal:** replace width to auto ([dfe2a1c](https://github.com/devlive-community/shadcn-ui-vue-admin/commit/dfe2a1c7dcfa8b07d4598fc41d679c33352c51a0))
- **row col:** fix span ([beab688](https://github.com/devlive-community/shadcn-ui-vue-admin/commit/beab6883b5183e36d551e4e3a9b1f1f957bc4941))
- **select:** fix content overflow in multiple selections ([2d6c617](https://github.com/devlive-community/shadcn-ui-vue-admin/commit/2d6c61795e5ea53cfce0b1e6e8c6f3a135737c15))
- **tooltip:** fixed arrow ([cc40fb9](https://github.com/devlive-community/shadcn-ui-vue-admin/commit/cc40fb92bee66bd32206afd23c328eebd5143b03))
- **tooltip:** fixed delay ([9ba105d](https://github.com/devlive-community/shadcn-ui-vue-admin/commit/9ba105d22270cf8cce05a91c3e1ee86c2b98e2c2))
- **tooltip:** fixed position ([43e9024](https://github.com/devlive-community/shadcn-ui-vue-admin/commit/43e9024bbfaed79288464be63e5f019fde596b66))

### ✨ Features

- **avatar:** support group ([d5347f0](https://github.com/devlive-community/shadcn-ui-vue-admin/commit/d5347f08aeff4fbf58f3638cb37df460374b34fe))
- **avatar:** support group max ([20426e5](https://github.com/devlive-community/shadcn-ui-vue-admin/commit/20426e55d1a4232036ce63bbb3164285937522c7))
- **avatar:** support group size ([86a1d69](https://github.com/devlive-community/shadcn-ui-vue-admin/commit/86a1d698a9d1334904ab0c9ff78ed023987007d4))
- **avatar:** support group square ([b33646f](https://github.com/devlive-community/shadcn-ui-vue-admin/commit/b33646fffcd2eb650132b1894b8dff34df827b04))
- **divider:** optimize the left and right layout ([c09ecbd](https://github.com/devlive-community/shadcn-ui-vue-admin/commit/c09ecbd93f8f507d4dc0a1f6849755d5be7b1715))
- **drawer:** remove default footer ([b7e89ce](https://github.com/devlive-community/shadcn-ui-vue-admin/commit/b7e89ce92734ac4531c5a4027b157fb3b10a9d36))
- **form:** support array checker ([242e16f](https://github.com/devlive-community/shadcn-ui-vue-admin/commit/242e16ff11798d68336438fd1b54d38374735d71))
- **gradient text:** support gradient text ([bfadd64](https://github.com/devlive-community/shadcn-ui-vue-admin/commit/bfadd64c92609b1a497f0b0eb3842a63bd8ad4bb))
- **gradient text:** support gradient text options ([4fabda7](https://github.com/devlive-community/shadcn-ui-vue-admin/commit/4fabda7365a4fde1b37fc74e3bcc673e8b455ad4))
- **modal:** add default content slot ([6fd610b](https://github.com/devlive-community/shadcn-ui-vue-admin/commit/6fd610b6a17ff4911c2252ae42da31c05cd6a139))
- **modal:** remove default footer ([074e7d6](https://github.com/devlive-community/shadcn-ui-vue-admin/commit/074e7d6c1b7c3f5994f72b14caa537cc6cee4ff7))
- **modal:** support closable ([264739c](https://github.com/devlive-community/shadcn-ui-vue-admin/commit/264739cbfd7d66e3ae45a440d57bb46499936f3b))
- **modal:** support maskClosable ([7e84e92](https://github.com/devlive-community/shadcn-ui-vue-admin/commit/7e84e9266e46dd26909976747b07e20d90db03f5))
- **number:** support clearable ([ce932c2](https://github.com/devlive-community/shadcn-ui-vue-admin/commit/ce932c2b06048908e95b6241cc86a64243b05f2d))
- **number:** support disabled ([d2f3be5](https://github.com/devlive-community/shadcn-ui-vue-admin/commit/d2f3be506c39d4646b9f27868ff0bfe5079a4768))
- **number:** support min and max ([ae9805a](https://github.com/devlive-community/shadcn-ui-vue-admin/commit/ae9805a743caa1c5eac037d729754dd3304a2c20))
- **number:** support number ([0e068bc](https://github.com/devlive-community/shadcn-ui-vue-admin/commit/0e068bc00b8ed38c7ba4f1d5e0aa5b8b7f04df2a))
- **number:** support onBlur event ([a1867d8](https://github.com/devlive-community/shadcn-ui-vue-admin/commit/a1867d8ec6cecb7ca4c7b0466aa81c3d5b3cab6d))
- **number:** support placeholder ([426753d](https://github.com/devlive-community/shadcn-ui-vue-admin/commit/426753d2817baa80074a8c8732984cce732a39d9))
- **number:** support show controller ([a643ec3](https://github.com/devlive-community/shadcn-ui-vue-admin/commit/a643ec353f82aa8990cbbf67c43fa9ed037a9e22))
- **number:** support size ([5b34615](https://github.com/devlive-community/shadcn-ui-vue-admin/commit/5b3461523bbecf5d807252e0d64c8ff027070cac))
- **number:** support type ([baf89da](https://github.com/devlive-community/shadcn-ui-vue-admin/commit/baf89dae9b4d43a3345f63bec0554b2f5be44f60))
- **select:** add max height ([3862140](https://github.com/devlive-community/shadcn-ui-vue-admin/commit/3862140f9546ca712a6c460a718e0e5656182704))
- **select:** support border ([1ce22f2](https://github.com/devlive-community/shadcn-ui-vue-admin/commit/1ce22f25ab7a7acb1d1debe48346981262303fcc))
- **select:** support multiple ([ac2a9c0](https://github.com/devlive-community/shadcn-ui-vue-admin/commit/ac2a9c0a42dc8e31152ee676e0f1354375c93221))
- **text:** support color ([af45193](https://github.com/devlive-community/shadcn-ui-vue-admin/commit/af4519301bf19c46d5bbfba56e33072020ced86f))
- **text:** support italic ([3f2549d](https://github.com/devlive-community/shadcn-ui-vue-admin/commit/3f2549d985cd0c76f8a6c090c66d5738dc1e6521))
- **text:** support strong ([6be18a1](https://github.com/devlive-community/shadcn-ui-vue-admin/commit/6be18a15246a1c1a60af390b388cb14874cb9a4d))
- **text:** support text ([ba06e76](https://github.com/devlive-community/shadcn-ui-vue-admin/commit/ba06e76f9ce3a7a34fae11efd445c4b8152dec0b))
- **text:** support type ([ce123fa](https://github.com/devlive-community/shadcn-ui-vue-admin/commit/ce123fa772ded02bec03628ff6b14d2bf3cd5f30))
- **text:** support underline and delete ([74ee6b3](https://github.com/devlive-community/shadcn-ui-vue-admin/commit/74ee6b37c50b29fa91696f6eca70e13e3aec6437))
- **tree:** support cascade ([441428b](https://github.com/devlive-community/shadcn-ui-vue-admin/commit/441428b277a60c6e12a6731cd5dc81ae272cf385))
- **tree:** support checkable ([d1cde73](https://github.com/devlive-community/shadcn-ui-vue-admin/commit/d1cde733ebc889e1917631680f23d4ac91f56b8a))
- **tree:** support expand & collapse slot ([5bb964e](https://github.com/devlive-community/shadcn-ui-vue-admin/commit/5bb964e76c0be9ef9a4b1424143869180c789c6b))
- **tree:** support label slot ([0a15652](https://github.com/devlive-community/shadcn-ui-vue-admin/commit/0a15652fd52bc38e0c5e3cd788f09082c43395cd))
- **tree:** support lazy loading of data ([954bc5c](https://github.com/devlive-community/shadcn-ui-vue-admin/commit/954bc5c72e483d2da447d14d9386553f921bdb94))
- **tree:** support multiple ([734bb29](https://github.com/devlive-community/shadcn-ui-vue-admin/commit/734bb29a626eb1ead6439a8897addeadd4c46a7c))
- **tree:** support node disabled ([1d3b866](https://github.com/devlive-community/shadcn-ui-vue-admin/commit/1d3b866b45da1c80b1152e5f9061c8e1a9468d0f))
- **tree:** support show line ([9d0294a](https://github.com/devlive-community/shadcn-ui-vue-admin/commit/9d0294a36c5cfa82f4b417fdb66ea2cf6fa4ee1e))
- **tree:** support tree ([fe0314a](https://github.com/devlive-community/shadcn-ui-vue-admin/commit/fe0314a3e9e3c282f484d082a81e50af1266e565))
- **tree:** support v-model ([a21d9cf](https://github.com/devlive-community/shadcn-ui-vue-admin/commit/a21d9cff178e3b4306f2abaf8a5f40e79cb6571d))

## 2024.2.0 (2024-11-03)

### 📚 Documentation

- Add changelog ([96dbf67](https://github.com/qianmoq/shadcn-ui-vue-admin/commit/96dbf6788cb09afd12452ce4814be2b3486febfe))
- Add CONTRIBUTING ([6a6372d](https://github.com/qianmoq/shadcn-ui-vue-admin/commit/6a6372d8fdbea64e8066b251a78c664fbb19b996))
- Add logo ([6cc08e2](https://github.com/qianmoq/shadcn-ui-vue-admin/commit/6cc08e2d0c3643adfd4352f52c4a21aa18dbeacc))
- Optimize some styles ([d717e09](https://github.com/qianmoq/shadcn-ui-vue-admin/commit/d717e09f5b972924464fb1995e280e78674491ef))
- Restructure document arrangement ([fb8f28c](https://github.com/qianmoq/shadcn-ui-vue-admin/commit/fb8f28c35c2707c480ed4235506a0dee86b03631))

### ✨ Features

- Add component icon ([f96fcb1](https://github.com/qianmoq/shadcn-ui-vue-admin/commit/f96fcb13aaadd1b8041ef08fa258d8d5565c6554))
- **breadcrumb:** support it ([2077639](https://github.com/qianmoq/shadcn-ui-vue-admin/commit/20776392c55596ca81082257c3d4f9d304b21dc9))
- **breadcrumb:** support separator ([c66c5cb](https://github.com/qianmoq/shadcn-ui-vue-admin/commit/c66c5cb9fe10f57136614a2027beb7934f0331de))
- **button:** support group ([6af11cf](https://github.com/qianmoq/shadcn-ui-vue-admin/commit/6af11cfc35b7d1fc8b0eac42facf946cafbf6b74))
- **button:** support group ([e395b38](https://github.com/qianmoq/shadcn-ui-vue-admin/commit/e395b38fcb6f41bdfd209e102c3bb1d5d7b2769a))
- **button:** support onClickOutside event ([f6d63cf](https://github.com/qianmoq/shadcn-ui-vue-admin/commit/f6d63cf4dcd1e1cdd7b454a3920d88e69c906258))
- **button:** support router mode ([b42f4b4](https://github.com/qianmoq/shadcn-ui-vue-admin/commit/b42f4b434a36b10a4b30aa0752ec0086891d6efe))
- **button:** support submit and reset ([fb41326](https://github.com/qianmoq/shadcn-ui-vue-admin/commit/fb413264c33a594fa46cd95663fa707c316e607b))
- **card:** support border ([ab05270](https://github.com/qianmoq/shadcn-ui-vue-admin/commit/ab052706cca80dccfbae4cb385dbe1a2acb14a33))
- **card:** support onlyContentLoading ([d7b0f92](https://github.com/qianmoq/shadcn-ui-vue-admin/commit/d7b0f92540a7330c869f75e2e71f35147544e741))
- **collapse:** support it ([3f7a513](https://github.com/qianmoq/shadcn-ui-vue-admin/commit/3f7a513cd3571720e1b97c0d52c19eb46f157ef7))
- **collapse:** support on-change event ([e2194fa](https://github.com/qianmoq/shadcn-ui-vue-admin/commit/e2194fa52e06f7c460166895148bf8bcf7f7c7c6))
- **core:** add clean dependencie ([f467318](https://github.com/qianmoq/shadcn-ui-vue-admin/commit/f46731840903f74d6e90ba4174a9255641473044))
- **core:** remove invalid files ([ea878ae](https://github.com/qianmoq/shadcn-ui-vue-admin/commit/ea878ae4640b2239bbcfe58f4fa0e49cccee476d))
- **dropdown:** support divided ([871c2fd](https://github.com/qianmoq/shadcn-ui-vue-admin/commit/871c2fd3e27331142d0f187b8f96fa75751f0e4f))
- **dropdown:** support it ([d9cf877](https://github.com/qianmoq/shadcn-ui-vue-admin/commit/d9cf8772d31d6ba80aad4f9676726d133a5e572c))
- **dropdown:** support onClickOutside event ([9eec3c4](https://github.com/qianmoq/shadcn-ui-vue-admin/commit/9eec3c474b74e0e90af3f29c470e9d105099af86))
- **dropdown:** support position ([04cbb1f](https://github.com/qianmoq/shadcn-ui-vue-admin/commit/04cbb1f771b9dce2326f3722f2fe58c6804e0b60))
- **Env:** Add auto CHANGELOG ([79d7780](https://github.com/qianmoq/shadcn-ui-vue-admin/commit/79d77801438efd84a4caf1e27e2d2db84b9f1e67))
- **exception:** support 401 ([cde090e](https://github.com/qianmoq/shadcn-ui-vue-admin/commit/cde090ecaafa5616d392860a4213d54c411a6e92))
- **exception:** support it ([d52ba32](https://github.com/qianmoq/shadcn-ui-vue-admin/commit/d52ba32dddfe2d90265c1b0f302c93a4540380d2))
- **exception:** support slot ([b4359e3](https://github.com/qianmoq/shadcn-ui-vue-admin/commit/b4359e318a0fc759bbdda4554821b99b54efda28))
- **form:** support it ([45d78f1](https://github.com/qianmoq/shadcn-ui-vue-admin/commit/45d78f108b87dd681c159bf12ee1ce125997ba7b))
- **form:** support item description ([c3b1619](https://github.com/qianmoq/shadcn-ui-vue-admin/commit/c3b16192c76ea82adcabc45fc6287c96d9411782))
- **global footer:** support it ([e4038b6](https://github.com/qianmoq/shadcn-ui-vue-admin/commit/e4038b6e6ecdb317cbc08db5f40107209fc64d58))
- **highlight:** support case sensitive ([68b1c94](https://github.com/qianmoq/shadcn-ui-vue-admin/commit/68b1c942573ec517a02d585610e23beafedd55ea))
- **highlight:** support it ([fe16e89](https://github.com/qianmoq/shadcn-ui-vue-admin/commit/fe16e89354847d743910720e04ee058c7d550d83))
- **input:** support on-blur event ([592d444](https://github.com/qianmoq/shadcn-ui-vue-admin/commit/592d444a7c1fada77811d389fa56854f932949d5))
- **link:** support external ([fe08b6e](https://github.com/qianmoq/shadcn-ui-vue-admin/commit/fe08b6e19d029e4e942d8f2bcb6d3c9dc576e764))
- **link:** support it ([a92f35f](https://github.com/qianmoq/shadcn-ui-vue-admin/commit/a92f35f0f0dc7875c10b87ff10c6b336bf36a51c))
- **link:** support target ([b42c47f](https://github.com/qianmoq/shadcn-ui-vue-admin/commit/b42c47f490366f0b68f7ac3adc5c94fe5e6db176))
- **menu:** support router mode ([655d9c2](https://github.com/qianmoq/shadcn-ui-vue-admin/commit/655d9c220bc0e731d32e3936d6da6eb6e160fc1f))
- **select:** add shrink and expand indicator ([65c77cb](https://github.com/qianmoq/shadcn-ui-vue-admin/commit/65c77cb9b0f106f733e3b388f363e21d72eab429))
- **slider:** support background color ([8913585](https://github.com/qianmoq/shadcn-ui-vue-admin/commit/8913585a5db7f68995fede72777a93463c731df2))
- **slider:** support disabled ([9712e48](https://github.com/qianmoq/shadcn-ui-vue-admin/commit/9712e481a8658de95e80c4b6a8ed56de1fd17be1))
- **slider:** support it ([2ad8700](https://github.com/qianmoq/shadcn-ui-vue-admin/commit/2ad87004a749a991788ff7a2727ac174a130e14c))
- **slider:** support show step ([c27b302](https://github.com/qianmoq/shadcn-ui-vue-admin/commit/c27b302be44a49ad586b1800c042162e32a513ad))
- **slider:** support step ([26a361b](https://github.com/qianmoq/shadcn-ui-vue-admin/commit/26a361bd1e6ea5441692c5c8b63a65995f59d6e1))
- **slider:** support tip ([79579d6](https://github.com/qianmoq/shadcn-ui-vue-admin/commit/79579d6e1ea82a3d11a34f7a08f4df9487e3e149))
- **spin:** support center ([ecf78d8](https://github.com/qianmoq/shadcn-ui-vue-admin/commit/ecf78d8995f0964dbc72d03f809cef0080858e46))
- **spin:** support global import ([849efb4](https://github.com/qianmoq/shadcn-ui-vue-admin/commit/849efb4096f47441f1fba266c5514bc000b3f550))
- **spin:** support it ([7f23495](https://github.com/qianmoq/shadcn-ui-vue-admin/commit/7f234954d4ed8fe0ff3bb89691be18c797b7314a))
- **spin:** support size ([c47f6f2](https://github.com/qianmoq/shadcn-ui-vue-admin/commit/c47f6f2bb5e36df350f6a25d15e9b786cecc0f31))
- **spin:** support slot ([1ba70f6](https://github.com/qianmoq/shadcn-ui-vue-admin/commit/1ba70f6f8b340c801bdcbf3379c6a5243e958b33))
- **spin:** support type ([0d7b238](https://github.com/qianmoq/shadcn-ui-vue-admin/commit/0d7b238afe276ea6bd4c6f38b8dafb8ef9035103))
- **table:** support minHeight ([58f2807](https://github.com/qianmoq/shadcn-ui-vue-admin/commit/58f28076a2ac730500e63112a3e1058e547b0fa6))
- **table:** support size ([40ab968](https://github.com/qianmoq/shadcn-ui-vue-admin/commit/40ab968e43632a7eacf5d715ec829f0ada40423d))
- **tag:** support border ([6b4f771](https://github.com/qianmoq/shadcn-ui-vue-admin/commit/6b4f771874c7353d8128d8187538222b2ca2d6d2))
- **tag:** support closable ([a7156f2](https://github.com/qianmoq/shadcn-ui-vue-admin/commit/a7156f27ca308c0cd79f2cc5bc2c092676c445da))
- **tag:** support color ([10cd330](https://github.com/qianmoq/shadcn-ui-vue-admin/commit/10cd330318960763522cb27335bb6755a3bdfe3d))
- **tag:** support it ([448a44f](https://github.com/qianmoq/shadcn-ui-vue-admin/commit/448a44f35aff79ff4c3475eb9b8bdcd1d20ed795))
- **tag:** support on-close event ([8b5a59f](https://github.com/qianmoq/shadcn-ui-vue-admin/commit/8b5a59f8dc0be829ccf421a5ad7bc5204115ef88))
- **tag:** support type ([f7b0f41](https://github.com/qianmoq/shadcn-ui-vue-admin/commit/f7b0f414eb1c491a028c79c0f70208acd1d81e2b))
- **timeline:** add discussion example ([3262677](https://github.com/qianmoq/shadcn-ui-vue-admin/commit/3262677e49393be6769f4f7e5cc83622333b2dfe))
- **timeline:** support it ([4b22bc0](https://github.com/qianmoq/shadcn-ui-vue-admin/commit/4b22bc05c197069e5e98167a7a6bdc1063168309))
- **timeline:** support split mode ([3357e01](https://github.com/qianmoq/shadcn-ui-vue-admin/commit/3357e01f4bd697ee67734e362265862a4062a3b3))
- **toolbar footer:** support auto hide ([b9db24a](https://github.com/qianmoq/shadcn-ui-vue-admin/commit/b9db24a8f3d30141177bfb48ff7170db8a29396c))
- **toolbar footer:** support auto hide delay ([f1f6d6c](https://github.com/qianmoq/shadcn-ui-vue-admin/commit/f1f6d6c04e4a7c496d1bd04e66c35f05ec4c1a47))
- **toolbar footer:** support full width ([e761aa4](https://github.com/qianmoq/shadcn-ui-vue-admin/commit/e761aa43810b906d706a2f6f223a8d97b4424c0f))
- **toolbar footer:** support hide on scroll ([f190251](https://github.com/qianmoq/shadcn-ui-vue-admin/commit/f190251e6c550626b688d097db39db83bfb4366f))
- **toolbar footer:** support it ([c0a6311](https://github.com/qianmoq/shadcn-ui-vue-admin/commit/c0a6311160287bd06e2a532f7a61a31da470a550))
- **toolbar footer:** support scroll stop delay ([342e66d](https://github.com/qianmoq/shadcn-ui-vue-admin/commit/342e66d88960b84fbcc356e960cc98db8a5474b6))
- **toolbar footer:** support v-model ([6fc4d1a](https://github.com/qianmoq/shadcn-ui-vue-admin/commit/6fc4d1aec43fcd489c281e078013f4202804672c))
- **trend:** support it ([484cf08](https://github.com/qianmoq/shadcn-ui-vue-admin/commit/484cf080d398bb59188eb47e1afba7f306e60780))
- **trend:** support reverse ([7da4cb7](https://github.com/qianmoq/shadcn-ui-vue-admin/commit/7da4cb7b20312b8e4ef5fb85e84fcfc8275f6602))
- **trend:** support text color ([8860fba](https://github.com/qianmoq/shadcn-ui-vue-admin/commit/8860fbadef640d5c188ef7be94f52d7174d879bb))
- **utils:** support some utils ([152a663](https://github.com/qianmoq/shadcn-ui-vue-admin/commit/152a663ac5038fae0cb76e3d0eceb08f481c881c))
- **watermark:** support fullscreen ([5b7ca54](https://github.com/qianmoq/shadcn-ui-vue-admin/commit/5b7ca5455f573900f2c7d628d8dc4fc2ee035b09))
- **watermark:** support it ([dfc3f2a](https://github.com/qianmoq/shadcn-ui-vue-admin/commit/dfc3f2a06e02f53f3c84b2c58a0804bcefd10c39))

### 🐛 Bug Fixes

- **badge:** fix default value position ([65fa5de](https://github.com/qianmoq/shadcn-ui-vue-admin/commit/65fa5de2fbc31933fceb44817c3e8b70ed764d63))
- **badge:** fix default value position not passed exception ([e41e160](https://github.com/qianmoq/shadcn-ui-vue-admin/commit/e41e1607adf869db0ab905d3da5d76c6d90b5c9f))
- **button:** fixed circle ([cad2403](https://github.com/qianmoq/shadcn-ui-vue-admin/commit/cad240327d313b7f1c71900ea414733361331a9d))
- **card:** fixed custom card title style not working ([b3b7c10](https://github.com/qianmoq/shadcn-ui-vue-admin/commit/b3b7c10041d894bfb7e4dd6029eb8d9c4da4e120))
- **dropdown:** fix the problem of exceeding the container causing stretching ([ad6d072](https://github.com/qianmoq/shadcn-ui-vue-admin/commit/ad6d0723d2d1b25c82545efd73ad9fa2851443d0))
- **dropdown:** fix trigger is hover position ([e6de99a](https://github.com/qianmoq/shadcn-ui-vue-admin/commit/e6de99ad12e91d14f12d6199b594604baa2a6bf1))
- **exception:** fixed position ([9d15bf9](https://github.com/qianmoq/shadcn-ui-vue-admin/commit/9d15bf9765b588cabebba340756f3a19e05540a2))
- **exception:** fixed slot not working ([91619d4](https://github.com/qianmoq/shadcn-ui-vue-admin/commit/91619d45d5c0a3b3af21337a2ffe6bbf146938f7))
- **form:** fixed default message ([f031d13](https://github.com/qianmoq/shadcn-ui-vue-admin/commit/f031d13b46c05f63b41906880667ace1f0684f93))
- **form:** fixed not report message ([26fc28a](https://github.com/qianmoq/shadcn-ui-vue-admin/commit/26fc28a30c43d5344a02027f9f4ba058095a372d))
- **input:** fixed max width ([2bb4540](https://github.com/qianmoq/shadcn-ui-vue-admin/commit/2bb45404967c1b9cb8e4740a8fea76a8841b50fa))
- **input:** fixed null value ([3104ee5](https://github.com/qianmoq/shadcn-ui-vue-admin/commit/3104ee53baced4b8e3d64ad8f2539b84fc653562))
- **input:** fixed provide and inject type ([43b860b](https://github.com/qianmoq/shadcn-ui-vue-admin/commit/43b860b820a2033b6f97734af7f0b02c168aa387))
- **link:** fixed link style ([20f6da7](https://github.com/qianmoq/shadcn-ui-vue-admin/commit/20f6da7d76c99b10732ce63284ec43adb631452f))
- **select:** fixed the issue that custom options caused the default selection to be abnormal ([3b3ca92](https://github.com/qianmoq/shadcn-ui-vue-admin/commit/3b3ca92074620955627a174e0fc2825f97a19659))
- **select:** fixed width ([5504971](https://github.com/qianmoq/shadcn-ui-vue-admin/commit/550497131cedbca6f0c7990fef3de3728974bf5a))
- **timeline:** fixed spacing ([bdbd20c](https://github.com/qianmoq/shadcn-ui-vue-admin/commit/bdbd20c9b9693f75c06ab6de50c08e8e8f46468b))
- **tooltip:** fixed auto width ([2111a8b](https://github.com/qianmoq/shadcn-ui-vue-admin/commit/2111a8bbd69f1d36813c51bc7c872ffb1208bbc2))
- **tooltip:** fixed code compile ([9e82ce4](https://github.com/qianmoq/shadcn-ui-vue-admin/commit/9e82ce461269458a1709b2f613b73743cc7d91c2))
- **tooltip:** fixed lenght ([f73a749](https://github.com/qianmoq/shadcn-ui-vue-admin/commit/f73a749ac5473ef224b69d0eddc37ad2dc87ee6f))
- **tooltip:** fixed the problem of automatic positioning beyond the screen ([b829fd1](https://github.com/qianmoq/shadcn-ui-vue-admin/commit/b829fd1f0532ba1f4494a6d4489d772d801f8ed1))

## 2024.1.2 Release Notes

<br />

### General Changes

- [Docs] Add some config
- [Env] Optimize NPM version release script

### Component Changes

- [Row] Support row, col
- [Row] Support gutter
- [Row] Support align
- [Row] Support justify
- [Row] Support wrap
- [Col] Support span
- [Col] Support order
- [Divider] Support type
- [Divider] Support position
- [Divider] Support dashed
- [Tooltip] Support width
- [Tooltip] Support ellipsis
- [Tooltip] Support length
- [Tooltip] Support multiple lines
- [Avatar] Support size
- [Avatar] Support square
- [Avatar] Support on-success event
- [Avatar] Support on-failed event
- [Badge] Support type
- [Badge] Support text
- [Badge] Support max
- [Badge] Support dot
- [Alert] Support title
- [Alert] Support description
- [Alert] Support type
- [Alert] Support closable
- [Alert] Support icon
- [Alert] Support banner
- [Progress] Support status
- [Progress] Support size
- [Progress] Support show label
- [Space] Support size
- [Space] Support cosutom size
- [Space] Support wrap
- [Space] Support array size
- [Switch] Support type
- [Switch] Support size
- [Switch] Support disabled
- [Switch] Support open and close slot
- [Radio] Support disabled
- [Radio] Support size
- [Radio] Support type
- [Radio] Support group
- [Checkbox] Support disabled
- [Checkbox] Support size
- [Checkbox] Support type
- [Checkbox] Support group
- [Input] Fixed border style
- [Input] Support disabled
- [Input] Support password
- [Input] Support textarea
- [Select] Support disabled
- [Select] Support slot
- [Select] Support size
- [Select] Support type
- [Rate] Support max
- [Rate] Support allow half
- [Rate] Support type
- [Rate] Support disabled
- [Rate] Support show text
- [Tab] Support disabled
- [Tab] Support type
- [Tab] Support size
- [Tab] Support v-model
- [Tab] Support item icon
- [Tab] Support card
- [Tab] Support closable
- [Tab] Support extra slot
- [Tab] Support vertical mode
- [Tab] Support position
- [Tab] Add dynamic example
- [Tab] Support remove
- [Skeleton] Support animation
- [Skeleton] Support title
- [Skeleton] Support item type
- [Skeleton] Support item size
- [Layout] Support layout and header
- [Layout] Support content
- [Layout] Support footer
- [Layout] Support multiple layout
- [Layout] Fixed custom width
- [Layout] Add shadcn-layout-wrapper selector
- [Layout] Add some selector
- [Page] Support page size
- [Page] Support prev and next
- [Page] Support show max page
- [Page] Support show total
- [Page] Support sizer
- [Page] Add slot
- [Drawer] Support custom title
- [Drawer] Support closable
- [Drawer] Support mask closable
- [Drawer] Support position
- [Drawer] Support width and height
- [Menu] Support width
- [Menu] Support direction
- [Menu] Support v-model
- [Message] Support show icon
- [Message] Support type
- [Message] Support background
- [Message] Support set 0 will not be closed
- [Message] Support closeable
- [Table] Support stripe
- [Table] Support border
- [Table] Support custom column slot
- [Table] Support row click event
- [Table] Support fixed column
- [Table] Support width
- [Table] Support column width
- [Table] Support fixed shadow
- [Table] Support multiple fixed column
- [Table] Support height

## 2024.1.1 Release Notes

<br />

### General Changes

- [Core] Add release npm repository configuration
- [Core] Support compile css
- [Core] Add docs
- [Core] Replace sh to bash
- [Core] Support on-demand import

### Component Changes

- [Tree] Supports expanding parent directories by selecting subnodes
- [Tabs] Support vertical mode
- [Tab] Support check slot type
- [Card] Support loading
- [Card] Support description
- [User] User-related pages to enable ICard
- [Card] Optimize component introduction method
- [Button] Optimize component introduction method
- [Modal] Support width and height
- [Input] Support size
- [Input] Supports max length
- [Input] Supports prefix and suffix
- [Icon] Support icon
- [Icon] Support size
- [Icon] Support color
- [Copy] Support tooltip
- [Copy] Support position
- [Tooltip] Support delay
- [Tooltip] Support position
- [Tooltip] Support trigger
- [Tooltip] Support arrow
- [Code] Support theme
- [Code] Support language
- [Code] Support show line numbers
