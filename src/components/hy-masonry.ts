import { MasonryConfig, MasonryItem, LayoutInfo } from '../types';
import { AnimationEngine } from '../utils/animation-engine';
import { MorphingManager } from '../utils/morphing-manager';
import { InteractionHandler } from '../utils/interaction-handler';
import { SizeCalculator } from '../utils/size-calculator';

export class HyMasonry extends HTMLElement {
  private config: MasonryConfig;
  private items: Map<string, MasonryItem> = new Map();
  private animationEngine: AnimationEngine;
  private morphingManager: MorphingManager;
  private interactionHandler: InteractionHandler;
  private layout: LayoutInfo | null = null;
  private resizeObserver: ResizeObserver | null = null;
  private intersectionObserver: IntersectionObserver | null = null;
  private container: HTMLElement | null = null;

  constructor() {
    super();
    this.config = this.getDefaultConfig();
    this.animationEngine = new AnimationEngine();
    this.morphingManager = new MorphingManager();
    this.interactionHandler = new InteractionHandler({
      longPressDelay: this.config.longPressDelay,
      touchEnabled: this.config.touchEnabled
    });
  }

  /**
   * Get default configuration
   */
  private getDefaultConfig(): MasonryConfig {
    return {
      columns: 6,
      gap: 20,
      padding: 20,
      animation: true,
      animationDuration: 300,
      breathingEffect: true,
      breathingSpeed: 2000,
      morphing: true,
      morphDuration: 500,
      hoverMorph: true,
      longPressMorph: true,
      responsive: true,
      breakpoints: {
        mobile: { columns: 2, gap: 12 },
        tablet: { columns: 4, gap: 16 },
        desktop: { columns: 6, gap: 20 }
      },
      longPressDelay: 500,
      touchEnabled: true,
      theme: 'default',
      borderRadius: 12,
      borderWidth: 0,
      shadow: true,
      throttleResize: 100,
      useTransform: true,
      hardwareAcceleration: true
    };
  }

  /**
   * Read configuration from HTML attributes
   */
  private readAttributes(): void {
    const columns = this.getAttribute('columns');
    if (columns) {
      this.config.columns = parseInt(columns);
    }
    
    const gap = this.getAttribute('gap');
    if (gap) {
      this.config.gap = parseInt(gap);
    }
    
    const padding = this.getAttribute('padding');
    if (padding) {
      this.config.padding = parseInt(padding);
    }
    
    const borderWidth = this.getAttribute('border-width');
    if (borderWidth) {
      this.config.borderWidth = parseInt(borderWidth);
    }
    
    const borderRadius = this.getAttribute('border-radius');
    if (borderRadius) {
      this.config.borderRadius = parseInt(borderRadius);
    }
  }

  /**
   * Connected callback - when element is added to DOM
   */
  connectedCallback(): void {
    // Read initial configuration from attributes
    this.readAttributes();
    
    this.setupComponent();
    this.setupEventListeners();
    this.setupObservers();
    this.applyTheme();
    this.refresh();
  }

  /**
   * Disconnected callback - when element is removed from DOM
   */
  disconnectedCallback(): void {
    this.cleanup();
  }

  /**
   * Attribute changed callback
   */
  static get observedAttributes(): string[] {
    return ['columns', 'gap', 'padding', 'border-width', 'border-radius'];
  }

  attributeChangedCallback(name: string, oldValue: string | null, newValue: string | null): void {
    if (oldValue === newValue) return;
    
    switch (name) {
      case 'columns':
        this.config.columns = newValue ? parseInt(newValue) : 4;
        break;
      case 'gap':
        this.config.gap = newValue ? parseInt(newValue) : 16;
        break;
      case 'padding':
        this.config.padding = newValue ? parseInt(newValue) : 20;
        break;
      case 'border-width':
        this.config.borderWidth = newValue ? parseInt(newValue) : 0;
        break;
      case 'border-radius':
        this.config.borderRadius = newValue ? parseInt(newValue) : 8;
        break;
    }
    
    this.setupComponent();
    this.refresh();
  }

  /**
   * Setup component structure
   */
  private setupComponent(): void {
    // Create container
    this.container = document.createElement('div');
    this.container.className = 'masonry-container';
    this.appendChild(this.container);

    // Apply CSS custom properties
    this.style.setProperty('--columns', this.config.columns?.toString() || '4');
    this.style.setProperty('--gap', `${this.config.gap}px`);
    this.style.setProperty('--padding', `${this.config.padding}px`);
    this.style.setProperty('--border-radius', `${this.config.borderRadius}px`);
    this.style.setProperty('--border-width', `${this.config.borderWidth}px`);
    this.style.setProperty('--transition', `${this.config.animationDuration}ms ease`);
    this.style.setProperty('--breathing-speed', `${this.config.breathingSpeed}ms`);
    this.style.setProperty('--morph-duration', `${this.config.morphDuration}ms`);
  }

  /**
   * Setup event listeners
   */
  private setupEventListeners(): void {
    // Listen for morph requests
    this.addEventListener('item:morph-request', ((event: Event) => {
      const customEvent = event as CustomEvent;
      const { element, targetSize, duration } = customEvent.detail;
      const itemId = element.getAttribute('data-item-id');
      if (itemId) {
        this.morphingManager.morphItem(itemId, targetSize, duration);
      }
    }) as EventListener);

    // Listen for window resize
    const throttledRefresh = this.throttle(() => {
      this.refresh();
    }, this.config.throttleResize || 100);
    window.addEventListener('resize', throttledRefresh as EventListener);
  }

  /**
   * Setup observers
   */
  private setupObservers(): void {
    // Resize observer
    this.resizeObserver = new ResizeObserver(() => {
      this.refresh();
    });
    this.resizeObserver.observe(this);

    // Intersection observer for performance
    this.intersectionObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          } else {
            entry.target.classList.remove('visible');
          }
        });
      },
      { threshold: 0.1 }
    );
  }

  /**
   * Apply theme
   */
  private applyTheme(): void {
    const themes: Record<string, Record<string, string>> = {
      default: {
        '--bg-color': '#ffffff',
        '--text-color': '#000000',
        '--border-color': '#333333',
        '--shadow': '0 2px 8px rgba(0, 0, 0, 0.1)',
        '--hover-shadow': '0 4px 16px rgba(0, 0, 0, 0.15)',
        '--hover-scale': '1.02'
      },
      dark: {
        '--bg-color': '#1a1a1a',
        '--text-color': '#ffffff',
        '--border-color': '#333333',
        '--shadow': '0 2px 8px rgba(0, 0, 0, 0.3)',
        '--hover-shadow': '0 4px 16px rgba(0, 0, 0, 0.4)',
        '--hover-scale': '1.02'
      },
      minimal: {
        '--bg-color': '#fafafa',
        '--text-color': '#333333',
        '--border-color': '#e5e5e5',
        '--shadow': 'none',
        '--hover-shadow': '0 2px 8px rgba(0, 0, 0, 0.1)',
        '--hover-scale': '1.01'
      },
      glass: {
        '--bg-color': 'rgba(255, 255, 255, 0.1)',
        '--text-color': '#ffffff',
        '--border-color': 'rgba(255, 255, 255, 0.2)',
        '--shadow': '0 8px 32px rgba(31, 38, 135, 0.37)',
        '--hover-shadow': '0 12px 40px rgba(31, 38, 135, 0.5)',
        '--hover-scale': '1.05'
      },
      neon: {
        '--bg-color': '#000000',
        '--text-color': '#00ff00',
        '--border-color': '#00ff00',
        '--shadow': '0 0 10px rgba(0, 255, 0, 0.5)',
        '--hover-shadow': '0 0 20px rgba(0, 255, 0, 0.8)',
        '--hover-scale': '1.1'
      },
      custom: {
        '--bg-color': '#ffffff',
        '--text-color': '#000000',
        '--border-color': '#e0e0e0',
        '--shadow': '0 2px 8px rgba(0, 0, 0, 0.1)',
        '--hover-shadow': '0 4px 16px rgba(0, 0, 0, 0.15)',
        '--hover-scale': '1.02'
      }
    };

    const themeName = this.config.theme || 'default';
    const theme = themes[themeName] || themes.default;
    Object.entries(theme).forEach(([property, value]) => {
      this.style.setProperty(property, value);
    });
  }

  /**
   * Add item to masonry
   */
  addItem(item: MasonryItem): void {
    this.items.set(item.id, item);
    this.createItemElement(item);
    this.refresh();
    this.dispatchCustomEvent('item:added', { item });
  }

  /**
   * Remove item from masonry
   */
  removeItem(itemId: string): void {
    const item = this.items.get(itemId);
    if (item) {
      this.items.delete(itemId);
      const element = this.querySelector(`[data-item-id="${itemId}"]`) as HTMLElement;
      if (element) {
        this.interactionHandler.cleanupItemListeners(element);
        element.remove();
      }
      this.refresh();
      this.dispatchCustomEvent('item:removed', { item });
    }
  }

  /**
   * Update item
   */
  updateItem(itemId: string, newConfig: Partial<MasonryItem>): void {
    const item = this.items.get(itemId);
    if (item) {
      const updatedItem = { ...item, ...newConfig };
      this.items.set(itemId, updatedItem);
      this.updateItemElement(itemId, updatedItem);
      this.refresh();
      this.dispatchCustomEvent('item:updated', { item: updatedItem });
    }
  }

  /**
   * Create item element
   */
  private createItemElement(item: MasonryItem): void {
    if (!this.container) return;

    const element = document.createElement('div');
    element.className = 'masonry-item';
    element.setAttribute('data-item-id', item.id);
    element.setAttribute('data-size', item.size);
    element.setAttribute('data-original-size', item.size);

    // Apply styling
    if (item.backgroundColor) {
      element.style.backgroundColor = item.backgroundColor;
    }
    if (item.textColor) {
      element.style.color = item.textColor;
    }
    if (item.image) {
      element.style.backgroundImage = `url(${item.image})`;
      element.style.backgroundSize = 'cover';
      element.style.backgroundPosition = 'center';
    }

    // Set content
    if (item.content) {
      element.innerHTML = item.content;
    }

    // Setup interactions
    this.interactionHandler.setupItemListeners(item, element);

    // Setup animations
    if (this.config.animation && item.animationType && item.animationType !== 'none') {
      this.animationEngine.addAnimation(item.id, item.animationType, {
        speed: this.config.breathingSpeed,
        intensity: 0.05
      });
    }

    // Store original size
    this.morphingManager.storeOriginalSize(item.id, item.size);

    // Observe for intersection
    if (this.intersectionObserver) {
      this.intersectionObserver.observe(element);
    }

    this.container.appendChild(element);
  }

  /**
   * Update item element
   */
  private updateItemElement(itemId: string, item: MasonryItem): void {
    const element = this.querySelector(`[data-item-id="${itemId}"]`) as HTMLElement;
    if (!element) return;

    // Update attributes
    element.setAttribute('data-size', item.size);
    element.setAttribute('data-original-size', item.size);

    // Update styling
    if (item.backgroundColor) {
      element.style.backgroundColor = item.backgroundColor;
    }
    if (item.textColor) {
      element.style.color = item.textColor;
    }
    if (item.image) {
      element.style.backgroundImage = `url(${item.image})`;
    }

    // Update content
    if (item.content) {
      element.innerHTML = item.content;
    }

    // Update animations
    if (this.config.animation && item.animationType && item.animationType !== 'none') {
      this.animationEngine.addAnimation(item.id, item.animationType);
    } else {
      this.animationEngine.removeAnimation(item.id);
    }
  }

  /**
   * Refresh layout
   */
  refresh(): void {
    if (!this.container) return;

    const containerWidth = this.container.offsetWidth;
    const columns = this.config.columns || 4;
    const gap = this.config.gap || 16;

    // Calculate layout
    const columnHeights = new Array(columns).fill(0);
    const items = Array.from(this.container.children) as HTMLElement[];

    items.forEach((element) => {
      const size = element.getAttribute('data-size') || '1x1';
      const { cols, rows } = SizeCalculator.parseSize(size);
      
      // Find shortest column
      const shortestColumn = columnHeights.indexOf(Math.min(...columnHeights));
      
      // Calculate position
      const itemWidth = (containerWidth - (gap * (columns - 1))) / columns;
      const itemHeight = itemWidth * rows;
      
      // Apply grid positioning
      element.style.gridColumn = `span ${cols}`;
      element.style.gridRow = `span ${rows}`;
      
      // Update column heights
      columnHeights[shortestColumn] += itemHeight + gap;
    });

    // Update layout info
    this.layout = {
      columns,
      gap,
      padding: this.config.padding || 20,
      containerWidth,
      containerHeight: Math.max(...columnHeights),
      itemCount: items.length,
      columnHeights
    };

    this.dispatchCustomEvent('layout:updated', { layout: this.layout });
  }

  /**
   * Morph item
   */
  morphItem(itemId: string, newSize: string, duration?: number): void {
    this.morphingManager.morphItem(itemId, newSize, duration || this.config.morphDuration || 500);
  }

  /**
   * Reset item to original size
   */
  resetItem(itemId: string): void {
    this.morphingManager.resetItem(itemId);
  }

  /**
   * Get item by ID
   */
  getItem(itemId: string): MasonryItem | undefined {
    return this.items.get(itemId);
  }

  /**
   * Get all items
   */
  getItems(): MasonryItem[] {
    return Array.from(this.items.values());
  }

  /**
   * Get layout information
   */
  getLayoutInfo(): LayoutInfo | null {
    return this.layout;
  }

  /**
   * Update configuration
   */
  updateConfig(newConfig: Partial<MasonryConfig>): void {
    this.config = { ...this.config, ...newConfig };
    this.setupComponent();
    this.applyTheme();
    this.refresh();
  }

  /**
   * Throttle function
   */
  private throttle(func: Function, delay: number): Function {
    let timeout: number | null = null;
    return (...args: any[]) => {
      if (timeout) return;
      timeout = window.setTimeout(() => {
        func.apply(this, args);
        timeout = null;
      }, delay);
    };
  }

  /**
   * Dispatch custom event
   */
  private dispatchCustomEvent(eventName: string, detail: any): void {
    const event = new CustomEvent(eventName, {
      detail,
      bubbles: true,
      cancelable: true
    });
    this.dispatchEvent(event);
  }

  /**
   * Cleanup resources
   */
  private cleanup(): void {
    if (this.resizeObserver) {
      this.resizeObserver.disconnect();
    }
    if (this.intersectionObserver) {
      this.intersectionObserver.disconnect();
    }
    this.animationEngine.stop();
    this.morphingManager.stop();
    this.interactionHandler.clearAllTimers();
  }

  /**
   * Destroy component
   */
  destroy(): void {
    this.cleanup();
    this.items.clear();
    if (this.container) {
      this.container.innerHTML = '';
    }
  }
}

// Register custom element
customElements.define('hy-masonry', HyMasonry); 