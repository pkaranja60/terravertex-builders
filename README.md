
# Terravertex - Next.js Project

**Terravertex Builders** is a modern web application built with Next.js and Tailwind CSS, designed to showcase construction and infrastructure services. The platform provides detailed insights into the team's expertise, featured projects, client testimonials, and frequently asked questions, making it ideal for construction firms looking to highlight their capabilities and engage potential clients.

## Table of Contents

- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Project Structure](#project-structure)
- [Running the Application](#running-the-application)
- [Development Tools](#development-tools)
- [Environment Variables](#environment-variables)
- [Contributing](#contributing)

## Getting Started

### Prerequisites

Before starting, ensure you have the following installed:

- Node.js (v16 or higher)
- npm (v7.0.0 or higher) or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/terravertex.git
   cd terravertex
   ```

2. Install dependencies:
   ```bash
   pnpm install
   # or
   npm install
   # or
   yarn install
   ```

3. Start the development server:
   ```bash
   pnpm run dev
   # or
   npm run dev
   # or
   yarn dev
   ```

### Running the Application

After installation, you can start the development server to view your application at [http://localhost:3000](http://localhost:3000).

## Project Structure

The project is structured as follows:

```
 terravertex/
├── .gitignore
├── README.md
├── app/
│   ├── about_us/
│   │   └── page.tsx
│   ├── layouts/
│   │   └── RootLayout.tsx
│   ├── pages/
│   │   ├── _app.tsx
│   │   ├── about.tsx
│   │   ├── projects.tsx
│   │   ├── our_services.tsx
│   │   └── page.tsx
│   ├── public/
│   │   ├── assets/
│   │   └── favicon.ico
│   └── styles/
│       └── globals.css
├── components/
│   ├── home features/
│   │   ├── CTASection.tsx
│   │   ├── FAQs.tsx
│   │   ├── Hero.tsx
│   │   ├── Highlights.tsx
│   │   ├── OurTeam.tsx
│   │   └── Testimonials.tsx
│   ├── ui/
│   │   ├── accordion.tsx
│   │   └── carousel.tsx
│   └── utils/
├── lib/
│   └── copyRightYear.ts
├── next.config.js
├── postcss.config.mjs
├── pnpm-lock.yaml
└── package.json
```

- **app/**: Contains the main routes and components of your application.
  - **about_us/**, **our_services/**, etc.: Specific pages related to different sections of the website.
  - **pages/**: The entry points for each route in your app. These files define how users interact with different parts of your site.

- **components/**: Contains reusable UI components used across the application.
  - **home features/**: Components related to the homepage features like CTA, FAQs, Hero, Highlights, OurTeam, and Testimonials.
  - **ui/**: Components from Tailwind CSS UI that are specifically tailored for this project.
  - **utils/**: Utility functions and logic used throughout the app.

- **lib/**: Contains shared utility functions or services.

- **next.config.js**: Configuration file to customize Next.js behavior, such as routes, server settings, etc.

- **postcss.config.mjs**: Configuration for Tailwind CSS PostCSS integration.

- **pnpm-lock.yaml**: Dependency management lock file for pnpm.

- **package.json**: Project metadata and dependencies.

## Running the Application

To start the development server:

```bash
pnpm run dev
# or
npm run dev
# or
yarn dev
```

This command will compile your code, serve it locally on `http://localhost:3000`, and automatically reload when you make changes to the source files.

## Development Tools

- **Next.js**: The framework used for building server-side rendered React applications.
- **Tailwind CSS**: A utility-first CSS framework that provides a modern, easy-to-use interface for styling your application.
- **ESLint**: A linter tool to help maintain code quality and consistency.
- **Prettier**: An opinionated code formatter that enforces consistent formatting.

## Environment Variables

Environment variables are stored in the `.env` file. Commonly used environment variables include:

- `NEXT_PUBLIC_STRIPE_PUBLIC_KEY`: Stripe API key for payments.
- `NEXT_PUBLIC_GOOGLE_CLIENT_ID`: Google OAuth client ID for authentication.

To use environment variables, you can access them in your code using the `process.env.VAR_NAME` syntax. For example:

```javascript
export default function Home() {
  return (
    <div>
      {process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY}
    </div>
  );
}

# Contributing

We welcome contributions! 🚀  
Follow the steps below to get started:

## How to Contribute

1. **Fork the Repository**  
   Clone the repository to your local machine.

2. **Create a Branch**  
   ```bash
   git checkout -b feature/your-feature-name
