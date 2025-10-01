# EduLearn - React Learning Platform

A modern, responsive learning platform built with React, TypeScript, Tailwind CSS, and Mantine UI.

## 🚀 Features

- **Sign In/Sign Up Pages** - Complete authentication forms with validation
- **Responsive Design** - Mobile-first approach with Tailwind CSS
- **Modern UI Components** - Built with Mantine UI library
- **TypeScript** - Full type safety throughout the application
- **React Router** - Client-side routing for seamless navigation
- **Course Catalog** - Beautiful course grid with mock data

## 🛠️ Tech Stack

- **React 18** with TypeScript
- **Vite** - Fast build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **Mantine UI** - Modern React components library
- **React Router DOM** - Client-side routing

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── Header.tsx      # Navigation header
│   └── CourseCard.tsx  # Course display card
├── pages/              # Page components
│   ├── HomePage.tsx    # Landing page with hero and courses
│   ├── SignInPage.tsx  # User sign in form
│   └── SignUpPage.tsx  # User registration form
├── routes/             # Routing configuration
│   └── AppRoutes.tsx   # Main routing component
├── types/              # TypeScript type definitions
│   └── index.ts        # Shared types and interfaces
├── App.tsx             # Main app component with providers
└── main.tsx            # Application entry point
```

## 🚀 Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd react-project
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173` to view the application.

## 📱 Pages

### Home Page (`/`)
- Responsive header with navigation
- Hero section with call-to-action
- Featured courses grid
- Statistics section
- Footer

### Sign In Page (`/signin`)
- Email and password form
- Form validation
- Success/error notifications
- Link to sign up page

### Sign Up Page (`/signup`)
- Email, username, password, and confirm password fields
- Form validation with password matching
- Success/error notifications
- Link to sign in page

## 🎨 Styling

The application uses a combination of:
- **Tailwind CSS** for utility classes and responsive design
- **Mantine UI** for component styling and theming
- **Custom CSS** for specific design requirements

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 📦 Dependencies

### Core Dependencies
- `react` - React library
- `react-dom` - React DOM rendering
- `react-router-dom` - Client-side routing

### UI Libraries
- `@mantine/core` - Mantine UI components
- `@mantine/hooks` - Mantine hooks
- `@mantine/form` - Form management
- `@mantine/notifications` - Notification system
- `@tabler/icons-react` - Icon library

### Development Dependencies
- `@vitejs/plugin-react` - Vite React plugin
- `typescript` - TypeScript support
- `tailwindcss` - CSS framework
- `autoprefixer` - CSS post-processor
- `postcss` - CSS processor

## 🌟 Features in Detail

### Responsive Design
- Mobile-first approach
- Breakpoints: sm (640px), md (768px), lg (1024px), xl (1280px)
- Responsive grid layouts
- Mobile navigation drawer

### Form Validation
- Real-time validation with Mantine forms
- Email format validation
- Password strength requirements
- Password confirmation matching
- User-friendly error messages

### TypeScript Integration
- Full type safety
- Interface definitions for all data structures
- Type checking for props and state
- IntelliSense support

## 🚀 Deployment

To deploy this application:

1. **Build the project**
   ```bash
   npm run build
   ```

2. **Deploy the `dist` folder** to your preferred hosting service:
   - Vercel
   - Netlify
   - AWS S3 + CloudFront
   - GitHub Pages

## 📄 License

This project is licensed under the MIT License.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📞 Support

If you have any questions or need help, please open an issue in the repository.