import { MorphingState } from '../types';
import { SizeCalculator } from './size-calculator';

export class MorphingManager {
  private morphingItems: Map<string, MorphingState> = new Map();
  private originalSizes: Map<string, string> = new Map();
  private morphAnimationFrame: number | null = null;
  private isRunning: boolean = false;

  constructor() {
    this.start();
  }

  /**
   * Morph item to new size
   */
  morphItem(itemId: string, targetSize: string, duration: number = 500): void {
    const element = document.querySelector(`[data-item-id="${itemId}"]`) as HTMLElement;
    if (!element) return;

    const currentSize = element.getAttribute('data-size') || '1x1';
    const originalSize = this.originalSizes.get(itemId) || currentSize;

    const morphingState: MorphingState = {
      originalSize,
      targetSize,
      duration,
      startTime: Date.now(),
      progress: 0,
      update: function(currentTime: number): number {
        this.progress = Math.min((currentTime - this.startTime) / this.duration, 1);
        return this.progress;
      },
      isComplete: function(): boolean {
        return this.progress >= 1;
      }
    };

    this.morphingItems.set(itemId, morphingState);
    element.classList.add('morphing');

    // Dispatch morph start event
    this.dispatchEvent('item:morph', { itemId, targetSize, duration });
  }

  /**
   * Reset item to original size
   */
  resetItem(itemId: string, duration: number = 500): void {
    const originalSize = this.originalSizes.get(itemId);
    if (originalSize) {
      this.morphItem(itemId, originalSize, duration);
    }
  }

  /**
   * Check if item is currently morphing
   */
  isMorphing(itemId: string): boolean {
    return this.morphingItems.has(itemId);
  }

  /**
   * Store original size for an item
   */
  storeOriginalSize(itemId: string, size: string): void {
    this.originalSizes.set(itemId, size);
  }

  /**
   * Start morphing animation loop
   */
  start(): void {
    if (this.isRunning) return;
    this.isRunning = true;
    this.animate();
  }

  /**
   * Stop morphing animation loop
   */
  stop(): void {
    this.isRunning = false;
    if (this.morphAnimationFrame) {
      cancelAnimationFrame(this.morphAnimationFrame);
      this.morphAnimationFrame = null;
    }
  }

  /**
   * Main morphing animation loop
   */
  private animate(): void {
    if (!this.isRunning) return;

    const currentTime = Date.now();
    const completedItems: string[] = [];

    this.morphingItems.forEach((state, itemId) => {
      const element = document.querySelector(`[data-item-id="${itemId}"]`) as HTMLElement;
      if (!element) {
        completedItems.push(itemId);
        return;
      }

      const progress = state.update(currentTime);
      const morphedSize = SizeCalculator.morphSize(
        state.originalSize,
        state.targetSize,
        progress
      );

      // Update element size
      element.setAttribute('data-size', morphedSize);
      element.style.gridColumn = `span ${SizeCalculator.parseSize(morphedSize).cols}`;
      element.style.gridRow = `span ${SizeCalculator.parseSize(morphedSize).rows}`;

      if (state.isComplete()) {
        completedItems.push(itemId);
        element.classList.remove('morphing');
        
        // Dispatch morph end event
        this.dispatchEvent('item:morph-end', { itemId, finalSize: state.targetSize });
      }
    });

    // Remove completed items
    completedItems.forEach(itemId => {
      this.morphingItems.delete(itemId);
    });

    this.morphAnimationFrame = requestAnimationFrame(() => this.animate());
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
   * Get morphing items count
   */
  getMorphingCount(): number {
    return this.morphingItems.size;
  }

  /**
   * Clear all morphing states
   */
  clear(): void {
    this.morphingItems.clear();
  }

  /**
   * Get morphing state for an item
   */
  getMorphingState(itemId: string): MorphingState | undefined {
    return this.morphingItems.get(itemId);
  }
} 