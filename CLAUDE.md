@AGENTS.md

# CLAUDE.md

# Creativ UI

> Production-ready React Component Library built with Base UI, Tailwind CSS and TypeScript.

This document is the source of truth for AI agents working inside this repository.

Before making ANY code changes, read this file completely.

---

# Project Vision

Creativ UI is a modern, accessible component library for designers and frontend engineers.

The goal is NOT to build another UI library.

The goal is to build the highest quality educational component library.

Every component should teach:

- Design
- Accessibility
- Engineering
- UX
- Implementation

Every component must have a matching Figma component.

---

# Tech Stack

Framework

- Next.js (App Router)

Language

- TypeScript

Styling

- Tailwind CSS

Accessibility

- Base UI

Icons

- Lucide React

Animations

- Framer Motion

Deployment

- Vercel

---

# Read Before Building

Always read

design.md

before implementing UI.

This file defines

- spacing
- typography
- colors
- motion
- interactions
- accessibility

Never invent a new design language.

---

# Primary Goal

Every component should be

Beautiful

Accessible

Composable

Production Ready

Documented

Responsive

Educational

---

# Project Structure

src/

    app/

        (docs)/

            layout.tsx

            page.tsx

            components/

                [slug]/

            foundations/

                [slug]/

    components/

        ui/

            button/

            input/

            dialog/

            badge/

            card/

            avatar/

        layout/

    hooks/

    lib/

    data/

        navigation.ts

        foundations.ts

---

# Folder Responsibilities

app/

Documentation website.

Never place reusable components here.

components/ui/

Actual component library.

Everything exported from here should be production ready.

components/layout/

Documentation layout only.

lib/

Utilities.

hooks/

Reusable hooks.

data/

Single source of truth.

---

# Routing

Documentation uses dynamic routes.

Correct

/components/button

↓

resolved through

/components/[slug]

Navigation is data driven.

Never hardcode documentation pages.

---

# Navigation

Sidebar

Breadcrumbs

Search

Routing

Page Titles

must all use

navigation.ts

Never duplicate navigation.

---

# Component Workflow

Every component follows the same lifecycle.

Research

↓

Design in Figma

↓

Accessibility review

↓

Implementation

↓

Documentation

↓

Review

↓

Publish

Never skip documentation.

---

# Component Structure

Example

button/

    Button.tsx

    Button.types.ts

    Button.variants.ts

    Button.demo.tsx

    index.ts

Keep every component isolated.

---

# Documentation

Every component page contains

Overview

Preview

Playground

Installation

Usage

Variants

Sizes

States

Accessibility

Design Notes

Figma

API

Changelog

Never omit accessibility.

---

# Accessibility

Accessibility is mandatory.

Every component must

Support keyboard navigation.

Support screen readers.

Support focus indicators.

Use semantic HTML.

Meet WCAG AA.

Follow WAI-ARIA patterns.

Never remove focus rings.

Never use div as button.

---

# TypeScript

Strict typing.

Never use

any

Prefer

unknown

Generics

Discriminated unions

Reusable interfaces.

---

# Styling

Tailwind only.

No CSS modules.

No inline styles.

No styled-components.

Prefer utility composition.

Avoid arbitrary values.

---

# Variants

Use

class-variance-authority

Every component should support

variant

size

disabled

loading

where appropriate.

---

# Imports

Always use

@/

Never use

../../../

relative imports.

---

# Naming

PascalCase

Components

camelCase

Functions

Hooks

Prefix with

use

Constants

UPPER_CASE

---

# Performance

Prefer CSS.

Avoid unnecessary JavaScript.

Avoid unnecessary state.

Memoize only when beneficial.

Lazy load heavy content.

---

# Motion

Motion should communicate.

Never decorate.

Keep animations subtle.

Respect prefers-reduced-motion.

---

# Dark Mode

Every component must support

Light

Dark

System

Never design for one theme only.

---

# Figma

Every React component must have

Matching Figma component

Variants

States

Design Tokens

Documentation

React and Figma should never drift apart.

---

# Search Before Creating

Before creating anything ask

Does this already exist?

Can it be reused?

Can it be composed?

Can it be simplified?

Never duplicate functionality.

---

# Before Installing Packages

Never install new packages unless explicitly requested.

Prefer existing dependencies.

Avoid dependency bloat.

---

# Before Modifying Architecture

Never introduce

new folders

new patterns

new abstractions

without confirming they improve scalability.

Consistency wins.

---

# Pull Request Philosophy

One feature.

One component.

One concern.

Avoid giant changes.

---

# Code Quality

Readable

Predictable

Composable

Explicit

Maintainable

Avoid clever code.

---

# Documentation Quality

Write for

Designers

Developers

Explain

Why

When

How

Tradeoffs

Accessibility

Avoid marketing language.

---

# AI Behaviour

Before writing code

Understand the task.

Search existing implementation.

Reuse existing abstractions.

Read design.md.

Follow project conventions.

When unsure

Choose consistency over creativity.

Prefer improving existing code over introducing new code.

Never rewrite working code without a reason.

Never change APIs unless requested.

Never introduce breaking changes.

---

# When Building A Component

Follow this checklist.

□ Accessible

□ Responsive

□ Typed

□ Dark Mode

□ Keyboard Navigation

□ Focus States

□ Loading State

□ Disabled State

□ Documentation

□ Demo

□ Figma Component

Only when every box is checked is the component considered complete.

---

# Success Metric

This project succeeds if someone can

Understand the design,

Learn accessibility,

Understand implementation,

Copy production-ready code,

and understand why the component was built the way it was.

Quality always wins over quantity.

# Reference Priority

When implementing components, consult references in this order:

1. Base UI (behavior & accessibility)
2. WAI-ARIA Authoring Practices
3. Radix UI (composition patterns)
4. shadcn/ui (documentation patterns)
5. Existing project components

Never copy code directly.

Understand the pattern first, then implement it using the project's architecture and design system.