# Modern Startup Template

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

<p align="center">
  <strong>A modern, full-featured startup template built with React, TypeScript, and Tailwind CSS.</strong><br>
  Production-ready • Fully typed • Modern stack
</p>

[Demo](https://react-zustand-vite-ts-temp.vercel.app/) •
[Key Features](#features) •
[Quick Start](#getting-started) •
[Documentation](#documentation)

</div>

## ✨ Features

- 🎨 **Modern UI** - Beautiful and responsive design with Tailwind CSS
- 📱 **Fully Responsive** - Mobile-first approach for all screen sizes
- 🔄 **State Management** - Efficient state handling with Zustand
- 📝 **Form Management** - Easy form handling with React Hook Form
- 🎯 **TypeScript** - Full type safety and better developer experience
- 🚀 **Fast Development** - Lightning-fast HMR with Vite
- 📊 **Dashboard Ready** - Pre-built dashboard with metrics
- 👥 **Lead Management** - Complete lead tracking system
- 📅 **Activity Timeline** - Visual activity tracking
- 🔍 **Search System** - Built-in search functionality

## 🚀 Getting Started

### Prerequisites

- Node.js 16.x or later
- npm or yarn

### Installation

1. Clone the repository

```bash
git clone https://github.com/AmirHaytham/React-Zustand-Vite-TS-temp.git
cd React-Zustand-Vite-TS-temp
```

2. Install dependencies

```bash
npm install
# or
yarn install
```

3. Start development server

```bash
npm run dev
# or
yarn dev
```

## 📁 Project Structure

```bash
React-Zustand-Vite-TS-temp/
├── src/                        # Source files
│   ├── components/            # React components
│   │   ├── layout/           # Layout components
│   │   │   ├── AppLayout.tsx    # Main layout wrapper
│   │   │   ├── Navbar.tsx       # Top navigation
│   │   │   └── Sidebar.tsx      # Side navigation
│   │   │
│   │   ├── leads/            # Lead management
│   │   │   ├── LeadForm.tsx     # Lead creation form
│   │   │   └── LeadList.tsx     # Leads display
│   │   │
│   │   └── common/           # Shared components
│   │       ├── Button/          # Button components
│   │       └── Input/           # Input components
│   │
│   ├── store/               # State management
│   │   └── useStore.ts        # Main Zustand store
│   │
│   ├── assets/              # Static assets
│   │   └── styles/           # Global styles
│   │
│   ├── App.tsx             # Main application component
│   └── main.tsx            # Application entry point
│
├── public/                  # Public static files
├── index.html              # Entry HTML file
├── tailwind.config.js      # Tailwind configuration
├── package.json            # Dependencies and scripts
└── tsconfig.json           # TypeScript configuration
```

## 📜 Available Scripts

```bash
npm run dev         # Start development server
npm run build       # Build for production
npm run preview     # Preview production build
npm run lint        # Run ESLint
```

## 📚 Documentation

- [Contributing Guide](./CONTRIBUTING.md)
- [Code of Conduct](./CODE_OF_CONDUCT.md)
- [Security Policy](./SECURITY.md)
- [Technical Documentation](./docs/TECHNICAL.md)
- [Changelog](./CHANGELOG.md)
- [License](./LICENSE)

The technical documentation provides detailed information about:

- Project architecture and structure
- State management patterns
- Development tools and configurations
- Deployment strategies
- Security considerations
- Performance optimizations
- Browser support

## 🎨 Customization

### Styling

The template uses Tailwind CSS with custom configuration. You can modify the theme in `tailwind.config.js`:

- 🎨 Colors
- 📝 Typography
- 📏 Spacing
- 📱 Breakpoints

### Components

Built with modern practices:

- ⚛️ Functional components
- 🪝 React hooks
- 📘 TypeScript interfaces
- 🎯 Strong typing

## 📄 License

This project is licensed under the MIT License.

---

<div align="center">

Made with ❤️ by [Amir Haytham](https://github.com/AmirHaytham)

[![Star History Chart](https://api.star-history.com/svg?repos=AmirHaytham/React-Zustand-Vite-TS-temp&type=Date)](https://star-history.com/#AmirHaytham/React-Zustand-Vite-TS-temp&Date)

</div>
