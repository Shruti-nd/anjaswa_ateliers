/**
 * ============================================================================
 * ANJASWA ATELIERS / BRAND CONFIGURATION BLOCK
 * ============================================================================
 * Edit copy, links, launch date, WhatsApp info, and categories below.
 * ============================================================================
 */
const SITE_CONFIG = {
  // Brand Basics
  brandName: "Anjaswa Ateliers",
  logoUrl: "./assets/logo.png",
  tagline: "Furniture that makes a home.",

  // Hero Copy
  eyebrowText: "LAUNCHING SOON",
  headlineText: "Something beautiful is coming home.",
  supportingText: "Our new collection of furniture is on its way. For enquiries, chat with us on WhatsApp.",

  // WhatsApp Contact Configuration
  whatsApp: {
    phoneNumber: "917976011838", // Phone number with country code (no + or spaces)
    prefilledMessage: "Hi Anjaswa Ateliers, I would like to know more about your furniture.",
    buttonText: "Chat on WhatsApp"
  },

  // Minimal Launch Countdown
  countdown: {
    enabled: true,                       // Set to false to hide the countdown completely
    targetDate: "2026-10-19T00:00:00",   // Target date in YYYY-MM-DDTHH:MM:SS format
    labels: {
      days: "Days",
      hours: "Hours",
      minutes: "Mins",
      seconds: "Secs"
    }
  },

  // Social & Footer Links
  instagramUrl: "https://instagram.com/anjaswaateliers",
  copyrightText: "© 2026 Anjaswa Ateliers. All rights reserved.",

  // Category Marquee Showcase
  // Row 1 Categories (Scrolls Left)
  categoriesRow1: [
    { name: "Sofas & Couches", image: "./assets/categories/sofas.jpg" },
    { name: "Beds & Sanctuary", image: "./assets/categories/beds.jpg" },
    { name: "Dining Tables", image: "./assets/categories/dining.jpg" },
    { name: "Wardrobes & Storage", image: "./assets/categories/wardrobes.jpg" }
  ],

  // Row 2 Categories (Scrolls Right)
  categoriesRow2: [
    { name: "Study & Office", image: "./assets/categories/study-office.jpg" },
    { name: "Decor & Objects", image: "./assets/categories/decor.jpg" },
    { name: "Outdoor & Patio", image: "./assets/categories/outdoor.jpg" },
    { name: "Lounge Chairs", image: "./assets/categories/sofas.jpg" }
  ]
};

/* ============================================================================
   APPLICATION CORE LOGIC
   ============================================================================ */

document.addEventListener('DOMContentLoaded', () => {
  initBrandContent();
  initWhatsAppLinks();
  initCountdown();
  initMarqueeShowcase();
});

/**
 * Hydrates HTML elements with configured copy and handles seamless logo transparency
 */
function initBrandContent() {
  const brandLogo = document.getElementById('brand-logo');
  const eyebrow = document.getElementById('eyebrow');
  const headline = document.getElementById('headline');
  const supportingText = document.getElementById('supporting-text');
  const ctaButtonText = document.getElementById('cta-button-text');
  const instagramLink = document.getElementById('instagram-link');
  const copyright = document.getElementById('copyright');

  if (brandLogo) {
    brandLogo.src = SITE_CONFIG.logoUrl;
    brandLogo.alt = `${SITE_CONFIG.brandName}`;

    // Automatically process logo background transparency on load
    brandLogo.onload = function () {
      if (brandLogo.dataset.processed) return;
      brandLogo.dataset.processed = "true";
      try {
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');
        canvas.width = brandLogo.naturalWidth;
        canvas.height = brandLogo.naturalHeight;
        ctx.drawImage(brandLogo, 0, 0);
        const imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);
        const data = imgData.data;
        for (let i = 0; i < data.length; i += 4) {
          if (data[i] > 225 && data[i + 1] > 225 && data[i + 2] > 225) {
            data[i + 3] = 0; // Alpha transparent
          }
        }
        ctx.putImageData(imgData, 0, 0);
        brandLogo.src = canvas.toDataURL();
      } catch (e) {
        // Fallback to CSS mix-blend-mode if canvas security blocks cross-origin
      }
    };
  }

  if (eyebrow) eyebrow.textContent = SITE_CONFIG.eyebrowText;
  if (headline) headline.textContent = SITE_CONFIG.headlineText;
  if (supportingText) supportingText.textContent = SITE_CONFIG.supportingText;
  if (ctaButtonText) ctaButtonText.textContent = SITE_CONFIG.whatsApp.buttonText;

  if (instagramLink && SITE_CONFIG.instagramUrl) {
    instagramLink.href = SITE_CONFIG.instagramUrl;
    instagramLink.setAttribute('aria-label', `Visit ${SITE_CONFIG.brandName} on Instagram`);
  }

  if (copyright) {
    copyright.textContent = SITE_CONFIG.copyrightText;
  }

  // Set Page Title
  document.title = `${SITE_CONFIG.brandName} — ${SITE_CONFIG.headlineText}`;
}

/**
 * Formats WhatsApp link with phone number and URL-encoded message
 */
function initWhatsAppLinks() {
  const phone = SITE_CONFIG.whatsApp.phoneNumber.replace(/[^0-9]/g, '');
  const encodedMsg = encodeURIComponent(SITE_CONFIG.whatsApp.prefilledMessage);
  const waUrl = `https://wa.me/${phone}?text=${encodedMsg}`;

  const mainCtaBtn = document.getElementById('main-cta-btn');
  const floatingBtn = document.getElementById('floating-whatsapp-btn');

  if (mainCtaBtn) mainCtaBtn.href = waUrl;
  if (floatingBtn) floatingBtn.href = waUrl;
}

/**
 * Initializes countdown timer or hides the section if disabled
 */
function initCountdown() {
  const countdownSection = document.getElementById('countdown-section');

  if (!SITE_CONFIG.countdown || !SITE_CONFIG.countdown.enabled) {
    if (countdownSection) countdownSection.style.display = 'none';
    return;
  }

  const targetTime = new Date(SITE_CONFIG.countdown.targetDate).getTime();

  if (isNaN(targetTime)) {
    if (countdownSection) countdownSection.style.display = 'none';
    return;
  }

  if (SITE_CONFIG.countdown.labels) {
    const lDays = document.getElementById('label-days');
    const lHours = document.getElementById('label-hours');
    const lMins = document.getElementById('label-mins');
    const lSecs = document.getElementById('label-secs');

    if (lDays) lDays.textContent = SITE_CONFIG.countdown.labels.days;
    if (lHours) lHours.textContent = SITE_CONFIG.countdown.labels.hours;
    if (lMins) lMins.textContent = SITE_CONFIG.countdown.labels.minutes;
    if (lSecs) lSecs.textContent = SITE_CONFIG.countdown.labels.seconds;
  }

  function updateTimer() {
    const now = new Date().getTime();
    const distance = targetTime - now;

    if (distance < 0) {
      document.getElementById('cd-days').textContent = '00';
      document.getElementById('cd-hours').textContent = '00';
      document.getElementById('cd-mins').textContent = '00';
      document.getElementById('cd-secs').textContent = '00';
      return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById('cd-days').textContent = String(days).padStart(2, '0');
    document.getElementById('cd-hours').textContent = String(hours).padStart(2, '0');
    document.getElementById('cd-mins').textContent = String(minutes).padStart(2, '0');
    document.getElementById('cd-secs').textContent = String(seconds).padStart(2, '0');
  }

  updateTimer();
  setInterval(updateTimer, 1000);
}

/**
 * Builds marquee category tracks with duplicated elements for seamless infinite scrolling
 */
function initMarqueeShowcase() {
  const track1 = document.getElementById('marquee-track-1');
  const track2 = document.getElementById('marquee-track-2');

  if (track1 && SITE_CONFIG.categoriesRow1) {
    populateTrack(track1, SITE_CONFIG.categoriesRow1);
  }

  if (track2 && SITE_CONFIG.categoriesRow2) {
    populateTrack(track2, SITE_CONFIG.categoriesRow2);
  }
}

/**
 * Populates a marquee track with cards duplicated for 100% seamless loop
 */
function populateTrack(container, items) {
  container.innerHTML = '';
  // Duplicate items 4x to ensure smooth continuous filling across all screen widths
  const duplicatedList = [...items, ...items, ...items, ...items];

  duplicatedList.forEach(item => {
    const card = document.createElement('div');
    card.className = 'category-card';

    const img = document.createElement('img');
    img.src = item.image;
    img.alt = item.name;
    img.loading = 'lazy';

    img.onerror = function () {
      this.onerror = null;
      this.style.opacity = '0';
      card.style.background = 'linear-gradient(135deg, var(--sand) 0%, var(--cream) 100%)';
    };

    const label = document.createElement('span');
    label.className = 'category-label';
    label.textContent = item.name;

    card.appendChild(img);
    card.appendChild(label);
    container.appendChild(card);
  });
}
