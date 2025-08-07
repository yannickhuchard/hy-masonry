// Import styles
import './styles/hy-masonry.css';

// Export main component
export { HyMasonry } from './components/hy-masonry';

// Export utilities
export { AnimationEngine } from './utils/animation-engine';
export { MorphingManager } from './utils/morphing-manager';
export { InteractionHandler } from './utils/interaction-handler';
export { SizeCalculator } from './utils/size-calculator';

// Export types
export type {
  MasonryConfig,
  MasonryItem,
  LayoutInfo,
  BreakpointConfig,
  Breakpoint,
  AnimationFunction,
  MorphingState,
  MasonryEvent,
  CustomEventMap,
  AnimationOptions,
  SizeDimensions,
  CalculatedDimensions,
  ThemeConfig
} from './types';

// Default export for convenience
import { HyMasonry } from './components/hy-masonry';
export default HyMasonry;

// Auto-register the web component if in browser environment
if (typeof window !== 'undefined' && typeof customElements !== 'undefined') {
  // Import the component to trigger registration
  import('./components/hy-masonry');
} 