 // ===========================
// Nest — Shared Script
// ===========================

document.addEventListener('DOMContentLoaded', () => {
  initNavToggle();
  initStatCounters();
  initSearch();
  initContactForm();
  initNewsletterForm();
});

/* Mobile nav toggle */
function initNavToggle() {
  const toggle = document.querySelector('.nav-toggle');
  const nav = document.querySelector('.main-nav');
  if (!toggle || !nav) return;

  toggle.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('open');
    toggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
  });
}

/* Animate the "0+" stats every time the stats bar scrolls into view */
function initStatCounters() {
  const statEls = document.querySelectorAll('.stat-item strong[data-target]');
  if (!statEls.length) return;

  const animate = (el) => {
    const target = parseInt(el.dataset.target, 10) || 0;
    const suffix = el.dataset.suffix || '';
    const duration = 1200;
    const start = performance.now();
    const runId = ++el.dataset.runId || (el.dataset.runId = 1);

    function step(now) {
      // Bail out if a newer animation started on this element (e.g. re-entered viewport fast)
      if (String(el.dataset.runId) !== String(runId)) return;
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3); // ease-out cubic
      const value = Math.floor(eased * target);
      el.textContent = value.toLocaleString() + suffix;
      if (progress < 1) requestAnimationFrame(step);
    }
    requestAnimationFrame(step);
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        animate(entry.target);
      } else {
        // Reset to 0 so it's ready to animate again next time it enters view
        entry.target.dataset.runId = (parseInt(entry.target.dataset.runId, 10) || 0) + 1;
        entry.target.textContent = '0' + (entry.target.dataset.suffix || '');
      }
    });
  }, { threshold: 0.4 });

  statEls.forEach((el) => observer.observe(el));
}

/* "Drop Us a Line" contact form — client-side validation + fake submit */
function initContactForm() {
  const form = document.querySelector('.contact-form');
  if (!form) return;

  const status = form.querySelector('.form-status');

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = form.querySelector('#name').value.trim();
    const email = form.querySelector('#email').value.trim();
    const message = form.querySelector('#message').value.trim();
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!name || !email || !message) {
      showStatus(status, 'Please fill in your name, email, and message.', 'error');
      return;
    }
    if (!emailPattern.test(email)) {
      showStatus(status, 'Please enter a valid email address.', 'error');
      return;
    }
 
    showStatus(status, 'Thanks! Your message has been sent — we will reply within 24 hours.', 'success');
    form.reset();
  });
}

function showStatus(el, message, type) {
  if (!el) return;
  el.textContent = message;
  el.className = 'form-status ' + type;
}

/* Newsletter signup on the promo strip */
function initNewsletterForm() {
  const form = document.querySelector('.newsletter-form');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const input = form.querySelector('input');
    const email = input.value.trim();
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email)) {
      input.style.borderColor = '#c0392b';
      return;
    }
    input.style.borderColor = '';
    input.value = '';
    input.placeholder = 'Subscribed! Welcome to Nest 🎉';
  });
}/* ---------------------------------------------------
   Sample product data — swap this for a real API/DB
   later; the search logic below doesn't need to change,
   just where PRODUCTS comes from.
--------------------------------------------------- */
const PRODUCTS = [
  { id: 1, name: 'Organic Bananas', category: 'Fruits', price: 12000, image: 'https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?q=80&w=100&auto=format&fit=crop' },
  { id: 2, name: 'Fresh Strawberries', category: 'Fruits', price: 28000, image: 'https://images.unsplash.com/photo-1464965911861-746a04b4bca6?q=80&w=100&auto=format&fit=crop' },
  { id: 3, name: 'Avocado (pack of 2)', category: 'Fruits', price: 22000, image: 'https://images.unsplash.com/photo-1523049673857-eb18f1d7b578?q=80&w=100&auto=format&fit=crop' },
  { id: 4, name: 'Red Bell Peppers', category: 'Vegetables', price: 15000, image: 'https://images.unsplash.com/photo-1563565375-f3fdfdbefa83?q=80&w=100&auto=format&fit=crop' },
  { id: 5, name: 'Baby Spinach', category: 'Vegetables', price: 9000, image: 'https://images.unsplash.com/photo-1576045057995-568f588f82fb?q=80&w=100&auto=format&fit=crop' },
  { id: 6, name: 'Broccoli Head', category: 'Vegetables', price: 11000, image: 'https://images.unsplash.com/photo-1459411621453-7b03977f4bfc?q=80&w=100&auto=format&fit=crop' },
  { id: 7, name: 'Whole Milk 1L', category: 'Dairy', price: 14000, image: 'https://images.unsplash.com/photo-1550583724-b2692b85b150?q=80&w=100&auto=format&fit=crop' },
  { id: 8, name: 'Free-Range Eggs (12)', category: 'Dairy', price: 26000, image: 'https://images.unsplash.com/photo-1582722872445-44dc5f7e3c8f?q=80&w=100&auto=format&fit=crop' },
  { id: 9, name: 'Greek Yogurt 500g', category: 'Dairy', price: 19000, image: 'https://images.unsplash.com/photo-1571212515416-fef01fc43637?q=80&w=100&auto=format&fit=crop' },
  { id: 10, name: 'Sourdough Bread', category: 'Bakery', price: 21000, image: 'https://images.unsplash.com/photo-1585478259715-4d3a5f3c5f2f?q=80&w=100&auto=format&fit=crop' },
  { id: 11, name: 'Honey Oat Granola', category: 'Bakery', price: 24000, image: 'https://images.unsplash.com/photo-1517686748843-bb360cd11e4b?q=80&w=100&auto=format&fit=crop' },
  { id: 12, name: 'Grass-Fed Beef Mince 500g', category: 'Meat', price: 48000, image: 'https://images.unsplash.com/photo-1602470520998-f4a52199a3d6?q=80&w=100&auto=format&fit=crop' },
  { id: 13, name: 'Salmon Fillet 300g', category: 'Meat & Fish', price: 55000, image: 'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?q=80&w=100&auto=format&fit=crop' },
  { id: 14, name: 'Extra Virgin Olive Oil 500ml', category: 'Pantry', price: 39000, image: 'https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?q=80&w=100&auto=format&fit=crop' },
  { id: 15, name: 'Basmati Rice 5kg', category: 'Pantry', price: 62000, image: 'https://images.unsplash.com/photo-1586201375761-83865001e31c?q=80&w=100&auto=format&fit=crop' },
];

function formatSom(amount) {
  return amount.toLocaleString('en-US') + " so'm";
}

/* Live search bar — filters PRODUCTS as the user types and
   shows a dropdown of matches (name or category). */
function initSearch() {
  const form = document.querySelector('.search-bar');
  if (!form) return;

  const input = form.querySelector('input');
  const button = form.querySelector('button');
  const results = document.getElementById('searchResults');
  if (!results) return;

  let activeIndex = -1;
  let currentMatches = [];
  let debounceTimer = null;

  const search = (query) => {
    const q = query.trim().toLowerCase();
    if (!q) return [];
    return PRODUCTS.filter(
      (p) => p.name.toLowerCase().includes(q) || p.category.toLowerCase().includes(q)
    ).slice(0, 8);
  };

  const render = (query) => {
    const q = query.trim();
    if (!q) {
      results.classList.remove('open');
      results.innerHTML = '';
      return;
    }

    currentMatches = search(q);
    activeIndex = -1;
    if (!currentMatches.length) {
      results.innerHTML = <div class="search-empty">No products found for "${escapeHtml(q)}"</div>;
      results.classList.add('open');
      return;
    }

    results.innerHTML = currentMatches
      .map(
        (p, i) => 
        <a class="search-result-item" href="#" data-index="${i}" data-id="${p.id}">
          <img src="${p.image}" alt="${escapeHtml(p.name)}" />
          <span class="search-result-text">
            <span class="search-result-name">${highlightMatch(p.name, q)}</span>
            <span class="search-result-meta">${escapeHtml(p.category)} · ${formatSom(p.price)}</span>
          </span>
        </a>
      )
      .join('');
    results.classList.add('open');
  };

  const selectProduct = (product) => {
    input.value = product.name;
    results.classList.remove('open');
    // Placeholder: once shop.html exists, this can navigate there,
    // e.g. window.location.href = shop.html?product=${product.id};
    console.log('Selected product:', product);
  };

  input.addEventListener('input', () => {
    clearTimeout(debounceTimer);
    debounceTimer = setTimeout(() => render(input.value), 150);
  });

  input.addEventListener('focus', () => {
    if (input.value.trim()) render(input.value);
  });

  input.addEventListener('keydown', (e) => {
    const items = results.querySelectorAll('.search-result-item');
    if (e.key === 'ArrowDown' && items.length) {
      e.preventDefault();
      activeIndex = (activeIndex + 1) % items.length;
      updateActive(items);
    } else if (e.key === 'ArrowUp' && items.length) {
      e.preventDefault();
      activeIndex = (activeIndex - 1 + items.length) % items.length;
      updateActive(items);
    } else if (e.key === 'Enter') {
      e.preventDefault();
      if (activeIndex >= 0 && currentMatches[activeIndex]) {
        selectProduct(currentMatches[activeIndex]);
      } else if (currentMatches[0]) {
        selectProduct(currentMatches[0]);
      }
    } else if (e.key === 'Escape') {
      results.classList.remove('open');
    }
  });

  function updateActive(items) {
    items.forEach((item, i) => item.classList.toggle('active', i === activeIndex));
    if (items[activeIndex]) items[activeIndex].scrollIntoView({ block: 'nearest' });
  }

  results.addEventListener('click', (e) => {
    const item = e.target.closest('.search-result-item');
    if (!item) return;
    e.preventDefault();
    const product = currentMatches[parseInt(item.dataset.index, 10)];
    if (product) selectProduct(product);
  });

  button.addEventListener('click', (e) => {
    e.preventDefault();
    if (currentMatches[0]) selectProduct(currentMatches[0]);
  });

  document.addEventListener('click', (e) => {
    if (!form.contains(e.target)) results.classList.remove('open');
  });
}

function escapeHtml(str) {
  return str.replace(/[&<>"']/g, (c) => ({
    '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;',
  }[c]));
}

function highlightMatch(text, query) {
  const escaped = escapeHtml(text);
  const idx = escaped.toLowerCase().indexOf(query.toLowerCase());
  if (idx === -1) return escaped;
  return (
    escaped.slice(0, idx) +
    '<mark>' + escaped.slice(idx, idx + query.length) + '</mark>' +
    escaped.slice(idx + query.length)
  );
}