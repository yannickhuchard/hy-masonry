# HY Masonry Component Architecture

## Class Structure

### Main Component Class
```javascript
class HyMasonry extends HTMLElement {
  constructor() {
    super();
    this.config = {};
    this.items = new Map();
    this.animations = new Map();
    this.morphing = new Map();
    this.layout = null;
    this.resizeObserver = null;
    this.intersectionObserver = null;
  }
}
```

### Core Classes

#### 1. LayoutManager
```javascript
class LayoutManager {
  constructor(config) {
    this.config = config;
    this.columns = config.columns || 4;
    this.gap = config.gap || 16;
    this.padding = config.padding || 20;
    this.columnHeights = new Array(this.columns).fill(0);
  }
  
  calculateLayout(items) {
    // Calculate optimal positions for all items
  }
  
  updateLayout() {
    // Recalculate and apply layout
  }
  
  getColumnHeights() {
    return [...this.columnHeights];
  }
}
```

#### 2. AnimationEngine
```javascript
class AnimationEngine {
  constructor(config) {
    this.config = config;
    this.animations = new Map();
    this.animationFrame = null;
    this.isRunning = false;
  }
  
  addAnimation(itemId, animationType, options) {
    // Add new animation to the engine
  }
  
  removeAnimation(itemId) {
    // Remove animation from item
  }
  
  start() {
    // Start animation loop
  }
  
  stop() {
    // Stop animation loop
  }
}
```

#### 3. MorphingManager
```javascript
class MorphingManager {
  constructor(config) {
    this.config = config;
    this.morphingItems = new Map();
    this.originalSizes = new Map();
  }
  
  morphItem(itemId, newSize, duration) {
    // Morph item to new size
  }
  
  resetItem(itemId) {
    // Reset item to original size
  }
  
  isMorphing(itemId) {
    // Check if item is currently morphing
  }
}
```

#### 4. InteractionHandler
```javascript
class InteractionHandler {
  constructor(config) {
    this.config = config;
    this.longPressTimers = new Map();
    this.touchStartPositions = new Map();
  }
  
  handleMouseEnter(event) {
    // Handle mouse enter events
  }
  
  handleMouseLeave(event) {
    // Handle mouse leave events
  }
  
  handleTouchStart(event) {
    // Handle touch start events
  }
  
  handleTouchEnd(event) {
    // Handle touch end events
  }
  
  handleLongPress(itemId) {
    // Handle long press detection
  }
}
```

## Animation System

### Animation Types

#### 1. Breathing Animation
```javascript
class BreathingAnimation {
  constructor(options = {}) {
    this.speed = options.speed || 2000;
    this.intensity = options.intensity || 0.05;
    this.phase = 0;
  }
  
  update(element, deltaTime) {
    const scale = 1 + Math.sin(this.phase) * this.intensity;
    element.style.transform = `scale(${scale})`;
    this.phase += (deltaTime / this.speed) * Math.PI * 2;
  }
}
```

#### 2. Pulse Animation
```javascript
class PulseAnimation {
  constructor(options = {}) {
    this.speed = options.speed || 1500;
    this.intensity = options.intensity || 0.1;
    this.phase = 0;
  }
  
  update(element, deltaTime) {
    const opacity = 0.8 + Math.sin(this.phase) * 0.2;
    element.style.opacity = opacity;
    this.phase += (deltaTime / this.speed) * Math.PI * 2;
  }
}
```

#### 3. Float Animation
```javascript
class FloatAnimation {
  constructor(options = {}) {
    this.speed = options.speed || 3000;
    this.intensity = options.intensity || 5;
    this.phase = 0;
  }
  
  update(element, deltaTime) {
    const translateY = Math.sin(this.phase) * this.intensity;
    element.style.transform = `translateY(${translateY}px)`;
    this.phase += (deltaTime / this.speed) * Math.PI * 2;
  }
}
```

### Morphing System

#### Morphing States
```javascript
class MorphingState {
  constructor(originalSize, targetSize, duration) {
    this.originalSize = originalSize;
    this.targetSize = targetSize;
    this.duration = duration;
    this.startTime = Date.now();
    this.progress = 0;
  }
  
  update(currentTime) {
    this.progress = Math.min((currentTime - this.startTime) / this.duration, 1);
    return this.progress;
  }
  
  isComplete() {
    return this.progress >= 1;
  }
}
```

#### Size Calculation
```javascript
class SizeCalculator {
  static parseSize(sizeString) {
    const [cols, rows] = sizeString.split('x').map(Number);
    return { cols, rows };
  }
  
  static calculateDimensions(size, containerWidth, gap) {
    const { cols, rows } = this.parseSize(size);
    const itemWidth = (containerWidth - (gap * (cols - 1))) / cols;
    const itemHeight = itemWidth * rows;
    return { width: itemWidth, height: itemHeight };
  }
  
  static morphSize(originalSize, targetSize, progress) {
    const original = this.parseSize(originalSize);
    const target = this.parseSize(targetSize);
    
    const cols = original.cols + (target.cols - original.cols) * progress;
    const rows = original.rows + (target.rows - original.rows) * progress;
    
    return `${Math.round(cols)}x${Math.round(rows)}`;
  }
}
```

## Event System

### Custom Events
```javascript
class EventEmitter {
  constructor() {
    this.events = new Map();
  }
  
  emit(eventName, data) {
    const event = new CustomEvent(eventName, {
      detail: data,
      bubbles: true,
      cancelable: true
    });
    this.dispatchEvent(event);
  }
  
  on(eventName, handler) {
    if (!this.events.has(eventName)) {
      this.events.set(eventName, []);
    }
    this.events.get(eventName).push(handler);
  }
  
  off(eventName, handler) {
    const handlers = this.events.get(eventName);
    if (handlers) {
      const index = handlers.indexOf(handler);
      if (index > -1) {
        handlers.splice(index, 1);
      }
    }
  }
}
```

## Performance Optimizations

### 1. Virtual Scrolling
```javascript
class VirtualScroller {
  constructor(container, itemHeight, buffer = 5) {
    this.container = container;
    this.itemHeight = itemHeight;
    this.buffer = buffer;
    this.visibleItems = new Set();
  }
  
  updateVisibleItems(scrollTop, viewportHeight) {
    const startIndex = Math.floor(scrollTop / this.itemHeight);
    const endIndex = Math.ceil((scrollTop + viewportHeight) / this.itemHeight);
    
    // Update visible items
    this.updateVisibility(startIndex, endIndex);
  }
}
```

### 2. Throttled Updates
```javascript
class ThrottledUpdater {
  constructor(delay = 16) {
    this.delay = delay;
    this.timeout = null;
    this.pendingUpdates = new Set();
  }
  
  scheduleUpdate(updateFunction) {
    this.pendingUpdates.add(updateFunction);
    
    if (!this.timeout) {
      this.timeout = setTimeout(() => {
        this.executeUpdates();
      }, this.delay);
    }
  }
  
  executeUpdates() {
    this.pendingUpdates.forEach(update => update());
    this.pendingUpdates.clear();
    this.timeout = null;
  }
}
```

### 3. Intersection Observer
```javascript
class VisibilityManager {
  constructor(options = {}) {
    this.observer = new IntersectionObserver(
      this.handleIntersection.bind(this),
      options
    );
  }
  
  observe(element) {
    this.observer.observe(element);
  }
  
  handleIntersection(entries) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      } else {
        entry.target.classList.remove('visible');
      }
    });
  }
}
```

## CSS Architecture

### Component Styles
```css
hy-masonry {
  display: block;
  position: relative;
  width: 100%;
  height: auto;
  overflow: hidden;
}

hy-masonry .masonry-container {
  display: grid;
  grid-template-columns: repeat(var(--columns, 4), 1fr);
  gap: var(--gap, 16px);
  padding: var(--padding, 20px);
  position: relative;
}

hy-masonry .masonry-item {
  position: relative;
  border-radius: var(--border-radius, 8px);
  background: var(--bg-color, #ffffff);
  box-shadow: var(--shadow, 0 2px 8px rgba(0, 0, 0, 0.1));
  transition: all var(--transition, 300ms ease);
  overflow: hidden;
  cursor: pointer;
}

hy-masonry .masonry-item:hover {
  transform: scale(var(--hover-scale, 1.02));
  box-shadow: var(--hover-shadow, 0 4px 16px rgba(0, 0, 0, 0.15));
}

hy-masonry .masonry-item.morphing {
  transition: all var(--morph-duration, 500ms) cubic-bezier(0.4, 0, 0.2, 1);
}

hy-masonry .masonry-item.breathing {
  animation: breathing var(--breathing-speed, 2000ms) ease-in-out infinite;
}

@keyframes breathing {
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.02); }
}
```

## Responsive System

### Breakpoint Manager
```javascript
class BreakpointManager {
  constructor(breakpoints) {
    this.breakpoints = breakpoints;
    this.currentBreakpoint = null;
    this.mediaQueries = new Map();
    this.setupMediaQueries();
  }
  
  setupMediaQueries() {
    Object.entries(this.breakpoints).forEach(([name, config]) => {
      const query = this.createMediaQuery(config);
      const mediaQuery = window.matchMedia(query);
      
      mediaQuery.addListener(() => {
        this.handleBreakpointChange(name, mediaQuery.matches);
      });
      
      this.mediaQueries.set(name, mediaQuery);
    });
  }
  
  createMediaQuery(config) {
    const { minWidth, maxWidth } = config;
    let query = '';
    
    if (minWidth) query += `(min-width: ${minWidth}px)`;
    if (maxWidth) {
      if (query) query += ' and ';
      query += `(max-width: ${maxWidth}px)`;
    }
    
    return query;
  }
  
  handleBreakpointChange(name, matches) {
    if (matches) {
      this.currentBreakpoint = name;
      this.emit('breakpoint:changed', { name, config: this.breakpoints[name] });
    }
  }
}
``` 