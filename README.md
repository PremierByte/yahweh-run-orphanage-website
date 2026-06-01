@"
# Comtechbiz Web Platform

A modern, full-featured web application for Comtechbiz, a locally-owned HVAC company serving the Fort Worth, Crowley, and DFW Metroplex areas.

## Overview

Comtechbiz Web is a Next.js 16-based platform that provides:
- **Customer Portal** - Account management, service booking, and billing
- **Admin Dashboard** - Service request management, work orders, and customer administration
- **Public Website** - Company information, services, products, and maintenance plans
- **E-commerce Integration** - Stripe-based checkout for maintenance plan subscriptions

## Tech Stack

### Core Framework
- **Next.js 16.0.4** - React-based framework with SSR and static generation
- **React 19.2** - UI component library
- **TypeScript 5** - Type-safe JavaScript

### State Management & Data Fetching
- **Zustand 5.0.8** - Lightweight state management with persistence
- **TanStack React Query 5.90.11** - Server state management and caching
- **Axios 1.13.2** - HTTP client for API communication

### UI & Styling
- **Tailwind CSS 4.1.17** - Utility-first CSS framework
- **Framer Motion 12.23.24** - Animation library
- **Lucide React 0.555.0** - Icon library
- **React Icons 5.5.0** - Additional icon set
- **Headless UI 2.2.9** - Unstyled, accessible components
- **Hero Icons 2.2.0** - Premium icon set

### Features & Integrations
- **Stripe** - Payment processing for maintenance plans
- **Leaflet/React Leaflet** - Interactive maps for service areas
- **PDF Export** - React PDF Renderer, html2canvas, jsPDF for document generation
- **Toast Notifications** - React Hot Toast
- **Form Handling** - React Hook Form for validated forms
- **Image Processing** - html2canvas for screenshot capture
- **Animations** - React Confetti for celebratory effects

## Project Structure

\`\`\`
src/
├── app/                          # Next.js app directory (routes)
│   ├── layout.tsx               # Root layout with metadata
│   ├── page.tsx                 # Homepage
│   ├── auth/                    # Authentication pages
│   │   ├── login/
│   │   └── register/
│   ├── portal/                  # Customer portal (protected)
│   │   ├── billing/             # Billing information
│   │   ├── book-maintenance/    # Schedule maintenance
│   │   ├── history/             # Service history
│   │   ├── profile/             # User profile
│   │   └── request-repair/      # Request repairs
│   ├── admin/                   # Admin dashboard (protected)
│   │   ├── members/             # Customer management
│   │   ├── plans/               # Plan management
│   │   ├── queue/               # Service request queue
│   │   └── work-orders/         # Work order management
│   ├── services/                # Service pages
│   │   ├── cooling/
│   │   ├── heating/
│   │   ├── maintenance/
│   │   └── repair/
│   ├── products/                # Product pages
│   ├── checkout/                # Stripe checkout flow
│   │   ├── cancel/
│   │   └── success/
│   └── public/                  # Public pages
│
├── lib/
│   ├── components/              # Reusable React components
│   │   ├── admin/              # Admin-specific components
│   │   ├── common/             # Shared components (buttons, modals, etc.)
│   │   ├── dashboard/          # Portal dashboard components
│   │   ├── layout/             # Layout wrappers
│   │   ├── navigation/         # Nav components
│   │   ├── offers/             # Promotional components
│   │   ├── sections/           # Homepage sections
│   │   └── ui/                 # Base UI components
│   ├── config/
│   │   ├── adminMenu.ts        # Admin sidebar navigation config
│   │   ├── env.ts              # Environment variables
│   │   └── nav.ts              # Public navigation config
│   ├── hooks/
│   │   ├── useAuth.ts          # Authentication hook
│   │   ├── useCommon.ts        # Common utilities hook
│   │   ├── useMotion.ts        # Animation hook
│   │   └── useSlider.ts        # Slider/carousel hook
│   ├── mock/                   # Mock data for development
│   │   ├── auth.ts
│   │   ├── checklists.ts
│   │   ├── faqs.ts
│   │   ├── members.ts
│   │   ├── plans.ts
│   │   ├── products.ts
│   │   ├── reviews.ts
│   │   ├── service-requests.ts
│   │   ├── services.ts
│   │   ├── subscription.ts
│   │   ├── user.ts
│   │   └── work-orders.ts
│   ├── services/               # API service layer
│   │   ├── authService.ts      # Authentication API
│   │   ├── axiosInstance.ts    # Configured axios client
│   │   ├── serviceRequest.ts   # Service request API
│   │   └── workOrders.ts       # Work orders API
│   ├── store/
│   │   └── authStore.ts        # Zustand auth state management
│   ├── types/
│   │   ├── index.d.ts          # Global type definitions
│   │   └── user.d.ts           # User-related types
│   └── utils/
│       ├── helper.ts           # Utility helper functions
│       └── priority.ts         # Priority level utilities
│
└── public/
    └── images/                 # Static assets
        ├── brands/
        ├── product/
        ├── service/
        └── slides/
\`\`\`

## Key Features

### 1. Customer Portal (\`/portal\`)
- **Profile Management** - Update personal information
- **Billing** - View invoices and payment history
- **Service History** - Track completed services
- **Book Maintenance** - Schedule maintenance appointments
- **Request Repair** - Submit repair requests

### 2. Admin Dashboard (\`/admin\`)
- **Member Management** - Add, edit, view customers
- **Plans Management** - Create and manage maintenance plans
- **Queue Management** - View and manage service requests
- **Work Orders** - Assign and track work orders

### 3. Public Pages
- **Homepage** - Landing page with hero section, services, products, FAQs, reviews
- **Services** - Detailed service descriptions (cooling, heating, repair, maintenance)
- **Products** - Available HVAC products and systems
- **About** - Company information
- **Maintenance Plans** - Public plan details with pricing

### 4. E-Commerce
- **Stripe Integration** - Secure payment processing
- **Plan Checkout** - Subscription flow with success/cancel pages
- **Plan Registration** - Modal-based plan selection

## Authentication & Authorization

The application uses Zustand for auth state management with the following features:
- User registration and login
- Token-based authentication (stored in persistent state)
- Role-based access control (via \`RequireRole\` component)
- Protected routes for portal and admin sections

**Auth Store** (src/lib/store/authStore.ts):
- Manages user, token, loading, and error states
- Persists auth data to localStorage
- Methods: \`setUser()\`, \`setToken()\`, \`logout()\`, \`isAuthenticated()\`

## API Integration

### Axios Instance
Configured in src/lib/services/axiosInstance.ts with:
- Base URL configuration via environment variables
- Automatic token injection in headers
- Error handling and response transformation

### Service APIs
- **Auth Service** - Login, register, logout, fetch current user
- **Service Request Service** - Create and manage service requests
- **Work Orders Service** - Fetch and update work orders

## Component Architecture

### Layout Components
- \`Layout\` - Main wrapper with header/footer
- \`Sidebar\` - Admin navigation sidebar
- Various section components (Hero, FAQ, Reviews, etc.)

### Common Components
- \`CallButton\` - WhatsApp/phone contact buttons
- \`MaintenancePlans\` - Plan display component
- \`PricingPlans\` - Plan pricing display
- \`Map\` - Service area visualization
- \`ServiceCard\` - Individual service display
- \`PlanRegistrationModal\` - Plan enrollment modal

### UI Components
- Base components for buttons, forms, cards, modals
- Styled with Tailwind CSS
- Accessible with Headless UI

## Styling

- **Tailwind CSS 4** for utility-first styling
- **PostCSS** for CSS processing
- **Autoprefixer** for browser compatibility
- Global styles in src/app/globals.css
- Custom fonts (Geist) loaded via Next.js fonts

## Development

### Setup
\`\`\`bash
npm install
npm run dev
\`\`\`

### Build
\`\`\`bash
npm run build
npm start
\`\`\`

### Linting
\`\`\`bash
npm run lint
\`\`\`

### Environment Variables
Configure in \`.env.local\`:
\`\`\`
NEXT_PUBLIC_API_BASE_URL=
NEXT_PUBLIC_STRIPE_KEY=
\`\`\`

## Type System

TypeScript configuration targets ES2017 with strict mode enabled.

**User Types** (src/lib/types/user.d.ts):
- \`User\` - User profile data
- \`AuthState\` - Authentication store state
- \`LoginPayload\` - Login request data
- \`RegisterPayload\` - Registration request data
- \`AuthResponse\` - API response for auth endpoints

## Mock Data

Development includes mock data for:
- Authentication users
- Service checklists
- FAQs
- Team members
- Maintenance plans
- Products
- Customer reviews
- Service requests
- Work orders
- Subscriptions

Use these from src/lib/mock/ when building features before API integration.

## Browser Support

- Modern browsers with ES2017 support
- Mobile-responsive design with Tailwind CSS
- Touch-friendly interface for mobile devices

## Performance

- Next.js 16 optimizations (automatic code splitting, SSR)
- React Query for efficient data caching
- Framer Motion for optimized animations
- Image optimization with Next.js Image component

## Deployment

The project is configured for deployment to:
- Vercel (recommended for Next.js)
- Any Node.js hosting environment

Build output: \`.next/\` directory

## Contributing

When adding features:
1. Create components in appropriate subdirectories under \`lib/components/\`
2. Use TypeScript for type safety
3. Follow existing naming conventions
4. Add types to \`lib/types/\`
5. Use Zustand for global state, React Query for server state
6. Style with Tailwind CSS classes

## License

[Add your license here]
"@ | Out-File -Encoding UTF8 README.md