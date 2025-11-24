# Madarsa Khabab Binu Arrati Website

A modern, responsive, and SEO-optimized website for Madarsa Khabab Binu Arrati - an Islamic educational institution in Mogadishu, Somalia.

## Features

- **Fully Responsive Design**: Mobile-first approach with beautiful UI on all devices
- **SEO Optimized**: Complete metadata, sitemap, and structured data for search engines
- **Fast Performance**: Optimized images, static generation, and minimal bundle size
- **Modern Tech Stack**: Next.js 14, React 18, TypeScript, Tailwind CSS
- **Islamic Design**: Clean, minimal UI with Islamic color palette (green, gold, white)
- **Interactive Components**: Contact forms, image gallery, WhatsApp integration

## Pages

1. **Home Page**: Hero section, stats, features, and call-to-action
2. **About Page**: History, mission, vision, teachers, and achievements
3. **Courses Page**: Detailed course information with enrollment options
4. **Admission Page**: Requirements, process, fees, and application form
5. **Gallery Page**: Interactive photo gallery with categories and modal view
6. **Contact Page**: Contact information, map, and contact form

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd madarsa-website
```

2. Install dependencies:
```bash
npm install
```

3. Set up email configuration (for form submissions):
   - Create a `.env.local` file in the root directory
   - Sign up for a free account at [Resend.com](https://resend.com)
   - Get your API key from [Resend API Keys](https://resend.com/api-keys)
   - Add to `.env.local`:
   ```
   RESEND_API_KEY=re_your_api_key_here
   RESEND_FROM_EMAIL=onboarding@resend.dev
   ```
   Note: For production, use a verified domain email address

4. Run the development server:
```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

### Static Export

```bash
npm run build
```

The static files will be generated in the `out` directory.

## Technology Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Forms**: React Hook Form with Zod validation
- **Icons**: Lucide React
- **Animations**: Framer Motion
- **Image Optimization**: Next.js Image component

## Project Structure

```
src/
├── app/                    # App Router pages
│   ├── about/             # About page
│   ├── admission/         # Admission page
│   ├── contact/           # Contact page
│   ├── courses/           # Courses page
│   ├── gallery/           # Gallery page
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Home page
│   ├── manifest.ts        # PWA manifest
│   ├── robots.txt         # SEO robots file
│   └── sitemap.ts         # SEO sitemap
├── components/            # Reusable components
│   ├── AdmissionForm.tsx  # Admission form component
│   ├── Footer.tsx         # Footer component
│   ├── Navbar.tsx         # Navigation component
│   └── WhatsAppFloat.tsx  # Floating WhatsApp button
public/                    # Static assets
├── images/               # All madarsa images
└── logo (6).png          # Main logo
```

## Customization

### Colors
The website uses a green, gold, and white color palette. You can customize colors in `tailwind.config.js`:

```javascript
colors: {
  'gold': {
    400: '#fbbf24',
    500: '#f59e0b',
    600: '#d97706',
  },
  'green': {
    // ... green color variations
  }
}
```

### Content
Update content in the respective page files:
- Home: `src/app/page.tsx`
- About: `src/app/about/page.tsx`
- Courses: `src/app/courses/page.tsx`
- etc.

### Images
Replace images in the `public/` directory with your own images. Make sure to update the image paths in the components.

## SEO Features

- Complete meta tags for all pages
- Open Graph and Twitter Card support
- Structured data markup
- XML sitemap generation
- Robots.txt file
- PWA manifest
- Optimized images with alt text

## Performance Optimizations

- Next.js Image component for optimized images
- Static site generation (SSG)
- Minimal JavaScript bundle
- CSS optimization with Tailwind
- Lazy loading for images
- Efficient component structure

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is licensed under the MIT License.

## Contact

For questions about this website, contact:
- Email: info@madarsakhababinuarrati.com
- Phone: +252 XX XXX XXXX

---

Built with ❤️ for Islamic Education Excellence
