# Ernesto_1574 Portfolio - replit.md

## Overview

This is a personal portfolio website for Ernesto_1574, a Discord community staff professional and server owner. The site showcases their Discord servers, professional experience, and community leadership role. It's a static, single-page application built with vanilla HTML, CSS, and JavaScript featuring modern animations, particle effects, and a cyberpunk-inspired design aesthetic.

## Recent Changes

### October 11, 2025
- **Server Links Enhancement**: Added website and store links below each server card with color-coded animated buttons (Discord blue, Web cyan, Store purple)
- **Hiring Notice Section**: Added informational notice before services section stating availability for hiring requests
- **Contratación de Staff Section**: Created new hiring section with:
  - Professional hiring information and experience details
  - Discord contact card with copyable username functionality
  - Click-to-copy feature with visual feedback (changes color to green when copied)
  - Responsive design with hover effects and animations

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Technology Stack:**
- Pure HTML5, CSS3, and vanilla JavaScript (no frameworks)
- Custom CSS with CSS variables for theming
- Lucide icons for iconography
- Google Fonts (Poppins and JetBrains Mono)

**Design Patterns:**
- Single Page Application (SPA) architecture
- Component-based CSS organization using BEM-like naming
- Declarative animations using CSS keyframes
- Event-driven JavaScript for interactivity

**Key Architectural Decisions:**

1. **No Framework Approach**: The project uses vanilla JavaScript instead of frameworks like React or Vue
   - **Rationale**: Simplicity, minimal bundle size, and direct DOM manipulation for a small-scale portfolio
   - **Pros**: Fast loading, no build process, easy to understand
   - **Cons**: Manual DOM management, no component reusability

2. **CSS Custom Properties for Theming**: Centralized color and style management through CSS variables
   - **Rationale**: Easy theme customization and consistent styling across components
   - **Pros**: Simple color scheme updates, maintainable codebase
   - **Cons**: Limited browser support for older browsers

3. **Particle Animation System**: Custom particle generation using JavaScript and CSS animations
   - **Rationale**: Creates an engaging, modern visual experience
   - **Pros**: Eye-catching effects, configurable parameters
   - **Cons**: Performance overhead on low-end devices

4. **Intersection Observer for Animations**: Uses modern browser APIs for scroll-triggered animations
   - **Rationale**: Performance-efficient alternative to scroll event listeners
   - **Pros**: Better performance, native browser support
   - **Cons**: Requires polyfill for older browsers

### Visual Design System

**Color Palette:**
- Primary: Indigo (#6366f1)
- Secondary: Purple (#8b5cf6)
- Accent: Cyan (#06b6d4)
- Dark backgrounds with gradient overlays
- Glassmorphism effects for cards and components

**Animation Strategy:**
- Particle floating animations in background
- Glitch effect on hero title
- Fade-in animations on scroll
- Smooth scroll behavior
- Card hover effects with transforms

**Responsive Design:**
- Mobile-first approach implied by viewport meta tag
- Flexible grid layouts for server cards
- CSS-based responsive breakpoints

### Code Organization

**File Structure:**
- `index.html` - Main HTML structure and content
- `style.css` - All styling, animations, and visual effects
- `script.js` - Interactive features and DOM manipulation
- Image assets referenced (dragones-blancos.png)

**JavaScript Module Pattern:**
- Event-driven initialization on DOMContentLoaded
- Functional programming approach with discrete utility functions
- Separation of concerns: particles, observers, scroll, animations, card effects, clipboard operations

**Key Features:**
1. **Server Links**: Each server card displays Discord invite, website, and store links with unique color-coded animations
2. **Copyable Discord Username**: Contact section with click-to-copy functionality using Clipboard API
3. **Visual Feedback System**: Real-time user feedback for copy operations with color changes and text updates
4. **Hiring Information**: Professional services section with pricing details and experience highlights

## External Dependencies

### CDN Resources

1. **Lucide Icons** (https://unpkg.com/lucide@latest)
   - Purpose: Icon system for UI elements
   - Usage: Section icons and visual indicators
   - Integration: Client-side script loading

2. **Google Fonts API**
   - Poppins font family (weights: 300, 400, 500, 600, 700)
   - JetBrains Mono font family (weights: 400, 500, 600)
   - Purpose: Typography system
   - Integration: CSS @import via link tags

### Browser APIs

1. **Intersection Observer API**
   - Purpose: Scroll-triggered animations and element observation
   - Fallback: May require polyfill for older browsers

2. **Canvas API**
   - Purpose: Card particle effects rendering
   - Usage: Dynamic visual effects on server cards

3. **Clipboard API**
   - Purpose: Copy Discord username to clipboard
   - Usage: Copy-to-clipboard functionality in the hiring section
   - Integration: Modern async/await clipboard.writeText() method

### Asset Dependencies

- Custom imagery (e.g., dragones-blancos.png)
- No external CSS frameworks or component libraries
- No build tools or bundlers required