# Eightware Frontend

Projeto de autenticação fullstack usando Next.js App Router, React Hook Form com validação Zod, React Query para gerenciamento de estado assíncrono, integração com API REST para login e signup via JWT, e testes com Jest e React Testing Library.

---

## 🛠️ Technologies

- **React 19**
- **Next.js 15** (App Router)
- **Typescript**
- **Tailwind CSS 4**
- **React Hook Form** + **Zod** (form validation)
- **React Query** (`@tanstack/react-query`)
- **Jest 30** + **React Testing Library 16** (testing)
- **Axios** (HTTP client)
- **Radix UI** (`@radix-ui/react-label`, `@radix-ui/react-slot`)
- **Lucide React** (icons)
- **Sonner** (notifications)
- **Class Variance Authority**, **clsx**, **tailwind-merge**
- **Yup** (validation, legacy)
- **ESLint 9**
- **Babel 7**
- **PostCSS 8**
- **tw-animate-css**

---

## 🚀 Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/WillMS28/eightware-frontend.git
   cd eightware-frontend
   ```

2. Install dependencies:

   ```bash
   npm install
   # or
   yarn install
   ```

3. Configure environment variables (example: .env.local):

   ```bash
   NEXT_PUBLIC_API_BASE_URL=http://localhost:3000
   ```

---

## 📦 Scripts

- `npm run dev` — start the development server
- `npm run build` — build the application for production
- `npm run start` — start the production build
- `npm run test` — run unit and integration tests

---

## 📁 Project Structure

```
src/
├── app/
│   ├── (auth)/
│   │   ├── login/page.tsx
│   │   └── signup/page.tsx
│   ├── profile/page.tsx
│   ├── unauthorized/page.tsx
│   ├── error.tsx
│   ├── layout.tsx
│   ├── not-found.tsx
│   ├── page.tsx
│   ├── providers.tsx
│   └── globals.css
├── components/
│   ├── login-form.tsx
│   ├── signup-form.tsx
│   ├── theme-provider.tsx
│   └── ui/
│       ├── button.tsx
│       ├── card.tsx
│       ├── input.tsx
│       ├── label.tsx
│       └── sonner.tsx
├── hooks/
│   ├── useAuth.ts
│   ├── useLogout.ts
│   └── useUser.ts
├── lib/
│   └── utils.ts
├── services/
│   └── api.ts
├── __tests__/
│   ├── profile.test.tsx
│   ├── LoginForm.test.tsx
│   └── SignupForm.test.tsx
```

---

## ✨ Features

- JWT authentication via API (login)
- Signup with password and confirmation validation
- Route protection with unauthorized page redirection
- Loading state and error messages
- Unit and integration tests for forms and redirects
- Token storage in localStorage

---

## 🧪 Testing

We use Jest and React Testing Library to:

- Validate rendering of login and signup forms
- Simulate form submissions and check login/signup function calls
- Test redirects after successful/error authentication
- Mock hooks and Next.js routing

To run the tests:

```bash
npm run test
```

## 🧑 Author

Made by William Miranda for the Eightware technical challenge.