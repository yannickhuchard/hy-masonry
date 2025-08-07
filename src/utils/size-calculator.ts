import { SizeDimensions, CalculatedDimensions } from '../types';

export class SizeCalculator {
  /**
   * Parse size string (e.g., "2x3") into dimensions
   */
  static parseSize(sizeString: string): SizeDimensions {
    const [cols, rows] = sizeString.split('x').map(Number);
    return { cols: cols || 1, rows: rows || 1 };
  }

  /**
   * Calculate actual dimensions for a grid item
   */
  static calculateDimensions(
    size: string,
    containerWidth: number,
    gap: number,
    columns: number
  ): CalculatedDimensions {
    const { cols, rows } = this.parseSize(size);
    const availableWidth = containerWidth - (gap * (columns - 1));
    const itemWidth = availableWidth / columns;
    const actualWidth = itemWidth * cols + (gap * (cols - 1));
    const actualHeight = itemWidth * rows;
    
    return { width: actualWidth, height: actualHeight };
  }

  /**
   * Morph size between original and target
   */
  static morphSize(
    originalSize: string,
    targetSize: string,
    progress: number
  ): string {
    const original = this.parseSize(originalSize);
    const target = this.parseSize(targetSize);
    
    const cols = original.cols + (target.cols - original.cols) * progress;
    const rows = original.rows + (target.rows - original.rows) * progress;
    
    return `${Math.round(cols)}x${Math.round(rows)}`;
  }

  /**
   * Validate size string format
   */
  static isValidSize(size: string): boolean {
    const pattern = /^\d+x\d+$/;
    return pattern.test(size);
  }

  /**
   * Get minimum size for an item
   */
  static getMinSize(size: string): string {
    const { cols, rows } = this.parseSize(size);
    return `${Math.max(1, Math.floor(cols / 2))}x${Math.max(1, Math.floor(rows / 2))}`;
  }

  /**
   * Get maximum size for an item
   */
  static getMaxSize(size: string): string {
    const { cols, rows } = this.parseSize(size);
    return `${cols * 2}x${rows * 2}`;
  }

  /**
   * Calculate grid position for an item
   */
  static calculateGridPosition(
    _itemIndex: number,
    _columns: number,
    columnHeights: number[]
  ): { x: number; y: number } {
    // Find the shortest column
    const shortestColumn = columnHeights.indexOf(Math.min(...columnHeights));
    return {
      x: shortestColumn,
      y: columnHeights[shortestColumn]
    };
  }

  /**
   * Update column heights after placing an item
   */
  static updateColumnHeights(
    columnHeights: number[],
    columnIndex: number,
    itemHeight: number,
    gap: number
  ): number[] {
    const newHeights = [...columnHeights];
    newHeights[columnIndex] += itemHeight + gap;
    return newHeights;
  }
} 