# DAX Portal — The OS-Grade Interactive Portfolio System

[![MIT License](https://img.shields.io/badge/License-MIT-red.svg)](https://choosealicense.com/licenses/mit/)

![DAX Portal Banner](https://img.shields.io/badge/_DAX_Portal-OS_Grade_Interactive_System-darkred?style=for-the-badge&logo=windows-terminal&logoColor=white)

**DAX Portal** is a next-generation **Operating-System-style portfolio platform**, engineered and designed by **Harsh Pandey**.  
It is not a traditional website — it is a **fully interactive system interface** that behaves like a real OS across **desktop and mobile**, complete with boot sequences, window/app management, system modules, and AI-assisted navigation.

> **DAX Portal is a system you _enter_, not a page you visit.**

---

## 🚀 Live Demo

🔗 **Live Portal:** https://dax-portal.vercel.app
💻 **GitHub Repository:** https://github.com/201Harsh/DAX-Portal

---

## 📘 Table of Contents

- About DAX Portal
- Core Philosophy
- System Architecture
- Desktop OS Mode
- Mobile OS Mode
- Core Modules
- DAX Intelligence
- Tech Stack
- Installation & Setup
- Project Structure
- Future Roadmap
- License
- Contact

---

## 🧠 About DAX Portal

DAX Portal is an **OS-grade interactive portfolio** built to demonstrate **system design, architectural thinking, and product-level execution**.

Unlike traditional portfolios that rely on scrolling pages, DAX simulates a real operating system experience:

- Boot & access animations
- Desktop environment with windows
- Mobile OS with fullscreen apps
- System terminology (Modules, Data Vault, Processes)
- Real interaction models instead of static UI

This project exists to answer one question:

> _What if a portfolio behaved like an operating system?_

---

## 🧬 Core Philosophy

DAX Portal is built on three fundamental principles:

### 1️⃣ OS-First Design

Everything behaves like a system:

- Booting
- Desktop
- Apps
- Windows
- Processes

### 2️⃣ Platform-Aware UX

Desktop and Mobile are **not responsive layouts**.  
They are **different operating paradigms**.

### 3️⃣ Modules, Not Pages

Every feature is a **module or process**, not a page.

---

## 🧱 System Architecture

```
Boot Layer
   ↓
Platform Detection
   ↓
Desktop OS  ←→  Mobile OS
   ↓
Modules / Windows / Apps
```

- Unified boot layer
- Platform-specific interaction engines
- Shared modules with adapted UX
- Deterministic system behavior

---

## 🖥️ Desktop OS Mode

Desktop DAX behaves like a real operating system.

### Features

- Boot & access sequence
- Desktop wallpaper system
- Dock / launcher
- Right-click context menu
- Draggable & focusable windows
- Z-index window management
- Minimize / close / restore logic
- Multiple windows running simultaneously
- Terminal module
- Finder-style Data Vault
- Live in-system code editor

### Architecture

- Central window manager
- Zustand + Immer for window state
- Stable drag & restore logic

---

## 📱 Mobile OS Mode

Mobile DAX is a **true mobile OS experience**, not a scaled desktop.

### Features

- Same boot sequence as Desktop
- Mobile home screen with icons & dock
- Fullscreen app launching
- Stack-based navigation
- Back-button controlled app lifecycle
- Finder / Data Vault as fullscreen app
- Touch-optimized interaction model

### Architecture

- Typed local state
- Fullscreen app stack
- Wrapper-based app container
- No overlapping windows by design

> Desktop = Window Manager  
> Mobile = App Stack Navigator

---

## 🧩 Core Modules

| Module              | Description                            |
| ------------------- | -------------------------------------- |
| Terminal            | Command-style system interface         |
| Data Vault (Finder) | File-explorer-style project navigation |
| Projects            | Structured access to major systems     |
| Resume              | Document-based resume module           |
| Code Editor         | Live code editing inside the OS        |
| System UI           | Dock, context menus, boot layer        |

---

## ⚙️ Tech Stack

### Frontend

- Next.js (App Router)
- TypeScript
- Tailwind CSS
- Framer Motion
- GSAP
- React Icons
- Immer
- Zustand
- CLSX

### State Management

- Desktop: Zustand + Immer
- Mobile: Local typed state

### Design

- OS-style UI/UX
- System terminology
- Platform-aware interaction models

---

## 🛠️ Installation & Setup

### Prerequisites

- Node.js 18+
- npm or pnpm

### Setup

```bash
git clone https://github.com/201Harsh/DAX-Portal
cd dax-portal
npm install
npm run dev
```

Open in browser:

```
http://localhost:3000
```

---

## 📁 Project Structure

```
/
 ├── app/
 ├── Components/
 │   ├── Desktop/
 │   ├── Mobile/
 │   ├── Windows/
 ├── utils/
 └── public/
    ├── logo.png
```

---

## 🧠 Future Roadmap

| Feature                  | Status   |
| ------------------------ | -------- |
| Gesture-based navigation | Optional |
| App state persistence    | Planned  |
| Global system search     | Concept  |
| Plugin-style modules     | Future   |

---

## 🪪 License

MIT License © 2025 Harsh Pandey

---

## 📮 Contact

- LinkedIn: https://www.linkedin.com/in/201harsh/
- GitHub: https://github.com/201Harsh
- Instagram: https://instagram.com/201harshs
- Email: gamerpandeyharsh@gmail.com

---

## 🟥 Final Note

**DAX Portal is not a portfolio.**  
It is a **system you access**.

> _Access Granted._

---

# Made with ❤️ by [Harsh](https://instagram.com/201Harshs)
