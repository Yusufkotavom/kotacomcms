# Kotacom Agency - Modern Next.js Frontend

A modern, responsive website for Kotacom Agency built with Next.js 15 and integrated with Payload CMS. Features a beautiful black and white gradient design with full integration of services, projects, products, and blog posts.

## 🚀 Features

- **Modern Design**: Clean black and white gradient aesthetic with professional typography
- **Fully Responsive**: Mobile-first design that works on all devices
- **CMS Integration**: Complete integration with Payload CMS collections
- **Performance Optimized**: Built with Next.js 15 for optimal performance
- **SEO Ready**: Proper meta tags and structured content
- **Accessibility**: WCAG compliant design and navigation

## 📱 Pages & Components

### Main Pages
- **Homepage** (`/`) - Hero section, featured services, projects, products, and posts
- **Services** (`/services`) - All agency services with filtering
- **Projects** (`/projects`) - Portfolio of completed projects
- **Products** (`/products`) - Technology products and recommendations
- **Blog** (`/posts`) - Articles and insights
- **About** (`/about`) - Company information and team
- **Contact** (`/contact`) - Contact form and information

### Detail Pages
- **Service Detail** (`/services/[slug]`) - Individual service information
- **Project Detail** (`/projects/[slug]`) - Project portfolio details
- **Product Detail** (`/products/[slug]`) - Product specifications and purchase options
- **Post Detail** (`/posts/[slug]`) - Full blog post content

## 🎨 Design System

### Colors
- **Primary**: Black (#000000)
- **Secondary**: White (#ffffff)
- **Accent**: Light gray (#f5f5f5)
- **Gradients**: Sophisticated black to white gradients

### Typography
- **Font Family**: Inter (Google Fonts)
- **Font Weights**: 300, 400, 500, 600, 700, 800, 900
- **Responsive Sizing**: From xs (0.75rem) to 6xl (3.75rem)

### Components
- **Buttons**: Primary, secondary, and outline variants
- **Cards**: Hover effects and shadows
- **Navigation**: Sticky navbar with smooth scrolling
- **Grid System**: Responsive 2, 3, and 4 column layouts
- **Animations**: Fade-in and slide-in effects

## 🛠️ Technology Stack

- **Frontend**: Next.js 15, React 19, TypeScript
- **Styling**: CSS with CSS Variables and utility classes
- **CMS**: Payload CMS integration
- **Database**: PostgreSQL (via Payload)
- **Deployment**: Docker ready

## 📦 Installation & Setup

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd kotacom
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   pnpm install
   ```

3. **Environment setup**
   ```bash
   cp env.example .env
   # Fill in your environment variables
   ```

4. **Database setup**
   ```bash
   npm run db:test
   npm run db:migrate
   ```

5. **Start development server**
   ```bash
   npm run dev
   ```

6. **Access the application**
   - Frontend: http://localhost:3000
   - Admin Panel: http://localhost:3000/admin

## 🔧 Development

### Available Scripts
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run test` - Run tests

### Project Structure
```
src/
├── app/
│   └── (frontend)/
│       ├── page.tsx              # Homepage
│       ├── services/             # Services pages
│       ├── projects/             # Projects pages
│       ├── products/             # Products pages
│       ├── posts/                # Blog pages
│       ├── about/                # About page
│       ├── contact/              # Contact page
│       ├── layout.tsx            # Root layout
│       └── styles.css            # Global styles
├── collections/                  # Payload CMS collections
├── payload/                      # Payload configuration
└── payload.config.ts             # Main Payload config
```

## 📊 CMS Collections

### Services
- Title, description, category, pricing
- Service areas, provider information
- Images and detailed content

### Projects
- Project details, client information
- Categories, locations, costs
- Project images and descriptions

### Products
- Product specifications, pricing
- Features, categories, e-commerce links
- Multiple images and affiliate information

### Posts
- Blog articles with categories and tags
- Rich content support (Markdown/HTML)
- Cover images and metadata

## 🎯 Key Features

### Responsive Design
- Mobile-first approach
- Breakpoints: 480px, 768px, 1024px
- Flexible grid system

### Performance
- Next.js 15 optimizations
- Image optimization
- Lazy loading with Suspense

### SEO
- Meta tags for all pages
- Open Graph support
- Structured content

### Accessibility
- Semantic HTML
- ARIA labels
- Keyboard navigation
- High contrast design

## 🚀 Deployment

### Docker
```bash
docker-compose up -d
```

### Manual Deployment
1. Build the application: `npm run build`
2. Start production server: `npm run start`

## 📝 Content Management

Use the Payload CMS admin panel to:
- Create and manage services
- Add portfolio projects
- Upload product information
- Write and publish blog posts
- Manage media files

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

## 📞 Support

For support and questions:
- Email: info@kotacom.id
- Phone: +62 21 1234 5678

---

**Kotacom Agency** - Transforming businesses through innovative digital solutions.
