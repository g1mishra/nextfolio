# 🤝 Contributing to Nextfolio

Thank you for considering contributing to Nextfolio! This document provides guidelines and instructions for contributing.

## 🌟 How Can I Contribute?

### Reporting Bugs

Before creating bug reports, please check the existing issues to avoid duplicates.

**When reporting a bug, include:**
- Clear, descriptive title
- Steps to reproduce the issue
- Expected vs actual behavior
- Screenshots if applicable
- Your environment (OS, browser, Node version)

**Example:**
```
Title: Contact form not sending emails

Description:
When I fill out the contact form and click submit, I get an error message
instead of a success confirmation.

Steps to Reproduce:
1. Go to /contact-me page
2. Fill in all form fields
3. Click "Send Message"
4. See error: "Failed to send message"

Expected: Success message and email sent
Actual: Error message displayed

Environment:
- OS: macOS 13.0
- Browser: Chrome 120
- Node: v18.17.0
```

### Suggesting Enhancements

Enhancement suggestions are tracked as GitHub issues.

**Include:**
- Clear description of the enhancement
- Why this enhancement would be useful
- Possible implementation approach
- Examples from other projects (if applicable)

### Pull Requests

**Process:**
1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Make your changes
4. Test thoroughly
5. Commit with clear messages
6. Push to your fork
7. Open a Pull Request

## 📝 Development Guidelines

### Setting Up Development Environment

```bash
# Clone your fork
git clone https://github.com/YOUR_USERNAME/nextfolio.git
cd nextfolio

# Install dependencies
pnpm install

# Copy example config
cp portfolio.example.json portfolio.json

# Create .env.local for testing
cp .env.example .env.local

# Start development server
pnpm dev
```

### Code Style

We use ESLint and Prettier for code consistency:

```bash
# Lint code
pnpm lint

# Format code
pnpm format
```

**Key conventions:**
- Use TypeScript for type safety
- Follow existing file structure
- Use meaningful variable names
- Add comments for complex logic
- Keep components small and focused

### Commit Messages

Follow [Conventional Commits](https://www.conventionalcommits.org/):

```
feat: add dark mode toggle
fix: correct email validation in contact form
docs: update README with deployment instructions
style: format code with prettier
refactor: simplify config loading logic
test: add unit tests for config parser
chore: update dependencies
```

### Testing Changes

Before submitting a PR:

```bash
# Build to check for errors
pnpm build

# Run linter
pnpm lint

# Test in browser
pnpm dev
# Then manually test changed features
```

**Test checklist:**
- [ ] Desktop browser (Chrome/Firefox)
- [ ] Mobile browser (responsive design)
- [ ] Contact form works
- [ ] All pages load correctly
- [ ] No console errors
- [ ] Images load properly

## 🎯 Areas Looking for Contributions

### High Priority
- [ ] Unit tests for components
- [ ] E2E tests with Playwright
- [ ] Accessibility improvements
- [ ] Performance optimizations
- [ ] Dark mode support
- [ ] Internationalization (i18n)

### Features
- [ ] Project filtering by technology
- [ ] Blog post search functionality
- [ ] RSS feed for blog
- [ ] Newsletter subscription
- [ ] Comment system for blog posts
- [ ] Analytics dashboard

### Documentation
- [ ] Video tutorial for setup
- [ ] More customization examples
- [ ] Troubleshooting guide expansion
- [ ] Translation of docs

### Design
- [ ] Additional themes
- [ ] Animation improvements
- [ ] Mobile UI enhancements
- [ ] Loading states

## 📁 Project Structure

Understanding the codebase:

```
nextfolio/
├── app/                    # Next.js app router pages
│   ├── about-me/          # About page & routes
│   ├── blog/              # Blog pages
│   ├── contact-me/        # Contact page
│   ├── projects/          # Projects showcase
│   └── api/               # API routes
│
├── components/            # React components
│   ├── about-me/         # About page components
│   ├── contact-me/       # Contact components
│   ├── footer/           # Footer component
│   ├── code-showcase/    # Interactive code viewer component
│   └── navbar/           # Navigation
│
├── lib/                   # Utilities & helpers
│   ├── config.ts         # Config loader
│   ├── constants.tsx     # Constants
│   ├── blog.ts           # Blog utilities
│   └── projects.ts       # Project utilities
│
├── types/                # TypeScript types
│   ├── portfolio.ts      # Portfolio config types
│   └── common.ts         # Common types
│
└── public/               # Static assets
```

## 🔍 Code Review Process

All submissions require review. We look for:

1. **Functionality:** Does it work as intended?
2. **Code Quality:** Is it clean and maintainable?
3. **Performance:** Does it impact load times?
4. **Documentation:** Are changes documented?
5. **Tests:** Are there tests (if applicable)?
6. **Breaking Changes:** Will it break existing setups?

## 🎨 Design Principles

When contributing, keep these in mind:

1. **Simplicity:** Easy to use and understand
2. **Customizability:** Users should be able to personalize
3. **Performance:** Fast load times are crucial
4. **Accessibility:** Everyone should be able to use it
5. **Mobile-First:** Works great on all devices
6. **Developer Experience:** Easy to set up and maintain

## 📋 Pull Request Template

When opening a PR, include:

```markdown
## Description
Brief description of changes

## Type of Change
- [ ] Bug fix
- [ ] New feature
- [ ] Breaking change
- [ ] Documentation update

## Testing
Describe how you tested your changes

## Screenshots (if applicable)
Add screenshots showing the changes

## Checklist
- [ ] My code follows the project's style
- [ ] I have tested my changes
- [ ] I have updated documentation
- [ ] My changes don't break existing features
- [ ] I have added tests (if applicable)
```

## 🐛 Debugging Tips

### Common Issues

**Build Errors:**
```bash
# Clear cache and rebuild
rm -rf .next
pnpm build
```

**Type Errors:**
```bash
# Check TypeScript
pnpm tsc --noEmit
```

**Import Issues:**
```bash
# Verify paths in tsconfig.json
# Check that imports use correct aliases
```

## 💬 Communication

- **Questions:** Open a GitHub Discussion
- **Bugs:** Create a GitHub Issue
- **Features:** Discuss in Issues first
- **Security:** Email privately to g1mishra.dev@gmail.com

## 🏆 Recognition

Contributors will be:
- Listed in README.md
- Mentioned in release notes
- Credited in documentation

## 📜 License

By contributing, you agree that your contributions will be licensed under the MIT License.

## 🙏 Thank You!

Every contribution, no matter how small, makes this project better. Thank you for being part of the Nextfolio community!

---

**Questions?** Feel free to ask in:
- GitHub Discussions
- GitHub Issues
- Email: g1mishra.dev@gmail.com

Happy Contributing! 🚀
