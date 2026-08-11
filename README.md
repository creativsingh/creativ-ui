# Creativ UI

> **Open-Source Design System & React Component Library**
> 
> Bridging the gap between design and engineering with accessible Base UI primitives, pure Tailwind CSS styling, 1:1 Figma design parity, and educational documentation.

---

> [!IMPORTANT]
> **🚧 Work In Progress Notice**
> 
> Creativ UI is currently under active development (**Phase 1 Documentation Platform Complete**). Component implementation and interactive playgrounds are actively being built.
> 
> We welcome community feedback, forks, and contributions! Feel free to **[Fork this repository](https://github.com/creativsingh/creativ-ui/fork)**, open issues, and submit Pull Requests.

---

## 💡 Overview

**Creativ UI** is a comprehensive design system platform built for modern product teams. Unlike traditional UI libraries that only provide raw components, Creativ UI explains the thinking behind every design decision, accessibility pattern, and implementation detail—making it a learning resource as much as a production development tool.

Our mission is to bridge the gap between design and development by creating accessible, thoughtfully crafted UI components that are as educational as they are production-ready.

---

## ✨ Value Proposition

* 🎨 **Complete Figma Design System**: 1:1 matching Figma components with identical variants, states, and design token variables.
* ⚛️ **Production-Ready React**: Strictly typed React components built on top of headless Base UI primitives and styled with Tailwind CSS.
* ♿ **Accessibility-First**: Built to meet WCAG 2.1 AA contrast standards with keyboard navigation, screen reader attributes, and visible focus rings.
* 📚 **Educational Documentation**: Detailed implementation guides, API specifications, and architectural tradeoffs.
* 🧩 **Design Tokens**: Systematic scale for colors, Geist typography, spatial grids, and motion parameters.
* 💡 **Design Rationale**: Explanations of *why* components are built the way they are to help developers learn design engineering.

---

## 🛠️ Tech Stack

| Technology | Purpose |
| --- | --- |
| **Framework** | [Next.js](https://nextjs.org/) (App Router) |
| **Language** | [TypeScript](https://www.typescriptlang.org/) |
| **Primitives** | [Base UI](https://base-ui.com/) (`@base-ui/react`) |
| **Styling** | [Tailwind CSS v4](https://tailwindcss.com/) |
| **Animations** | [Framer Motion](https://www.framer.com/motion/) |
| **Icons** | [Lucide React](https://lucide.dev/) |

---

## 📁 Repository Structure

```text
creativ-ui/
├── app/                      # Documentation Website (Next.js App Router)
│   ├── (docs)/               # Dynamic documentation route group
│   │   ├── getting-started/  # /getting-started/[slug]
│   │   ├── foundations/      # /foundations/[slug]
│   │   └── components/       # /components/[slug]
│   ├── globals.css           # Tailwind CSS setup & Design System CSS variables
│   ├── layout.tsx            # Root HTML layout & Geist font configuration
│   └── page.tsx              # Marketing Homepage & Ecosystem Index
├── components/
│   ├── ui/                   # Reusable UI component library (Phase 2)
│   ├── layout/               # Global website layout components (Navbar, Footer, Container)
│   └── docs/                 # Documentation shell components (Sidebar, MobileNav, Breadcrumbs)
├── data/
│   ├── navigation.ts         # Single source of truth for navigation hierarchy & routes
│   └── types.ts              # TypeScript interfaces for navigation & metadata
├── hooks/                    # Reusable React hooks (useTheme, etc.)
└── lib/                      # Utilities & navigation helpers
```

---

## 🚀 Getting Started

### Prerequisites

* **Node.js**: v18.17.0 or higher
* **npm**: v9.0.0 or higher

### Local Setup

1. **Clone the repository**:
   ```bash
   git clone https://github.com/creativsingh/creativ-ui.git
   cd creativ-ui
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Run the development server**:
   ```bash
   npm run dev
   ```
   Open `http://localhost:3000` in your browser to view the documentation platform.

4. **Build for production**:
   ```bash
   npm run build
   ```

---

## 🤝 Contributing & Forking

Creativ UI is open-source design library and we actively welcome contributions!

### How to Contribute

1. **Fork the Repository**: Click the **Fork** button at the top right of this page.
2. **Create a Feature Branch**:
   ```bash
   git checkout -b feature/amazing-feature
   ```
3. **Make your changes**: Follow our design conventions in [`CLAUDE.md`](file:///Users/ajeetsingh/Desktop/Code/creativ-ui/CLAUDE.md) and [`DESIGN.md`](file:///Users/ajeetsingh/Desktop/Code/creativ-ui/DESIGN.md).
4. **Commit your changes**:
   ```bash
   git commit -m "feat: add awesome feature"
   ```
5. **Push to your fork**:
   ```bash
   git push origin feature/amazing-feature
   ```
6. **Open a Pull Request**: Submit a PR to `main` with a description of your changes.

---

## 📄 License

Distributed under the MIT License. See `LICENSE` for details.
