# Agent Build Instructions - My Digital Invoice Website

## Project Type
Static HTML/CSS/JS website - no build system required.

## Project Setup
```bash
# No dependencies to install - pure static website
# Simply open any HTML file in a browser

# For local development server (optional):
# Using Python
python -m http.server 8000

# Using Node.js (if npx available)
npx serve .

# Using PHP
php -S localhost:8000
```

## Testing Checklist
Since this is a static website, testing involves manual verification:

### Browser Testing
```bash
# Open in default browser (Windows)
start index.html

# Test responsive design using browser DevTools (F12)
# - Mobile: 375px (iPhone SE)
# - Tablet: 768px (iPad)
# - Desktop: 1920px
```

### Link Validation
- Check all internal navigation links
- Verify external links open correctly
- Test contact form submission
- Verify payment/CTA buttons work

### Performance Testing
- Use Chrome DevTools Lighthouse audit
- Check page load time (target: < 3 seconds)
- Verify no console errors

### SEO Validation
- Check meta titles and descriptions
- Verify Open Graph tags
- Validate robots.txt and sitemap.xml

## File Locations
| File | Purpose |
|------|---------|
| `index.html` | Homepage |
| `about.html` | About page |
| `features.html` | Features listing |
| `pricing.html` | Pricing plans |
| `contact.html` | Contact form |
| `faq.html` | Frequently asked questions |
| `how-it-works.html` | Product explanation |
| `privacy.html` | Privacy policy |
| `terms.html` | Terms of service |
| `css/styles.css` | Main stylesheet |
| `js/main.js` | Main JavaScript |
| `assets/` | Images and media |

## Key Learnings
- Website uses Google Tag Manager for analytics
- Mobile-first design approach
- Target audience: Pakistani businesses
- FBR/IRIS compliance is key selling point

## Quality Standards

### Before Marking Tasks Complete
- [ ] Changes render correctly on mobile (375px+)
- [ ] Changes render correctly on desktop (1200px+)
- [ ] No JavaScript console errors
- [ ] All links work correctly
- [ ] Page loads in < 3 seconds
- [ ] Changes maintain brand consistency

### Commit Guidelines
```bash
# Conventional commit format
git add <files>
git commit -m "feat(page): description of change"

# Examples:
# feat(homepage): improve hero CTA visibility
# fix(pricing): correct mobile layout issue
# style(global): optimize CSS for performance
# content(faq): add new FAQ about IRIS integration
```
