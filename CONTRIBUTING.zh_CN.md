# 贡献指南

感谢您考虑为我们的项目做出贡献！本指南将帮助您了解如何参与项目开发，包括提交代码、报告问题、提出建议等各个方面。我们重视每一位贡献者的付出，并致力于使贡献过程尽可能顺畅。

## 行为准则

我们采用 [贡献者公约](CODE_OF_CONDUCT.md) 作为行为准则。作为项目参与者，您需要遵守以下原则：

- 使用友善和包容的语言
- 尊重不同的观点和经验
- 耐心地接受建设性批评
- 关注于最有利于社区的事情
- 对其他社区成员表示同理心

如发现违反行为准则的情况，请通过 [邮箱](mailto:community@devlive.org) 报告。

## 首次贡献者指南

如果这是您第一次为开源项目做贡献，我们为您准备了详细的步骤：

1. 在 GitHub 上注册账号
2. Fork 本项目仓库
3. 克隆您的 Fork 到本地：
   ```bash
   git clone https://github.com/您的用户名/view-shadcn-ui.git
   cd view-shadcn-ui
   ```
4. 创建新分支：
   ```bash
   git checkout -b my-contribution
   ```
5. 进行修改并提交
6. 推送到您的 Fork：
   ```bash
   git push origin my-contribution
   ```
7. 创建 Pull Request

我们专门为新手准备了标记为 `good first issue` 的任务，这些是很好的起点。

## 如何贡献

### 报告 Bug

提交 Bug 报告时，请使用我们提供的 Issue 模板，并包含以下信息：

```markdown
### 问题描述
[清晰简洁地描述 Bug]

### 复现步骤
1. 进入到 '...'
2. 点击 '....'
3. 滚动到 '....'
4. 发现错误

### 预期行为
[描述应该发生什么]

### 实际行为
[描述实际发生了什么]

### 环境信息
- 操作系统：[例如 Windows 10]
- 浏览器：[例如 Chrome 90.0]
- 项目版本：[例如 v1.2.3]

### 其他信息
[如截图、错误日志等]
```

### 提出新功能

新功能建议应包含：

1. 功能描述
2. 使用场景
3. 预期效果
4. 可能的实现方案
5. 替代方案考虑

请使用 Feature Request 模板创建 Issue。

### 提交代码

1. 确保本地开发环境配置正确
2. 创建特性分支：
   ```bash
   git checkout -b feature/your-feature-name
   ```
3. 编写代码和测试用例
4. 运行测试套件：
   ```bash
   npm run test
   ```
5. 提交代码（遵循提交规范）
6. 保持分支与主仓库同步：
   ```bash
   git remote add upstream https://github.com/devlive-community/view-shadcn-ui.git
   git fetch upstream
   git rebase upstream/dev
   ```

### 文档贡献

文档是项目的重要组成部分，我们欢迎：

- 修正文档错误
- 改进文档描述
- 添加代码示例
- 编写教程

## 开发流程

1. 选择或创建 Issue
2. 在 Issue 中讨论实现方案
3. 编写代码和测试
4. 提交 Pull Request
5. 代码审查
6. 合并代码

## 代码风格

我们使用以下工具确保代码风格一致：

- ESLint：JavaScript/TypeScript 代码检查
- Prettier：代码格式化
- EditorConfig：编辑器配置

项目根目录包含相关配置文件：
```bash
.
├── .eslintrc.js
├── .prettierrc
└── .editorconfig
```

在提交代码前运行：
```bash
pnpm run lint
pnpm run format
```

## 提交规范

我们使用严格的提交信息格式：

```
<类型>(<范围>): <描述>

[可选 正文]

[可选 脚注]
```

类型必须是以下之一：

- `feat`: 新功能
- `fix`: Bug 修复
- `docs`: 仅文档更改
- `style`: 不影响代码含义的更改（空格、格式化等）
- `refactor`: 既不修复错误也不添加功能的代码更改
- `perf`: 提高性能的代码更改
- `test`: 添加或修正测试
- `chore`: 构建过程或辅助工具的变动
- `revert`: 撤销之前的提交

范围应该是受影响的模块名称。

示例：
```
feat(auth): 实现基于 JWT 的身份验证

- 添加 JWT 中间件
- 实现令牌生成和验证
- 添加用户认证路由
- 集成 Redis 存储刷新令牌

close (#123)
```

## Pull Request 规范

PR 标题应遵循与提交消息相同的格式。PR 描述应包含：

1. 相关 Issue 链接
2. 改动说明
3. 测试方法
4. 截图（如适用）
5. 文档更新（如适用）

PR 检查清单：

- [ ] 代码符合项目风格指南
- [ ] 添加/更新测试用例
- [ ] 更新相关文档
- [ ] 所有 CI 检查通过
- [ ] 至少一位维护者审查通过

## 开发环境设置

1. 系统要求：
    - Node.js >= 16
    - pnpm >= 7
    - Git

2. 安装依赖：
   ```bash
   pnpm install
   ```

3. 启动开发服务器：
   ```bash
   pnpm run dev
   ```

## 项目结构

```
.
├── src/              # 源代码目录
│   ├── ui/           # 组件
│   └── utils/        # 工具函数
└── docs/             # 文档
```

## 分支管理

- `dev`: 主分支，始终保持稳定
- `dev`: 开发分支
- `feature/*`: 新功能分支
- `bugfix/*`: Bug 修复分支
- `release/*`: 发布分支
- `hotfix/*`: 紧急修复分支

## 版本发布流程

1. 从 `dev` 创建 `release` 分支
2. 更新版本号（遵循 [语义化版本](https://semver.org/lang/zh-CN/)）
3. 更新 CHANGELOG.md
4. 进行发布测试
5. 合并到 `dev`
6. 打标签并发布

## 常见问题

**Q: 如何处理合并冲突？**
A: 保持分支同步，使用 `git rebase` 而不是 `merge`，必要时与其他贡献者协调。

**Q: 测试失败怎么办？**
A: 检查测试日志，确保所有依赖都正确安装，并且环境变量配置正确。

**Q: 需要多久才能得到 PR 审查？**
A: 我们努力在 2 个工作日内回复所有 PR。

## 获取帮助

- 查阅 [文档](#)
- 在 [Discussions](#) 中提问
- 加入我们的 [Discord](#) 社区
- 发送邮件至 [support@example.com](mailto:community@devlive.org)

## 表示感谢

我们会在 README 中致谢所有贡献者。重要贡献者也会被邀请成为项目维护者。

感谢您为开源社区做出的贡献！
