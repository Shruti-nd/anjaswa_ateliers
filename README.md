# Maison Vera — Luxury Furniture Pre-Launch "Coming Soon" Page

A single-page, minimal, high-end "Coming Soon" website designed for a luxury furniture & interior studio. Built with plain **HTML5**, **CSS3**, and **Vanilla JavaScript**, requiring **zero build steps or dependencies**, ready to host anywhere instantly (Netlify, Vercel, GitHub Pages, or standard static web server).

---

## 📁 Project Structure

```
├── index.html                # Main semantic HTML structure
├── styles.css                # Custom design system, typography & CSS marquee animations
├── script.js                 # Central configuration block (SITE_CONFIG) & interactive logic
├── assets/
│   ├── logo.png              # Top-center studio logo (transparent PNG/SVG recommended)
│   └── categories/           # Category marquee showcase images (4:3 aspect ratio)
│       ├── sofas.jpg
│       ├── beds.jpg
│       ├── dining.jpg
│       ├── wardrobes.jpg
│       ├── study-office.jpg
│       ├── decor.jpg
│       └── outdoor.jpg
└── README.md                 # Configuration and customization documentation
```

---

## ⚙️ Configuration & Customization Guide

All editable copy, links, WhatsApp number, launch date, and categories are located in **one clearly commented block** at the top of [`script.js`](file:///c:/Users/itzya/OneDrive/Desktop/furniture%20new/script.js).

### 1. Central Configuration (`script.js`)

Open `script.js` and edit the `SITE_CONFIG` object:

```javascript
const SITE_CONFIG = {
  // Brand Basics
  brandName: "Maison Vera",
  logoUrl: "./assets/logo.png",
  tagline: "Furniture that makes a home.",

  // Hero Section Text
  eyebrowText: "LAUNCHING SOON",
  headlineText: "Something beautiful is coming home.",
  supportingText: "Our new collection of furniture is on its way. For enquiries, chat with us on WhatsApp.",

  // WhatsApp Configuration
  whatsApp: {
    phoneNumber: "917976011838", // Country code + number without '+' or spaces
    prefilledMessage: "Hi Maison Vera, I would like to know more about your furniture.",
    buttonText: "Chat on WhatsApp"
  },

  // Minimal Launch Countdown
  countdown: {
    enabled: true,                       // Set to false to hide countdown completely
    targetDate: "2026-10-19T00:00:00",   // Target date: YYYY-MM-DDTHH:MM:SS
    labels: {
      days: "Days",
      hours: "Hours",
      minutes: "Mins",
      seconds: "Secs"
    }
  },

  // Social & Copyright Links
  instagramUrl: "https://instagram.com/maisonvera.studio",
  copyrightText: "© 2026 Maison Vera. All rights reserved.",

  // Category Marquee Showcase Rows
  categoriesRow1: [
    { name: "Sofas & Couches", image: "./assets/categories/sofas.jpg" },
    { name: "Beds & Sanctuary", image: "./assets/categories/beds.jpg" },
    { name: "Dining Tables", image: "./assets/categories/dining.jpg" },
    { name: "Wardrobes & Storage", image: "./assets/categories/wardrobes.jpg" }
  ],
  categoriesRow2: [
    { name: "Study & Office", image: "./assets/categories/study-office.jpg" },
    { name: "Decor & Objects", image: "./assets/categories/decor.jpg" },
    { name: "Outdoor & Patio", image: "./assets/categories/outdoor.jpg" },
    { name: "Lounge Chairs", image: "./assets/categories/sofas.jpg" }
  ]
};
```

---

## 🖼️ Swapping Assets

### Logo Replacement
- Replace `assets/logo.png` with your real logo file.
- Recommended dimensions: **240px wide × 60px high** (PNG format with transparent background).
- If the image file fails to load or is deleted, the site automatically falls back to clean, uppercase serif text (`SITE_CONFIG.brandName`).

### Category Images
- Place new category images in `assets/categories/`.
- Recommended image resolution: **600px × 450px** (4:3 aspect ratio, WebP or JPEG format, compressed for web performance).
- Update the image path and label in `SITE_CONFIG.categoriesRow1` or `SITE_CONFIG.categoriesRow2`.

---

## ⏱️ Optional Countdown Timer

To enable or disable the launch countdown timer:
1. Set `countdown.enabled: true` or `false` in `SITE_CONFIG`.
2. Update `targetDate` with your official launch date string (e.g. `"2026-12-31T00:00:00"`).

---

## 📱 WhatsApp Integration

The site includes two prominent WhatsApp action points:
1. **Primary Hero Pill CTA**: Center stage below the supporting copy/countdown.
2. **Floating Quick Chat Button**: Fixed at the bottom-right corner with a gentle pulse animation.

Both buttons automatically append the URL-encoded prefilled message and link directly to `https://wa.me/[YOUR_PHONE_NUMBER]`.

---

## 🚀 Hosting Instructions

Since this website is built with pure static files (HTML, CSS, JS):
1. **Netlify**: Drag and drop the project folder directly into the Netlify Drop dashboard.
2. **Vercel**: Run `vercel` in the project terminal or import the GitHub repository.
3. **GitHub Pages**: Push the repository to GitHub and enable Pages in repository settings.

---

## ✨ Features Checklist

- [x] Single desktop viewport (no long scroll).
- [x] Dual infinite marquee category rows with CSS keyframes and hover-pause.
- [x] Pill-shaped WhatsApp CTA & floating bottom-right pulse button.
- [x] Optional minimalist launch countdown.
- [x] Responsive layout with touch support and high mobile usability.
- [x] Accessible HTML markup with ARIA tags and focus states.
- [x] Full `prefers-reduced-motion` compliance.
