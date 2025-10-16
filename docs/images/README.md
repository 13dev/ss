# Silent Souls - Image Assets

## Logo Files

- `logo.jpg` - Main logo used in the profile avatar (120x120px display)
- `silent-souls-logo.jpg` - Full resolution logo for press/downloads
- `silent-souls-og.jpg` - Open Graph image for social media sharing

## Usage

### In Templates
```hugo
<!-- Profile avatar -->
<img src="/images/logo.jpg" alt="Silent Souls" />

<!-- Open Graph meta -->
<meta property="og:image" content="{{ .Site.BaseURL }}images/silent-souls-og.jpg">
```

### File Specifications

- **Profile Logo**: 120x120px (automatically scaled)
- **Open Graph**: 1200x630px recommended
- **Format**: JPG/PNG
- **Optimization**: Compressed for web

## File Structure

```
static/
├── images/
│   ├── logo.jpg              # Main profile logo
│   ├── silent-souls-logo.jpg # Full resolution
│   └── silent-souls-og.jpg   # Social media
└── favicon.ico               # Site favicon
```

All image files are optimized for web delivery and fast loading.