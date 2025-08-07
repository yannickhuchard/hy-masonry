# HY Masonry 🏗️✨

**Living Animated Masonry Layout** - A JavaScript library that creates living, breathing masonry layouts where each box is an animated organism that can morph, grow, and respond to user interactions.

🌐 **Live Demo & Documentation**: [https://masonry.ovh](https://masonry.ovh)

## 🌟 Features

### 🧬 Living Organisms
- Each masonry box is an animated entity with its own life cycle
- Default breathing/pulsing animations that make items feel alive
- Smooth transitions between states with organic movement patterns
- Hardware-accelerated animations for 60fps performance

### 🔄 Dynamic Morphing
- Boxes can temporarily change size (e.g., 1x2 → 1x4)
- Morphing triggered by:
  - **Hover**: Items grow when you hover over them
  - **Long Press**: Items expand for preview mode
  - **Programmatic Events**: API-driven morphing
  - **Automatic Cycles**: Scheduled morphing animations

### ⚙️ Intuitive Configuration
- Simple JSON-based configuration
- Responsive design with breakpoint support
- Customizable animation parameters
- Easy integration with React, ShadCN, and any framework

### 🎨 Web Component Architecture
- Native web component implementation
- Framework-agnostic design
- Customizable styling via CSS custom properties
- Multiple themes: Default, Dark, Minimal

## 🚀 Quick Start

### Installation

```bash
npm install hy-masonry
```

### Basic Usage

```html
<!DOCTYPE html>
<html>
<head>
    <script type="module">
        import 'hy-masonry';
    </script>
</head>
<body>
    <hy-masonry id="my-masonry" data-theme="default">
        <!-- Items will be added dynamically -->
    </hy-masonry>

    <script>
        const masonry = document.getElementById('my-masonry');
        
        // Add items
        masonry.addItem({
            id: 'item-1',
            size: '1x2',
            content: '<h3>Living Item</h3><p>I breathe and morph!</p>',
            animationType: 'breathing',
            backgroundColor: '#e3f2fd',
            morphSize: '2x4'
        });
    </script>
</body>
</html>
```

### React Integration

```jsx
import { useEffect, useRef } from 'react';
import 'hy-masonry';

function MasonryGallery() {
    const masonryRef = useRef(null);

    useEffect(() => {
        if (masonryRef.current) {
            masonryRef.current.addItem({
                id: 'react-item',
                size: '2x2',
                content: '<h3>React Item</h3><p>Works with React!</p>',
                animationType: 'pulse',
                morphOnHover: true,
                morphSize: '2x4'
            });
        }
    }, []);

    return (
        <hy-masonry 
            ref={masonryRef}
            data-theme="default"
            style={{ width: '100%', height: '400px' }}
        />
    );
}
```

## 📖 API Reference

### Configuration

```javascript
const config = {
    // Layout
    columns: 4,                    // Number of columns
    gap: 16,                       // Gap between items (px)
    padding: 20,                   // Container padding (px)
    
    // Animation
    animation: true,               // Enable animations
    breathingSpeed: 2000,          // Breathing cycle duration (ms)
    
    // Morphing
    morphing: true,                // Enable morphing
    morphDuration: 500,            // Morph animation duration (ms)
    hoverMorph: true,              // Morph on hover
    longPressMorph: true,          // Morph on long press
    
    // Responsive
    responsive: true,              // Enable responsive behavior
    breakpoints: {                 // Responsive breakpoints
        mobile: { columns: 2, gap: 12 },
        tablet: { columns: 3, gap: 14 },
        desktop: { columns: 4, gap: 16 }
    },
    
    // Styling
    theme: 'default',              // Theme: 'default', 'dark', 'minimal'
    borderRadius: 8,               // Border radius (px)
    shadow: true,                  // Enable shadows
};
```

### Item Configuration

```javascript
const item = {
    id: 'unique-id',               // Unique identifier
    size: '1x2',                   // Grid size: '1x1', '1x2', '2x1', '2x2', etc.
    content: '<h3>Title</h3><p>Content</p>', // HTML content
    image: 'path/to/image.jpg',    // Background image
    backgroundColor: '#ffffff',     // Background color
    textColor: '#000000',          // Text color
    
    // Animation
    animationType: 'breathing',    // 'breathing', 'pulse', 'float', 'none'
    animationDelay: 0,             // Animation delay (ms)
    
    // Morphing
    morphOnHover: true,            // Enable hover morphing
    morphOnLongPress: true,        // Enable long press morphing
    morphSize: '2x4',              // Size when morphed
    morphDuration: 500,            // Morph duration for this item
    
    // Interaction
    clickable: true,               // Make item clickable
    hoverable: true,               // Enable hover effects
    
    // Event handlers
    onClick: (event, item) => {},  // Click handler
    onHover: (event, item) => {}, // Hover handler
    onLongPress: (event, item) => {}, // Long press handler
};
```

### Methods

```javascript
// Add item
masonry.addItem(itemConfig);

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

// Update configuration
masonry.updateConfig(newConfig);

// Get items
const items = masonry.getItems();
const item = masonry.getItem(itemId);
const layout = masonry.getLayoutInfo();
```

### Events

```javascript
// Listen to events
masonry.addEventListener('item:added', (event) => {
    console.log('Item added:', event.detail.item);
});

masonry.addEventListener('item:morphed', (event) => {
    console.log('Item morphed:', event.detail);
});

masonry.addEventListener('layout:updated', (event) => {
    console.log('Layout updated:', event.detail.layout);
});

masonry.addEventListener('animation:start', (event) => {
    console.log('Animation started:', event.detail);
});
```

## 🎨 Themes

### Default Theme
```css
--bg-color: #ffffff;
--text-color: #000000;
--border-color: #e0e0e0;
--shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
--hover-shadow: 0 4px 16px rgba(0, 0, 0, 0.15);
```

### Dark Theme
```css
--bg-color: #1a1a1a;
--text-color: #ffffff;
--border-color: #333333;
--shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
--hover-shadow: 0 4px 16px rgba(0, 0, 0, 0.4);
```

### Minimal Theme
```css
--bg-color: #fafafa;
--text-color: #333333;
--border-color: #e5e5e5;
--shadow: none;
--hover-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
```

## 🔧 Customization

### CSS Custom Properties

```css
:root {
    --hy-masonry-gap: 16px;
    --hy-masonry-padding: 20px;
    --hy-masonry-border-radius: 8px;
    --hy-masonry-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    --hy-masonry-transition: 300ms ease;
    --hy-masonry-breathing-speed: 2000ms;
    --hy-masonry-morph-duration: 500ms;
    --hy-masonry-bg-color: #ffffff;
    --hy-masonry-text-color: #000000;
    --hy-masonry-border-color: #e0e0e0;
    --hy-masonry-hover-scale: 1.02;
    --hy-masonry-hover-shadow: 0 4px 16px rgba(0, 0, 0, 0.15);
}
```

### Custom Animations

```javascript
// Register custom animation
HyMasonry.registerAnimation('custom', (element, deltaTime) => {
    // Your custom animation logic
    const rotation = (Date.now() / 1000) % 360;
    element.style.transform = `rotate(${rotation}deg)`;
});
```

## 📱 Responsive Design

The library automatically adapts to different screen sizes:

- **Mobile (< 768px)**: 2 columns, smaller gaps
- **Tablet (768px - 1024px)**: 3 columns, medium gaps  
- **Desktop (> 1024px)**: 4 columns, full gaps

## ♿ Accessibility

- **Keyboard Navigation**: Full keyboard support with focus indicators
- **Screen Readers**: Proper ARIA labels and semantic structure
- **Reduced Motion**: Respects `prefers-reduced-motion` user preference
- **High Contrast**: Supports high contrast mode
- **Touch Support**: Optimized for mobile devices with touch gestures

## 🚀 Performance

- **Hardware Acceleration**: Uses CSS transforms for smooth animations
- **Intersection Observer**: Only animates visible items
- **Throttled Updates**: Efficient resize and scroll handling
- **Memory Management**: Proper cleanup of event listeners and animations

## 🛠️ Development

### Setup

```bash
git clone https://github.com/hy-masonry/hy-masonry.git
cd hy-masonry
npm install
npm run dev
```

### Build

```bash
npm run build
```

### Test

```bash
npm test
```

## 📄 License

MIT License - see [LICENSE](LICENSE) file for details.

## 🤝 Contributing

We welcome contributions! Please see our [Contributing Guide](CONTRIBUTING.md) for details.

## 📞 Support

- **Documentation**: [https://masonry.ovh](https://masonry.ovh)
- **Issues**: [GitHub Issues](https://github.com/hy-masonry/hy-masonry/issues)
- **Discussions**: [GitHub Discussions](https://github.com/hy-masonry/hy-masonry/discussions)

---

**HY Masonry** - Creating living, breathing layouts since 2025 ✨

---

<div align="center">
  <p>Made by <a href="https://yannickhuchard.com" target="_blank">Yannick HUCHARD</a></p>
  <p>
    <a href="https://yannickhuchard.com" target="_blank">🌐 Website</a> • 
    <a href="https://www.linkedin.com/in/yhuchard" target="_blank">
      <img src="https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white" alt="LinkedIn" height="20">
    </a>
  </p>
</div> 