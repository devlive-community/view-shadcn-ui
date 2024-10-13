<div style="text-align: center;">

# View Shadcn UI

![Visitors](https://api.visitorbadge.io/api/visitors?path=https%3A%2F%2Fgithub.com%2Fdevlive-community%2Fshadcn-ui-vue-admin&countColor=%23263759&style=flat)
[![](https://tokei.rs/b1/github/devlive-community/shadcn-ui-vue-admin)](https://github.com/devlive-community/shadcn-ui-vue-admin)
![version](https://img.shields.io/github/v/release/devlive-community/shadcn-ui-vue-admin.svg)

![GitHub](https://img.shields.io/github/license/devlive-community/shadcn-ui-vue-admin)
[![Push code checker](https://github.com/devlive-community/shadcn-ui-vue-admin/actions/workflows/checker.yml/badge.svg)](https://github.com/devlive-community/shadcn-ui-vue-admin/actions/workflows/checker.yml)
![GitHub Release Date](https://img.shields.io/github/release-date/devlive-community/shadcn-ui-vue-admin?style=flat-square)

![GitHub commit activity](https://img.shields.io/github/commit-activity/y/devlive-community/shadcn-ui-vue-admin?style=flat-square)
![GitHub contributors](https://img.shields.io/github/contributors-anon/devlive-community/shadcn-ui-vue-admin?style=flat-square)
![GitHub last commit](https://img.shields.io/github/last-commit/devlive-community/shadcn-ui-vue-admin?style=flat-square)

View Shadcn UI is a component library built on Shadcn UI and Tailwind CSS.

</div>

## Install & Use

```bash
pnpm i view-shadcn-ui
# or
npm install view-shadcn-ui
# or
yarn add view-shadcn-ui
```

## Import and register component

```ts
import { createApp } from 'vue'
import App from './App.vue'

import ViewShadcnUI from 'view-shadcn-ui'
import 'view-shadcn-ui-1/dist/view-shadcn-ui.css'

const app = createApp(App)
app.use(ViewShadcnUI)
```
