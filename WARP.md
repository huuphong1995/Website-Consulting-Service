# WARP.md

This file provides guidance to WARP (warp.dev) when working with code in this repository.

## Project Overview

This is a React-based consulting service website built with Create React App. It's a single-page application (SPA) that showcases consulting services with a professional landing page structure.

## Architecture

### Component Structure
- **Single-page layout**: All sections rendered in a single App component with smooth scrolling navigation
- **Component-based architecture**: Each section is a separate React component
- **Co-located styles**: Each component has its own CSS file in the `src/styles/` directory
- **Static content**: Services data is defined as JavaScript objects within components

### Key Components
- `App.js` - Main application component that renders all sections sequentially
- `Header.js` - Navigation bar with smooth scrolling to sections
- `Hero.js` - Landing section with call-to-action buttons
- `About.js` - Company information section
- `Services.js` - Services showcase with grid layout (6 service cards)
- `Contact.js` - Contact form and information
- `Footer.js` - Footer with additional links and information

### Navigation Pattern
- Uses smooth scrolling to navigate between sections via `element.scrollIntoView({ behavior: 'smooth' })`
- Sections are identified by HTML `id` attributes: `home`, `about`, `services`, `contact`
- Navigation buttons in Header component trigger scrolling functions

## Development Commands

### Start Development Server
```bash
npm start
```
Runs the app at http://localhost:3000 with hot reloading

### Run Tests
```bash
npm test
```
Launches Jest test runner in interactive watch mode

### Run Single Test File
```bash
npm test -- --testPathPattern=App.test.js
```

### Build for Production
```bash
npm run build
```
Creates optimized production build in the `build/` folder

### Analyze Bundle Size
```bash
npm run build
npx serve -s build
```

## Testing Setup

- Uses React Testing Library with Jest
- Test files follow the pattern `*.test.js`
- Setup file: `src/setupTests.js` configures jest-dom matchers
- Currently has basic smoke test in `App.test.js`

## Styling Approach

- CSS files are organized in `src/styles/` directory
- Each component imports its corresponding CSS file
- Uses traditional CSS classes (no CSS-in-JS or CSS modules)
- Responsive design patterns should be implemented in component-specific CSS files

## Content Management

Services content is hardcoded in `Services.js` as a JavaScript array. To modify services:
- Edit the `services` array in `src/components/Services.js`
- Each service object contains: `title`, `description`, and `features` array

## File Organization

```
src/
├── components/          # React components
│   ├── Header.js
│   ├── Hero.js
│   ├── About.js
│   ├── Services.js
│   ├── Contact.js
│   └── Footer.js
├── styles/             # CSS files for each component
│   ├── Header.css
│   ├── Hero.css
│   ├── About.css
│   ├── Services.css
│   ├── Contact.css
│   └── Footer.css
├── App.js             # Main app component
├── index.js           # React entry point
└── App.test.js        # Basic app test
```

## Common Development Tasks

### Adding a New Section
1. Create component in `src/components/`
2. Create corresponding CSS file in `src/styles/`
3. Import and add component to `App.js`
4. Add navigation link in `Header.js` with appropriate `scrollToSection` call
5. Ensure the section has the correct `id` attribute for navigation

### Modifying Service Content
Edit the `services` array in `src/components/Services.js` - each service needs `title`, `description`, and `features` properties.

### Adding Form Functionality
The Contact component likely needs form submission logic. Implement form handlers in `src/components/Contact.js` and consider adding a backend API or third-party service integration.