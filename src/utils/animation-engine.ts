import { AnimationFunction, AnimationOptions } from '../types';

export class AnimationEngine {
  private animations: Map<string, AnimationFunction> = new Map();
  private animationFrame: number | null = null;
  private isRunning: boolean = false;
  private lastTime: number = 0;

  constructor() {
    this.start();
  }

  /**
   * Add animation to an item
   */
  addAnimation(itemId: string, animationType: string, options: AnimationOptions = {}): void {
    const animationFunction = this.createAnimation(animationType, options);
    this.animations.set(itemId, animationFunction);
  }

  /**
   * Remove animation from an item
   */
  removeAnimation(itemId: string): void {
    this.animations.delete(itemId);
  }

  /**
   * Create animation function based on type
   */
  private createAnimation(type: string, options: AnimationOptions): AnimationFunction {
    switch (type) {
      case 'breathing':
        const breathing = new BreathingAnimation(options);
        return (element: HTMLElement, deltaTime: number) => breathing.update(element, deltaTime);
      case 'pulse':
        const pulse = new PulseAnimation(options);
        return (element: HTMLElement, deltaTime: number) => pulse.update(element, deltaTime);
      case 'float':
        const float = new FloatAnimation(options);
        return (element: HTMLElement, deltaTime: number) => float.update(element, deltaTime);
      default:
        return (_element: HTMLElement, _deltaTime: number) => {}; // No animation
    }
  }

  /**
   * Start animation loop
   */
  start(): void {
    if (this.isRunning) return;
    this.isRunning = true;
    this.lastTime = performance.now();
    this.animate();
  }

  /**
   * Stop animation loop
   */
  stop(): void {
    this.isRunning = false;
    if (this.animationFrame) {
      cancelAnimationFrame(this.animationFrame);
      this.animationFrame = null;
    }
  }

  /**
   * Main animation loop
   */
  private animate(): void {
    if (!this.isRunning) return;

    const currentTime = performance.now();
    const deltaTime = currentTime - this.lastTime;
    this.lastTime = currentTime;

    // Update all animations
    this.animations.forEach((animation, itemId) => {
      const element = document.querySelector(`[data-item-id="${itemId}"]`) as HTMLElement;
      if (element) {
        animation(element, deltaTime);
      }
    });

    this.animationFrame = requestAnimationFrame(() => this.animate());
  }

  /**
   * Get animation count
   */
  getAnimationCount(): number {
    return this.animations.size;
  }

  /**
   * Clear all animations
   */
  clear(): void {
    this.animations.clear();
  }
}

class BreathingAnimation {
  private speed: number;
  private intensity: number;
  private phase: number;

  constructor(options: AnimationOptions = {}) {
    this.speed = options.speed || 2000;
    this.intensity = options.intensity || 0.05;
    this.phase = options.phase || 0;
  }

  update(element: HTMLElement, deltaTime: number): void {
    const scale = 1 + Math.sin(this.phase) * this.intensity;
    element.style.transform = `scale(${scale})`;
    this.phase += (deltaTime / this.speed) * Math.PI * 2;
  }
}

class PulseAnimation {
  private speed: number;
  private phase: number;

  constructor(options: AnimationOptions = {}) {
    this.speed = options.speed || 1500;
    this.phase = options.phase || 0;
  }

  update(element: HTMLElement, deltaTime: number): void {
    const opacity = 0.8 + Math.sin(this.phase) * 0.2;
    element.style.opacity = opacity.toString();
    this.phase += (deltaTime / this.speed) * Math.PI * 2;
  }
}

class FloatAnimation {
  private speed: number;
  private intensity: number;
  private phase: number;

  constructor(options: AnimationOptions = {}) {
    this.speed = options.speed || 3000;
    this.intensity = options.intensity || 5;
    this.phase = options.phase || 0;
  }

  update(element: HTMLElement, deltaTime: number): void {
    const translateY = Math.sin(this.phase) * this.intensity;
    element.style.transform = `translateY(${translateY}px)`;
    this.phase += (deltaTime / this.speed) * Math.PI * 2;
  }
} 