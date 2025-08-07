# HY Live Masonry Website

This is the official website for HY Live Masonry, featuring comprehensive documentation, interactive examples, and configuration demos.

## Features

- **Interactive Documentation**: Live examples with real-time configuration controls
- **Comprehensive API Reference**: Complete method and event documentation
- **Configuration Guide**: Detailed configuration options with examples
- **Responsive Design**: Optimized for all device sizes
- **Modern UI**: Black/white/grey glass gradient theme
- **Performance Optimized**: Fast loading and smooth interactions

## Structure

```
website/
├── index.html              # Main website page
├── styles/
│   ├── main.css           # Main styles and layout
│   ├── components.css     # Component-specific styles
│   └── docs.css          # Documentation styles
├── scripts/
│   ├── main.js           # Main website functionality
│   ├── config-demo.js    # Configuration demo controls
│   └── examples.js       # Example interactions
└── docs/
    └── configuration.md   # Configuration documentation
```

## Getting Started

### Prerequisites

- Modern web browser with ES6+ support
- Local web server (for development)

### Installation

1. Clone the repository:
```bash
git clone https://github.com/hy-masonry/hy-masonry.git
cd hy-masonry
```

2. Build the library:
```bash
npm install
npm run build
```

3. Serve the website:
```bash
# Using Python
python -m http.server 8000

# Using Node.js
npx serve website

# Using PHP
php -S localhost:8000 -t website
```

4. Open your browser and navigate to `http://localhost:8000`

## Development

### Adding New Examples

1. Add the example HTML to `index.html` in the examples section
2. Create the example logic in `scripts/examples.js`
3. Add any custom styles to `styles/components.css`

### Adding New Configuration Options

1. Update the configuration interface in `src/types/index.ts`
2. Add the configuration option to the demo controls in `scripts/config-demo.js`
3. Update the documentation in `docs/configuration.md`

### Styling

The website uses a custom CSS architecture:

- **CSS Variables**: Defined in `:root` for consistent theming
- **Glass Effects**: Backdrop filters and transparency for modern UI
- **Responsive Design**: Mobile-first approach with breakpoints
- **Animations**: Smooth transitions and micro-interactions

### Key CSS Classes

- `.glass`: Glass morphism effect
- `.fade-in-up`: Entrance animation
- `.btn`: Button styles
- `.config-section`: Configuration demo sections
- `.example-card`: Example containers

## Browser Support

- Chrome 80+
- Firefox 75+
- Safari 13+
- Edge 80+

## Performance

The website is optimized for performance:

- **Lazy Loading**: Images and heavy content load on demand
- **Intersection Observer**: Efficient scroll-based animations
- **CSS Transforms**: Hardware-accelerated animations
- **Minified Assets**: Compressed CSS and JavaScript
- **Efficient DOM**: Minimal reflows and repaints

## Accessibility

The website follows WCAG 2.1 guidelines:

- **Semantic HTML**: Proper heading structure and landmarks
- **Keyboard Navigation**: Full keyboard accessibility
- **Screen Reader Support**: ARIA labels and announcements
- **High Contrast**: Support for high contrast mode
- **Focus Management**: Proper focus indicators and management

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This website is part of the HY Live Masonry project and follows the same license terms.

## Support

For support and questions:

- **Issues**: [GitHub Issues](https://github.com/hy-masonry/hy-masonry/issues)
- **Documentation**: [Configuration Guide](docs/configuration.md)
- **Examples**: Interactive examples on the website

## Roadmap

- [ ] Interactive API playground
- [ ] Theme customization tool
- [ ] Performance benchmarking
- [ ] Advanced examples gallery
- [ ] Mobile app showcase
- [ ] Integration tutorials 