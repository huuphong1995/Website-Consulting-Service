# Website Consulting Service

A modern, professional consulting service website built with React. This single-page application showcases consulting services with an elegant design, smooth navigation, and responsive layout.

## 🌟 Project Overview

**ConsultPro** is a business consulting service website that helps companies achieve their goals through strategic consulting, operational excellence, and innovative solutions. The website features a complete business presentation with services showcase, company information, and contact capabilities.

## ✨ Features

- **Modern Single Page Application (SPA)** - Built with React for fast, seamless user experience
- **Smooth Scrolling Navigation** - Elegant navigation between sections without page reloads
- **Responsive Design** - Optimized for desktop, tablet, and mobile devices
- **Service Showcase** - Detailed presentation of 6 core consulting services
- **Professional Branding** - Clean, business-focused design with ConsultPro branding
- **Contact Integration** - Contact form and company information section
- **Performance Optimized** - Built with Create React App for optimal loading speeds

## 🏗️ Project Architecture

### Component Structure
The application follows a component-based architecture with clear separation of concerns:

```
src/
├── components/          # React components
│   ├── Header.js       # Navigation bar with smooth scrolling
│   ├── Hero.js         # Landing section with CTA buttons
│   ├── About.js        # Company information section
│   ├── Services.js     # Services showcase with 6 service cards
│   ├── Contact.js      # Contact form and information
│   └── Footer.js       # Footer with additional links
├── styles/             # Component-specific CSS files
│   ├── Header.css
│   ├── Hero.css
│   ├── About.css
│   ├── Services.css
│   ├── Contact.css
│   └── Footer.css
├── App.js             # Main application component
├── index.js           # React entry point
└── App.test.js        # Application tests
```

### Key Features Implementation

**Smooth Scrolling Navigation:**
- Uses `element.scrollIntoView({ behavior: 'smooth' })` for seamless section transitions
- Sections are identified by HTML `id` attributes: `home`, `about`, `services`, `contact`
- Navigation buttons in Header component trigger smooth scrolling functions

**Service Management:**
- Services content is managed as JavaScript objects in `Services.js`
- Each service includes: title, description, and feature list
- Easy to modify and extend service offerings

**Styling Architecture:**
- Component-specific CSS files in `src/styles/` directory
- Traditional CSS approach for maximum compatibility
- Responsive design patterns implemented per component

## 🛠️ Technology Stack

- **Frontend Framework:** React 19.1.1
- **Build Tool:** Create React App 5.0.1
- **Testing:** React Testing Library + Jest
- **Styling:** CSS3 with component-specific stylesheets
- **Development:** Node.js with npm package manager

## 🚀 Getting Started

### Prerequisites

- **Node.js** (version 14 or higher)
- **npm** (comes with Node.js)
- **Git** (for version control)

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/huuphong1995/Website-Consulting-Service.git
   cd Website-Consulting-Service
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm start
   ```

4. **Open your browser:**
   - Navigate to [http://localhost:3000](http://localhost:3000)
   - The app will automatically reload when you make changes

## 📝 Available Scripts

### Development
```bash
npm start
```
- Runs the app in development mode
- Opens [http://localhost:3000](http://localhost:3000) in your browser
- Hot reloading enabled - page updates automatically when you save changes
- Lint errors displayed in console

### Testing
```bash
npm test
```
- Launches Jest test runner in interactive watch mode
- Automatically re-runs tests when files change
- Includes React Testing Library for component testing

### Production Build
```bash
npm run build
```
- Creates optimized production build in `build/` folder
- Bundles React in production mode for best performance
- Minifies code and includes hashes in filenames
- Ready for deployment to any static hosting service

### Bundle Analysis
```bash
npm run build
npx serve -s build
```
- Build the project and serve it locally
- Analyze bundle size and performance
- Test production build before deployment

## 🎯 Services Offered

The website showcases six core consulting services:

1. **Strategic Planning** - Market analysis, competitive intelligence, growth roadmaps
2. **Operational Excellence** - Process optimization, performance metrics, quality management
3. **Digital Transformation** - Technology assessment, digital strategy, implementation support
4. **Financial Advisory** - Financial analysis, budget planning, investment strategy
5. **Organizational Development** - Team building, leadership development, culture assessment
6. **Market Entry** - Market research, entry strategy, regulatory guidance

## 🔧 Development Guide

### Adding New Services
1. Edit the `services` array in `src/components/Services.js`
2. Each service object requires: `title`, `description`, and `features` array
3. The component will automatically render new services in the grid layout

### Adding New Sections
1. Create component file in `src/components/`
2. Create corresponding CSS file in `src/styles/`
3. Import and add component to `src/App.js`
4. Add navigation link in `src/components/Header.js`
5. Ensure section has proper `id` attribute for smooth scrolling

### Customizing Styles
- Modify component-specific CSS files in `src/styles/`
- Global styles can be added to `src/App.css` or `src/index.css`
- Responsive breakpoints should be added to individual component styles

### Running Tests
```bash
# Run all tests
npm test

# Run specific test file
npm test -- --testPathPattern=App.test.js

# Run tests with coverage
npm test -- --coverage
```

## 🚀 Deployment

The project can be deployed to various platforms:

### Netlify
1. Build the project: `npm run build`
2. Deploy the `build` folder to Netlify
3. Set up continuous deployment with your GitHub repository

### Vercel
1. Connect your GitHub repository to Vercel
2. Vercel will automatically detect React and configure build settings
3. Deployment happens automatically on every push to main branch

### GitHub Pages
1. Install gh-pages: `npm install --save-dev gh-pages`
2. Add deployment script to package.json
3. Run: `npm run deploy`

## 📁 Project Structure

```
Website-Consulting-Service/
├── public/                 # Static assets
│   ├── index.html         # Main HTML template
│   ├── favicon.ico        # Website favicon
│   └── manifest.json      # PWA configuration
├── src/                   # Source code
│   ├── components/        # React components
│   ├── styles/           # CSS stylesheets
│   ├── App.js            # Main App component
│   ├── index.js          # React entry point
│   └── setupTests.js     # Test configuration
├── package.json          # Dependencies and scripts
├── README.md            # Project documentation
├── WARP.md             # WARP AI development guide
└── .gitignore          # Git ignore rules
```

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch: `git checkout -b feature/new-feature`
3. Commit your changes: `git commit -m 'Add new feature'`
4. Push to the branch: `git push origin feature/new-feature`
5. Submit a pull request

## 📄 License

This project is private and proprietary.

## 👨‍💻 Author

**Huu Phong** - [huuphong1995](https://github.com/huuphong1995)

## 🔗 Live Demo

Once deployed, your website will be available at your chosen hosting platform. The application is fully functional and ready for production use.

---

**Built with ❤️ using React and modern web technologies**
