# Creativ UI

> **Open-Source Design System & Component Library**
> 
> Seamlessly connecting design and development with accessible Base UI primitives, pure Tailwind CSS styling, and matching Figma component parity.

---

> [!IMPORTANT]
> **🚧 Work In Progress Notice**
> 
> Creativ UI is currently under active development (**Phase 1 Documentation Platform Complete**). Component implementation and interactive playgrounds are actively being built.
> 
> We welcome community feedback, forks, and contributions! Feel free to **[Fork this repository](https://github.com/creativsingh/creativ-ui/fork)**, open issues, and submit Pull Requests.

---

## 📌 Definition

**Creativ UI** is an open-source design system that combines production-ready React components with a complete Figma design library, enabling designers and developers to build consistent, accessible, and scalable products from the same source of truth.

Built on **Base UI** and styled with **Tailwind CSS**, Creativ UI provides accessible component primitives, strong TypeScript APIs, and a matching design system that eliminates the disconnect between design and implementation.

Unlike traditional component libraries that only provide code, Creativ UI provides both the **React components** and their **fully editable Figma counterparts**, allowing entire interfaces to be designed, prototyped, and implemented without starting from scratch.

---

## ❌ The Problem

Modern React component libraries solve only half of the product development workflow.

Developers can quickly build applications using pre-built components, but designers often don't have matching design assets.

This creates several challenges:

* Designers recreate components from scratch in Figma.
* Design and code gradually drift apart.
* New screens become inconsistent.
* Custom components are redesigned repeatedly.
* Teams waste time rebuilding the same patterns.

Even when a component library exists, teams still need complete screen layouts and production-ready design files before development begins.

---

## ✅ The Solution

Creativ UI bridges the gap between design and engineering.

Every React component has an equivalent Figma component built using the same design tokens, spacing, typography, and interaction patterns.

This allows designers and developers to work from a shared system instead of maintaining separate libraries.

With Creativ UI you can:

* Design complete product screens in Figma.
* Build production-ready interfaces using the same React components.
* Extend the library with new components while maintaining consistency.
* Prototype ideas rapidly without recreating existing UI.
* Keep design and implementation synchronized.

---

## ⚡ Why Creativ UI

Creativ UI is built on top of **Base UI**, providing a strong foundation of accessible, composable, and unstyled primitives.

On top of those primitives, every component is carefully crafted using **Tailwind CSS**, resulting in:

* **Accessible by default**
* **Keyboard-friendly interactions**
* **Screen reader support**
* **Production-ready APIs**
* **Consistent design tokens**
* **Clean TypeScript interfaces**
* **Modern, scalable architecture**

Developers get the flexibility of headless components without sacrificing design quality. Designers get a complete Figma system that perfectly mirrors the implementation.

---

## 💎 Value Proposition

### 🎨 For Designers
* Complete Figma component library
* Production-ready design patterns
* Design complete interfaces without rebuilding common UI
* Extend existing components while maintaining consistency
* Shared design tokens with engineering

### ⚛️ For Developers
* Accessible React components powered by Base UI
* Tailwind CSS styling
* Strong TypeScript support
* Composable APIs
* Production-ready architecture
* Faster development with consistent UI patterns

### 🤝 For Teams
* **One shared design system**
* **One visual language**
* **One source of truth**

*No duplicated work. No inconsistent interfaces. No rebuilding components from scratch.*

---

## 🎯 Core Principles

Creativ UI is built around five core principles:

1. **Accessibility First**
2. **Design–Code Parity**
3. **Composable Architecture**
4. **Consistency at Scale**
5. **Developer & Designer Experience**

---

## 🚀 Vision

To become the design system that seamlessly connects design and development, enabling teams to move from idea to production without rebuilding the same interface twice.

Creativ UI empowers designers to design confidently, developers to build efficiently, and teams to ship products faster using a shared, production-ready system.

---

## 🛠️ Tech Stack

| Technology | Purpose |
| --- | --- |
| **Framework** | [Next.js](https://nextjs.org/) (App Router) |
| **Language** | [TypeScript](https://www.typescriptlang.org/) |
| **Primitives** | [Base UI](https://base-ui.com/) (`@base-ui/react`) |
| **Styling** | [Tailwind CSS v4](https://tailwindcss.com/) |
| **Animations** | [Framer Motion](https://www.framer.com/motion/) |

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

### Local Setup

```bash
# Clone repository
git clone https://github.com/creativsingh/creativ-ui.git
cd creativ-ui

# Install dependencies
npm install

# Run dev server
npm run dev

# Build production bundle
npm run build
```

---

## 🤝 Contributing & Forking

Creativ UI is open-source software. Feel free to **[Fork this repository](https://github.com/creativsingh/creativ-ui/fork)**, submit Pull Requests, and report issues!

---

## 📄 License

Distributed under the MIT License. See `LICENSE` for details.
