# Contributing Guide

Thank you for considering contributing to our project! This guide will help you understand how to participate in project development, including submitting code, reporting issues, and making suggestions. We value every contributor's effort and strive to make the contribution process as smooth as possible.

## Code of Conduct

We adopt the [Contributor Covenant](CODE_OF_CONDUCT.md) as our code of conduct. As a project participant, you need to follow these principles:

- Use welcoming and inclusive language
- Be respectful of differing viewpoints and experiences
- Gracefully accept constructive criticism
- Focus on what is best for the community
- Show empathy towards other community members

If you observe violations of the code of conduct, please report them via [email](mailto:community@devlive.org).

## First-time Contributors Guide

If this is your first time contributing to an open source project, we've prepared detailed steps for you:

1. Register a GitHub account
2. Fork this repository
3. Clone your fork locally:
   ```bash
   git clone https://github.com/your-username/view-shadcn-ui.git
   cd view-shadcn-ui
   ```
4. Create a new branch:
   ```bash
   git checkout -b my-contribution
   ```
5. Make changes and commit them
6. Push to your fork:
   ```bash
   git push origin my-contribution
   ```
7. Create a Pull Request

We have specially prepared tasks marked with `good first issue` for newcomers, which are great starting points.

## How to Contribute

### Reporting Bugs

When submitting a bug report, please use our Issue template and include the following information:

```markdown
### Description
[Clear and concise description of the bug]

### Steps to Reproduce
1. Go to '...'
2. Click on '....'
3. Scroll down to '....'
4. See error

### Expected Behavior
[Describe what should happen]

### Actual Behavior
[Describe what actually happened]

### Environment
- OS: [e.g., Windows 10]
- Browser: [e.g., Chrome 90.0]
- Project Version: [e.g., v1.2.3]

### Additional Information
[Such as screenshots, error logs, etc.]
```

### Suggesting New Features

Feature suggestions should include:

1. Feature description
2. Use cases
3. Expected outcome
4. Possible implementation approaches
5. Alternative solutions considered

Please use the Feature Request template to create an Issue.

### Submitting Code

1. Ensure your local development environment is properly configured
2. Create a feature branch:
   ```bash
   git checkout -b feature/your-feature-name
   ```
3. Write code and test cases
4. Run the test suite:
   ```bash
   npm run test
   ```
5. Commit code (following commit conventions)
6. Keep your branch synchronized with the main repository:
   ```bash
   git remote add upstream https://github.com/devlive-community/view-shadcn-ui.git
   git fetch upstream
   git rebase upstream/dev
   ```

### Documentation Contributions

Documentation is an essential part of the project. We welcome:

- Correction of documentation errors
- Improvement of documentation descriptions
- Addition of code examples
- Writing tutorials

## Development Process

1. Choose or create an Issue
2. Discuss implementation approach in the Issue
3. Write code and tests
4. Submit Pull Request
5. Code review
6. Merge code

## Code Style

We use the following tools to ensure consistent code style:

- ESLint: JavaScript/TypeScript code checking
- Prettier: Code formatting
- EditorConfig: Editor configuration

The project root directory contains related configuration files:
```bash
.
├── .eslintrc.js
├── .prettierrc
└── .editorconfig
```

Run before submitting code:
```bash
pnpm run lint
pnpm run format
```

## Commit Conventions

We use a strict commit message format:

```
<type>(<scope>): <description>

[optional body]

[optional footer]
```

Types must be one of the following:

- `feat`: New feature
- `fix`: Bug fix
- `docs`: Documentation only changes
- `style`: Changes that do not affect code meaning (spacing, formatting, etc.)
- `refactor`: Code changes that neither fix a bug nor add a feature
- `perf`: Code changes that improve performance
- `test`: Adding or correcting tests
- `chore`: Changes to build process or auxiliary tools
- `revert`: Revert previous commits

Scope should be the name of the affected module.

Example:
```
feat(auth): implement JWT-based authentication

- Add JWT middleware
- Implement token generation and validation
- Add user authentication routes
- Integrate Redis for refresh token storage

close (#123)
```

## Pull Request Guidelines

PR titles should follow the same format as commit messages. PR descriptions should include:

1. Related Issue links
2. Change description
3. Testing methods
4. Screenshots (if applicable)
5. Documentation updates (if applicable)

PR Checklist:

- [ ] Code follows project style guidelines
- [ ] Added/updated test cases
- [ ] Updated related documentation
- [ ] All CI checks pass
- [ ] At least one maintainer review approval

## Development Environment Setup

1. System requirements:
   - Node.js >= 16
   - pnpm >= 7
   - Git

2. Install dependencies:
   ```bash
   pnpm install
   ```

3. Start development server:
   ```bash
   pnpm run dev
   ```

## Project Structure

```
.
├── src/              # Source code directory
│   ├── ui/           # Components
│   └── utils/        # Utility functions
└── docs/             # Documentation
```

## Branch Management

- `dev`: Main branch, always stable
- `dev`: Development branch
- `feature/*`: New feature branches
- `bugfix/*`: Bug fix branches
- `release/*`: Release branches
- `hotfix/*`: Emergency fix branches

## Release Process

1. Create `release` branch from `dev`
2. Update version number (following [Semantic Versioning](https://semver.org/))
3. Update CHANGELOG.md
4. Conduct release testing
5. Merge into `dev`
6. Tag and release

## FAQ

**Q: How to handle merge conflicts?**
A: Keep branches synchronized, use `git rebase` instead of `merge`, coordinate with other contributors when necessary.

**Q: What if tests fail?**
A: Check test logs, ensure all dependencies are correctly installed, and environment variables are properly configured.

**Q: How long until PR review?**
A: We strive to respond to all PRs within 2 business days.

## Getting Help

- Read the [Documentation](#)
- Ask in [Discussions](#)
- Join our [Discord](#) community
- Email us at [community@devlive.org](mailto:community@devlive.org)

## Acknowledgments

We acknowledge all contributors in our README. Significant contributors may be invited to become project maintainers.

Thank you for contributing to the open source community!
