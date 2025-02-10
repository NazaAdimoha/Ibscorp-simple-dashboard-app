# React Admin Dashboard

[![React](https://img.shields.io/badge/React-18.2.0-blue)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0.0-blue)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.3.0-blue)](https://tailwindcss.com/)

A modern admin dashboard with responsive design, CRUD operations, and API integration built with React, TypeScript, and Tailwind CSS.

```
![Dashboard Preview](/public/Screenshot 2025-02-10 at 03.38.06.png)
```

```
![Dashboard Preview](/public/Screenshot 2025-02-10 at 03.45.33.png)
```


Features

- **User Management**
  - View users in table/card layout
  - Create, Read, Update, Delete (CRUD) operations
  - Sorting and filtering capabilities
  - Pagination support
- **Responsive Design**
  - Mobile-first approach
  - Adaptive sidebar navigation
  - Cross-browser compatibility
- **Modern UI/UX**
  - Dark/Light mode support
  - Micro-animations with Framer Motion
  - Loading skeletons and error states
- **API Integration**
  - JSONPlaceholder API integration
  - React Query for data fetching
  - Axios HTTP client
- **Form Handling**
  - React Hook Form integration
  - Form validation
  - Error handling
- **Performance**
  - Code splitting with React.lazy
  - Memoization techniques
  - Debounced search inputs

## Technologies

- **Core**
  - React 18
  - TypeScript 5
  - Vite 4
- **Styling**
  - Tailwind CSS 3
  - PostCSS
  - Autoprefixer
- **State Management**
  - React Query (TanStack Query)
  - Zustand (Global state)
- **UI/UX**
  - Framer Motion (Animations)
  - React Icons
  - Headless UI
- **Routing**
  - React Router 6
- **Form Handling**
  - React Hook Form
  - Zod (Schema validation)
- **Utilities**
  - Axios
  - date-fns
  - Lodash
  - ESLint
  - Prettier

## Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/react-admin-dashboard.git
   cd react-admin-dashboard
   ```

**Install dependencies**

npm install

# or

yarn install

**Start development server**

npm run dev

# or

yarn dev

**Build for production**

npm run build

# or

yarn build

## Project Structure

src/
├── api/               # API configuration and services
├── assets/            # Static assets
├── components/        # Reusable components
│   ├── common/        # UI primitives
│   ├── layout/        # Layout components
│   └── users/         # User-related components
├── hooks/             # Custom hooks
├── providers/         # Context providers
├── routes/            # Application routes
├── stores/            # Zustand stores
├── types/             # TypeScript type definitions
├── utils/             # Utility functions
├── App.tsx            # Root component
└── main.tsx           # Entry point

## Key Configuration

### Tailwind CSS

Custom theme configuration in `tailwind.config.js`:

* Custom color palette
* Extended spacing scale
* Custom animations
* Dark mode support
* Mobile-first breakpoints

### Scripts

* `dev`: Start development server
* `build`: Create production build
* `lint`: Run ESLint
* `preview`: Preview production build
* `test`: Run test suite

## Development Guidelines

1. **Component Structure**

   * Create components in `/components` directory
   * Follow atomic design principles
   * Use TypeScript interfaces for props
2. **Styling**

   * Use Tailwind utility classes first
   * Add custom styles in `index.css` when necessary
   * Follow BEM naming convention for custom classes
   * Use CSS variables for theme colors
3. **State Management**

   * Use Zustand for global state
   * React Query for server state
   * Local state with `useState` for component-specific state
4. **API Integration**

   * Create API services in `/api` directory
   * Use React Query hooks for data fetching
   * Implement error handling in API layer
   * Add loading states for async operations

   ## Contributing

   Create a new branch: git checkout -b feature/your-feature
   Commit changes: git commit -m "feat: add new feature"
   Push to branch: git push origin feature/your-feature

   ## Credits


   * [JSONPlaceholder](https://jsonplaceholder.typicode.com/) - Fake REST API
   * [Tailwind UI](https://tailwindui.com/) - Design inspiration

     **Happy coding!** 🚀
     Built with ❤️ by Adimoha Chinaza
