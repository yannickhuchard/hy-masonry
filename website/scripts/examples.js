// Examples JavaScript
document.addEventListener('DOMContentLoaded', function() {
    // Initialize examples
    initializeExamples();
});

// Initialize examples
function initializeExamples() {
    // Basic example
    const basicExample = document.getElementById('basic-example');
    if (basicExample) {
        setTimeout(() => {
            const basicItems = [
                {
                    id: 'basic-1',
                    size: '1x1',
                    content: `
                        <div style="padding: 20px; text-align: center; height: 100%; display: flex; flex-direction: column; justify-content: center; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; border-radius: 12px;">
                            <div style="font-size: 36px; margin-bottom: 8px;">📱</div>
                            <h3 style="margin: 0; font-size: 18px; font-weight: 600;">Mobile</h3>
                        </div>
                    `,
                    backgroundColor: 'transparent'
                },
                {
                    id: 'basic-2',
                    size: '2x1',
                    content: `
                        <div style="padding: 20px; text-align: center; height: 100%; display: flex; flex-direction: column; justify-content: center; background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%); color: white; border-radius: 12px;">
                            <div style="font-size: 36px; margin-bottom: 8px;">💻</div>
                            <h3 style="margin: 0; font-size: 18px; font-weight: 600;">Desktop</h3>
                        </div>
                    `,
                    backgroundColor: 'transparent'
                },
                {
                    id: 'basic-3',
                    size: '1x2',
                    content: `
                        <div style="padding: 20px; text-align: center; height: 100%; display: flex; flex-direction: column; justify-content: center; background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%); color: white; border-radius: 12px;">
                            <div style="font-size: 36px; margin-bottom: 8px;">🖥️</div>
                            <h3 style="margin: 0; font-size: 18px; font-weight: 600;">Tablet</h3>
                        </div>
                    `,
                    backgroundColor: 'transparent'
                }
            ];
            
            basicItems.forEach(item => {
                basicExample.addItem(item);
            });
        }, 300);
    }
    
    // Animated example
    const animatedExample = document.getElementById('animated-example');
    if (animatedExample) {
        setTimeout(() => {
            const animatedItems = [
                {
                    id: 'animated-1',
                    size: '2x2',
                    content: `
                        <div style="padding: 25px; text-align: center; height: 100%; display: flex; flex-direction: column; justify-content: center; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; border-radius: 12px; box-shadow: 0 8px 32px rgba(102, 126, 234, 0.3);">
                            <div style="font-size: 48px; margin-bottom: 12px;">🌟</div>
                            <h3 style="margin: 0 0 8px 0; font-size: 22px; font-weight: 600;">Breathing</h3>
                            <p style="margin: 0; font-size: 16px; opacity: 0.9;">Smooth Scale</p>
                        </div>
                    `,
                    backgroundColor: 'transparent',
                    animationType: 'breathing'
                },
                {
                    id: 'animated-2',
                    size: '1x2',
                    content: `
                        <div style="padding: 20px; text-align: center; height: 100%; display: flex; flex-direction: column; justify-content: center; background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%); color: white; border-radius: 12px; box-shadow: 0 6px 24px rgba(240, 147, 251, 0.3);">
                            <div style="font-size: 36px; margin-bottom: 8px;">💫</div>
                            <h3 style="margin: 0; font-size: 18px; font-weight: 600;">Pulse</h3>
                        </div>
                    `,
                    backgroundColor: 'transparent',
                    animationType: 'pulse'
                },
                {
                    id: 'animated-3',
                    size: '2x1',
                    content: `
                        <div style="padding: 20px; text-align: center; height: 100%; display: flex; flex-direction: column; justify-content: center; background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%); color: white; border-radius: 12px; box-shadow: 0 6px 24px rgba(79, 172, 254, 0.3);">
                            <div style="font-size: 36px; margin-bottom: 8px;">🌊</div>
                            <h3 style="margin: 0; font-size: 18px; font-weight: 600;">Float</h3>
                        </div>
                    `,
                    backgroundColor: 'transparent',
                    animationType: 'float'
                },
                {
                    id: 'animated-4',
                    size: '1x1',
                    content: `
                        <div style="padding: 18px; text-align: center; height: 100%; display: flex; flex-direction: column; justify-content: center; background: linear-gradient(135deg, #43e97b 0%, #38f9d7 100%); color: white; border-radius: 12px; box-shadow: 0 6px 24px rgba(67, 233, 123, 0.3);">
                            <div style="font-size: 32px; margin-bottom: 6px;">✨</div>
                            <h3 style="margin: 0; font-size: 16px; font-weight: 600;">Glow</h3>
                        </div>
                    `,
                    backgroundColor: 'transparent',
                    animationType: 'breathing'
                }
            ];
            
            animatedItems.forEach(item => {
                animatedExample.addItem(item);
            });
        }, 300);
    }
    
    // Morphing example
    const morphingExample = document.getElementById('morphing-example');
    if (morphingExample) {
        setTimeout(() => {
            const morphingItems = [
                {
                    id: 'morphing-1',
                    size: '1x1',
                    content: `
                        <div style="padding: 18px; text-align: center; height: 100%; display: flex; flex-direction: column; justify-content: center; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; border-radius: 12px; box-shadow: 0 6px 24px rgba(102, 126, 234, 0.3);">
                            <div style="font-size: 28px; margin-bottom: 6px;">🎯</div>
                            <h3 style="margin: 0; font-size: 14px; font-weight: 600;">Hover Me</h3>
                        </div>
                    `,
                    backgroundColor: 'transparent',
                    morphOnHover: true,
                    morphSize: '2x2',
                    morphDuration: 500
                },
                {
                    id: 'morphing-2',
                    size: '2x1',
                    content: `
                        <div style="padding: 20px; text-align: center; height: 100%; display: flex; flex-direction: column; justify-content: center; background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%); color: white; border-radius: 12px; box-shadow: 0 6px 24px rgba(240, 147, 251, 0.3);">
                            <div style="font-size: 32px; margin-bottom: 8px;">👆</div>
                            <h3 style="margin: 0; font-size: 16px; font-weight: 600;">Long Press</h3>
                        </div>
                    `,
                    backgroundColor: 'transparent',
                    morphOnLongPress: true,
                    morphSize: '2x2',
                    morphDuration: 600
                },
                {
                    id: 'morphing-3',
                    size: '1x2',
                    content: `
                        <div style="padding: 20px; text-align: center; height: 100%; display: flex; flex-direction: column; justify-content: center; background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%); color: white; border-radius: 12px; box-shadow: 0 6px 24px rgba(79, 172, 254, 0.3);">
                            <div style="font-size: 32px; margin-bottom: 8px;">🎪</div>
                            <h3 style="margin: 0; font-size: 16px; font-weight: 600;">Dynamic</h3>
                        </div>
                    `,
                    backgroundColor: 'transparent',
                    morphOnHover: true,
                    morphOnLongPress: true,
                    morphSize: '2x2',
                    morphDuration: 400
                }
            ];
            
            morphingItems.forEach(item => {
                morphingExample.addItem(item);
            });
        }, 300);
    }
}

// Export functions for use in other scripts
window.HyMasonryExamples = {
    initializeExamples
}; 