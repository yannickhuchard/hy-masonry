#!/usr/bin/env node

/**
 * HY Live Masonry Website Build Script
 * 
 * This script helps with building and serving the website for development.
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// Configuration
const config = {
  sourceDir: path.join(__dirname),
  distDir: path.join(__dirname, 'dist'),
  port: 8000,
  host: 'localhost'
};

// Colors for console output
const colors = {
  reset: '\x1b[0m',
  bright: '\x1b[1m',
  red: '\x1b[31m',
  green: '\x1b[32m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
  magenta: '\x1b[35m',
  cyan: '\x1b[36m'
};

// Utility functions
function log(message, color = 'reset') {
  console.log(`${colors[color]}${message}${colors.reset}`);
}

function error(message) {
  log(`ERROR: ${message}`, 'red');
  process.exit(1);
}

function success(message) {
  log(`SUCCESS: ${message}`, 'green');
}

function info(message) {
  log(`INFO: ${message}`, 'blue');
}

function warning(message) {
  log(`WARNING: ${message}`, 'yellow');
}

// Check if directory exists
function directoryExists(dir) {
  return fs.existsSync(dir);
}

// Create directory if it doesn't exist
function ensureDirectory(dir) {
  if (!directoryExists(dir)) {
    fs.mkdirSync(dir, { recursive: true });
    info(`Created directory: ${dir}`);
  }
}

// Copy file
function copyFile(source, destination) {
  try {
    fs.copyFileSync(source, destination);
    return true;
  } catch (err) {
    error(`Failed to copy ${source} to ${destination}: ${err.message}`);
    return false;
  }
}

// Copy directory recursively
function copyDirectory(source, destination) {
  if (!directoryExists(source)) {
    warning(`Source directory does not exist: ${source}`);
    return;
  }

  ensureDirectory(destination);

  const items = fs.readdirSync(source);
  
  for (const item of items) {
    const sourcePath = path.join(source, item);
    const destPath = path.join(destination, item);
    
    const stat = fs.statSync(sourcePath);
    
    if (stat.isDirectory()) {
      copyDirectory(sourcePath, destPath);
    } else {
      copyFile(sourcePath, destPath);
    }
  }
}

// Minify CSS (simple implementation)
function minifyCSS(css) {
  return css
    .replace(/\/\*[\s\S]*?\*\//g, '') // Remove comments
    .replace(/\s+/g, ' ') // Collapse whitespace
    .replace(/\s*([{}:;,])\s*/g, '$1') // Remove spaces around brackets, colons, semicolons, commas
    .replace(/;\}/g, '}') // Remove trailing semicolons
    .trim();
}

// Minify JavaScript (simple implementation)
function minifyJS(js) {
  return js
    .replace(/\/\*[\s\S]*?\*\//g, '') // Remove block comments
    .replace(/\/\/.*$/gm, '') // Remove line comments
    .replace(/\s+/g, ' ') // Collapse whitespace
    .replace(/\s*([{}:;,])\s*/g, '$1') // Remove spaces around brackets, colons, semicolons, commas
    .trim();
}

// Build function
function build() {
  info('Starting build process...');
  
  // Create dist directory
  ensureDirectory(config.distDir);
  
  // Copy static files
  const staticFiles = [
    'index.html',
    'README.md'
  ];
  
  for (const file of staticFiles) {
    const sourcePath = path.join(config.sourceDir, file);
    const destPath = path.join(config.distDir, file);
    
    if (directoryExists(sourcePath)) {
      copyFile(sourcePath, destPath);
    }
  }
  
  // Copy and minify CSS
  const cssDir = path.join(config.sourceDir, 'styles');
  const cssDestDir = path.join(config.distDir, 'styles');
  
  if (directoryExists(cssDir)) {
    ensureDirectory(cssDestDir);
    
    const cssFiles = fs.readdirSync(cssDir).filter(file => file.endsWith('.css'));
    
    for (const file of cssFiles) {
      const sourcePath = path.join(cssDir, file);
      const destPath = path.join(cssDestDir, file);
      
      try {
        const css = fs.readFileSync(sourcePath, 'utf8');
        const minified = minifyCSS(css);
        fs.writeFileSync(destPath, minified);
        info(`Minified CSS: ${file}`);
      } catch (err) {
        error(`Failed to process CSS file ${file}: ${err.message}`);
      }
    }
  }
  
  // Copy and minify JavaScript
  const jsDir = path.join(config.sourceDir, 'scripts');
  const jsDestDir = path.join(config.distDir, 'scripts');
  
  if (directoryExists(jsDir)) {
    ensureDirectory(jsDestDir);
    
    const jsFiles = fs.readdirSync(jsDir).filter(file => file.endsWith('.js'));
    
    for (const file of jsFiles) {
      const sourcePath = path.join(jsDir, file);
      const destPath = path.join(jsDestDir, file);
      
      try {
        const js = fs.readFileSync(sourcePath, 'utf8');
        const minified = minifyJS(js);
        fs.writeFileSync(destPath, minified);
        info(`Minified JavaScript: ${file}`);
      } catch (err) {
        error(`Failed to process JavaScript file ${file}: ${err.message}`);
      }
    }
  }
  
  // Copy docs directory
  const docsDir = path.join(config.sourceDir, 'docs');
  const docsDestDir = path.join(config.distDir, 'docs');
  
  if (directoryExists(docsDir)) {
    copyDirectory(docsDir, docsDestDir);
  }
  
  // Copy images directory
  const imagesDir = path.join(config.sourceDir, 'images');
  const imagesDestDir = path.join(config.distDir, 'images');
  
  if (directoryExists(imagesDir)) {
    copyDirectory(imagesDir, imagesDestDir);
    info('Copied images directory');
  } else {
    warning('Images directory not found.');
  }
  
  // Copy hy-masonry dist files from parent directory
  const parentDistDir = path.join(config.sourceDir, '..', 'dist');
  const distDestDir = path.join(config.distDir, 'dist');
  
  if (directoryExists(parentDistDir)) {
    ensureDirectory(distDestDir);
    
    const distFiles = fs.readdirSync(parentDistDir).filter(file => 
      file.startsWith('hy-masonry.') && (file.endsWith('.js') || file.endsWith('.css') || file.endsWith('.d.ts'))
    );
    
    for (const file of distFiles) {
      const sourcePath = path.join(parentDistDir, file);
      const destPath = path.join(distDestDir, file);
      copyFile(sourcePath, destPath);
      info(`Copied dist file: ${file}`);
    }
  } else {
    warning('Parent dist directory not found. Make sure to run npm run build in the parent directory first.');
  }
  
  success('Build completed successfully!');
  info(`Build output: ${config.distDir}`);
}

// Serve function for production (serves from dist)
function serve() {
  info('Starting production server...');
  
  try {
    // Check if http-server is available
    execSync('npx http-server --version', { stdio: 'ignore' });
    
    const command = `npx http-server ${config.distDir} -p ${config.port} -o`;
    info(`Running: ${command}`);
    
    execSync(command, { stdio: 'inherit' });
  } catch (err) {
    warning('http-server not found, trying alternative methods...');
    
    try {
      // Try Python
      execSync(`python -m http.server ${config.port}`, { 
        cwd: config.distDir, 
        stdio: 'inherit' 
      });
    } catch (err2) {
      error('No suitable server found. Please install http-server: npm install -g http-server');
    }
  }
}

// Serve function for development (serves from source)
function serveDev() {
  info('Starting development server...');
  
  try {
    // Check if http-server is available
    execSync('npx http-server --version', { stdio: 'ignore' });
    
    const command = `npx http-server ${config.sourceDir} -p ${config.port} -o`;
    info(`Running: ${command}`);
    
    execSync(command, { stdio: 'inherit' });
  } catch (err) {
    warning('http-server not found, trying alternative methods...');
    
    try {
      // Try Python
      execSync(`python -m http.server ${config.port}`, { 
        cwd: config.sourceDir, 
        stdio: 'inherit' 
      });
    } catch (err2) {
      error('No suitable server found. Please install http-server: npm install -g http-server');
    }
  }
}

// Clean function
function clean() {
  info('Cleaning build directory...');
  
  if (directoryExists(config.distDir)) {
    try {
      fs.rmSync(config.distDir, { recursive: true, force: true });
      success('Build directory cleaned successfully!');
    } catch (err) {
      error(`Failed to clean build directory: ${err.message}`);
    }
  } else {
    info('Build directory does not exist, nothing to clean.');
  }
}

// Watch function
function watch() {
  info('Starting watch mode...');
  info('Watching for changes in source files...');
  
  build();
  
  // Watch for changes
  const chokidar = require('chokidar');
  
  const watcher = chokidar.watch([
    path.join(config.sourceDir, '**/*.html'),
    path.join(config.sourceDir, '**/*.css'),
    path.join(config.sourceDir, '**/*.js'),
    path.join(config.sourceDir, '**/*.md')
  ], {
    ignored: /node_modules/,
    persistent: true
  });
  
  watcher.on('change', (filepath) => {
    info(`File changed: ${path.relative(config.sourceDir, filepath)}`);
    build();
  });
  
  info('Watch mode active. Press Ctrl+C to stop.');
}

// Main function
function main() {
  const command = process.argv[2];
  
  switch (command) {
    case 'build':
      build();
      break;
    case 'serve':
      serve();
      break;
    case 'serve-dev':
      serveDev();
      break;
    case 'clean':
      clean();
      break;
    case 'watch':
      watch();
      break;
    case 'dev':
      serveDev();
      break;
    default:
      log('HY Live Masonry Website Build Script', 'bright');
      log('');
      log('Usage:', 'bright');
      log('  node build.js <command>', 'cyan');
      log('');
      log('Commands:', 'bright');
      log('  build      Build the website for production', 'green');
      log('  serve      Serve the production build', 'green');
      log('  serve-dev  Serve the website for development', 'green');
      log('  clean      Clean the build directory', 'green');
      log('  watch      Watch for changes and rebuild', 'green');
      log('  dev        Serve for development (no build)', 'green');
      log('');
      log('Examples:', 'bright');
      log('  node build.js build', 'cyan');
      log('  node build.js dev', 'cyan');
      log('  node build.js watch', 'cyan');
      break;
  }
}

// Run if called directly
if (require.main === module) {
  main();
}

module.exports = {
  build,
  serve,
  serveDev,
  clean,
  watch,
  config
}; 