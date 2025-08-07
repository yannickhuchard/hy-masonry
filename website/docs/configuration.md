# HY Live Masonry Configuration Guide

This comprehensive guide covers all configuration options available in HY Live Masonry, organized by category for easy reference.

## Table of Contents

1. [Layout Configuration](#layout-configuration)
2. [Animation Configuration](#animation-configuration)
3. [Morphing Configuration](#morphing-configuration)
4. [Responsive Configuration](#responsive-configuration)
5. [Interaction Configuration](#interaction-configuration)
6. [Styling Configuration](#styling-configuration)
7. [Performance Configuration](#performance-configuration)
8. [Accessibility Configuration](#accessibility-configuration)
9. [Debug Configuration](#debug-configuration)
10. [Item Configuration](#item-configuration)
11. [Examples](#examples)

## Layout Configuration

### `columns`
**Type:** `number`  
**Default:** `4`  
**Range:** `1-12`

Number of columns in the masonry grid.

```javascript
const config = {
  columns: 6
};
```

### `gap`
**Type:** `number`  
**Default:** `16`  
**Range:** `0-50`

Gap between masonry items in pixels.

```javascript
const config = {
  gap: 20
};
```

### `padding`
**Type:** `number`  
**Default:** `20`  
**Range:** `0-100`

Padding around the masonry container in pixels.

```javascript
const config = {
  padding: 30
};
```

### `layoutAlgorithm`
**Type:** `'packed' | 'loose' | 'grid'`  
**Default:** `'packed'`

Layout algorithm to use for positioning items:
- `packed`: Items are packed tightly (default)
- `loose`: Items are positioned with more space
- `grid`: Strict grid layout

```javascript
const config = {
  layoutAlgorithm: 'loose'
};
```

### `maintainAspectRatio`
**Type:** `boolean`  
**Default:** `false`

Whether to maintain aspect ratio of items.

```javascript
const config = {
  maintainAspectRatio: true
};
```

### `minItemWidth`
**Type:** `number`  
**Default:** `100`

Minimum item width in pixels.

```javascript
const config = {
  minItemWidth: 150
};
```

### `maxItemWidth`
**Type:** `number`  
**Default:** `null` (unlimited)

Maximum item width in pixels.

```javascript
const config = {
  maxItemWidth: 300
};
```

## Animation Configuration

### `animation`
**Type:** `boolean`  
**Default:** `true`

Enable/disable all animations.

```javascript
const config = {
  animation: false
};
```

### `animationDuration`
**Type:** `number`  
**Default:** `300`  
**Range:** `100-2000`

Duration of animations in milliseconds.

```javascript
const config = {
  animationDuration: 500
};
```

### `animationEasing`
**Type:** `string`  
**Default:** `'ease'`

Animation easing function.

```javascript
const config = {
  animationEasing: 'cubic-bezier(0.4, 0, 0.2, 1)'
};
```

### `breathingEffect`
**Type:** `boolean`  
**Default:** `true`

Enable breathing effect on items.

```javascript
const config = {
  breathingEffect: true
};
```

### `breathingSpeed`
**Type:** `number`  
**Default:** `2000`  
**Range:** `1000-10000`

Speed of breathing animation in milliseconds.

```javascript
const config = {
  breathingSpeed: 3000
};
```

### `breathingIntensity`
**Type:** `number`  
**Default:** `0.05`  
**Range:** `0-0.2`

Intensity of breathing effect.

```javascript
const config = {
  breathingIntensity: 0.1
};
```

### `entranceAnimation`
**Type:** `boolean`  
**Default:** `true`

Enable entrance animations when items are added.

```javascript
const config = {
  entranceAnimation: true
};
```

### `entranceStagger`
**Type:** `number`  
**Default:** `100`

Stagger delay between entrance animations in milliseconds.

```javascript
const config = {
  entranceStagger: 150
};
```

## Morphing Configuration

### `morphing`
**Type:** `boolean`  
**Default:** `true`

Enable/disable morphing functionality.

```javascript
const config = {
  morphing: true
};
```

### `morphDuration`
**Type:** `number`  
**Default:** `500`  
**Range:** `200-2000`

Duration of morphing animations in milliseconds.

```javascript
const config = {
  morphDuration: 800
};
```

### `hoverMorph`
**Type:** `boolean`  
**Default:** `true`

Enable morphing on hover.

```javascript
const config = {
  hoverMorph: true
};
```

### `longPressMorph`
**Type:** `boolean`  
**Default:** `true`

Enable morphing on long press.

```javascript
const config = {
  longPressMorph: true
};
```

### `clickMorph`
**Type:** `boolean`  
**Default:** `false`

Enable morphing on click.

```javascript
const config = {
  clickMorph: true
};
```

### `defaultMorphSize`
**Type:** `string`  
**Default:** `'2x2'`

Default morph size for items.

```javascript
const config = {
  defaultMorphSize: '3x2'
};
```

### `animateMorphing`
**Type:** `boolean`  
**Default:** `true`

Whether to animate morphing transitions.

```javascript
const config = {
  animateMorphing: true
};
```

### `morphEasing`
**Type:** `string`  
**Default:** `'cubic-bezier(0.4, 0, 0.2, 1)'`

Morphing easing function.

```javascript
const config = {
  morphEasing: 'ease-in-out'
};
```

## Responsive Configuration

### `responsive`
**Type:** `boolean`  
**Default:** `true`

Enable responsive behavior.

```javascript
const config = {
  responsive: true
};
```

### `breakpoints`
**Type:** `BreakpointConfig`

Breakpoint configuration for different screen sizes.

```javascript
const config = {
  breakpoints: {
    mobile: { columns: 2, gap: 12 },
    tablet: { columns: 3, gap: 14 },
    desktop: { columns: 4, gap: 16 },
    largeDesktop: { columns: 6, gap: 20 }
  }
};
```

### `autoColumns`
**Type:** `boolean`  
**Default:** `true`

Whether to automatically adjust columns based on container width.

```javascript
const config = {
  autoColumns: true
};
```

### `minColumns`
**Type:** `number`  
**Default:** `1`

Minimum columns to show regardless of screen size.

```javascript
const config = {
  minColumns: 2
};
```

### `maxColumns`
**Type:** `number`  
**Default:** `8`

Maximum columns to show regardless of screen size.

```javascript
const config = {
  maxColumns: 12
};
```

## Interaction Configuration

### `longPressDelay`
**Type:** `number`  
**Default:** `500`  
**Range:** `200-2000`

Delay for long press detection in milliseconds.

```javascript
const config = {
  longPressDelay: 800
};
```

### `touchEnabled`
**Type:** `boolean`  
**Default:** `true`

Enable touch interactions.

```javascript
const config = {
  touchEnabled: true
};
```

### `mouseEnabled`
**Type:** `boolean`  
**Default:** `true`

Enable mouse interactions.

```javascript
const config = {
  mouseEnabled: true
};
```

### `keyboardEnabled`
**Type:** `boolean`  
**Default:** `false`

Enable keyboard navigation.

```javascript
const config = {
  keyboardEnabled: true
};
```

### `draggable`
**Type:** `boolean`  
**Default:** `false`

Whether items are draggable.

```javascript
const config = {
  draggable: true
};
```

### `sortable`
**Type:** `boolean`  
**Default:** `false`

Whether items are sortable.

```javascript
const config = {
  sortable: true
};
```

### `selectable`
**Type:** `boolean`  
**Default:** `false`

Enable item selection.

```javascript
const config = {
  selectable: true
};
```

### `multiSelect`
**Type:** `boolean`  
**Default:** `false`

Allow multiple item selection.

```javascript
const config = {
  multiSelect: true
};
```

## Styling Configuration

### `theme`
**Type:** `'default' | 'dark' | 'minimal' | 'glass' | 'neon' | 'custom'`  
**Default:** `'default'`

Theme to apply to the masonry.

```javascript
const config = {
  theme: 'dark'
};
```

### `borderRadius`
**Type:** `number`  
**Default:** `8`  
**Range:** `0-50`

Border radius for items in pixels.

```javascript
const config = {
  borderRadius: 12
};
```

### `shadow`
**Type:** `boolean`  
**Default:** `true`

Enable shadows on items.

```javascript
const config = {
  shadow: true
};
```

### `shadowIntensity`
**Type:** `number`  
**Default:** `0.1`  
**Range:** `0-1`

Shadow intensity.

```javascript
const config = {
  shadowIntensity: 0.2
};
```

### `hoverEffects`
**Type:** `boolean`  
**Default:** `true`

Enable hover effects.

```javascript
const config = {
  hoverEffects: true
};
```

### `hoverScale`
**Type:** `number`  
**Default:** `1.02`  
**Range:** `1.0-1.2`

Scale factor on hover.

```javascript
const config = {
  hoverScale: 1.05
};
```

### `containerClass`
**Type:** `string`

Custom CSS class to apply to the masonry container.

```javascript
const config = {
  containerClass: 'my-masonry-container'
};
```

### `itemClass`
**Type:** `string`

Custom CSS class to apply to masonry items.

```javascript
const config = {
  itemClass: 'my-masonry-item'
};
```

### `cssVariables`
**Type:** `Record<string, string>`

Custom CSS variables for theming.

```javascript
const config = {
  cssVariables: {
    '--masonry-bg': '#f0f0f0',
    '--masonry-text': '#333333',
    '--masonry-border': '#e0e0e0'
  }
};
```

## Performance Configuration

### `throttleResize`
**Type:** `number`  
**Default:** `100`  
**Range:** `50-500`

Throttle resize events in milliseconds.

```javascript
const config = {
  throttleResize: 150
};
```

### `useTransform`
**Type:** `boolean`  
**Default:** `true`

Use CSS transforms for better performance.

```javascript
const config = {
  useTransform: true
};
```

### `hardwareAcceleration`
**Type:** `boolean`  
**Default:** `true`

Enable hardware acceleration.

```javascript
const config = {
  hardwareAcceleration: true
};
```

### `intersectionObserver`
**Type:** `boolean`  
**Default:** `true`

Enable intersection observer for performance.

```javascript
const config = {
  intersectionObserver: true
};
```

### `intersectionThreshold`
**Type:** `number`  
**Default:** `0.1`  
**Range:** `0-1`

Threshold for intersection observer.

```javascript
const config = {
  intersectionThreshold: 0.2
};
```

### `virtualScrolling`
**Type:** `boolean`  
**Default:** `false`

Enable virtual scrolling for large datasets.

```javascript
const config = {
  virtualScrolling: true
};
```

### `virtualItemCount`
**Type:** `number`  
**Default:** `50`

Number of items to render in virtual scrolling.

```javascript
const config = {
  virtualItemCount: 100
};
```

### `layoutDebounce`
**Type:** `number`  
**Default:** `50`

Debounce time for layout updates in milliseconds.

```javascript
const config = {
  layoutDebounce: 100
};
```

## Accessibility Configuration

### `accessibility`
**Type:** `boolean`  
**Default:** `true`

Enable ARIA labels and roles.

```javascript
const config = {
  accessibility: true
};
```

### `screenReaderAnnouncements`
**Type:** `boolean`  
**Default:** `true`

Screen reader announcements.

```javascript
const config = {
  screenReaderAnnouncements: true
};
```

### `focusManagement`
**Type:** `boolean`  
**Default:** `true`

Focus management.

```javascript
const config = {
  focusManagement: true
};
```

### `highContrast`
**Type:** `boolean`  
**Default:** `false`

High contrast mode support.

```javascript
const config = {
  highContrast: true
};
```

## Debug Configuration

### `debug`
**Type:** `boolean`  
**Default:** `false`

Enable debug mode.

```javascript
const config = {
  debug: true
};
```

### `showGrid`
**Type:** `boolean`  
**Default:** `false`

Show layout grid overlay.

```javascript
const config = {
  showGrid: true
};
```

### `performanceLogging`
**Type:** `boolean`  
**Default:** `false`

Log performance metrics.

```javascript
const config = {
  performanceLogging: true
};
```

### `showBoundaries`
**Type:** `boolean`  
**Default:** `false`

Show item boundaries.

```javascript
const config = {
  showBoundaries: true
};
```

## Item Configuration

### Basic Item Properties

```javascript
const item = {
  id: 'unique-id',
  size: '1x1',
  content: '<div>Item content</div>',
  backgroundColor: '#f0f0f0',
  textColor: '#333333'
};
```

### Animation Properties

```javascript
const item = {
  id: 'animated-item',
  size: '2x1',
  content: '<div>Animated item</div>',
  animationType: 'breathing',
  animationDelay: 200
};
```

### Morphing Properties

```javascript
const item = {
  id: 'morphing-item',
  size: '1x1',
  content: '<div>Morphing item</div>',
  morphOnHover: true,
  morphSize: '2x2',
  morphDuration: 500
};
```

### Interactive Properties

```javascript
const item = {
  id: 'interactive-item',
  size: '1x1',
  content: '<div>Interactive item</div>',
  clickable: true,
  hoverable: true,
  onClick: (event, item) => {
    console.log('Item clicked:', item.id);
  }
};
```

## Examples

### Basic Configuration

```javascript
const basicConfig = {
  columns: 4,
  gap: 16,
  padding: 20,
  animation: true,
  morphing: true,
  responsive: true
};
```

### Advanced Configuration

```javascript
const advancedConfig = {
  // Layout
  columns: 6,
  gap: 20,
  padding: 30,
  layoutAlgorithm: 'packed',
  maintainAspectRatio: true,
  
  // Animation
  animation: true,
  animationDuration: 400,
  animationEasing: 'cubic-bezier(0.4, 0, 0.2, 1)',
  breathingEffect: true,
  breathingSpeed: 3000,
  breathingIntensity: 0.08,
  
  // Morphing
  morphing: true,
  morphDuration: 600,
  hoverMorph: true,
  longPressMorph: true,
  clickMorph: false,
  defaultMorphSize: '2x2',
  
  // Responsive
  responsive: true,
  breakpoints: {
    mobile: { columns: 2, gap: 12 },
    tablet: { columns: 4, gap: 16 },
    desktop: { columns: 6, gap: 20 },
    largeDesktop: { columns: 8, gap: 24 }
  },
  
  // Interaction
  longPressDelay: 600,
  touchEnabled: true,
  mouseEnabled: true,
  keyboardEnabled: true,
  draggable: false,
  sortable: false,
  selectable: true,
  multiSelect: false,
  
  // Styling
  theme: 'dark',
  borderRadius: 12,
  shadow: true,
  shadowIntensity: 0.15,
  hoverEffects: true,
  hoverScale: 1.03,
  
  // Performance
  throttleResize: 150,
  useTransform: true,
  hardwareAcceleration: true,
  intersectionObserver: true,
  intersectionThreshold: 0.15,
  layoutDebounce: 100,
  
  // Accessibility
  accessibility: true,
  screenReaderAnnouncements: true,
  focusManagement: true,
  highContrast: false,
  
  // Debug
  debug: false,
  showGrid: false,
  performanceLogging: false,
  showBoundaries: false
};
```

### Theme Configuration

```javascript
const themeConfig = {
  theme: 'custom',
  cssVariables: {
    '--masonry-bg': '#1a1a1a',
    '--masonry-text': '#ffffff',
    '--masonry-border': '#333333',
    '--masonry-shadow': '0 4px 12px rgba(0, 0, 0, 0.3)',
    '--masonry-hover-shadow': '0 8px 24px rgba(0, 0, 0, 0.4)',
    '--masonry-accent': '#4a90e2',
    '--masonry-secondary': '#6c757d'
  },
  borderRadius: 16,
  shadow: true,
  shadowIntensity: 0.2,
  hoverEffects: true,
  hoverScale: 1.05
};
```

### Performance-Optimized Configuration

```javascript
const performanceConfig = {
  // Layout
  columns: 4,
  gap: 16,
  padding: 20,
  
  // Animation (minimal for performance)
  animation: false,
  breathingEffect: false,
  
  // Morphing (disabled for performance)
  morphing: false,
  
  // Responsive
  responsive: true,
  autoColumns: true,
  
  // Performance optimizations
  throttleResize: 200,
  useTransform: true,
  hardwareAcceleration: true,
  intersectionObserver: true,
  intersectionThreshold: 0.1,
  layoutDebounce: 200,
  virtualScrolling: true,
  virtualItemCount: 30,
  
  // Minimal styling
  theme: 'minimal',
  shadow: false,
  hoverEffects: false
};
```

This configuration guide provides comprehensive coverage of all available options in HY Live Masonry. Each option is documented with its type, default value, range (where applicable), and usage examples. 