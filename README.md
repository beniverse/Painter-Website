# ProPaint Services - Professional Painter Website

A modern, fully client-side static website for a professional painting and handyman service specializing in residential and commercial painting projects.

## 🎨 Features

### Design & Aesthetics
- **High-contrast photography** with grayscale-to-color hover effects
- **Modern, clean layout** with structured grid system
- **Professional color palette** (Paint Yellow #ffc107, Sky Blue #2196f3)
- **Responsive typography** using Poppins and Inter fonts
- **Mobile-first responsive design** (320px to 1440px+)

### Pages Included
1. **Home** - Hero section with CTA, service summary
2. **About Us** - Company background, team, certifications
3. **Services** - Detailed service listings with pricing
4. **Gallery** - Project portfolio with filtering
5. **Contact** - Multi-form contact system with validation
6. **FAQ** - Expandable accordion interface
7. **Legal Pages** - Terms of Service, Privacy Policy

### Technical Features
- **Vanilla JavaScript** - No frameworks or dependencies
- **Modular CSS** - Organized, maintainable stylesheets
- **Form Validation** - Real-time client-side validation
- **Smooth Animations** - CSS transitions and JavaScript effects
- **SEO Optimized** - Semantic HTML and meta descriptions
- **Performance Focused** - Optimized images and code

## 📁 Project Structure

```
painter-website/
├── index.html                 # Homepage
├── pages/
│   ├── about.html            # About Us page
│   ├── services.html         # Services listing
│   ├── gallery.html          # Project gallery
│   ├── contact.html          # Contact forms
│   ├── faq.html             # FAQ accordion
│   ├── terms.html           # Terms of Service
│   └── privacy.html         # Privacy Policy
├── assets/
│   ├── css/
│   │   ├── reset.css        # CSS normalization
│   │   ├── main.css         # Core styles & variables
│   │   ├── layout.css       # Layout utilities
│   │   └── gallery.css      # Gallery-specific styles
│   └── js/
│       ├── scroll.js        # Navigation & scroll effects
│       ├── form.js          # Form validation & handling
│       └── faq.js           # FAQ accordion functionality
├── images/                   # Project images (8 high-quality photos)
└── README.md                # This file
```

## 🚀 Getting Started

### Prerequisites
- Modern web browser (Chrome, Firefox, Safari, Edge)
- Web server (for local development) or static hosting service

### Local Development
1. Clone or download the project files
2. Open in a local web server:
   ```bash
   # Using Python 3
   python -m http.server 8000
   
   # Using Node.js live-server
   npx live-server
   
   # Using PHP
   php -S localhost:8000
   ```
3. Open `http://localhost:8000` in your browser

### Deployment
The website is completely static and can be deployed to:
- **GitHub Pages**
- **Netlify**
- **Vercel**
- **Any static hosting service**

Simply upload all files to your hosting provider's root directory.

## 🎯 Service Specializations

### Residential Services
- Interior wall painting
- Exterior house painting
- Room makeovers
- Color consultation

### Commercial Services
- Office building painting
- Retail space renovation
- Industrial facility coating
- High-rise facade work

### Specialty Work
- Stairway and railing painting
- Architectural detail work
- Scaffolding and safety equipment
- Multi-story building projects

## 🛠️ Customization

### Colors
Primary colors are defined in CSS custom properties in `assets/css/main.css`:
```css
:root {
    --color-dark: #1a1a1a;
    --color-light: #f9f9f9;
    --color-accent: #ffc107;      /* Paint Yellow */
    --color-accent-2: #2196f3;    /* Sky Blue */
}
```

### Content
- Update company information in all HTML files
- Replace placeholder contact details
- Modify service descriptions and pricing
- Add or remove FAQ items as needed

### Images
- Replace images in the `/images/` folder
- Update image paths in HTML files
- Maintain aspect ratios for best results
- Optimize images for web (recommended: WebP format)

## 📱 Responsive Breakpoints

- **Mobile**: 320px - 767px
- **Tablet**: 768px - 1023px  
- **Desktop**: 1024px - 1440px+

## ⚡ Performance Features

- **Optimized CSS** with minimal redundancy
- **Efficient JavaScript** with event delegation
- **Image lazy loading** ready for implementation
- **Minimal HTTP requests**
- **Compressed and minified code** ready

## 🔧 Browser Support

- **Chrome** 60+
- **Firefox** 60+
- **Safari** 12+
- **Edge** 79+
- **Mobile browsers** (iOS Safari, Chrome Mobile)

## 📞 Contact Form Features

### Quote Request Form
- Project type selection
- Timeline preferences  
- Location and size inputs
- Detailed project description
- Real-time validation

### Quick Contact Form
- Simple message form
- Emergency contact option
- Phone/email validation
- Success notifications

## 🎨 Design Philosophy

The website reflects the hands-on, authentic nature of professional painting work:
- **High-contrast photography** showcasing real work
- **Clean, structured layouts** for professionalism
- **Accessible design** for all users
- **Trust-building elements** (certifications, testimonials)
- **Call-to-action focused** for lead generation

## 📈 SEO Features

- Semantic HTML5 structure
- Meta descriptions for all pages
- Open Graph tags ready for social sharing
- Schema markup ready for implementation
- Clean URL structure
- Fast loading times

## 🔒 Security Notes

- All forms use client-side validation only
- No backend processing included
- Contact forms require server-side implementation
- HTTPS recommended for production
- Content Security Policy headers recommended

## 📄 License

This project is created for demonstration purposes. All images are from Unsplash and follow their license terms. Code is provided as-is for educational and commercial use.

## 🤝 Contributing

To improve this website template:
1. Fork the repository
2. Create a feature branch
3. Make your improvements
4. Test across multiple browsers
5. Submit a pull request

## 📞 Support

For questions about this website template:
- Create an issue in the repository
- Contact via the demo contact form
- Email template questions to support

---

**ProPaint Services** - Transforming spaces with professional craftsmanship since 2008. 