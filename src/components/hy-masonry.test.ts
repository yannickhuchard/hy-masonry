import { HyMasonry } from './hy-masonry';

describe('HyMasonry', () => {
  let masonry: HyMasonry;

  beforeEach(() => {
    masonry = new HyMasonry();
    document.body.appendChild(masonry);
  });

  afterEach(() => {
    if (masonry && masonry.parentNode) {
      masonry.parentNode.removeChild(masonry);
    }
  });

  test('should create masonry component', () => {
    expect(masonry).toBeInstanceOf(HyMasonry);
    expect(masonry.tagName.toLowerCase()).toBe('hy-masonry');
  });

  test('should add item', () => {
    const item = {
      id: 'test-item',
      size: '1x1',
      content: '<h3>Test</h3>',
      animationType: 'breathing'
    };

    masonry.addItem(item);
    const items = masonry.getItems();
    expect(items).toHaveLength(1);
    expect(items[0].id).toBe('test-item');
  });

  test('should remove item', () => {
    const item = {
      id: 'test-item',
      size: '1x1',
      content: '<h3>Test</h3>'
    };

    masonry.addItem(item);
    expect(masonry.getItems()).toHaveLength(1);

    masonry.removeItem('test-item');
    expect(masonry.getItems()).toHaveLength(0);
  });

  test('should update item', () => {
    const item = {
      id: 'test-item',
      size: '1x1',
      content: '<h3>Test</h3>',
      animationType: 'breathing'
    };

    masonry.addItem(item);
    masonry.updateItem('test-item', { content: '<h3>Updated</h3>' });

    const updatedItem = masonry.getItem('test-item');
    expect(updatedItem?.content).toBe('<h3>Updated</h3>');
  });

  test('should morph item', () => {
    const item = {
      id: 'test-item',
      size: '1x1',
      content: '<h3>Test</h3>'
    };

    masonry.addItem(item);
    masonry.morphItem('test-item', '2x2', 500);

    // Check if morphing state exists
    const layout = masonry.getLayoutInfo();
    expect(layout).toBeDefined();
  });

  test('should get layout info', () => {
    const layout = masonry.getLayoutInfo();
    expect(layout).toBeDefined();
    expect(layout?.columns).toBe(4);
    expect(layout?.gap).toBe(16);
  });

  test('should update configuration', () => {
    masonry.updateConfig({ columns: 6, gap: 20 });
    const layout = masonry.getLayoutInfo();
    expect(layout?.columns).toBe(6);
    expect(layout?.gap).toBe(20);
  });
}); 