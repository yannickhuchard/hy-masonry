/**
 * HY Live Masonry Configuration Interface
 * 
 * This interface defines all available configuration options for the HY Live Masonry component.
 * Each section is clearly documented with its purpose and usage.
 */
export interface MasonryConfig {
  // ============================================================================
  // LAYOUT CONFIGURATION
  // ============================================================================
  
  /**
   * Number of columns in the masonry grid
   * @default 4
   * @min 1
   * @max 12
   */
  columns?: number;
  
  /**
   * Gap between masonry items in pixels
   * @default 16
   * @min 0
   * @max 50
   */
  gap?: number;
  
  /**
   * Padding around the masonry container in pixels
   * @default 20
   * @min 0
   * @max 100
   */
  padding?: number;
  
  /**
   * Layout algorithm to use for positioning items
   * - 'packed': Items are packed tightly (default)
   * - 'loose': Items are positioned with more space
   * - 'grid': Strict grid layout
   */
  layoutAlgorithm?: 'packed' | 'loose' | 'grid';
  
  /**
   * Whether to maintain aspect ratio of items
   * @default false
   */
  maintainAspectRatio?: boolean;
  
  /**
   * Minimum item width in pixels
   * @default 100
   */
  minItemWidth?: number;
  
  /**
   * Maximum item width in pixels
   * @default null (unlimited)
   */
  maxItemWidth?: number;
  
  // ============================================================================
  // ANIMATION CONFIGURATION
  // ============================================================================
  
  /**
   * Enable/disable all animations
   * @default true
   */
  animation?: boolean;
  
  /**
   * Duration of animations in milliseconds
   * @default 300
   * @min 100
   * @max 2000
   */
  animationDuration?: number;
  
  /**
   * Animation easing function
   * @default 'ease'
   */
  animationEasing?: 'linear' | 'ease' | 'ease-in' | 'ease-out' | 'ease-in-out' | 'cubic-bezier(0.4, 0, 0.2, 1)';
  
  /**
   * Enable breathing effect on items
   * @default true
   */
  breathingEffect?: boolean;
  
  /**
   * Speed of breathing animation in milliseconds
   * @default 2000
   * @min 1000
   * @max 10000
   */
  breathingSpeed?: number;
  
  /**
   * Intensity of breathing effect (0-1)
   * @default 0.05
   * @min 0
   * @max 0.2
   */
  breathingIntensity?: number;
  
  /**
   * Enable entrance animations when items are added
   * @default true
   */
  entranceAnimation?: boolean;
  
  /**
   * Stagger delay between entrance animations in milliseconds
   * @default 100
   */
  entranceStagger?: number;
  
  // ============================================================================
  // MORPHING CONFIGURATION
  // ============================================================================
  
  /**
   * Enable/disable morphing functionality
   * @default true
   */
  morphing?: boolean;
  
  /**
   * Duration of morphing animations in milliseconds
   * @default 500
   * @min 200
   * @max 2000
   */
  morphDuration?: number;
  
  /**
   * Enable morphing on hover
   * @default true
   */
  hoverMorph?: boolean;
  
  /**
   * Enable morphing on long press
   * @default true
   */
  longPressMorph?: boolean;
  
  /**
   * Enable morphing on click
   * @default false
   */
  clickMorph?: boolean;
  
  /**
   * Default morph size for items
   * @default '2x2'
   */
  defaultMorphSize?: string;
  
  /**
   * Whether to animate morphing transitions
   * @default true
   */
  animateMorphing?: boolean;
  
  /**
   * Morphing easing function
   * @default 'cubic-bezier(0.4, 0, 0.2, 1)'
   */
  morphEasing?: string;
  
  // ============================================================================
  // RESPONSIVE CONFIGURATION
  // ============================================================================
  
  /**
   * Enable responsive behavior
   * @default true
   */
  responsive?: boolean;
  
  /**
   * Breakpoint configuration for different screen sizes
   */
  breakpoints?: BreakpointConfig;
  
  /**
   * Whether to automatically adjust columns based on container width
   * @default true
   */
  autoColumns?: boolean;
  
  /**
   * Minimum columns to show regardless of screen size
   * @default 1
   */
  minColumns?: number;
  
  /**
   * Maximum columns to show regardless of screen size
   * @default 8
   */
  maxColumns?: number;
  
  // ============================================================================
  // INTERACTION CONFIGURATION
  // ============================================================================
  
  /**
   * Delay for long press detection in milliseconds
   * @default 500
   * @min 200
   * @max 2000
   */
  longPressDelay?: number;
  
  /**
   * Enable touch interactions
   * @default true
   */
  touchEnabled?: boolean;
  
  /**
   * Enable mouse interactions
   * @default true
   */
  mouseEnabled?: boolean;
  
  /**
   * Enable keyboard navigation
   * @default false
   */
  keyboardEnabled?: boolean;
  
  /**
   * Whether items are draggable
   * @default false
   */
  draggable?: boolean;
  
  /**
   * Whether items are sortable
   * @default false
   */
  sortable?: boolean;
  
  /**
   * Enable item selection
   * @default false
   */
  selectable?: boolean;
  
  /**
   * Allow multiple item selection
   * @default false
   */
  multiSelect?: boolean;
  
  // ============================================================================
  // STYLING CONFIGURATION
  // ============================================================================
  
  /**
   * Theme to apply to the masonry
   * @default 'default'
   */
  theme?: 'default' | 'dark' | 'minimal' | 'glass' | 'neon' | 'custom';
  
  /**
   * Border radius for items in pixels
   * @default 8
   * @min 0
   * @max 50
   */
  borderRadius?: number;
  
  /**
   * Border width for items in pixels
   * @default 1
   * @min 0
   * @max 10
   */
  borderWidth?: number;
  
  /**
   * Enable shadows on items
   * @default true
   */
  shadow?: boolean;
  
  /**
   * Shadow intensity (0-1)
   * @default 0.1
   */
  shadowIntensity?: number;
  
  /**
   * Enable hover effects
   * @default true
   */
  hoverEffects?: boolean;
  
  /**
   * Scale factor on hover (1.0 = no scale)
   * @default 1.02
   * @min 1.0
   * @max 1.2
   */
  hoverScale?: number;
  
  /**
   * Custom CSS class to apply to the masonry container
   */
  containerClass?: string;
  
  /**
   * Custom CSS class to apply to masonry items
   */
  itemClass?: string;
  
  /**
   * Custom CSS variables for theming
   */
  cssVariables?: Record<string, string>;
  
  // ============================================================================
  // PERFORMANCE CONFIGURATION
  // ============================================================================
  
  /**
   * Throttle resize events in milliseconds
   * @default 100
   * @min 50
   * @max 500
   */
  throttleResize?: number;
  
  /**
   * Use CSS transforms for better performance
   * @default true
   */
  useTransform?: boolean;
  
  /**
   * Enable hardware acceleration
   * @default true
   */
  hardwareAcceleration?: boolean;
  
  /**
   * Enable intersection observer for performance
   * @default true
   */
  intersectionObserver?: boolean;
  
  /**
   * Threshold for intersection observer (0-1)
   * @default 0.1
   */
  intersectionThreshold?: number;
  
  /**
   * Enable virtual scrolling for large datasets
   * @default false
   */
  virtualScrolling?: boolean;
  
  /**
   * Number of items to render in virtual scrolling
   * @default 50
   */
  virtualItemCount?: number;
  
  /**
   * Debounce time for layout updates in milliseconds
   * @default 50
   */
  layoutDebounce?: number;
  
  // ============================================================================
  // ACCESSIBILITY CONFIGURATION
  // ============================================================================
  
  /**
   * Enable ARIA labels and roles
   * @default true
   */
  accessibility?: boolean;
  
  /**
   * Screen reader announcements
   * @default true
   */
  screenReaderAnnouncements?: boolean;
  
  /**
   * Focus management
   * @default true
   */
  focusManagement?: boolean;
  
  /**
   * High contrast mode support
   * @default false
   */
  highContrast?: boolean;
  
  // ============================================================================
  // DEBUG CONFIGURATION
  // ============================================================================
  
  /**
   * Enable debug mode
   * @default false
   */
  debug?: boolean;
  
  /**
   * Show layout grid overlay
   * @default false
   */
  showGrid?: boolean;
  
  /**
   * Log performance metrics
   * @default false
   */
  performanceLogging?: boolean;
  
  /**
   * Show item boundaries
   * @default false
   */
  showBoundaries?: boolean;
}

/**
 * Breakpoint configuration for responsive design
 */
export interface BreakpointConfig {
  /**
   * Mobile breakpoint (≤768px)
   */
  mobile?: Breakpoint;
  
  /**
   * Tablet breakpoint (769px-1024px)
   */
  tablet?: Breakpoint;
  
  /**
   * Desktop breakpoint (>1024px)
   */
  desktop?: Breakpoint;
  
  /**
   * Large desktop breakpoint (>1440px)
   */
  largeDesktop?: Breakpoint;
  
  /**
   * Custom breakpoints
   */
  [key: string]: Breakpoint | undefined;
}

/**
 * Individual breakpoint configuration
 */
export interface Breakpoint {
  /**
   * Minimum width for this breakpoint
   */
  minWidth?: number;
  
  /**
   * Maximum width for this breakpoint
   */
  maxWidth?: number;
  
  /**
   * Number of columns at this breakpoint
   */
  columns: number;
  
  /**
   * Gap between items at this breakpoint
   */
  gap: number;
  
  /**
   * Padding at this breakpoint
   */
  padding?: number;
  
  /**
   * Custom configuration for this breakpoint
   */
  config?: Partial<MasonryConfig>;
}

/**
 * Masonry item configuration
 */
export interface MasonryItem {
  /**
   * Unique identifier for the item
   */
  id: string;
  
  /**
   * Size of the item in format 'colsxrows' (e.g., '1x1', '2x1', '1x2', '2x2')
   */
  size: string;
  
  /**
   * Minimum size constraint
   */
  minSize?: string;
  
  /**
   * Maximum size constraint
   */
  maxSize?: string;
  
  /**
   * HTML content for the item
   */
  content?: string;
  
  /**
   * Background image URL
   */
  image?: string;
  
  /**
   * Background color
   */
  backgroundColor?: string;
  
  /**
   * Text color
   */
  textColor?: string;
  
  /**
   * Animation type for the item
   */
  animationType?: 'breathing' | 'pulse' | 'float' | 'none';
  
  /**
   * Delay before animation starts in milliseconds
   */
  animationDelay?: number;
  
  /**
   * Custom animation function
   */
  customAnimation?: AnimationFunction;
  
  /**
   * Whether item morphs on hover
   */
  morphOnHover?: boolean;
  
  /**
   * Whether item morphs on long press
   */
  morphOnLongPress?: boolean;
  
  /**
   * Target size when morphing
   */
  morphSize?: string;
  
  /**
   * Duration of morphing animation
   */
  morphDuration?: number;
  
  /**
   * Whether item is clickable
   */
  clickable?: boolean;
  
  /**
   * Whether item is hoverable
   */
  hoverable?: boolean;
  
  /**
   * Whether item is draggable
   */
  draggable?: boolean;
  
  /**
   * Click event handler
   */
  onClick?: (event: Event, item: MasonryItem) => void;
  
  /**
   * Hover event handler
   */
  onHover?: (event: Event, item: MasonryItem) => void;
  
  /**
   * Long press event handler
   */
  onLongPress?: (event: Event, item: MasonryItem) => void;
  
  /**
   * Morph start event handler
   */
  onMorph?: (event: Event, item: MasonryItem) => void;
  
  /**
   * Morph end event handler
   */
  onMorphEnd?: (event: Event, item: MasonryItem) => void;
  
  /**
   * Custom CSS classes for the item
   */
  className?: string;
  
  /**
   * Custom data attributes
   */
  data?: Record<string, string>;
  
  /**
   * Whether item is visible
   */
  visible?: boolean;
  
  /**
   * Z-index for the item
   */
  zIndex?: number;
}

/**
 * Custom animation function type
 */
export interface AnimationFunction {
  (element: HTMLElement, deltaTime: number): void;
}

/**
 * Morphing state information
 */
export interface MorphingState {
  /**
   * Original size before morphing
   */
  originalSize: string;
  
  /**
   * Target size for morphing
   */
  targetSize: string;
  
  /**
   * Duration of morphing animation
   */
  duration: number;
  
  /**
   * Start time of morphing
   */
  startTime: number;
  
  /**
   * Current progress (0-1)
   */
  progress: number;
  
  /**
   * Update function for morphing
   */
  update: (currentTime: number) => number;
  
  /**
   * Check if morphing is complete
   */
  isComplete: () => boolean;
}

/**
 * Layout information
 */
export interface LayoutInfo {
  /**
   * Number of columns
   */
  columns: number;
  
  /**
   * Gap between items
   */
  gap: number;
  
  /**
   * Container padding
   */
  padding: number;
  
  /**
   * Container width
   */
  containerWidth: number;
  
  /**
   * Container height
   */
  containerHeight: number;
  
  /**
   * Number of items
   */
  itemCount: number;
  
  /**
   * Heights of each column
   */
  columnHeights: number[];
  
  /**
   * Current breakpoint
   */
  breakpoint?: string;
  
  /**
   * Layout algorithm used
   */
  algorithm?: string;
}

/**
 * Masonry event interface
 */
export interface MasonryEvent {
  detail: {
    item?: MasonryItem;
    layout?: LayoutInfo;
    animation?: string;
    morphing?: MorphingState;
    breakpoint?: string;
    performance?: PerformanceMetrics;
  };
}

/**
 * Custom event map for TypeScript
 */
export interface CustomEventMap {
  'item:added': MasonryEvent;
  'item:removed': MasonryEvent;
  'item:updated': MasonryEvent;
  'item:morphed': MasonryEvent;
  'layout:updated': MasonryEvent;
  'animation:start': MasonryEvent;
  'animation:end': MasonryEvent;
  'breakpoint:changed': MasonryEvent;
  'performance:metrics': MasonryEvent;
  'error:occurred': MasonryEvent;
}

/**
 * Animation options
 */
export interface AnimationOptions {
  /**
   * Animation speed
   */
  speed?: number;
  
  /**
   * Animation intensity
   */
  intensity?: number;
  
  /**
   * Animation phase
   */
  phase?: number;
  
  /**
   * Animation easing
   */
  easing?: string;
  
  /**
   * Animation delay
   */
  delay?: number;
}

/**
 * Size dimensions
 */
export interface SizeDimensions {
  /**
   * Number of columns
   */
  cols: number;
  
  /**
   * Number of rows
   */
  rows: number;
}

/**
 * Calculated dimensions
 */
export interface CalculatedDimensions {
  /**
   * Width in pixels
   */
  width: number;
  
  /**
   * Height in pixels
   */
  height: number;
}

/**
 * Theme configuration
 */
export interface ThemeConfig {
  /**
   * Theme name
   */
  name: string;
  
  /**
   * Color palette
   */
  colors: {
    background: string;
    text: string;
    border: string;
    shadow: string;
    hoverShadow: string;
    accent: string;
    secondary: string;
  };
  
  /**
   * Border radius
   */
  borderRadius: number;
  
  /**
   * Shadow configuration
   */
  shadow: string;
  
  /**
   * Hover shadow configuration
   */
  hoverShadow: string;
  
  /**
   * Custom CSS variables
   */
  variables?: Record<string, string>;
}

/**
 * Performance metrics
 */
export interface PerformanceMetrics {
  /**
   * Layout calculation time in milliseconds
   */
  layoutTime: number;
  
  /**
   * Animation frame rate
   */
  fps: number;
  
  /**
   * Memory usage in bytes
   */
  memoryUsage: number;
  
  /**
   * Number of DOM operations
   */
  domOperations: number;
  
  /**
   * Timestamp of measurement
   */
  timestamp: number;
} 