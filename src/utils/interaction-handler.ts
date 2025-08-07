import { MasonryItem } from '../types';

export class InteractionHandler {
  private longPressTimers: Map<string, number> = new Map();
  private touchStartPositions: Map<string, { x: number; y: number }> = new Map();
  private longPressDelay: number = 500;
  private touchEnabled: boolean = true;

  constructor(config: { longPressDelay?: number; touchEnabled?: boolean } = {}) {
    this.longPressDelay = config.longPressDelay || 500;
    this.touchEnabled = config.touchEnabled !== false;
  }

  /**
   * Setup event listeners for an item
   */
  setupItemListeners(item: MasonryItem, element: HTMLElement): void {
    // Mouse events
    if (item.hoverable !== false) {
      element.addEventListener('mouseenter', (e) => this.handleMouseEnter(e, item));
      element.addEventListener('mouseleave', (e) => this.handleMouseLeave(e, item));
    }

    // Click events
    if (item.clickable !== false) {
      element.addEventListener('click', (e) => this.handleClick(e, item));
    }

    // Touch events
    if (this.touchEnabled) {
      element.addEventListener('touchstart', (e) => this.handleTouchStart(e, item));
      element.addEventListener('touchend', (e) => this.handleTouchEnd(e, item));
      element.addEventListener('touchmove', (e) => this.handleTouchMove(e, item));
    }

    // Keyboard events
    element.addEventListener('keydown', (e) => this.handleKeyDown(e, item));
    element.setAttribute('tabindex', '0');
  }

  /**
   * Handle mouse enter
   */
  private handleMouseEnter(event: Event, item: MasonryItem): void {
    const element = event.target as HTMLElement;
    element.classList.add('hover');

    if (item.morphOnHover && item.morphSize) {
      this.dispatchMorphEvent(element, item.morphSize, item.morphDuration || 300);
    }

    if (item.onHover) {
      item.onHover(event, item);
    }

    this.dispatchEvent('item:hover', { item, element });
  }

  /**
   * Handle mouse leave
   */
  private handleMouseLeave(event: Event, item: MasonryItem): void {
    const element = event.target as HTMLElement;
    element.classList.remove('hover');

    // Reset to original size if morphed
    if (item.morphOnHover && item.morphSize) {
      const originalSize = element.getAttribute('data-original-size') || item.size;
      this.dispatchMorphEvent(element, originalSize, item.morphDuration || 300);
    }

    this.dispatchEvent('item:hover-end', { item, element });
  }

  /**
   * Handle click
   */
  private handleClick(event: Event, item: MasonryItem): void {
    if (item.onClick) {
      item.onClick(event, item);
    }

    this.dispatchEvent('item:click', { item, event });
  }

  /**
   * Handle touch start
   */
  private handleTouchStart(event: TouchEvent, item: MasonryItem): void {
    const touch = event.touches[0];
    const element = event.target as HTMLElement;
    const itemId = element.getAttribute('data-item-id');

    if (itemId) {
      this.touchStartPositions.set(itemId, { x: touch.clientX, y: touch.clientY });

      // Start long press timer
      const timer = window.setTimeout(() => {
        this.handleLongPress(event, item);
      }, this.longPressDelay);

      this.longPressTimers.set(itemId, timer);
    }
  }

  /**
   * Handle touch end
   */
  private handleTouchEnd(event: TouchEvent, _item: MasonryItem): void {
    const element = event.target as HTMLElement;
    const itemId = element.getAttribute('data-item-id');

    if (itemId) {
      // Clear long press timer
      const timer = this.longPressTimers.get(itemId);
      if (timer) {
        clearTimeout(timer);
        this.longPressTimers.delete(itemId);
      }

      this.touchStartPositions.delete(itemId);
    }
  }

  /**
   * Handle touch move
   */
  private handleTouchMove(event: TouchEvent, _item: MasonryItem): void {
    const element = event.target as HTMLElement;
    const itemId = element.getAttribute('data-item-id');

    if (itemId) {
      const startPos = this.touchStartPositions.get(itemId);
      if (startPos) {
        const touch = event.touches[0];
        const deltaX = Math.abs(touch.clientX - startPos.x);
        const deltaY = Math.abs(touch.clientY - startPos.y);

        // If moved significantly, cancel long press
        if (deltaX > 10 || deltaY > 10) {
          const timer = this.longPressTimers.get(itemId);
          if (timer) {
            clearTimeout(timer);
            this.longPressTimers.delete(itemId);
          }
        }
      }
    }
  }

  /**
   * Handle long press
   */
  private handleLongPress(event: Event, item: MasonryItem): void {
    const element = event.target as HTMLElement;

    if (item.morphOnLongPress && item.morphSize) {
      this.dispatchMorphEvent(element, item.morphSize, item.morphDuration || 500);
    }

    if (item.onLongPress) {
      item.onLongPress(event, item);
    }

    this.dispatchEvent('item:longpress', { item, element });
  }

  /**
   * Handle key down
   */
  private handleKeyDown(event: KeyboardEvent, item: MasonryItem): void {
    const element = event.target as HTMLElement;

    switch (event.key) {
      case 'Enter':
      case ' ':
        event.preventDefault();
        this.handleClick(event, item);
        break;
      case 'Escape':
        // Reset morphing if active
        if (item.morphOnHover && item.morphSize) {
          const originalSize = element.getAttribute('data-original-size') || item.size;
          this.dispatchMorphEvent(element, originalSize, item.morphDuration || 300);
        }
        break;
    }
  }

  /**
   * Dispatch morph event
   */
  private dispatchMorphEvent(element: HTMLElement, targetSize: string, duration: number): void {
    const event = new CustomEvent('item:morph-request', {
      detail: {
        element,
        targetSize,
        duration
      },
      bubbles: true,
      cancelable: true
    });
    element.dispatchEvent(event);
  }

  /**
   * Dispatch custom event
   */
  private dispatchEvent(eventName: string, detail: any): void {
    const event = new CustomEvent(eventName, {
      detail,
      bubbles: true,
      cancelable: true
    });
    document.dispatchEvent(event);
  }

  /**
   * Clean up event listeners
   */
  cleanupItemListeners(element: HTMLElement): void {
    const itemId = element.getAttribute('data-item-id');
    if (itemId) {
      const timer = this.longPressTimers.get(itemId);
      if (timer) {
        clearTimeout(timer);
        this.longPressTimers.delete(itemId);
      }
      this.touchStartPositions.delete(itemId);
    }
  }

  /**
   * Get active timers count
   */
  getActiveTimersCount(): number {
    return this.longPressTimers.size;
  }

  /**
   * Clear all timers
   */
  clearAllTimers(): void {
    this.longPressTimers.forEach(timer => clearTimeout(timer));
    this.longPressTimers.clear();
    this.touchStartPositions.clear();
  }
} 