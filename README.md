# Silent Souls - Electronic Music Duo Presskit

A dark, mysterious Hugo static site for Silent Souls electronic music duo, featuring their presskit, music demos, and professional materials.

## Features

- **Dark Theme**: Modern, mysterious design with purple accents
- **Responsive Design**: Works on all devices and screen sizes
- **SoundCloud Integration**: Embedded music players for demos
- **Professional Presskit**: Complete media assets and technical riders
- **Modern Performance**: Optimized for speed and SEO
- **Animated Elements**: Subtle animations and interactive components

## Quick Start

### Prerequisites

- [Hugo Extended](https://gohugo.io/getting-started/installing/) (v0.104.0 or later)
- Node.js (optional, for package management)

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd presskitss
```

2. Install dependencies (optional):
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
# or
hugo server -D
```

4. Open your browser to `http://localhost:1313`

### Building for Production

```bash
npm run build
# or
hugo --minify
```

The built site will be in the `public/` directory.

## Site Structure

```
content/
├── _index.md          # Homepage content
├── about.md           # About page
├── music.md           # Music & demos page
├── press.md           # Press kit materials
└── contact.md         # Contact information

themes/silentsouls/
├── layouts/           # Hugo templates
├── static/           # CSS, JS, images
└── theme.toml        # Theme configuration

static/
├── images/           # Site images
├── press/           # Press kit downloads
└── favicon.ico      # Site favicon
```

## Customization

### Colors & Branding

Edit `themes/silentsouls/static/css/main.css` to modify:
- Color scheme (CSS variables at the top)
- Typography and fonts
- Layout and spacing
- Animations and effects

### Content

All content is in Markdown files in the `content/` directory:
- Update artist information in `about.md`
- Add music tracks and SoundCloud embeds in `music.md`
- Customize press materials in `press.md`
- Update contact information in `contact.md`

### SoundCloud Integration

In `music.md`, add tracks to the front matter:

```yaml
soundcloud_tracks:
  - title: "Track Name"
    url: "https://soundcloud.com/artist/track"
    description: "Track description"
```

### Images

Add images to:
- `static/images/` for general site images
- `static/press/` for press kit materials
- Update image references in content files

## Development Scripts

```bash
npm run dev        # Start development server
npm run build      # Build for production
npm run build:dev  # Build with drafts
npm run preview    # Preview production build
npm run clean      # Clean build artifacts
```

## Deployment

### Netlify
1. Connect your repository to Netlify
2. Set build command: `hugo --minify`
3. Set publish directory: `public`

### Vercel
1. Import your repository to Vercel
2. Set framework preset to "Hugo"
3. Override build command: `hugo --minify`

### GitHub Pages
1. Enable GitHub Pages in repository settings
2. Use GitHub Actions with Hugo workflow
3. Set source to GitHub Actions

### Custom Server
1. Run `npm run build`
2. Upload `public/` directory contents
3. Configure web server to serve static files

## SEO & Performance

The site includes:
- Semantic HTML structure
- Open Graph and Twitter meta tags
- Optimized images and assets
- Fast loading with minimal dependencies
- Mobile-first responsive design

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test locally with `npm run dev`
5. Submit a pull request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Support

For issues and questions:
- Open an issue on GitHub
- Contact: [your-email@domain.com]

---

Built with ❤️ and [Hugo](https://gohugo.io/)