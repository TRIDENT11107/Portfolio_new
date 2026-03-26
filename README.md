# Modern Portfolio Website

A beautiful, responsive portfolio website built with React that showcases your skills, projects, and professional experience.

## Features

- 🎨 **Modern Design**: Clean, professional design with smooth animations
- 📱 **Responsive**: Fully responsive design that works on all devices
- ⚡ **Fast Performance**: Optimized React components and CSS
- 🎯 **SEO Friendly**: Proper meta tags and semantic HTML
- 🔧 **Easy Customization**: Simple to modify content and styling
- 📧 **Contact Form**: Functional contact form ready for backend integration

## Sections

1. **Hero Section** - Eye-catching introduction with call-to-action buttons
2. **About Section** - Personal information and background
3. **Skills Section** - Technical skills with progress bars
4. **Projects Section** - Portfolio of your work
5. **Contact Section** - Contact form and information
6. **Footer** - Additional links and social media

## Technologies Used

- **Frontend**: React 18, CSS3, HTML5
- **Styling**: Custom CSS with CSS Variables
- **Icons**: React Icons
- **Animations**: CSS animations and transitions
- **Responsive**: CSS Grid and Flexbox

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd portfolio_draft
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

4. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### Building for Production

```bash
npm run build
```

This creates a `build` folder with your production-ready website.

## Customization

### Personal Information

1. **Hero Section**: Update your name, role, and description in `src/components/Hero.js`
2. **About Section**: Modify your background and experience in `src/components/About.js`
3. **Skills**: Update your technical skills and proficiency levels in `src/components/Skills.js`
4. **Projects**: Add your own projects in `src/components/Projects.js`
5. **Contact**: Update contact information in `src/components/Contact.js`

### Styling

- **Colors**: Modify CSS variables in `src/App.css` under `:root`
- **Fonts**: Change fonts in `src/index.css`
- **Layout**: Adjust spacing and grid layouts in individual component CSS files

### Images

- Replace placeholder images with your own photos
- Update image paths in the components
- Optimize images for web use

## Project Structure

```
src/
├── components/          # React components
│   ├── Header.js       # Navigation header
│   ├── Hero.js         # Hero section
│   ├── About.js        # About section
│ │   ├── Skills.js       # Skills section
│ ├── Projects.js     # Projects showcase
│ ├── Contact.js      # Contact form
│ ├── Footer.js       # Footer
│ └── *.css           # Component styles
├── App.js              # Main app component
├── App.css             # Global styles
├── index.js            # App entry point
└── index.css           # Base styles
```

## Deployment

### Netlify (Recommended)

1. Push your code to GitHub
2. Connect your repository to Netlify
3. Build command: `npm run build`
4. Publish directory: `build`

### Vercel

1. Install Vercel CLI: `npm i -g vercel`
2. Run `vercel` in your project directory
3. Follow the prompts

### GitHub Pages

1. Add `"homepage": "https://yourusername.github.io/repository-name"` to package.json
2. Install gh-pages: `npm install --save-dev gh-pages`
3. Add scripts to package.json:
   ```json
   "predeploy": "npm run build",
   "deploy": "gh-pages -d build"
   ```
4. Run `npm run deploy`

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is open source and available under the [MIT License](LICENSE).

## Support

If you have any questions or need help customizing your portfolio, feel free to open an issue or reach out!

---

**Happy coding! 🚀** 