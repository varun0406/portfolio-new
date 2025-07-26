# Varun Kotwani - Portfolio Application

A next-generation portfolio application showcasing expertise in Data Analytics, Artificial Intelligence, and Machine Learning services. Built with modern React, featuring smooth animations, responsive design, and a Gen Z aesthetic.

## 🚀 Features

- **Modern React Application** - Built with React 18 and modern JavaScript
- **Smooth Animations** - Framer Motion for engaging user interactions
- **Responsive Design** - Flawless display on all devices
- **Performance Optimized** - Fast loading times and optimized code
- **Accessibility** - WCAG compliant design
- **SEO Optimized** - Meta tags and structured data

## 🎯 Key Sections

1. **Hero Section** - Instant impact with compelling headline and CTAs
2. **Services Overview** - Core intelligence services showcase
3. **Value Proposition** - Unique differentiators and expertise
4. **Featured Projects** - Real-world impact and case studies
5. **Contact Section** - Easy connection and consultation booking

## 🛠️ Tech Stack

- **Frontend**: React 18, Framer Motion, Lucide React Icons
- **Styling**: CSS3 with CSS Custom Properties
- **Animations**: Framer Motion, CSS Animations
- **Performance**: React.lazy, Intersection Observer
- **Deployment**: Ready for GCP Cloud Run/App Engine

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd varun-kotwani-portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm start
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000`

## 🏗️ Build for Production

```bash
npm run build
```

This creates an optimized production build in the `build` folder.

## 🚀 Deployment

### Google Cloud Platform (Recommended)

1. **Install Google Cloud CLI**
   ```bash
   # Download and install from https://cloud.google.com/sdk/docs/install
   ```

2. **Initialize your project**
   ```bash
   gcloud init
   ```

3. **Deploy to Cloud Run**
   ```bash
   # Build the application
   npm run build
   
   # Deploy to Cloud Run
   gcloud run deploy varun-portfolio \
     --source . \
     --platform managed \
     --region us-central1 \
     --allow-unauthenticated
   ```

4. **Deploy to App Engine**
   ```bash
   # Create app.yaml file
   echo "runtime: nodejs18
   service: default
   handlers:
   - url: /static
     static_dir: build/static
   - url: /(.*\..+)$
     static_files: build/\1
     upload: build/(.*\..+)$
   - url: /.*
     static_files: build/index.html
     upload: build/index.html" > app.yaml
   
   # Deploy
   gcloud app deploy
   ```

### Alternative Deployment Options

- **Vercel**: Connect your GitHub repository for automatic deployments
- **Netlify**: Drag and drop the `build` folder
- **Firebase Hosting**: Use Firebase CLI for deployment

## 🎨 Customization

### Colors and Theme
Edit CSS custom properties in `src/index.css`:
```css
:root {
  --primary: #6366f1;
  --secondary: #10b981;
  --accent: #f59e0b;
  /* ... other variables */
}
```

### Content Updates
- **Hero Section**: Update in `src/App.js` lines 120-140
- **Services**: Modify the services array in the Services Section
- **Projects**: Update project data in the Projects Section
- **Contact Info**: Update contact details in the Contact Section

### Adding New Sections
1. Create the component in `src/App.js`
2. Add corresponding styles in `src/App.css`
3. Include in the main App component

## 📱 Performance Optimization

- **Lazy Loading**: Images and components load on demand
- **Code Splitting**: Automatic with React Router (if added)
- **Optimized Assets**: Compressed images and minified code
- **Caching**: Proper cache headers for static assets

## 🔍 SEO Features

- **Meta Tags**: Comprehensive meta information
- **Open Graph**: Social media sharing optimization
- **Structured Data**: JSON-LD for search engines
- **Sitemap**: Auto-generated sitemap.xml
- **Robots.txt**: Search engine crawling instructions

## 🎯 Analytics Integration

### Google Analytics 4
Add to `public/index.html`:
```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

## 🧪 Testing

```bash
# Run tests
npm test

# Run tests with coverage
npm test -- --coverage

# Run tests in watch mode
npm test -- --watch
```

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📞 Contact

- **Email**: varun.kotwani@example.com
- **Phone**: +1 (555) 123-4567
- **GitHub**: github.com/varunkotwani
- **LinkedIn**: linkedin.com/in/varunkotwani

## 🚀 Quick Start Checklist

- [ ] Update personal information in `src/App.js`
- [ ] Replace placeholder contact details
- [ ] Add your actual project case studies
- [ ] Update social media links
- [ ] Configure Google Analytics
- [ ] Test on multiple devices
- [ ] Deploy to your preferred platform
- [ ] Set up custom domain (optional)

---

**Built with ❤️ by Varun Kotwani** 