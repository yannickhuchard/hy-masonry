cle# HY Masonry API Specification

## Web Component Usage

### Basic Usage
```html
<hy-masonry id="my-masonry" config='{"columns": 4, "gap": 16, "borderWidth": 2}'>
  <div class="masonry-item" data-size="1x2">Content 1</div>
  <div class="masonry-item" data-size="2x2" data-border-width="3">Content 2</div>
  <div class="masonry-item" data-size="1x1">Content 3</div>
</hy-masonry>
```

### JavaScript API
```javascript
// Initialize with configuration
const masonry = new HyMasonry({
  columns: 4,
  gap: 16,
  borderWidth: 2,              // Global border width
  animation: true,
  morphing: true
});

// Add to DOM
document.body.appendChild(masonry);
```

## Configuration Options

### Core Configuration
```javascript
{
  // Layout
  columns: 4,                    // Number of columns (default: 4)
  gap: 16,                       // Gap between items in pixels (default: 16)
  padding: 20,                   // Container padding (default: 20)
  
  // Animation
  animation: true,               // Enable animations (default: true)
  animationDuration: 300,        // Animation duration in ms (default: 300)
  breathingEffect: true,         // Enable breathing animation (default: true)
  breathingSpeed: 2000,          // Breathing cycle duration in ms (default: 2000)
  
  // Morphing
  morphing: true,                // Enable morphing (default: true)
  morphDuration: 500,            // Morph animation duration (default: 500)
  hoverMorph: true,              // Morph on hover (default: true)
  longPressMorph: true,          // Morph on long press (default: true)
  
  // Responsive
  responsive: true,              // Enable responsive behavior (default: true)
  breakpoints: {                 // Responsive breakpoints
    mobile: { columns: 2, gap: 12 },
    tablet: { columns: 3, gap: 14 },
    desktop: { columns: 4, gap: 16 }
  },
  
  // Interaction
  longPressDelay: 500,          // Long press detection delay (default: 500)
  touchEnabled: true,            // Enable touch gestures (default: true)
  
  // Styling
  theme: 'default',              // Theme: 'default', 'dark', 'minimal'
  borderRadius: 8,               // Border radius in pixels (default: 8)
  borderWidth: 0,                // Border width in pixels (default: 0)
  shadow: true,                  // Enable shadows (default: true)
  
  // Performance
  throttleResize: 100,          // Resize throttle in ms (default: 100)
  useTransform: true,            // Use CSS transforms (default: true)
  hardwareAcceleration: true     // Enable hardware acceleration (default: true)
}
```

### Item Configuration
```javascript
{
  // Size configuration
  size: '1x2',                   // Grid size: '1x1', '1x2', '2x1', '2x2', etc.
  minSize: '1x1',                // Minimum size when morphing
  maxSize: '2x4',                // Maximum size when morphing
  
  // Animation
  animationType: 'breathing',    // 'breathing', 'pulse', 'float', 'none'
  animationDelay: 0,             // Animation delay in ms
  customAnimation: null,         // Custom animation function
  
  // Morphing
  morphOnHover: true,            // Enable hover morphing
  morphOnLongPress: true,        // Enable long press morphing
  morphSize: '2x4',              // Size when morphed
  morphDuration: 500,            // Morph duration for this item
  
  // Content
  content: 'Item content',       // Item content
  image: 'path/to/image.jpg',    // Background image
  backgroundColor: '#ffffff',     // Background color
  textColor: '#000000',          // Text color
  borderWidth: 0,                // Border width in pixels (overrides global setting)
  
  // Interaction
  clickable: true,               // Make item clickable
  hoverable: true,               // Enable hover effects
  draggable: false,              // Enable drag functionality
  
  // Events
  onClick: null,                 // Click handler
  onHover: null,                 // Hover handler
  onLongPress: null,             // Long press handler
  onMorph: null,                 // Morph start handler
  onMorphEnd: null               // Morph end handler
}
```

## Methods

### Instance Methods
```javascript
// Add item
masonry.addItem(itemConfig);

// Add item with custom border width
masonry.addItem({
  size: '2x2',
  content: 'Custom bordered item',
  borderWidth: 4,              // Override global border width
  backgroundColor: '#f0f0f0'
});

// Remove item
masonry.removeItem(itemId);

// Update item
masonry.updateItem(itemId, newConfig);

// Morph item
masonry.morphItem(itemId, newSize, duration);

// Reset item to original size
masonry.resetItem(itemId);

// Refresh layout
masonry.refresh();

// Destroy instance
masonry.destroy();

// Get item by ID
masonry.getItem(itemId);

// Get all items
masonry.getItems();

// Get layout information
masonry.getLayoutInfo();
```

### Static Methods
```javascript
// Create instance
HyMasonry.create(config);

// Register custom animation
HyMasonry.registerAnimation(name, animationFunction);

// Register custom theme
HyMasonry.registerTheme(name, themeConfig);
```

## Events

### Custom Events
```javascript
// Listen to events
masonry.addEventListener('item:added', (event) => {
  console.log('Item added:', event.detail);
});

masonry.addEventListener('item:removed', (event) => {
  console.log('Item removed:', event.detail);
});

masonry.addEventListener('item:morphed', (event) => {
  console.log('Item morphed:', event.detail);
});

masonry.addEventListener('layout:updated', (event) => {
  console.log('Layout updated:', event.detail);
});

masonry.addEventListener('animation:start', (event) => {
  console.log('Animation started:', event.detail);
});

masonry.addEventListener('animation:end', (event) => {
  console.log('Animation ended:', event.detail);
});
```

## CSS Custom Properties

### Available CSS Variables
```css
:root {
  --hy-masonry-gap: 16px;
  --hy-masonry-padding: 20px;
  --hy-masonry-border-radius: 8px;
  --hy-masonry-border-width: 1px;
  --hy-masonry-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  --hy-masonry-transition: 300ms ease;
  
  /* Animation */
  --hy-masonry-breathing-speed: 2000ms;
  --hy-masonry-morph-duration: 500ms;
  
  /* Colors */
  --hy-masonry-bg-color: #ffffff;
  --hy-masonry-text-color: #000000;
  --hy-masonry-border-color: #e0e0e0;
  
  /* Hover effects */
  --hy-masonry-hover-scale: 1.02;
  --hy-masonry-hover-shadow: 0 4px 16px rgba(0, 0, 0, 0.15);
}
```

## Responsive Behavior

### Breakpoint Configuration
```javascript
{
  responsive: true,
  breakpoints: {
    mobile: {
      minWidth: 0,
      maxWidth: 768,
      columns: 2,
      gap: 12,
      padding: 16
    },
    tablet: {
      minWidth: 769,
      maxWidth: 1024,
      columns: 3,
      gap: 14,
      padding: 18
    },
    desktop: {
      minWidth: 1025,
      maxWidth: null,
      columns: 4,
      gap: 16,
      padding: 20
    }
  }
}
```

## Performance Considerations

### Optimization Options
```javascript
{
  // Reduce reflows
  useTransform: true,
  hardwareAcceleration: true,
  
  // Throttle expensive operations
  throttleResize: 100,
  throttleScroll: 16,
  
  // Lazy loading
  lazyLoad: true,
  lazyLoadThreshold: 0.1,
  
  // Animation optimization
  reduceMotion: false,           // Respect user's motion preferences
  animationFrameRate: 60,        // Target FPS
  useRequestAnimationFrame: true
}
``` 