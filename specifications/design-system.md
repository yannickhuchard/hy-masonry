# HY Masonry Design System

## Overview

The HY Masonry design system provides a comprehensive set of design tokens, components, and guidelines for creating consistent, accessible, and performant masonry layouts. The system emphasizes clean aesthetics with a focus on black, white, and subtle blue-grey gradients.

## Design Principles

### 1. Minimalism
- Clean, uncluttered interfaces
- Focus on content over decoration
- Subtle visual hierarchy

### 2. Accessibility
- High contrast ratios
- Keyboard navigation support
- Screen reader compatibility
- Reduced motion support

### 3. Performance
- Hardware-accelerated animations
- Efficient rendering
- Optimized for various devices

### 4. Responsiveness
- Mobile-first approach
- Adaptive layouts
- Touch-friendly interactions

## Color Palette

### Primary Colors
```css
:root {
  /* Primary Colors */
  --hy-color-black: #000000;
  --hy-color-white: #ffffff;
  --hy-color-grey-50: #fafafa;
  --hy-color-grey-100: #f5f5f5;
  --hy-color-grey-200: #eeeeee;
  --hy-color-grey-300: #e0e0e0;
  --hy-color-grey-400: #bdbdbd;
  --hy-color-grey-500: #9e9e9e;
  --hy-color-grey-600: #757575;
  --hy-color-grey-700: #616161;
  --hy-color-grey-800: #424242;
  --hy-color-grey-900: #212121;
  
  /* Blue-Grey Accents */
  --hy-color-blue-grey-50: #eceff1;
  --hy-color-blue-grey-100: #cfd8dc;
  --hy-color-blue-grey-200: #b0bec5;
  --hy-color-blue-grey-300: #90a4ae;
  --hy-color-blue-grey-400: #78909c;
  --hy-color-blue-grey-500: #607d8b;
  --hy-color-blue-grey-600: #546e7a;
  --hy-color-blue-grey-700: #455a64;
  --hy-color-blue-grey-800: #37474f;
  --hy-color-blue-grey-900: #263238;
  
  /* Semantic Colors */
  --hy-color-primary: #000000;
  --hy-color-secondary: #424242;
  --hy-color-accent: #607d8b;
  --hy-color-success: #4caf50;
  --hy-color-warning: #ff9800;
  --hy-color-error: #f44336;
  --hy-color-info: #2196f3;
}
```

### Theme Variations

#### Default Theme (Light)
```css
hy-masonry[data-theme="default"] {
  --hy-bg-color: var(--hy-color-white);
  --hy-text-color: var(--hy-color-black);
  --hy-border-color: var(--hy-color-grey-300);
  --hy-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  --hy-hover-shadow: 0 4px 16px rgba(0, 0, 0, 0.15);
  --hy-accent-color: var(--hy-color-blue-grey-500);
}
```

#### Dark Theme
```css
hy-masonry[data-theme="dark"] {
  --hy-bg-color: var(--hy-color-grey-900);
  --hy-text-color: var(--hy-color-white);
  --hy-border-color: var(--hy-color-grey-700);
  --hy-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
  --hy-hover-shadow: 0 4px 16px rgba(0, 0, 0, 0.4);
  --hy-accent-color: var(--hy-color-blue-grey-400);
}
```

#### Minimal Theme
```css
hy-masonry[data-theme="minimal"] {
  --hy-bg-color: var(--hy-color-grey-50);
  --hy-text-color: var(--hy-color-grey-900);
  --hy-border-color: var(--hy-color-grey-200);
  --hy-shadow: none;
  --hy-hover-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  --hy-accent-color: var(--hy-color-blue-grey-600);
}
```

## Typography

### Font Stack
```css
:root {
  --hy-font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 
                     'Helvetica Neue', Arial, sans-serif;
  --hy-font-family-mono: 'SF Mono', Monaco, 'Cascadia Code', 'Roboto Mono', 
                         Consolas, 'Courier New', monospace;
}
```

### Type Scale
```css
:root {
  /* Font Sizes */
  --hy-text-xs: 0.75rem;    /* 12px */
  --hy-text-sm: 0.875rem;   /* 14px */
  --hy-text-base: 1rem;     /* 16px */
  --hy-text-lg: 1.125rem;   /* 18px */
  --hy-text-xl: 1.25rem;    /* 20px */
  --hy-text-2xl: 1.5rem;    /* 24px */
  --hy-text-3xl: 1.875rem;  /* 30px */
  --hy-text-4xl: 2.25rem;   /* 36px */
  
  /* Font Weights */
  --hy-font-light: 300;
  --hy-font-normal: 400;
  --hy-font-medium: 500;
  --hy-font-semibold: 600;
  --hy-font-bold: 700;
  
  /* Line Heights */
  --hy-leading-none: 1;
  --hy-leading-tight: 1.25;
  --hy-leading-snug: 1.375;
  --hy-leading-normal: 1.5;
  --hy-leading-relaxed: 1.625;
  --hy-leading-loose: 2;
}
```

### Typography Classes
```css
.hy-text-heading {
  font-family: var(--hy-font-family);
  font-weight: var(--hy-font-semibold);
  line-height: var(--hy-leading-tight);
}

.hy-text-body {
  font-family: var(--hy-font-family);
  font-weight: var(--hy-font-normal);
  line-height: var(--hy-leading-normal);
}

.hy-text-caption {
  font-family: var(--hy-font-family);
  font-size: var(--hy-text-sm);
  font-weight: var(--hy-font-normal);
  line-height: var(--hy-leading-normal);
}
```

## Spacing System

### Spacing Scale
```css
:root {
  /* Spacing Scale (8px base) */
  --hy-space-0: 0;
  --hy-space-1: 0.25rem;   /* 4px */
  --hy-space-2: 0.5rem;    /* 8px */
  --hy-space-3: 0.75rem;   /* 12px */
  --hy-space-4: 1rem;      /* 16px */
  --hy-space-5: 1.25rem;   /* 20px */
  --hy-space-6: 1.5rem;    /* 24px */
  --hy-space-8: 2rem;      /* 32px */
  --hy-space-10: 2.5rem;   /* 40px */
  --hy-space-12: 3rem;     /* 48px */
  --hy-space-16: 4rem;     /* 64px */
  --hy-space-20: 5rem;     /* 80px */
  --hy-space-24: 6rem;     /* 96px */
  
  /* Component Spacing */
  --hy-gap: var(--hy-space-4);           /* 16px */
  --hy-padding: var(--hy-space-5);       /* 20px */
  --hy-border-radius: var(--hy-space-2); /* 8px */
  --hy-item-padding: var(--hy-space-4);  /* 16px */
}
```

## Border Radius

### Radius Scale
```css
:root {
  --hy-radius-none: 0;
  --hy-radius-sm: 0.125rem;  /* 2px */
  --hy-radius-base: 0.25rem; /* 4px */
  --hy-radius-md: 0.375rem;  /* 6px */
  --hy-radius-lg: 0.5rem;    /* 8px */
  --hy-radius-xl: 0.75rem;   /* 12px */
  --hy-radius-2xl: 1rem;     /* 16px */
  --hy-radius-full: 9999px;
}
```

## Shadows

### Shadow System
```css
:root {
  /* Shadow Scale */
  --hy-shadow-sm: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
  --hy-shadow-base: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 
                    0 1px 2px 0 rgba(0, 0, 0, 0.06);
  --hy-shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 
                  0 2px 4px -1px rgba(0, 0, 0, 0.06);
  --hy-shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 
                  0 4px 6px -2px rgba(0, 0, 0, 0.05);
  --hy-shadow-xl: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 
                  0 10px 10px -5px rgba(0, 0, 0, 0.04);
  
  /* Component Shadows */
  --hy-shadow-item: var(--hy-shadow-base);
  --hy-shadow-item-hover: var(--hy-shadow-lg);
  --hy-shadow-item-morphing: var(--hy-shadow-xl);
}
```

## Animation System

### Timing Functions
```css
:root {
  --hy-ease-linear: linear;
  --hy-ease-in: cubic-bezier(0.4, 0, 1, 1);
  --hy-ease-out: cubic-bezier(0, 0, 0.2, 1);
  --hy-ease-in-out: cubic-bezier(0.4, 0, 0.2, 1);
  --hy-ease-bounce: cubic-bezier(0.68, -0.55, 0.265, 1.55);
}
```

### Duration Scale
```css
:root {
  --hy-duration-75: 75ms;
  --hy-duration-100: 100ms;
  --hy-duration-150: 150ms;
  --hy-duration-200: 200ms;
  --hy-duration-300: 300ms;
  --hy-duration-500: 500ms;
  --hy-duration-700: 700ms;
  --hy-duration-1000: 1000ms;
  
  /* Component Durations */
  --hy-transition: var(--hy-duration-300) var(--hy-ease-in-out);
  --hy-morph-duration: var(--hy-duration-500);
  --hy-breathing-speed: 2000ms;
  --hy-pulse-speed: 1500ms;
  --hy-float-speed: 3000ms;
}
```

### Animation Classes
```css
/* Breathing Animation */
.hy-animation-breathing {
  animation: hy-breathing var(--hy-breathing-speed) var(--hy-ease-in-out) infinite;
}

@keyframes hy-breathing {
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.02); }
}

/* Pulse Animation */
.hy-animation-pulse {
  animation: hy-pulse var(--hy-pulse-speed) var(--hy-ease-in-out) infinite;
}

@keyframes hy-pulse {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.8; }
}

/* Float Animation */
.hy-animation-float {
  animation: hy-float var(--hy-float-speed) var(--hy-ease-in-out) infinite;
}

@keyframes hy-float {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-5px); }
}
```

## Layout System

### Grid System
```css
:root {
  /* Grid Configuration */
  --hy-grid-columns: 4;
  --hy-grid-gap: var(--hy-gap);
  --hy-grid-padding: var(--hy-padding);
  
  /* Responsive Breakpoints */
  --hy-breakpoint-sm: 640px;
  --hy-breakpoint-md: 768px;
  --hy-breakpoint-lg: 1024px;
  --hy-breakpoint-xl: 1280px;
  --hy-breakpoint-2xl: 1536px;
}
```

### Responsive Grid Classes
```css
/* Mobile First Grid */
.hy-grid {
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: var(--hy-grid-gap);
  padding: var(--hy-grid-padding);
}

/* Tablet */
@media (min-width: 768px) {
  .hy-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

/* Desktop */
@media (min-width: 1024px) {
  .hy-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

/* Large Desktop */
@media (min-width: 1280px) {
  .hy-grid {
    grid-template-columns: repeat(4, 1fr);
  }
}
```

## Component States

### Interactive States
```css
/* Default State */
.hy-item {
  background-color: var(--hy-bg-color);
  color: var(--hy-text-color);
  border: 1px solid var(--hy-border-color);
  border-radius: var(--hy-radius-lg);
  box-shadow: var(--hy-shadow-item);
  transition: all var(--hy-transition);
}

/* Hover State */
.hy-item:hover {
  transform: scale(1.02);
  box-shadow: var(--hy-shadow-item-hover);
  z-index: 10;
}

/* Focus State */
.hy-item:focus {
  outline: 2px solid var(--hy-color-accent);
  outline-offset: 2px;
}

/* Active State */
.hy-item:active {
  transform: scale(0.98);
}

/* Disabled State */
.hy-item:disabled {
  opacity: 0.5;
  cursor: not-allowed;
  pointer-events: none;
}
```

### Loading States
```css
.hy-item-loading {
  background: linear-gradient(90deg, 
    var(--hy-color-grey-100) 25%, 
    var(--hy-color-grey-200) 50%, 
    var(--hy-color-grey-100) 75%);
  background-size: 200% 100%;
  animation: hy-loading 1.5s infinite;
}

@keyframes hy-loading {
  0% { background-position: 200% 0; }
  100% { background-position: -200% 0; }
}
```

## Accessibility

### Focus Management
```css
/* Focus Visible */
.hy-focus-visible {
  outline: 2px solid var(--hy-color-accent);
  outline-offset: 2px;
}

/* Skip Link */
.hy-skip-link {
  position: absolute;
  top: -40px;
  left: 6px;
  background: var(--hy-color-black);
  color: var(--hy-color-white);
  padding: 8px;
  text-decoration: none;
  border-radius: var(--hy-radius-base);
  z-index: 1000;
}

.hy-skip-link:focus {
  top: 6px;
}
```

### Reduced Motion
```css
@media (prefers-reduced-motion: reduce) {
  .hy-item {
    animation: none;
    transition: none;
  }
  
  .hy-animation-breathing,
  .hy-animation-pulse,
  .hy-animation-float {
    animation: none;
  }
}
```

### High Contrast
```css
@media (prefers-contrast: high) {
  .hy-item {
    border: 2px solid currentColor;
  }
  
  .hy-item:hover {
    border-color: var(--hy-color-accent);
  }
}
```

## Icon System

### Icon Sizes
```css
:root {
  --hy-icon-xs: 0.75rem;   /* 12px */
  --hy-icon-sm: 1rem;      /* 16px */
  --hy-icon-md: 1.25rem;   /* 20px */
  --hy-icon-lg: 1.5rem;    /* 24px */
  --hy-icon-xl: 2rem;      /* 32px */
  --hy-icon-2xl: 2.5rem;   /* 40px */
}
```

### Icon Classes
```css
.hy-icon {
  display: inline-block;
  width: 1em;
  height: 1em;
  vertical-align: middle;
  fill: currentColor;
}

.hy-icon-xs { font-size: var(--hy-icon-xs); }
.hy-icon-sm { font-size: var(--hy-icon-sm); }
.hy-icon-md { font-size: var(--hy-icon-md); }
.hy-icon-lg { font-size: var(--hy-icon-lg); }
.hy-icon-xl { font-size: var(--hy-icon-xl); }
.hy-icon-2xl { font-size: var(--hy-icon-2xl); }
```

## Print Styles

### Print Optimizations
```css
@media print {
  .hy-item {
    break-inside: avoid;
    box-shadow: none;
    border: 1px solid var(--hy-color-grey-400);
    background: var(--hy-color-white) !important;
    color: var(--hy-color-black) !important;
  }
  
  .hy-item:hover {
    transform: none;
    box-shadow: none;
  }
  
  .hy-animation-breathing,
  .hy-animation-pulse,
  .hy-animation-float {
    animation: none;
  }
}
```

## Usage Guidelines

### Color Usage
1. **Primary Text**: Use `--hy-color-black` for main text content
2. **Secondary Text**: Use `--hy-color-grey-600` for supporting text
3. **Backgrounds**: Use `--hy-color-white` for primary backgrounds
4. **Borders**: Use `--hy-color-grey-300` for subtle borders
5. **Accents**: Use `--hy-color-blue-grey-500` for interactive elements

### Spacing Guidelines
1. **Component Padding**: Use `--hy-space-4` (16px) for item padding
2. **Grid Gaps**: Use `--hy-space-4` (16px) for grid spacing
3. **Container Padding**: Use `--hy-space-5` (20px) for container padding
4. **Margins**: Use `--hy-space-2` (8px) for small margins, `--hy-space-4` (16px) for medium margins

### Animation Guidelines
1. **Micro-interactions**: Use 200-300ms duration
2. **State changes**: Use 300-500ms duration
3. **Complex animations**: Use 500-1000ms duration
4. **Always respect**: `prefers-reduced-motion` media query

### Accessibility Guidelines
1. **Color Contrast**: Maintain minimum 4.5:1 ratio for normal text
2. **Focus Indicators**: Always provide visible focus states
3. **Keyboard Navigation**: Ensure all interactive elements are keyboard accessible
4. **Screen Readers**: Use semantic HTML and ARIA labels where appropriate

## Implementation Notes

### CSS Custom Properties
All design tokens are exposed as CSS custom properties, allowing for easy theming and customization:

```css
/* Override any design token */
hy-masonry {
  --hy-color-primary: #your-color;
  --hy-gap: 24px;
  --hy-border-radius: 12px;
}
```

### JavaScript API
Design tokens can also be accessed and modified via JavaScript:

```javascript
const masonry = document.querySelector('hy-masonry');
masonry.style.setProperty('--hy-color-primary', '#your-color');
```

### Theme Switching
Themes can be applied by setting the `data-theme` attribute:

```html
<hy-masonry data-theme="dark">
  <!-- Dark theme content -->
</hy-masonry>
```

This design system provides a solid foundation for creating consistent, accessible, and performant masonry layouts while maintaining flexibility for customization and theming. 