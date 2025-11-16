# Contributing to FaultMaven Website

Thank you for your interest in contributing to the FaultMaven website! We welcome contributions from the community, especially for documentation improvements, bug fixes, and feature enhancements.

## 🎯 Types of Contributions

### 1. Documentation Improvements
- Fix typos and grammatical errors
- Improve clarity and readability
- Add missing documentation
- Update outdated information
- Add code examples

### 2. Bug Reports
- Report broken links
- Identify UI/UX issues
- Report accessibility problems
- Find performance bottlenecks

### 3. Feature Requests
- Suggest new website features
- Propose design improvements
- Request new documentation sections

### 4. Code Contributions
- Fix bugs
- Implement new features
- Improve performance
- Enhance accessibility

## 🚀 Getting Started

### Prerequisites

- Node.js v18 or higher
- PNPM package manager
- Git

### Setup Development Environment

1. **Fork the repository**
   - Visit https://github.com/FaultMaven/faultmaven-website
   - Click the "Fork" button in the top right

2. **Clone your fork**
   ```bash
   git clone https://github.com/YOUR_USERNAME/faultmaven-website.git
   cd faultmaven-website
   ```

3. **Add upstream remote**
   ```bash
   git remote add upstream https://github.com/FaultMaven/faultmaven-website.git
   ```

4. **Install dependencies**
   ```bash
   pnpm install
   ```

5. **Start development server**
   ```bash
   pnpm dev
   ```

## 📝 Making Changes

### 1. Create a Branch

Always create a new branch for your changes:

```bash
# Update your fork
git checkout main
git pull upstream main

# Create a new branch
git checkout -b docs/fix-installation-guide
# or
git checkout -b feature/add-search-functionality
```

### Branch Naming Convention

- `docs/*` - Documentation changes
- `feature/*` - New features
- `fix/*` - Bug fixes
- `refactor/*` - Code refactoring
- `style/*` - UI/styling changes

### 2. Make Your Changes

- Edit the relevant files
- Follow the existing code style
- Test your changes locally
- Ensure no TypeScript errors

### 3. Test Your Changes

```bash
# Run development server
pnpm dev

# Type checking
pnpm type-check

# Linting
pnpm lint

# Build for production (optional)
pnpm build
```

### 4. Commit Your Changes

We follow [Conventional Commits](https://www.conventionalcommits.org/):

```bash
git add .
git commit -m "docs: fix typo in installation guide"
```

**Commit Types:**
- `docs:` - Documentation only changes
- `feat:` - A new feature
- `fix:` - A bug fix
- `style:` - Changes that don't affect code meaning (white-space, formatting)
- `refactor:` - Code change that neither fixes a bug nor adds a feature
- `perf:` - Performance improvements
- `test:` - Adding or updating tests
- `chore:` - Maintenance tasks

**Examples:**
```
docs: update README with new deployment instructions
feat: add dark mode toggle
fix: resolve mobile navigation overflow
style: format code with prettier
refactor: simplify header component logic
```

### 5. Push to Your Fork

```bash
git push origin docs/fix-installation-guide
```

### 6. Create Pull Request

1. Go to https://github.com/FaultMaven/faultmaven-website
2. Click "New Pull Request"
3. Click "compare across forks"
4. Select your fork and branch
5. Fill out the PR template
6. Submit the pull request

## 📋 Pull Request Guidelines

### PR Title

Use the same format as commit messages:

```
docs: improve installation instructions
feat: add search functionality to documentation
fix: resolve mobile menu closing issue
```

### PR Description

Provide a clear description:

```markdown
## Description
Brief summary of what this PR does

## Changes
- Change 1
- Change 2
- Change 3

## Screenshots (if applicable)
[Add screenshots for UI changes]

## Testing
- [ ] Tested locally
- [ ] No TypeScript errors
- [ ] No linting errors
- [ ] Tested on mobile devices (if UI change)

## Related Issues
Closes #123
```

### PR Checklist

Before submitting, ensure:

- [ ] Code follows project style guidelines
- [ ] Self-review completed
- [ ] Comments added for complex code
- [ ] Documentation updated (if needed)
- [ ] No new warnings or errors
- [ ] Tested locally
- [ ] Commit messages follow convention
- [ ] PR title follows convention

## 🎨 Code Style Guidelines

### TypeScript

- Use TypeScript for all components
- Define proper types and interfaces
- Avoid using `any`
- Use functional components with hooks

```typescript
// Good
interface ButtonProps {
  variant?: 'primary' | 'secondary';
  children: React.ReactNode;
  onClick?: () => void;
}

export default function Button({ variant = 'primary', children, onClick }: ButtonProps) {
  return (
    <button className={`btn-${variant}`} onClick={onClick}>
      {children}
    </button>
  );
}

// Avoid
export default function Button(props: any) {
  return <button {...props} />;
}
```

### Component Structure

```typescript
// 1. Imports
import { useState } from 'react';
import { Button } from '@/components/ui/Button';

// 2. Types/Interfaces
interface ComponentProps {
  title: string;
  description?: string;
}

// 3. Component
export default function Component({ title, description }: ComponentProps) {
  // 3a. Hooks
  const [isOpen, setIsOpen] = useState(false);

  // 3b. Event handlers
  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  // 3c. Render
  return (
    <div>
      <h1>{title}</h1>
      {description && <p>{description}</p>}
      <Button onClick={handleClick}>Toggle</Button>
    </div>
  );
}
```

### CSS/Tailwind

- Use Tailwind utility classes
- Create reusable components for repeated patterns
- Follow mobile-first approach
- Use semantic HTML

```tsx
// Good - Mobile first, semantic HTML
<article className="w-full md:w-1/2 lg:w-1/3 p-4">
  <h2 className="text-xl font-bold mb-2">Title</h2>
  <p className="text-gray-600">Description</p>
</article>

// Avoid - Desktop first, non-semantic
<div className="lg:w-1/3 md:w-1/2 w-full p-4">
  <div className="text-xl font-bold mb-2">Title</div>
  <div className="text-gray-600">Description</div>
</div>
```

## 🐛 Reporting Issues

### Before Creating an Issue

1. Search existing issues
2. Check if it's already fixed in latest version
3. Verify it's reproducible

### Creating a Good Issue

Use the issue templates provided:

**Bug Report:**
```markdown
## Description
Clear description of the bug

## Steps to Reproduce
1. Go to '...'
2. Click on '...'
3. Scroll down to '...'
4. See error

## Expected Behavior
What should happen

## Actual Behavior
What actually happens

## Screenshots
If applicable

## Environment
- OS: [e.g., macOS 13.0]
- Browser: [e.g., Chrome 120]
- Device: [e.g., Desktop, iPhone 14]
```

**Feature Request:**
```markdown
## Feature Description
Clear description of the feature

## Use Case
Why this feature would be useful

## Proposed Solution
How you think it should work

## Alternatives Considered
Other solutions you've thought about
```

## 🔍 Code Review Process

1. **Automated Checks**: CI/CD runs tests and linting
2. **Maintainer Review**: A maintainer will review your PR
3. **Feedback**: Address any requested changes
4. **Approval**: PR gets approved
5. **Merge**: Maintainer merges the PR

### Review Timeline

- Small PRs (docs, typos): 1-2 days
- Medium PRs (features): 3-7 days
- Large PRs (major changes): 1-2 weeks

## 📞 Getting Help

- **Questions**: Create a GitHub Discussion
- **Bugs**: Create a GitHub Issue
- **Email**: support@faultmaven.ai

## 📜 Code of Conduct

### Our Pledge

We are committed to providing a welcoming and inspiring community for all.

### Expected Behavior

- Be respectful and inclusive
- Accept constructive criticism gracefully
- Focus on what's best for the community
- Show empathy towards others

### Unacceptable Behavior

- Harassment or discrimination
- Trolling or insulting comments
- Public or private harassment
- Publishing others' private information

## 🏆 Recognition

Contributors will be:
- Listed in the repository contributors
- Mentioned in release notes (for significant contributions)
- Thanked in our documentation

## ❓ Questions?

Feel free to:
- Open a GitHub Discussion
- Email us at support@faultmaven.ai
- Create an issue

---

Thank you for contributing to FaultMaven! 🎉
