# Contributing to Launchly

First off, thank you for considering contributing to Launchly! It's people like you that make open source projects great.

## How to Contribute

### Reporting Bugs

Before creating bug reports, please check the issue list as you might find out that you don't need to create one. When you are creating a bug report, please include as many details as possible:

- Use a clear and descriptive title
- Describe the exact steps which reproduce the problem
- Provide specific examples to demonstrate the steps
- Describe the behavior you observed after following the steps
- Explain which behavior you expected to see instead and why
- Include screenshots if possible

### Suggesting Enhancements

Enhancement suggestions are tracked as GitHub issues. When creating an enhancement suggestion, please include:

- Use a clear and descriptive title
- Provide a step-by-step description of the suggested enhancement
- Provide specific examples to demonstrate the steps
- Describe the current behavior and explain which behavior you expected to see instead
- Explain why this enhancement would be useful

### Your First Code Contribution

Unsure where to begin contributing? You can start by looking through these `beginner` and `help-wanted` issues:

- Beginner issues - issues which should only require a few lines of code
- Help wanted issues - issues which should be a bit more involved than `beginner` issues

### Pull Requests

1. Fork the repo and create your branch from `main`
2. If you've added code that should be tested, add tests
3. If you've changed APIs, update the documentation
4. Ensure the test suite passes
5. Make sure your code lints
6. Issue that pull request!

## Development Setup

1. Clone the repository
2. Install dependencies: `npm install`
3. Start the development server: `npm run dev`
4. Make your changes
5. Test your changes: `npm run build`
6. Lint your code: `npm run lint`

## Code Style

- Use TypeScript for all new code
- Follow the existing code style and patterns
- Use meaningful variable and function names
- Add comments for complex logic
- Keep functions small and focused

## Project Structure

```
src/
├── components/
│   ├── landing/          # Landing page specific components
│   └── ui/               # Reusable UI components (shadcn/ui)
├── hooks/                # Custom React hooks
├── lib/                  # Utility functions and configurations
├── pages/                # Page components
└── main.tsx             # Application entry point
```

## Questions?

Don't hesitate to ask questions by creating an issue with the `question` label.

Thank you for contributing! 🚀 