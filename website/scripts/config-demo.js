// Configuration Demo JavaScript
document.addEventListener('DOMContentLoaded', function() {
    // Initialize configuration demos
    initializeConfigDemos();
    
    // Setup configuration navigation
    setupConfigNavigation();
    
    // Setup interactive controls
    setupInteractiveControls();
});

// Initialize configuration demos
function initializeConfigDemos() {
    const demoIds = [
        'animation-demo', 
        'morphing-demo',
        'responsive-demo',
        'interaction-demo',
        'styling-demo',
        'performance-demo'
    ];
    
    demoIds.forEach(demoId => {
        const demo = document.getElementById(demoId);
        if (demo) {
            initializeDemo(demo, demoId);
        }
    });
    
    // Initialize layout demo with default items
    const layoutDemo = document.getElementById('layout-demo');
    if (layoutDemo) {
        console.log('Initializing layout demo');
        console.log('Layout demo element:', layoutDemo);
        console.log('Layout demo methods:', Object.getOwnPropertyNames(Object.getPrototypeOf(layoutDemo)));
        
        const defaultItems = generateLayoutItems(6, 'mixed');
        console.log(`Generated ${defaultItems.length} default items for layout demo`);
        setTimeout(() => {
            defaultItems.forEach(item => {
                try {
                    console.log(`Adding default item: ${item.id}`);
                    layoutDemo.addItem(item);
                } catch (error) {
                    console.error(`Error adding item ${item.id}:`, error);
                }
            });
        }, 500);
    } else {
        console.error('Layout demo element not found');
    }
}

// Initialize a specific demo
function initializeDemo(demo, demoId) {
    // Add sample items based on demo type
    const items = getDemoItems(demoId);
    
    setTimeout(() => {
        items.forEach(item => {
            demo.addItem(item);
        });
    }, 300);
}

// Get demo items based on demo type
function getDemoItems(demoId) {
    const beautifulItems = [
        {
            id: `${demoId}-1`,
            size: '2x2',
            content: `
                <div style="padding: 25px; text-align: center; height: 100%; display: flex; flex-direction: column; justify-content: center; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; border-radius: 12px; box-shadow: 0 8px 32px rgba(102, 126, 234, 0.3);">
                    <div style="font-size: 48px; margin-bottom: 12px;">🌟</div>
                    <h3 style="margin: 0 0 8px 0; font-size: 22px; font-weight: 600;">Featured</h3>
                    <p style="margin: 0; font-size: 16px; opacity: 0.9;">Premium Content</p>
                </div>
            `,
            backgroundColor: 'transparent',
            animationType: 'breathing'
        },
        {
            id: `${demoId}-2`,
            size: '1x2',
            content: `
                <div style="padding: 20px; text-align: center; height: 100%; display: flex; flex-direction: column; justify-content: center; background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%); color: white; border-radius: 12px; box-shadow: 0 6px 24px rgba(240, 147, 251, 0.3);">
                    <div style="font-size: 36px; margin-bottom: 8px;">🎨</div>
                    <h3 style="margin: 0; font-size: 18px; font-weight: 600;">Creative</h3>
                </div>
            `,
            backgroundColor: 'transparent',
            animationType: 'pulse'
        },
        {
            id: `${demoId}-3`,
            size: '2x1',
            content: `
                <div style="padding: 20px; text-align: center; height: 100%; display: flex; flex-direction: column; justify-content: center; background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%); color: white; border-radius: 12px; box-shadow: 0 6px 24px rgba(79, 172, 254, 0.3);">
                    <div style="font-size: 36px; margin-bottom: 8px;">⚡</div>
                    <h3 style="margin: 0; font-size: 18px; font-weight: 600;">Lightning Fast</h3>
                </div>
            `,
            backgroundColor: 'transparent',
            animationType: 'float'
        },
        {
            id: `${demoId}-4`,
            size: '1x1',
            content: `
                <div style="padding: 18px; text-align: center; height: 100%; display: flex; flex-direction: column; justify-content: center; background: linear-gradient(135deg, #43e97b 0%, #38f9d7 100%); color: white; border-radius: 12px; box-shadow: 0 6px 24px rgba(67, 233, 123, 0.3);">
                    <div style="font-size: 32px; margin-bottom: 6px;">🚀</div>
                    <h3 style="margin: 0; font-size: 16px; font-weight: 600;">Boost</h3>
                </div>
            `,
            backgroundColor: 'transparent',
            animationType: 'breathing'
        },
        {
            id: `${demoId}-5`,
            size: '1x1',
            content: `
                <div style="padding: 18px; text-align: center; height: 100%; display: flex; flex-direction: column; justify-content: center; background: linear-gradient(135deg, #fa709a 0%, #fee140 100%); color: white; border-radius: 12px; box-shadow: 0 6px 24px rgba(250, 112, 154, 0.3);">
                    <div style="font-size: 32px; margin-bottom: 6px;">🎯</div>
                    <h3 style="margin: 0; font-size: 16px; font-weight: 600;">Target</h3>
                </div>
            `,
            backgroundColor: 'transparent',
            animationType: 'pulse'
        },
        {
            id: `${demoId}-6`,
            size: '2x1',
            content: `
                <div style="padding: 20px; text-align: center; height: 100%; display: flex; flex-direction: column; justify-content: center; background: linear-gradient(135deg, #a8edea 0%, #fed6e3 100%); color: #333; border-radius: 12px; box-shadow: 0 6px 24px rgba(168, 237, 234, 0.3);">
                    <div style="font-size: 36px; margin-bottom: 8px;">💫</div>
                    <h3 style="margin: 0; font-size: 18px; font-weight: 600;">Smooth Flow</h3>
                </div>
            `,
            backgroundColor: 'transparent',
            animationType: 'float'
        },
        {
            id: `${demoId}-7`,
            size: '1x2',
            content: `
                <div style="padding: 20px; text-align: center; height: 100%; display: flex; flex-direction: column; justify-content: center; background: linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%); color: #333; border-radius: 12px; box-shadow: 0 6px 24px rgba(255, 236, 210, 0.3);">
                    <div style="font-size: 36px; margin-bottom: 8px;">🎪</div>
                    <h3 style="margin: 0; font-size: 18px; font-weight: 600;">Dynamic</h3>
                </div>
            `,
            backgroundColor: 'transparent',
            animationType: 'breathing'
        },
        {
            id: `${demoId}-8`,
            size: '1x1',
            content: `
                <div style="padding: 18px; text-align: center; height: 100%; display: flex; flex-direction: column; justify-content: center; background: linear-gradient(135deg, #ff9a9e 0%, #fecfef 100%); color: white; border-radius: 12px; box-shadow: 0 6px 24px rgba(255, 154, 158, 0.3);">
                    <div style="font-size: 32px; margin-bottom: 6px;">🌈</div>
                    <h3 style="margin: 0; font-size: 16px; font-weight: 600;">Vibrant</h3>
                </div>
            `,
            backgroundColor: 'transparent',
            animationType: 'pulse'
        }
    ];
    
    // Customize items based on demo type
    switch (demoId) {
        case 'animation-demo':
            return beautifulItems.map(item => ({
                ...item,
                animationType: item.animationType || 'breathing',
                morphOnHover: true,
                morphSize: '2x2'
            }));
        case 'morphing-demo':
            return beautifulItems.map(item => ({
                ...item,
                morphOnHover: true,
                morphOnLongPress: true,
                morphSize: '2x2',
                morphDuration: 600
            }));
        case 'styling-demo':
            return beautifulItems.map(item => ({
                ...item,
                backgroundColor: 'transparent'
            }));
        case 'responsive-demo':
            return beautifulItems.slice(0, 6).map(item => ({
                ...item,
                animationType: 'breathing'
            }));
        case 'interaction-demo':
            return beautifulItems.slice(0, 5).map(item => ({
                ...item,
                clickable: true,
                hoverable: true,
                morphOnHover: true,
                morphSize: '2x1'
            }));
        case 'performance-demo':
            return beautifulItems.slice(0, 4).map(item => ({
                ...item,
                animationType: 'float'
            }));
        default:
            return beautifulItems;
    }
}

// Setup configuration navigation
function setupConfigNavigation() {
    const configNavLinks = document.querySelectorAll('.config-nav-link');
    const configSections = document.querySelectorAll('.config-section');
    
    console.log('Setting up config navigation');
    console.log('Found config nav links:', configNavLinks.length);
    console.log('Found config sections:', configSections.length);
    
    configNavLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            
            console.log('Config nav link clicked:', link.getAttribute('data-target'));
            
            // Remove active class from all sections and links
            configSections.forEach(section => section.classList.remove('active'));
            configNavLinks.forEach(navLink => navLink.classList.remove('active'));
            
            // Add active class to clicked link
            link.classList.add('active');
            
            // Show corresponding section
            const targetId = '#' + link.getAttribute('data-target');
            const targetSection = document.querySelector(targetId);
            if (targetSection) {
                targetSection.classList.add('active');
                console.log('Activated section:', targetId);
            } else {
                console.error('Target section not found:', targetId);
            }
        });
    });
}

// Setup interactive controls
function setupInteractiveControls() {
    // Layout controls
    setupLayoutControls();
    
    // Animation controls
    setupAnimationControls();
    
    // Morphing controls
    setupMorphingControls();
    
    // Responsive controls
    setupResponsiveControls();
    
    // Interaction controls
    setupInteractionControls();
    
    // Styling controls
    setupStylingControls();
    
    // Performance controls
    setupPerformanceControls();
}

// Layout controls
function setupLayoutControls() {
    const columnsSlider = document.getElementById('columns');
    const gapSlider = document.getElementById('gap');
    const paddingSlider = document.getElementById('padding');
    const itemCountSlider = document.getElementById('itemCount');
    const itemSizesSelect = document.getElementById('itemSizes');
    const layoutDemo = document.getElementById('layout-demo');
    
    if (columnsSlider && layoutDemo) {
        columnsSlider.addEventListener('input', (e) => {
            const value = e.target.value;
            e.target.nextElementSibling.textContent = value;
            layoutDemo.updateConfig({ columns: parseInt(value) });
        });
    }
    
    if (gapSlider && layoutDemo) {
        gapSlider.addEventListener('input', (e) => {
            const value = e.target.value;
            e.target.nextElementSibling.textContent = value;
            layoutDemo.updateConfig({ gap: parseInt(value) });
        });
    }
    
    if (paddingSlider && layoutDemo) {
        paddingSlider.addEventListener('input', (e) => {
            const value = e.target.value;
            e.target.nextElementSibling.textContent = value;
            layoutDemo.updateConfig({ padding: parseInt(value) });
        });
    }
    
    if (itemCountSlider && layoutDemo) {
        itemCountSlider.addEventListener('input', (e) => {
            const value = e.target.value;
            console.log(`Item count slider changed to: ${value}`);
            e.target.nextElementSibling.textContent = value;
            updateLayoutDemoItems(layoutDemo, parseInt(value), itemSizesSelect?.value || 'mixed');
        });
    }
    
    if (itemSizesSelect && layoutDemo) {
        itemSizesSelect.addEventListener('change', (e) => {
            const itemCount = itemCountSlider?.value || 6;
            updateLayoutDemoItems(layoutDemo, parseInt(itemCount), e.target.value);
        });
    }
    
    const borderWidthSlider = document.getElementById('borderWidth');
    if (borderWidthSlider && layoutDemo) {
        borderWidthSlider.addEventListener('input', (e) => {
            const value = e.target.value;
            console.log(`Border width slider changed to: ${value}`);
            e.target.nextElementSibling.textContent = value;
            try {
                layoutDemo.updateConfig({ borderWidth: parseInt(value) });
                console.log('Border width config updated successfully');
                
                // Debug: Check if the CSS custom property is being set
                setTimeout(() => {
                    const computedStyle = getComputedStyle(layoutDemo);
                    const borderWidth = computedStyle.getPropertyValue('--border-width');
                    console.log('Computed border width CSS property:', borderWidth);
                    
                    // Check a masonry item's border
                    const firstItem = layoutDemo.querySelector('.masonry-item');
                    if (firstItem) {
                        const itemBorder = getComputedStyle(firstItem).border;
                        console.log('First item border:', itemBorder);
                    }
                }, 100);
            } catch (error) {
                console.error('Error updating border width:', error);
            }
        });
    }
}

// Update layout demo items
function updateLayoutDemoItems(demo, count, sizeDistribution) {
    console.log(`Updating layout demo items: count=${count}, distribution=${sizeDistribution}`);
    
    // Clear existing items by removing them individually
    const existingItems = demo.getItems();
    console.log(`Found ${existingItems.length} existing items`);
    
    // Remove all existing items
    existingItems.forEach(item => {
        console.log(`Removing item: ${item.id}`);
        demo.removeItem(item.id);
    });
    
    // Wait for removal to complete and then add new items
    setTimeout(() => {
        // Check if items were actually removed
        const remainingItems = demo.getItems();
        console.log(`After removal, ${remainingItems.length} items remain`);
        
        // If items weren't removed properly, try a different approach
        if (remainingItems.length > 0) {
            console.log('Items not removed properly, trying alternative approach');
            // Try to remove items by their DOM elements
            const itemElements = demo.querySelectorAll('.masonry-item');
            itemElements.forEach(element => {
                element.remove();
            });
        }
        
        // Generate new items based on size distribution
        const items = generateLayoutItems(count, sizeDistribution);
        console.log(`Generated ${items.length} new items`);
        
        // Add new items with a small delay between each
        items.forEach((item, index) => {
            setTimeout(() => {
                console.log(`Adding item: ${item.id}`);
                demo.addItem(item);
            }, index * 50); // 50ms delay between each item
        });
    }, 300);
}

// Generate layout items based on size distribution
function generateLayoutItems(count, distribution) {
    const items = [];
    const sizeMap = {
        'uniform': () => '1x1',
        'large': () => Math.random() > 0.5 ? '2x2' : '1x1',
        'tall': () => Math.random() > 0.5 ? '1x2' : '1x1',
        'wide': () => Math.random() > 0.5 ? '2x1' : '1x1',
        'mixed': () => {
            const sizes = ['1x1', '1x2', '2x1', '2x2'];
            return sizes[Math.floor(Math.random() * sizes.length)];
        }
    };
    
    const getSize = sizeMap[distribution] || sizeMap['mixed'];
    
    for (let i = 0; i < count; i++) {
        items.push({
            id: `layout-item-${i}`,
            size: getSize(),
            content: `
                <div style="padding: 20px; text-align: center; height: 100%; display: flex; flex-direction: column; justify-content: center; background: linear-gradient(135deg, ${getRandomGradient()}); color: white; border-radius: 12px; box-shadow: 0 6px 24px rgba(0,0,0,0.2);">
                    <div style="font-size: 28px; margin-bottom: 8px;">${getRandomEmoji()}</div>
                    <h3 style="margin: 0; font-size: 16px; font-weight: 600;">Item ${i + 1}</h3>
                </div>
            `,
            backgroundColor: 'transparent'
        });
    }
    
    return items;
}

// Helper functions
function getRandomGradient() {
    const gradients = [
        '#667eea 0%, #764ba2 100%',
        '#f093fb 0%, #f5576c 100%',
        '#4facfe 0%, #00f2fe 100%',
        '#43e97b 0%, #38f9d7 100%',
        '#fa709a 0%, #fee140 100%',
        '#a8edea 0%, #fed6e3 100%',
        '#ffecd2 0%, #fcb69f 100%',
        '#ff9a9e 0%, #fecfef 100%'
    ];
    return gradients[Math.floor(Math.random() * gradients.length)];
}

function getRandomEmoji() {
    const emojis = ['🌟', '🎨', '⚡', '🚀', '💎', '🎯', '🔥', '✨', '💫', '🎪', '🎭', '🎨'];
    return emojis[Math.floor(Math.random() * emojis.length)];
}

// Animation controls
function setupAnimationControls() {
    const animationCheckbox = document.getElementById('animation');
    const animationDurationSlider = document.getElementById('animationDuration');
    const breathingEffectCheckbox = document.getElementById('breathingEffect');
    const breathingSpeedSlider = document.getElementById('breathingSpeed');
    const animationTypeSelect = document.getElementById('animationType');
    const animationIntensitySlider = document.getElementById('animationIntensity');
    const reduceMotionCheckbox = document.getElementById('reduceMotion');
    const animationDemo = document.getElementById('animation-demo');
    
    if (animationCheckbox && animationDemo) {
        animationCheckbox.addEventListener('change', (e) => {
            animationDemo.updateConfig({ animation: e.target.checked });
        });
    }
    
    if (animationDurationSlider && animationDemo) {
        animationDurationSlider.addEventListener('input', (e) => {
            const value = e.target.value;
            e.target.nextElementSibling.textContent = value;
            animationDemo.updateConfig({ animationDuration: parseInt(value) });
        });
    }
    
    if (breathingEffectCheckbox && animationDemo) {
        breathingEffectCheckbox.addEventListener('change', (e) => {
            animationDemo.updateConfig({ breathingEffect: e.target.checked });
        });
    }
    
    if (breathingSpeedSlider && animationDemo) {
        breathingSpeedSlider.addEventListener('input', (e) => {
            const value = e.target.value;
            e.target.nextElementSibling.textContent = value;
            animationDemo.updateConfig({ breathingSpeed: parseInt(value) });
        });
    }
    
    if (animationTypeSelect && animationDemo) {
        animationTypeSelect.addEventListener('change', (e) => {
            updateAnimationDemoItems(animationDemo, e.target.value);
        });
    }
    
    if (animationIntensitySlider && animationDemo) {
        animationIntensitySlider.addEventListener('input', (e) => {
            const value = e.target.value;
            e.target.nextElementSibling.textContent = value;
            animationDemo.updateConfig({ animationIntensity: parseFloat(value) });
        });
    }
    
    if (reduceMotionCheckbox && animationDemo) {
        reduceMotionCheckbox.addEventListener('change', (e) => {
            animationDemo.updateConfig({ reduceMotion: e.target.checked });
        });
    }
}

// Update animation demo items
function updateAnimationDemoItems(demo, animationType) {
    // Clear existing items by removing them individually
    const existingItems = demo.getItems();
    existingItems.forEach(item => {
        demo.removeItem(item.id);
    });
    
    // Generate new items with the selected animation type
    const items = generateAnimationItems(animationType);
    
    setTimeout(() => {
        items.forEach(item => {
            demo.addItem(item);
        });
    }, 100);
}

// Generate animation items
function generateAnimationItems(animationType) {
    const items = [];
    const animations = ['breathing', 'pulse', 'float', 'none'];
    
    for (let i = 0; i < 6; i++) {
        const animation = animationType === 'none' ? 'none' : animations[i % animations.length];
        items.push({
            id: `animation-item-${i}`,
            size: i % 3 === 0 ? '2x2' : i % 2 === 0 ? '1x2' : '1x1',
            content: `
                <div style="padding: 20px; text-align: center; height: 100%; display: flex; flex-direction: column; justify-content: center; background: linear-gradient(135deg, ${getRandomGradient()}); color: white; border-radius: 12px; box-shadow: 0 6px 24px rgba(0,0,0,0.2);">
                    <div style="font-size: 28px; margin-bottom: 8px;">${getRandomEmoji()}</div>
                    <h3 style="margin: 0; font-size: 16px; font-weight: 600;">${animation.charAt(0).toUpperCase() + animation.slice(1)}</h3>
                </div>
            `,
            backgroundColor: 'transparent',
            animationType: animation
        });
    }
    
    return items;
}

// Morphing controls
function setupMorphingControls() {
    const morphingCheckbox = document.getElementById('morphing');
    const morphDurationSlider = document.getElementById('morphDuration');
    const hoverMorphCheckbox = document.getElementById('hoverMorph');
    const longPressMorphCheckbox = document.getElementById('longPressMorph');
    const morphSizeSelect = document.getElementById('morphSize');
    const morphEasingSelect = document.getElementById('morphEasing');
    const morphScaleCheckbox = document.getElementById('morphScale');
    const morphingDemo = document.getElementById('morphing-demo');
    
    if (morphingCheckbox && morphingDemo) {
        morphingCheckbox.addEventListener('change', (e) => {
            morphingDemo.updateConfig({ morphing: e.target.checked });
        });
    }
    
    if (morphDurationSlider && morphingDemo) {
        morphDurationSlider.addEventListener('input', (e) => {
            const value = e.target.value;
            e.target.nextElementSibling.textContent = value;
            morphingDemo.updateConfig({ morphDuration: parseInt(value) });
        });
    }
    
    if (hoverMorphCheckbox && morphingDemo) {
        hoverMorphCheckbox.addEventListener('change', (e) => {
            morphingDemo.updateConfig({ hoverMorph: e.target.checked });
        });
    }
    
    if (longPressMorphCheckbox && morphingDemo) {
        longPressMorphCheckbox.addEventListener('change', (e) => {
            morphingDemo.updateConfig({ longPressMorph: e.target.checked });
        });
    }
    
    if (morphSizeSelect && morphingDemo) {
        morphSizeSelect.addEventListener('change', (e) => {
            updateMorphingDemoItems(morphingDemo, e.target.value);
        });
    }
    
    if (morphEasingSelect && morphingDemo) {
        morphEasingSelect.addEventListener('change', (e) => {
            morphingDemo.updateConfig({ morphEasing: e.target.value });
        });
    }
    
    if (morphScaleCheckbox && morphingDemo) {
        morphScaleCheckbox.addEventListener('change', (e) => {
            morphingDemo.updateConfig({ morphScale: e.target.checked });
        });
    }
}

// Update morphing demo items
function updateMorphingDemoItems(demo, morphSize) {
    // Clear existing items by removing them individually
    const existingItems = demo.getItems();
    existingItems.forEach(item => {
        demo.removeItem(item.id);
    });
    
    // Generate new items with morphing configuration
    const items = generateMorphingItems(morphSize);
    
    setTimeout(() => {
        items.forEach(item => {
            demo.addItem(item);
        });
    }, 100);
}

// Generate morphing items
function generateMorphingItems(morphSize) {
    const items = [];
    
    for (let i = 0; i < 6; i++) {
        items.push({
            id: `morphing-item-${i}`,
            size: '1x1',
            content: `
                <div style="padding: 20px; text-align: center; height: 100%; display: flex; flex-direction: column; justify-content: center; background: linear-gradient(135deg, ${getRandomGradient()}); color: white; border-radius: 12px; box-shadow: 0 6px 24px rgba(0,0,0,0.2); cursor: pointer;">
                    <div style="font-size: 28px; margin-bottom: 8px;">🔄</div>
                    <h3 style="margin: 0; font-size: 16px; font-weight: 600;">Morph to ${morphSize}</h3>
                    <p style="margin: 4px 0 0 0; font-size: 14px; opacity: 0.8;">Hover or long press</p>
                </div>
            `,
            backgroundColor: 'transparent',
            morphOnHover: true,
            morphOnLongPress: true,
            morphSize: morphSize,
            morphDuration: 500
        });
    }
    
    return items;
}

// Responsive controls
function setupResponsiveControls() {
    const responsiveCheckbox = document.getElementById('responsive');
    const mobileColumnsInput = document.getElementById('mobile-columns');
    const tabletColumnsInput = document.getElementById('tablet-columns');
    const desktopColumnsInput = document.getElementById('desktop-columns');
    const mobileGapInput = document.getElementById('mobile-gap');
    const tabletGapInput = document.getElementById('tablet-gap');
    const desktopGapInput = document.getElementById('desktop-gap');
    const responsiveModeSelect = document.getElementById('responsiveMode');
    const responsiveAnimationCheckbox = document.getElementById('responsiveAnimation');
    const responsiveDemo = document.getElementById('responsive-demo');
    
    if (responsiveCheckbox && responsiveDemo) {
        responsiveCheckbox.addEventListener('change', (e) => {
            responsiveDemo.updateConfig({ responsive: e.target.checked });
        });
    }
    
    if (mobileColumnsInput && responsiveDemo) {
        mobileColumnsInput.addEventListener('change', (e) => {
            const breakpoints = responsiveDemo.config.breakpoints || {};
            breakpoints.mobile = { ...breakpoints.mobile, columns: parseInt(e.target.value) };
            responsiveDemo.updateConfig({ breakpoints });
        });
    }
    
    if (tabletColumnsInput && responsiveDemo) {
        tabletColumnsInput.addEventListener('change', (e) => {
            const breakpoints = responsiveDemo.config.breakpoints || {};
            breakpoints.tablet = { ...breakpoints.tablet, columns: parseInt(e.target.value) };
            responsiveDemo.updateConfig({ breakpoints });
        });
    }
    
    if (desktopColumnsInput && responsiveDemo) {
        desktopColumnsInput.addEventListener('change', (e) => {
            const breakpoints = responsiveDemo.config.breakpoints || {};
            breakpoints.desktop = { ...breakpoints.desktop, columns: parseInt(e.target.value) };
            responsiveDemo.updateConfig({ breakpoints });
        });
    }
    
    if (mobileGapInput && responsiveDemo) {
        mobileGapInput.addEventListener('change', (e) => {
            const breakpoints = responsiveDemo.config.breakpoints || {};
            breakpoints.mobile = { ...breakpoints.mobile, gap: parseInt(e.target.value) };
            responsiveDemo.updateConfig({ breakpoints });
        });
    }
    
    if (tabletGapInput && responsiveDemo) {
        tabletGapInput.addEventListener('change', (e) => {
            const breakpoints = responsiveDemo.config.breakpoints || {};
            breakpoints.tablet = { ...breakpoints.tablet, gap: parseInt(e.target.value) };
            responsiveDemo.updateConfig({ breakpoints });
        });
    }
    
    if (desktopGapInput && responsiveDemo) {
        desktopGapInput.addEventListener('change', (e) => {
            const breakpoints = responsiveDemo.config.breakpoints || {};
            breakpoints.desktop = { ...breakpoints.desktop, gap: parseInt(e.target.value) };
            responsiveDemo.updateConfig({ breakpoints });
        });
    }
    
    if (responsiveModeSelect && responsiveDemo) {
        responsiveModeSelect.addEventListener('change', (e) => {
            responsiveDemo.updateConfig({ responsiveMode: e.target.value });
        });
    }
    
    if (responsiveAnimationCheckbox && responsiveDemo) {
        responsiveAnimationCheckbox.addEventListener('change', (e) => {
            responsiveDemo.updateConfig({ responsiveAnimation: e.target.checked });
        });
    }
}

// Interaction controls
function setupInteractionControls() {
    const longPressDelaySlider = document.getElementById('longPressDelay');
    const touchEnabledCheckbox = document.getElementById('touchEnabled');
    const interactionDemo = document.getElementById('interaction-demo');
    
    if (longPressDelaySlider && interactionDemo) {
        longPressDelaySlider.addEventListener('input', (e) => {
            const value = e.target.value;
            e.target.nextElementSibling.textContent = value;
            interactionDemo.updateConfig({ longPressDelay: parseInt(value) });
        });
    }
    
    if (touchEnabledCheckbox && interactionDemo) {
        touchEnabledCheckbox.addEventListener('change', (e) => {
            interactionDemo.updateConfig({ touchEnabled: e.target.checked });
        });
    }
}

// Styling controls
function setupStylingControls() {
    const themeSelect = document.getElementById('theme');
    const borderRadiusSlider = document.getElementById('borderRadius');
    const shadowCheckbox = document.getElementById('shadow');
    const shadowIntensitySlider = document.getElementById('shadowIntensity');
    const backgroundColorInput = document.getElementById('backgroundColor');
    const textColorInput = document.getElementById('textColor');
    const borderColorInput = document.getElementById('borderColor');
    const hoverScaleSlider = document.getElementById('hoverScale');
    const stylingDemo = document.getElementById('styling-demo');
    
    if (themeSelect && stylingDemo) {
        themeSelect.addEventListener('change', (e) => {
            stylingDemo.setAttribute('data-theme', e.target.value);
        });
    }
    
    if (borderRadiusSlider && stylingDemo) {
        borderRadiusSlider.addEventListener('input', (e) => {
            const value = e.target.value;
            e.target.nextElementSibling.textContent = value;
            stylingDemo.updateConfig({ borderRadius: parseInt(value) });
        });
    }
    
    if (shadowCheckbox && stylingDemo) {
        shadowCheckbox.addEventListener('change', (e) => {
            stylingDemo.updateConfig({ shadow: e.target.checked });
        });
    }
    
    if (shadowIntensitySlider && stylingDemo) {
        shadowIntensitySlider.addEventListener('input', (e) => {
            const value = e.target.value;
            e.target.nextElementSibling.textContent = value;
            stylingDemo.updateConfig({ shadowIntensity: parseFloat(value) });
        });
    }
    
    if (backgroundColorInput && stylingDemo) {
        backgroundColorInput.addEventListener('change', (e) => {
            stylingDemo.updateConfig({ backgroundColor: e.target.value });
        });
    }
    
    if (textColorInput && stylingDemo) {
        textColorInput.addEventListener('change', (e) => {
            stylingDemo.updateConfig({ textColor: e.target.value });
        });
    }
    
    if (borderColorInput && stylingDemo) {
        borderColorInput.addEventListener('change', (e) => {
            stylingDemo.updateConfig({ borderColor: e.target.value });
        });
    }
    
    if (hoverScaleSlider && stylingDemo) {
        hoverScaleSlider.addEventListener('input', (e) => {
            const value = e.target.value;
            e.target.nextElementSibling.textContent = value;
            stylingDemo.updateConfig({ hoverScale: parseFloat(value) });
        });
    }
}

// Performance controls
function setupPerformanceControls() {
    const throttleResizeSlider = document.getElementById('throttleResize');
    const useTransformCheckbox = document.getElementById('useTransform');
    const hardwareAccelerationCheckbox = document.getElementById('hardwareAcceleration');
    const performanceDemo = document.getElementById('performance-demo');
    
    if (throttleResizeSlider && performanceDemo) {
        throttleResizeSlider.addEventListener('input', (e) => {
            const value = e.target.value;
            e.target.nextElementSibling.textContent = value;
            performanceDemo.updateConfig({ throttleResize: parseInt(value) });
        });
    }
    
    if (useTransformCheckbox && performanceDemo) {
        useTransformCheckbox.addEventListener('change', (e) => {
            performanceDemo.updateConfig({ useTransform: e.target.checked });
        });
    }
    
    if (hardwareAccelerationCheckbox && performanceDemo) {
        hardwareAccelerationCheckbox.addEventListener('change', (e) => {
            performanceDemo.updateConfig({ hardwareAcceleration: e.target.checked });
        });
    }
}

// Utility function to update value displays
function updateValueDisplay(slider, value) {
    const valueDisplay = slider.nextElementSibling;
    if (valueDisplay) {
        valueDisplay.textContent = value;
    }
}

// Export functions for use in other scripts
window.HyMasonryConfigDemo = {
    initializeConfigDemos,
    setupConfigNavigation,
    setupInteractiveControls
}; 