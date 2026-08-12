---
version: 1.0.0
name: Creativ-UI-lively-design-system
description: A vibrant, premium design system for Creativ UI — combining stark ink-and-canvas surfaces with multi-stop atmospheric mesh gradients (cyan / violet / magenta / amber), glowing aura spotlights, glassmorphic card layers, and micro-animated interactive surfaces. Built for maximum visual excitement, WCAG AA accessibility, and 1:1 Figma-to-React parity.

colors:
  primary: "#171717"
  on-primary: "#ffffff"
  ink: "#09090b"
  body: "#52525b"
  mute: "#71717a"
  hairline: "#e4e4e7"
  hairline-strong: "#a1a1aa"
  canvas: "#ffffff"
  canvas-soft: "#fafafa"
  canvas-soft-2: "#f4f4f5"
  link: "#0070f3"
  link-deep: "#0761d1"
  link-bg-soft: "#d3e5ff"
  success: "#10b981"
  error: "#ef4444"
  error-soft: "#fef2f2"
  warning: "#f59e0b"
  violet: "#7928ca"
  violet-glow: "rgba(121, 40, 202, 0.15)"
  cyan: "#50e3c2"
  cyan-glow: "rgba(80, 227, 194, 0.2)"
  highlight-pink: "#ff0080"
  highlight-pink-glow: "rgba(255, 0, 128, 0.15)"
  highlight-magenta: "#eb367f"
  gradient-develop-start: "#007cf0"
  gradient-develop-end: "#00dfd8"
  gradient-preview-start: "#7928ca"
  gradient-preview-end: "#ff0080"
  gradient-ship-start: "#ff4d4d"
  gradient-ship-end: "#f9cb28"
  selection-bg: "#171717"
  selection-fg: "#ffffff"

typography:
  display-xl:
    fontFamily: Geist, Inter, system-ui, -apple-system, sans-serif
    fontSize: 56px
    fontWeight: 600
    lineHeight: 1.05
    letterSpacing: -2.8px
  display-lg:
    fontFamily: Geist, Inter, system-ui, -apple-system, sans-serif
    fontSize: 36px
    fontWeight: 600
    lineHeight: 1.15
    letterSpacing: -1.6px
  display-md:
    fontFamily: Geist, Inter, system-ui, -apple-system, sans-serif
    fontSize: 24px
    fontWeight: 600
    lineHeight: 1.3
    letterSpacing: -0.96px
  display-sm:
    fontFamily: Geist, Inter, system-ui, -apple-system, sans-serif
    fontSize: 20px
    fontWeight: 600
    lineHeight: 1.4
    letterSpacing: -0.6px
  body-lg:
    fontFamily: Geist, Inter, system-ui, -apple-system, sans-serif
    fontSize: 18px
    fontWeight: 400
    lineHeight: 1.6
    letterSpacing: -0.2px
  body-md:
    fontFamily: Geist, Inter, system-ui, -apple-system, sans-serif
    fontSize: 16px
    fontWeight: 400
    lineHeight: 1.5
  body-md-strong:
    fontFamily: Geist, Inter, system-ui, -apple-system, sans-serif
    fontSize: 16px
    fontWeight: 500
    lineHeight: 1.5
  body-sm:
    fontFamily: Geist, Inter, system-ui, -apple-system, sans-serif
    fontSize: 14px
    fontWeight: 400
    lineHeight: 1.43
    letterSpacing: -0.28px
  body-sm-strong:
    fontFamily: Geist, Inter, system-ui, -apple-system, sans-serif
    fontSize: 14px
    fontWeight: 500
    lineHeight: 1.43
    letterSpacing: -0.28px
  caption:
    fontFamily: Geist, Inter, system-ui, -apple-system, sans-serif
    fontSize: 12px
    fontWeight: 400
    lineHeight: 1.33
  caption-mono:
    fontFamily: Geist Mono, ui-monospace, SFMono-Regular, Menlo, Monaco, monospace
    fontSize: 12px
    fontWeight: 400
    lineHeight: 1.33
  code:
    fontFamily: Geist Mono, ui-monospace, SFMono-Regular, Menlo, Monaco, monospace
    fontSize: 13px
    fontWeight: 400
    lineHeight: 1.5
  button-md:
    fontFamily: Geist, Inter, system-ui, -apple-system, sans-serif
    fontSize: 14px
    fontWeight: 500
    lineHeight: 1.43
  button-lg:
    fontFamily: Geist, Inter, system-ui, -apple-system, sans-serif
    fontSize: 16px
    fontWeight: 500
    lineHeight: 1.5

rounded:
  none: 0px
  xs: 4px
  sm: 6px
  md: 8px
  lg: 12px
  xl: 16px
  2xl: 24px
  pill-sm: 64px
  pill: 100px
  full: 9999px

spacing:
  xxs: 4px
  xs: 8px
  sm: 12px
  md: 16px
  lg: 24px
  xl: 32px
  2xl: 40px
  3xl: 48px
  4xl: 64px
  5xl: 96px
  6xl: 128px
  section: 192px

components:
  nav-bar:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.body-sm}"
    height: 64px
    padding: "{spacing.sm} {spacing.lg}"
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.button-lg}"
    rounded: "{rounded.pill}"
    padding: "0px {spacing.sm}"
  button-secondary:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.button-lg}"
    rounded: "{rounded.pill}"
    padding: "0px {spacing.sm}"
  card-interactive-hero:
    backgroundColor: "rgba(255, 255, 255, 0.9)"
    backdropBlur: "24px"
    borderColor: "rgba(228, 228, 231, 0.8)"
    rounded: "{rounded.2xl}"
    shadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)"

---

## Lively Aesthetic & Hero Design System Guidelines

### 1. Atmospheric Mesh Gradient & Aura Spotlights
- **Hero Mesh System**: The homepage hero utilizes radial multi-stop background gradients (`cyan #50e3c2` → `blue #007cf0` → `violet #7928ca` → `magenta #ff0080`) set against crisp light/dark mode backgrounds.
- **Aura Glow**: Atmospheric ambient glow pods float behind CTAs and interactive cards to create immediate depth and visual excitement without clutter.

### 2. Glassmorphism & Micro-Interactions
- **Glassmorphic Cards**: Secondary containers and code mockups leverage semi-transparent background fills (`bg-white/80` or `bg-neutral-900/80`), backdrop blur effects (`backdrop-blur-xl`), and crisp hairline borders (`border-neutral-200/80`).
- **Interactive Pill Buttons**: Equal-width primary and secondary CTA buttons (`sm:w-52` / `sm:w-36`) with hover scaling (`hover:scale-[1.02]`), active press states (`active:scale-[0.98]`), and smooth color transitions.
- **Ecosystem Strip**: Integrated vector badges (React, Tailwind CSS, Base UI, Figma) with brand-native SVGs and a clean author attribution row (`Created by Creativsingh`).

### 3. Typography & Parity Principles
- **Display Headlines**: Geist Sans with aggressive negative letter spacing (`-2.8px` for Hero display headline) for an engineered, modern voice.
- **Technical Voice**: Section eyebrows, status badges, and code snippets set in Geist Mono.
- **Equal Button Sizing Rule**: Whenever Primary and Secondary CTAs are paired, enforce equal width and height (`sm:w-52` in Hero, `sm:w-36` in component cards) for visual symmetry.
