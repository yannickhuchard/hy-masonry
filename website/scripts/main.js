// Main Website JavaScript
document.addEventListener('DOMContentLoaded', function() {
    // Navigation functionality
    setupNavigation();
    
    // Smooth scrolling for anchor links
    setupSmoothScrolling();
    
    // Mobile menu toggle
    setupMobileMenu();
    
    // Mobile-specific enhancements
    setupMobileEnhancements();
    
    // Intersection Observer for animations
    setupAnimations();
    
    // Copy code functionality
    setupCopyButtons();
    
    // Initialize masonry demos
    initializeDemos();
    
    // Setup configuration demo
    setupConfigDemo();
});

// Navigation setup
function setupNavigation() {
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('section[id]');
    
    // Update active nav link on scroll
    window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (window.pageYOffset >= sectionTop - 200) {
                current = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });
    
    // Handle nav link clicks
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// Smooth scrolling setup
function setupSmoothScrolling() {
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                const offsetTop = targetElement.offsetTop - 80; // Account for fixed navbar
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Mobile menu setup
function setupMobileMenu() {
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-menu');
    
    if (navToggle && navMenu) {
        navToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');
            navToggle.classList.toggle('active');
            
            // Prevent body scroll when menu is open
            if (navMenu.classList.contains('active')) {
                document.body.style.overflow = 'hidden';
            } else {
                document.body.style.overflow = '';
            }
        });
        
        // Close mobile menu when clicking on a link
        const mobileNavLinks = navMenu.querySelectorAll('.nav-link');
        mobileNavLinks.forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('active');
                navToggle.classList.remove('active');
                document.body.style.overflow = '';
            });
        });
        
        // Close mobile menu when clicking outside
        document.addEventListener('click', (e) => {
            if (!navToggle.contains(e.target) && !navMenu.contains(e.target)) {
                navMenu.classList.remove('active');
                navToggle.classList.remove('active');
                document.body.style.overflow = '';
            }
        });
        
        // Close mobile menu on escape key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && navMenu.classList.contains('active')) {
                navMenu.classList.remove('active');
                navToggle.classList.remove('active');
                document.body.style.overflow = '';
            }
        });
    }
}

// Mobile-specific enhancements
function setupMobileEnhancements() {
    // Add touch-friendly interactions
    setupTouchInteractions();
    
    // Handle viewport changes
    setupViewportHandling();
    
    // Optimize scrolling performance
    setupScrollOptimization();
    
    // Handle orientation changes
    setupOrientationHandling();
}

// Touch interactions setup
function setupTouchInteractions() {
    // Add touch feedback to interactive elements
    const touchElements = document.querySelectorAll('.btn, .nav-link, .config-nav-link, .feature-card, .example-card');
    
    touchElements.forEach(element => {
        element.addEventListener('touchstart', function() {
            this.style.transform = 'scale(0.98)';
        });
        
        element.addEventListener('touchend', function() {
            this.style.transform = '';
        });
        
        element.addEventListener('touchcancel', function() {
            this.style.transform = '';
        });
    });
    
    // Prevent double-tap zoom on buttons
    const buttons = document.querySelectorAll('.btn');
    buttons.forEach(button => {
        button.addEventListener('touchend', (e) => {
            e.preventDefault();
            button.click();
        });
    });
}

// Viewport handling
function setupViewportHandling() {
    // Set viewport meta tag for mobile
    const viewport = document.querySelector('meta[name="viewport"]');
    if (!viewport) {
        const meta = document.createElement('meta');
        meta.name = 'viewport';
        meta.content = 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no';
        document.head.appendChild(meta);
    }
    
    // Handle mobile-specific viewport adjustments
    function adjustViewport() {
        const isMobile = window.innerWidth <= 768;
        const isTablet = window.innerWidth > 768 && window.innerWidth <= 1024;
        
        if (isMobile) {
            document.documentElement.style.setProperty('--mobile-padding', '16px');
            document.documentElement.style.setProperty('--mobile-gap', '12px');
        } else if (isTablet) {
            document.documentElement.style.setProperty('--mobile-padding', '20px');
            document.documentElement.style.setProperty('--mobile-gap', '16px');
        } else {
            document.documentElement.style.setProperty('--mobile-padding', '24px');
            document.documentElement.style.setProperty('--mobile-gap', '20px');
        }
    }
    
    // Initial adjustment
    adjustViewport();
    
    // Adjust on resize
    window.addEventListener('resize', debounce(adjustViewport, 250));
}

// Scroll optimization
function setupScrollOptimization() {
    // Throttle scroll events for better performance
    let ticking = false;
    
    function updateOnScroll() {
        ticking = false;
        // Add any scroll-based updates here
    }
    
    function requestTick() {
        if (!ticking) {
            requestAnimationFrame(updateOnScroll);
            ticking = true;
        }
    }
    
    window.addEventListener('scroll', requestTick, { passive: true });
    
    // Optimize scroll behavior for mobile
    if ('scrollBehavior' in document.documentElement.style) {
        // Use smooth scrolling if supported
        document.documentElement.style.scrollBehavior = 'smooth';
    }
}

// Orientation handling
function setupOrientationHandling() {
    window.addEventListener('orientationchange', () => {
        // Delay to allow orientation change to complete
        setTimeout(() => {
            // Recalculate any layout-dependent elements
            const masonryElements = document.querySelectorAll('hy-masonry');
            masonryElements.forEach(masonry => {
                if (masonry.updateLayout) {
                    masonry.updateLayout();
                }
            });
            
            // Adjust viewport
            setupViewportHandling();
        }, 500);
    });
}

// Animation setup
function setupAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in-up');
            }
        });
    }, observerOptions);
    
    // Observe elements for animation
    const animatedElements = document.querySelectorAll('.feature-card, .example-card, .api-item, .download-option');
    animatedElements.forEach(el => {
        observer.observe(el);
    });
}

// Copy button functionality
function setupCopyButtons() {
    const codeBlocks = document.querySelectorAll('pre code');
    
    codeBlocks.forEach(block => {
        const pre = block.parentElement;
        const copyButton = document.createElement('button');
        copyButton.className = 'copy-button';
        copyButton.textContent = 'Copy';
        copyButton.setAttribute('aria-label', 'Copy code to clipboard');
        
        pre.style.position = 'relative';
        pre.appendChild(copyButton);
        
        copyButton.addEventListener('click', async () => {
            try {
                await navigator.clipboard.writeText(block.textContent);
                copyButton.textContent = 'Copied!';
                copyButton.classList.add('copied');
                
                setTimeout(() => {
                    copyButton.textContent = 'Copy';
                    copyButton.classList.remove('copied');
                }, 2000);
            } catch (err) {
                console.error('Failed to copy code:', err);
                copyButton.textContent = 'Failed';
                setTimeout(() => {
                    copyButton.textContent = 'Copy';
                }, 2000);
            }
        });
    });
}

// Initialize masonry demos
function initializeDemos() {
    const heroMasonry = document.getElementById('hero-masonry');
    if (heroMasonry) {
        setTimeout(() => {
            console.log('Initializing hero masonry...');
            heroMasonry.innerHTML = ''; // Clear any existing items

            // Create a perfect rectangle masonry with zero gaps
            const gridContainer = document.createElement('div');
            gridContainer.style.cssText = `
                display: grid;
                grid-template-columns: repeat(10, 1fr);
                grid-template-rows: repeat(10, 1fr);
                gap: 0;
                padding: 0;
                width: 100%;
                height: 100vh;
                min-height: 100vh;
                position: absolute;
                top: 0;
                left: 0;
                right: 0;
                bottom: 0;
            `;

            // Main title cell - large central area with artistic typography
            const titleItem = document.createElement('div');
            titleItem.style.cssText = `
                grid-column: 2 / span 8;
                grid-row: 2 / span 4;
                padding: 60px 40px;
                text-align: left;
                display: flex;
                flex-direction: column;
                justify-content: center;
                background: #2a2a2a;
                border: 1px solid #404040;
                color: white;
                border-radius: 0;
                box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
                animation: breathing 3s ease-in-out infinite;
                font-family: 'Space Grotesk', sans-serif;
            `;
            titleItem.innerHTML = `
                <div style="
                    font-family: 'Space Grotesk', sans-serif;
                    font-weight: 100;
                    font-size: 14px;
                    color: #4a90e2;
                    letter-spacing: 0.2em;
                    text-transform: uppercase;
                    margin-bottom: 20px;
                    line-height: 1.2;
                ">ADVANCED MASONRY</div>
                <div style="
                    font-family: 'Space Grotesk', sans-serif;
                    font-weight: 700;
                    font-size: 64px;
                    line-height: 0.9;
                    margin-bottom: 10px;
                    letter-spacing: -0.02em;
                ">LAYOUT</div>
                <div style="
                    font-family: 'Space Grotesk', sans-serif;
                    font-weight: 300;
                    font-size: 32px;
                    color: #b0b0b0;
                    line-height: 1.1;
                    margin-bottom: 30px;
                    letter-spacing: 0.05em;
                ">WEB COMPONENT</div>
                <div style="
                    font-family: 'JetBrains Mono', monospace;
                    font-weight: 300;
                    font-size: 12px;
                    color: #666;
                    letter-spacing: 0.1em;
                    text-transform: uppercase;
                    line-height: 1.4;
                ">HY LIVE MASONRY v1.0.0</div>
            `;

            // Description cell - below title with artistic typography
            const descItem = document.createElement('div');
            descItem.style.cssText = `
                grid-column: 2 / span 8;
                grid-row: 6 / span 2;
                padding: 40px;
                text-align: left;
                display: flex;
                align-items: center;
                justify-content: flex-start;
                background: #2a2a2a;
                border: 1px solid #404040;
                color: #b0b0b0;
                border-radius: 0;
                box-shadow: 0 6px 24px rgba(0, 0, 0, 0.25);
                animation: breathing 3.5s ease-in-out infinite;
                font-family: 'Inter', sans-serif;
            `;
            descItem.innerHTML = `
                <div style="
                    font-family: 'Space Grotesk', sans-serif;
                    font-weight: 300;
                    font-size: 20px;
                    line-height: 1.6;
                    color: #b0b0b0;
                    max-width: 700px;
                    letter-spacing: 0.02em;
                ">
                    <span style="
                        font-weight: 400;
                        color: #ffffff;
                        letter-spacing: 0.03em;
                    ">Create stunning, responsive masonry layouts</span> with advanced animations, morphing effects, and seamless interactions. <span style="
                        font-weight: 500;
                        color: #4a90e2;
                        letter-spacing: 0.01em;
                    ">Built with modern web standards.</span>
                </div>
            `;

            // Buttons container - below description with artistic typography
            const buttonsItem = document.createElement('div');
            buttonsItem.style.cssText = `
                grid-column: 3 / span 6;
                grid-row: 8 / span 2;
                padding: 30px;
                text-align: center;
                display: flex;
                align-items: center;
                justify-content: center;
                gap: 30px;
                background: #2a2a2a;
                border: 1px solid #404040;
                border-radius: 0;
                box-shadow: 0 6px 24px rgba(0, 0, 0, 0.25);
                animation: breathing 4s ease-in-out infinite;
            `;
            buttonsItem.innerHTML = `
                <button onclick="document.getElementById('download').scrollIntoView({behavior: 'smooth'})" style="
                    padding: 16px 32px;
                    background: #4a90e2;
                    color: white;
                    border: none;
                    border-radius: 0;
                    font-family: 'Space Grotesk', sans-serif;
                    font-size: 14px;
                    font-weight: 500;
                    cursor: pointer;
                    transition: all 0.3s ease;
                    box-shadow: 0 4px 12px rgba(74, 144, 226, 0.3);
                    letter-spacing: 0.05em;
                    text-transform: uppercase;
                " onmouseover="this.style.background='#5a9ee2';this.style.transform='translateY(-2px)'" onmouseout="this.style.background='#4a90e2';this.style.transform='translateY(0)'">
                    Get Started
                </button>
                <button onclick="document.getElementById('examples').scrollIntoView({behavior: 'smooth'})" style="
                    padding: 16px 32px;
                    background: transparent;
                    color: white;
                    border: 1px solid #404040;
                    border-radius: 0;
                    font-family: 'Space Grotesk', sans-serif;
                    font-size: 14px;
                    font-weight: 500;
                    cursor: pointer;
                    transition: all 0.3s ease;
                    letter-spacing: 0.05em;
                    text-transform: uppercase;
                " onmouseover="this.style.background='rgba(255,255,255,0.1)';this.style.borderColor='#4a90e2'" onmouseout="this.style.background='transparent';this.style.borderColor='#404040'">
                    View Examples
                </button>
            `;

            // Left column - fill completely with artistic typography
            const leftCol1 = document.createElement('div');
            leftCol1.style.cssText = `
                grid-column: 1 / span 1;
                grid-row: 1 / span 2;
                background: #2a2a2a;
                border: 1px solid #404040;
                border-radius: 0;
                box-shadow: 0 4px 16px rgba(0, 0, 0, 0.2);
                animation: breathing 3.1s ease-in-out infinite;
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                padding: 20px;
                font-family: 'Space Grotesk', sans-serif;
            `;
            leftCol1.innerHTML = `
                <div style="font-size: 28px; margin-bottom: 12px; color: #4a90e2;">⚡</div>
                <div style="
                    font-family: 'Space Grotesk', sans-serif;
                    font-weight: 600;
                    font-size: 14px;
                    color: white;
                    text-align: center;
                    letter-spacing: 0.1em;
                    text-transform: uppercase;
                    line-height: 1.2;
                ">Responsive</div>
            `;

            const leftCol2 = document.createElement('div');
            leftCol2.style.cssText = `
                grid-column: 1 / span 1;
                grid-row: 3 / span 2;
                background: #2a2a2a;
                border: 1px solid #404040;
                border-radius: 0;
                box-shadow: 0 4px 16px rgba(0, 0, 0, 0.2);
                animation: breathing 3.2s ease-in-out infinite;
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                padding: 20px;
                font-family: 'Space Grotesk', sans-serif;
            `;
            leftCol2.innerHTML = `
                <div style="font-size: 24px; margin-bottom: 10px; color: #4a90e2;">🔧</div>
                <div style="
                    font-family: 'Space Grotesk', sans-serif;
                    font-weight: 500;
                    font-size: 13px;
                    color: white;
                    text-align: center;
                    letter-spacing: 0.08em;
                    text-transform: uppercase;
                    line-height: 1.2;
                ">Customizable</div>
            `;

            const leftCol3 = document.createElement('div');
            leftCol3.style.cssText = `
                grid-column: 1 / span 1;
                grid-row: 5 / span 2;
                background: #2a2a2a;
                border: 1px solid #404040;
                border-radius: 0;
                box-shadow: 0 4px 16px rgba(0, 0, 0, 0.2);
                animation: breathing 3.3s ease-in-out infinite;
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                padding: 20px;
                font-family: 'Space Grotesk', sans-serif;
            `;
            leftCol3.innerHTML = `
                <div style="font-size: 22px; margin-bottom: 8px; color: #4a90e2;">📱</div>
                <div style="
                    font-family: 'Space Grotesk', sans-serif;
                    font-weight: 400;
                    font-size: 12px;
                    color: white;
                    text-align: center;
                    letter-spacing: 0.06em;
                    text-transform: uppercase;
                    line-height: 1.2;
                ">Mobile</div>
            `;

            const leftCol4 = document.createElement('div');
            leftCol4.style.cssText = `
                grid-column: 1 / span 1;
                grid-row: 7 / span 2;
                background: #2a2a2a;
                border: 1px solid #404040;
                border-radius: 0;
                box-shadow: 0 4px 16px rgba(0, 0, 0, 0.2);
                animation: breathing 3.4s ease-in-out infinite;
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                padding: 20px;
                font-family: 'Space Grotesk', sans-serif;
            `;
            leftCol4.innerHTML = `
                <div style="font-size: 20px; margin-bottom: 6px; color: #4a90e2;">🎯</div>
                <div style="
                    font-family: 'Space Grotesk', sans-serif;
                    font-weight: 300;
                    font-size: 11px;
                    color: white;
                    text-align: center;
                    letter-spacing: 0.04em;
                    text-transform: uppercase;
                    line-height: 1.2;
                ">Precise</div>
            `;

            const leftCol5 = document.createElement('div');
            leftCol5.style.cssText = `
                grid-column: 1 / span 1;
                grid-row: 9 / span 2;
                background: #2a2a2a;
                border: 1px solid #404040;
                border-radius: 0;
                box-shadow: 0 4px 16px rgba(0, 0, 0, 0.2);
                animation: breathing 3.5s ease-in-out infinite;
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                padding: 20px;
                font-family: 'Space Grotesk', sans-serif;
            `;
            leftCol5.innerHTML = `
                <div style="font-size: 18px; margin-bottom: 4px; color: #4a90e2;">⚙️</div>
                <div style="
                    font-family: 'Space Grotesk', sans-serif;
                    font-weight: 200;
                    font-size: 10px;
                    color: white;
                    text-align: center;
                    letter-spacing: 0.02em;
                    text-transform: uppercase;
                    line-height: 1.2;
                ">Flexible</div>
            `;

            // Right column - fill completely with artistic typography
            const rightCol1 = document.createElement('div');
            rightCol1.style.cssText = `
                grid-column: 10 / span 1;
                grid-row: 1 / span 2;
                background: #2a2a2a;
                border: 1px solid #404040;
                border-radius: 0;
                box-shadow: 0 4px 16px rgba(0, 0, 0, 0.2);
                animation: breathing 3.6s ease-in-out infinite;
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                padding: 20px;
                font-family: 'Space Grotesk', sans-serif;
            `;
            rightCol1.innerHTML = `
                <div style="font-size: 28px; margin-bottom: 12px; color: #4a90e2;">🎨</div>
                <div style="
                    font-family: 'Space Grotesk', sans-serif;
                    font-weight: 600;
                    font-size: 14px;
                    color: white;
                    text-align: center;
                    letter-spacing: 0.1em;
                    text-transform: uppercase;
                    line-height: 1.2;
                ">Animated</div>
            `;

            const rightCol2 = document.createElement('div');
            rightCol2.style.cssText = `
                grid-column: 10 / span 1;
                grid-row: 3 / span 2;
                background: #2a2a2a;
                border: 1px solid #404040;
                border-radius: 0;
                box-shadow: 0 4px 16px rgba(0, 0, 0, 0.2);
                animation: breathing 3.7s ease-in-out infinite;
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                padding: 20px;
                font-family: 'Space Grotesk', sans-serif;
            `;
            rightCol2.innerHTML = `
                <div style="font-size: 24px; margin-bottom: 10px; color: #4a90e2;">🚀</div>
                <div style="
                    font-family: 'Space Grotesk', sans-serif;
                    font-weight: 500;
                    font-size: 13px;
                    color: white;
                    text-align: center;
                    letter-spacing: 0.08em;
                    text-transform: uppercase;
                    line-height: 1.2;
                ">Modern</div>
            `;

            const rightCol3 = document.createElement('div');
            rightCol3.style.cssText = `
                grid-column: 10 / span 1;
                grid-row: 5 / span 2;
                background: #2a2a2a;
                border: 1px solid #404040;
                border-radius: 0;
                box-shadow: 0 4px 16px rgba(0, 0, 0, 0.2);
                animation: breathing 3.8s ease-in-out infinite;
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                padding: 20px;
                font-family: 'Space Grotesk', sans-serif;
            `;
            rightCol3.innerHTML = `
                <div style="font-size: 22px; margin-bottom: 8px; color: #4a90e2;">💫</div>
                <div style="
                    font-family: 'Space Grotesk', sans-serif;
                    font-weight: 400;
                    font-size: 12px;
                    color: white;
                    text-align: center;
                    letter-spacing: 0.06em;
                    text-transform: uppercase;
                    line-height: 1.2;
                ">Smooth</div>
            `;

            const rightCol4 = document.createElement('div');
            rightCol4.style.cssText = `
                grid-column: 10 / span 1;
                grid-row: 7 / span 2;
                background: #2a2a2a;
                border: 1px solid #404040;
                border-radius: 0;
                box-shadow: 0 4px 16px rgba(0, 0, 0, 0.2);
                animation: breathing 3.9s ease-in-out infinite;
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                padding: 20px;
                font-family: 'Space Grotesk', sans-serif;
            `;
            rightCol4.innerHTML = `
                <div style="font-size: 20px; margin-bottom: 6px; color: #4a90e2;">🎪</div>
                <div style="
                    font-family: 'Space Grotesk', sans-serif;
                    font-weight: 300;
                    font-size: 11px;
                    color: white;
                    text-align: center;
                    letter-spacing: 0.04em;
                    text-transform: uppercase;
                    line-height: 1.2;
                ">Dynamic</div>
            `;

            const rightCol5 = document.createElement('div');
            rightCol5.style.cssText = `
                grid-column: 10 / span 1;
                grid-row: 9 / span 2;
                background: #2a2a2a;
                border: 1px solid #404040;
                border-radius: 0;
                box-shadow: 0 4px 16px rgba(0, 0, 0, 0.2);
                animation: breathing 4.0s ease-in-out infinite;
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                padding: 20px;
                font-family: 'Space Grotesk', sans-serif;
            `;
            rightCol5.innerHTML = `
                <div style="font-size: 18px; margin-bottom: 4px; color: #4a90e2;">🌈</div>
                <div style="
                    font-family: 'Space Grotesk', sans-serif;
                    font-weight: 200;
                    font-size: 10px;
                    color: white;
                    text-align: center;
                    letter-spacing: 0.02em;
                    text-transform: uppercase;
                    line-height: 1.2;
                ">Professional</div>
            `;

            // Top and bottom fillers - complete the rectangle
            const topFiller1 = document.createElement('div');
            topFiller1.style.cssText = `
                grid-column: 2 / span 1;
                grid-row: 1 / span 1;
                background: #2a2a2a;
                border: 1px solid #404040;
                border-radius: 0;
                box-shadow: 0 4px 16px rgba(0, 0, 0, 0.2);
                animation: breathing 4.1s ease-in-out infinite;
            `;

            const topFiller2 = document.createElement('div');
            topFiller2.style.cssText = `
                grid-column: 9 / span 1;
                grid-row: 1 / span 1;
                background: #2a2a2a;
                border: 1px solid #404040;
                border-radius: 0;
                box-shadow: 0 4px 16px rgba(0, 0, 0, 0.2);
                animation: breathing 4.2s ease-in-out infinite;
            `;

            const bottomFiller1 = document.createElement('div');
            bottomFiller1.style.cssText = `
                grid-column: 2 / span 1;
                grid-row: 10 / span 1;
                background: #2a2a2a;
                border: 1px solid #404040;
                border-radius: 0;
                box-shadow: 0 4px 16px rgba(0, 0, 0, 0.2);
                animation: breathing 4.3s ease-in-out infinite;
            `;

            const bottomFiller2 = document.createElement('div');
            bottomFiller2.style.cssText = `
                grid-column: 9 / span 1;
                grid-row: 10 / span 1;
                background: #2a2a2a;
                border: 1px solid #404040;
                border-radius: 0;
                box-shadow: 0 4px 16px rgba(0, 0, 0, 0.2);
                animation: breathing 4.4s ease-in-out infinite;
            `;

            // Append all items to grid container
            gridContainer.appendChild(titleItem);
            gridContainer.appendChild(descItem);
            gridContainer.appendChild(buttonsItem);
            gridContainer.appendChild(leftCol1);
            gridContainer.appendChild(leftCol2);
            gridContainer.appendChild(leftCol3);
            gridContainer.appendChild(leftCol4);
            gridContainer.appendChild(leftCol5);
            gridContainer.appendChild(rightCol1);
            gridContainer.appendChild(rightCol2);
            gridContainer.appendChild(rightCol3);
            gridContainer.appendChild(rightCol4);
            gridContainer.appendChild(rightCol5);
            gridContainer.appendChild(topFiller1);
            gridContainer.appendChild(topFiller2);
            gridContainer.appendChild(bottomFiller1);
            gridContainer.appendChild(bottomFiller2);

            heroMasonry.appendChild(gridContainer);
            console.log('Hero masonry initialized successfully!');
        }, 1000);
    }
}

// Configuration demo functionality
function setupConfigDemo() {
    const configSections = document.querySelectorAll('.config-section');
    const configNavLinks = document.querySelectorAll('.config-nav-link');
    
    configNavLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            
            // Remove active class from all sections and links
            configSections.forEach(section => section.classList.remove('active'));
            configNavLinks.forEach(navLink => navLink.classList.remove('active'));
            
            // Add active class to clicked link
            link.classList.add('active');
            
            // Show corresponding section
            const targetId = link.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            if (targetSection) {
                targetSection.classList.add('active');
            }
        });
    });
}

// Utility functions
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

function throttle(func, limit) {
    let inThrottle;
    return function() {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}

// Export functions for use in other scripts
window.HyMasonryWebsite = {
    setupConfigDemo,
    debounce,
    throttle
}; 