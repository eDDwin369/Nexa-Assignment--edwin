# Dashboard UI

A modern, responsive dashboard application built with **Angular 21** and **TypeScript**.

## Features

- **Dashboard Overview** — Stats cards, chart sections, weekly reports, and quick actions
- **Calendar Widget** — Interactive calendar component
- **Sidebar Navigation** — Collapsible sidebar with navigation links
- **Responsive Design** — Fully mobile-responsive layout
- **Modern UI** — Clean design using Poppins font and Material Icons

## Tech Stack

- **Framework:** Angular 21
- **Language:** TypeScript 5.9
- **Styling:** Vanilla CSS
- **Fonts:** Google Fonts (Poppins), Material Icons
- **Testing:** Vitest

## Project Structure

```
src/app/
├── layout/              # Main layout shell
│   ├── header/          # Top header bar
│   └── sidebar/         # Side navigation
├── dashboard/           # Dashboard feature
│   ├── stats-cards/     # Statistics cards
│   ├── chart-section/   # Data charts
│   ├── calendar/        # Calendar widget
│   ├── weekly-report/   # Weekly report summary
│   └── quick-actions/   # Quick action buttons
└── app.ts               # Root component
```

## Getting Started

### Prerequisites

- Node.js (v18+)
- npm

### Installation

```bash
npm install
```

### Development Server

```bash
ng serve
```

Navigate to `http://localhost:4200/`. The app will automatically reload on file changes.

### Build

```bash
ng build
```

Build artifacts are stored in the `dist/` directory.

### Running Tests

```bash
ng test
```
