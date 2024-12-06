# React Zustand Vite TypeScript Template

<div align="center">

![Modern Startup Template](https://img.shields.io/badge/Modern-Startup_Template-blue?style=for-the-badge&logo=react)

[![React](https://img.shields.io/badge/React-18.3.1-61DAFB?style=flat-square&logo=react)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.5.3-3178C6?style=flat-square&logo=typescript)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-5.4.2-646CFF?style=flat-square&logo=vite)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4.1-38B2AC?style=flat-square&logo=tailwind-css)](https://tailwindcss.com/)
[![Zustand](https://img.shields.io/badge/Zustand-4.5.2-orange?style=flat-square)](https://github.com/pmndrs/zustand)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](http://makeapullrequest.com)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=flat-square)](https://opensource.org/licenses/MIT)
[![Code Style](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://prettier.io/)
[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)
[![tested with vitest](https://img.shields.io/badge/tested_with-vitest-green.svg?style=flat-square)](https://vitest.dev)

<p align="center">
  <strong>A modern, production-ready template for building scalable React applications with TypeScript, Zustand, and Vite.</strong><br>
  Production-ready • Fully typed • Modern stack
</p>

[Demo](https://react-zustand-vite-ts-temp.vercel.app/) •
[Features](#-features) •
[Quick Start](#-quick-start) •
[Documentation](#-documentation)

</div>

## ✨ Features

- ⚡️ **Vite** - Lightning fast build tool and dev server
- ⚛️ **React 18** - Latest React features
- 📘 **TypeScript** - Type safety and better DX
- 🗃️ **Zustand** - Simple state management
- 🎨 **Tailwind CSS** - Utility-first CSS
- 📝 **React Hook Form** - Form handling
- 🧪 **Testing Setup** - Vitest and React Testing Library
- 🔧 **Code Quality** - ESLint, Prettier, and Husky
- 📦 **Docker Ready** - Basic containerization
- 🚀 **CI/CD** - GitHub Actions setup
- 📄 **Documentation** - Comprehensive docs

## 🚀 Quick Start

### Prerequisites

- Node.js 16.x or later
- npm or yarn
- Git

### Installation

1. Clone the repository:

```bash
git clone https://github.com/AmirHaytham/React-Zustand-Vite-TS-temp.git
cd React-Zustand-Vite-TS-temp
```

2. Install dependencies:

```bash
npm install
```

3. Set up environment variables:

```bash
cp .env.example .env
```

4. Start development server:

```bash
npm run dev
```

Visit `http://localhost:3000` to see your app!

## 🛠️ Available Scripts

```bash
# Development
npm run dev         # Start development server
npm run build      # Build for production
npm run preview    # Preview production build

# Testing
npm run test       # Run tests
npm run test:coverage # Run tests with coverage

# Code Quality
npm run lint       # Run ESLint
npm run format     # Format with Prettier

# Git Hooks
npm run prepare    # Install husky hooks
```

## Tech Stack

- [React](https://reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vitejs.dev/)
- [Zustand](https://zustand-demo.pmnd.rs/)
- [Tailwind CSS](https://tailwindcss.com/)
- [React Hook Form](https://react-hook-form.com/)
- [Vitest](https://vitest.dev/)
- [React Testing Library](https://testing-library.com/)
- [Docker](https://www.docker.com/)
- [Vercel](https://vercel.com/)

## 📁 Project Structure

```
├── src/
│   ├── components/
│   │   ├── common/       # Shared components
│   │   ├── layout/       # Layout components
│   │   │   └── AppLayout.tsx
│   │   └── leads/        # Lead management
│   │       ├── LeadForm.tsx
│   │       └── LeadForm.test.tsx
│   ├── store/
│   │   └── useStore.ts   # Zustand store
│   ├── assets/          # Static assets
│   ├── App.tsx          # Root component
│   ├── App.css          # Root styles
│   ├── main.tsx         # Entry point
│   ├── index.css        # Global styles
│   └── setupTests.ts    # Test configuration
├── public/              # Public assets
├── docs/               # Documentation
│   └── TECHNICAL.md
├── config/             # Configuration files
│   ├── .env.example
│   ├── .env
│   ├── tsconfig.json
│   ├── vite.config.ts
│   ├── tailwind.config.js
│   └── eslint.config.js
├── .github/            # GitHub workflows
├── .husky/             # Git hooks
│   ├── pre-commit
│   └── commit-msg
└── docker/             # Docker configuration
    ├── Dockerfile
    └── docker-compose.yml
```

## 🐳 Docker

### Using Docker Compose (Recommended)

```bash
# Start the app
docker-compose up

# Stop the app
docker-compose down
```

### Manual Docker Commands

```bash
# Build the image
docker build -t react-app .

# Run the container
docker run -p 3000:3000 react-app
```

## 🧪 Testing

This template uses Vitest and React Testing Library. Example tests are included in the `src/components` directory.

```bash
# Run tests in watch mode
npm run test

# Run tests with coverage
npm run test:coverage
```

## ⚙️ Environment Variables

Create a `.env` file in the root directory:

```env
# App Configuration
VITE_APP_NAME=React Startup
VITE_APP_VERSION=1.0.0

# Development
VITE_DEV_PORT=3000
VITE_DEV_HOST=localhost

# API Configuration
VITE_API_URL=https://api.example.com

# Production
VITE_PROD_URL=https://your-app.com

# Analytics
VITE_ANALYTICS_ID=UA-XXXXX-Y
```

> Note: All environment variables must be prefixed with `VITE_` to be accessible in the app.

## 🚀 Deployment

### Vercel Deployment

1. Connect your GitHub repository to Vercel
2. Configure build settings:
   - Build Command: `npm run build`
   - Output Directory: `dist`
   - Install Command: `npm install`
3. Add environment variables from `.env`
4. Deploy!

### Manual Deployment

1. Build the project:

```bash
npm run build
```

2. Test the production build:

```bash
npm run preview
```

3. Deploy the `dist` folder to your hosting provider

## 🔒 Security

Our template includes basic security practices:

- ✅ Environment variables protection through `.env`
- ✅ TypeScript type safety
- ✅ Dependency management with npm/yarn
- ✅ ESLint security rules
- ✅ Secure development practices

## 📊 Analytics

The template is prepared for analytics integration through environment variables (`VITE_ANALYTICS_ID`). You can easily add your preferred analytics solution.

## 🌐 Browser Support

- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)
- ✅ Opera (latest)

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🤝 Contributing

We love your input! We want to make contributing as easy and transparent as possible. Please read our [Contributing Guide](CONTRIBUTING.md) for details on:

- Code of Conduct
- Development process
- Bug reports
- Feature requests
- Pull requests
- Code review process

---

<div align="center">

Made with ❤️ by [Amir Haytham](https://github.com/AmirHaytham)

[![Star History Chart](https://api.star-history.com/svg?repos=AmirHaytham/React-Zustand-Vite-TS-temp&type=Date)](https://star-history.com/#AmirHaytham/React-Zustand-Vite-TS-temp&Date)

</div>
