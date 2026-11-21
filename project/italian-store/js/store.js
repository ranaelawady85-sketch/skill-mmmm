/**
 * SARTORIA BELLINI MILANO
 * Luxury Italian Sartorial Store - Interactive Core Controller
 */

// 1. Curated Product Catalog
const PRODUCTS = [
  {
    id: 'sb-01',
    name: 'Giacca Sartoriale "Milano"',
    arabicName: 'جاكيت ميلانو الصوفي الفاخر',
    category: 'tailoring',
    price: 1850,
    fabric: 'Super 160s Virgin Wool (Biella Mill)',
    origin: 'Milano, Italia',
    badge: 'Exclusive',
    image: 'https://images.unsplash.com/photo-1594938298603-c8148c4dae35?auto=format&fit=crop&w=900&q=80',
    description: 'جاكيت كلاسيكي مصمم يدوياً في مشاغل ميلانو من صوف بييلا عالي النقاء (Super 160s)، يتميز بكتف ناعم غير مبطن وقصة عصرية تتناغم مع حركة الجسد.',
    sizes: ['IT 46', 'IT 48', 'IT 50', 'IT 52', 'IT 54'],
    details: ['100% صوف بييلا البكر', 'أزرار عاج نباتي (Corozo) طبيعية', 'بطانة حريرية تنفسية ناعمة', 'خياطة يدوية عند الياقة والأطراف']
  },
  {
    id: 'sb-02',
    name: 'Cappotto in Doppio Cashmere',
    arabicName: 'معطف الكشمير المزدوج لورو بيانا',
    category: 'outerwear',
    price: 3400,
    fabric: '100% Pure Loro Piana Double-Faced Cashmere',
    origin: 'Piemonte, Italia',
    badge: 'Artisanal',
    image: 'https://images.unsplash.com/photo-1544022613-e87ca75a784a?auto=format&fit=crop&w=900&q=80',
    description: 'معطف شتوي فاخر محاك من كشمير لورو بيانا مزدوج الطبقات دون حواشي مرئية. دفء استثنائي وخفة وزن خيالية تليق بأرقى المناسبات.',
    sizes: ['IT 48', 'IT 50', 'IT 52', 'IT 54'],
    details: ['كشمير لورو بيانا خالص 100%', 'حياكة يدوية غير مرئية للطبقتين', 'قصة مستقيمة بطول الركبة', 'مقاوم للرياح ورذاذ المطر الخفيف']
  },
  {
    id: 'sb-03',
    name: 'Camicia in Seta Comasca',
    arabicName: 'قميص حرير كومو الإيطالي الملكي',
    category: 'shirts',
    price: 620,
    fabric: '100% Como Mulberry Silk',
    origin: 'Lago di Como, Italia',
    badge: 'New Season',
    image: 'https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?auto=format&fit=crop&w=900&q=80',
    description: 'قميص سهرة منسوج من أرقى أنواع حرير بحيرة كومو التاريخية بلون العاج الطبيعي، بأزرار صدف اللؤلؤ الاسترالي المقطوعة يدوياً.',
    sizes: ['38 / 15', '39 / 15.5', '40 / 16', '41 / 16.5', '42 / 17'],
    details: ['حرير كومو الخالص بنعومة فائقة', 'أزرار صدف اللؤلؤ (Mother of Pearl)', 'ياقة إيطالية مفتوحة (Cutaway Collar)', 'خياطة ميكرو دقيقة 22 غرزة للبوصة']
  },
  {
    id: 'sb-04',
    name: 'Abito Tre Pezzi "La Dolce Vita"',
    arabicName: 'بدلة ثلاث قطع مقلمة "دولتشي فيتا"',
    category: 'tailoring',
    price: 2950,
    fabric: 'Superfine Chalk Stripe Wool & Silk',
    origin: 'Napoli, Italia',
    badge: 'Heritage',
    image: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=900&q=80',
    description: 'طقم متكامل يتكون من سترة، فيست وصدرية، وبنطال بكسرات مزدوجة. مستوحى من أناقة السينما الإيطالية الكلاسيكية في الخمسينيات.',
    sizes: ['IT 48', 'IT 50', 'IT 52', 'IT 54'],
    details: ['كتف نابولي طبيعي (Spalla Camicia)', 'صدرية سداسية الأزرار مقصوصة يدوياً', 'بنطال بكسرات أمامية وحزام جانبي قابل للضبط', 'صناعة إيطالية يدوية بالكامل']
  },
  {
    id: 'sb-05',
    name: 'Mocassino Artigianale di Firenze',
    arabicName: 'حذاء لوفر فلورنسي من جلد العجل المعتق',
    category: 'footwear',
    price: 980,
    fabric: 'Full-Grain Tuscan Calfskin & Leather Sole',
    origin: 'Firenze, Italia',
    badge: 'Hand-Patinated',
    image: 'https://images.unsplash.com/photo-1614252235316-8c857d38b5f4?auto=format&fit=crop&w=900&q=80',
    description: 'حذاء كلاسيكي خفيف الوزن معالج بصبغات الشمع الطبيعي على الطريقة التوسكانية القديمة، نعل جلدي مخيط بطريقة بليك (Blake Stitch).',
    sizes: ['EU 40', 'EU 41', 'EU 42', 'EU 43', 'EU 44', 'EU 45'],
    details: ['جلد عجل توسكاني كامل الحبيبات', 'تعتيق يدوي بدرجات البني الداكن والعسلي', 'نعل جلد مع تطعيم مطاطي لمقاومة الانزلاق', 'راحة مطلقة بدون فترة تليين']
  },
  {
    id: 'sb-06',
    name: 'Pantaloni a Doppia Pince in Flanella',
    arabicName: 'بنطال فلانيل بكسرات مزدوجة',
    category: 'tailoring',
    price: 780,
    fabric: 'Vitale Barberis Canonico Wool Flannel',
    origin: 'Biella, Italia',
    badge: 'Bestseller',
    image: 'https://images.unsplash.com/photo-1479064555552-3ef4979f8908?auto=format&fit=crop&w=900&q=80',
    description: 'بنطال أنيق بخصر مرتفع وكسرتين عميقتين وأبازيم جانبية معدنية لضبط المقاس دون الحاجة لحزام جلد، ينسدل برقي فوري.',
    sizes: ['IT 46', 'IT 48', 'IT 50', 'IT 52', 'IT 54'],
    details: ['صوف فلانيل ناعم ودافئ 340 جم', 'أبازيم برونزية عتيقة لضبط الخصر', 'حافة سفلية مقلوبة 4.5 سم (Cuff)', 'جيوب جانبية مائلة مريحة']
  },
  {
    id: 'sb-07',
    name: 'Maglia Collo Alto Seta & Cashmere',
    arabicName: 'سترة ياقة عالية من الحرير والكشمير',
    category: 'shirts',
    price: 690,
    fabric: '70% Cashmere, 30% Mulberry Silk',
    origin: 'Umbria, Italia',
    badge: 'Essential',
    image: 'https://images.unsplash.com/photo-1617137984095-74e4e5e3613f?auto=format&fit=crop&w=900&q=80',
    description: 'سترة ذات ياقة عالية منسوجة في أومبريا بدرجة نقاء فائقة. تجمع بين ملمس الحرير اللامع الرقيق ودفء الكشمير المخملي.',
    sizes: ['S', 'M', 'L', 'XL'],
    details: ['مزيج حرير وكشمير فائق النعومة', 'حواف مطاطية مرنة لا تفقد قوامها', 'مثالية تحت الجاكيتات والبدل', 'صبغات طبيعية صديقة للبيئة']
  },
  {
    id: 'sb-08',
    name: 'Borsa Viaggio in Pelle Pieno Fiore',
    arabicName: 'حقيبة سفر نهاية الأسبوع من الجلد التوسكاني',
    category: 'accessories',
    price: 1550,
    fabric: 'Vegetable-Tanned Tuscan Vachetta Leather',
    origin: 'San Miniato, Italia',
    badge: 'Artisanal',
    image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=900&q=80',
    description: 'حقيبة دفل للسفر القصير مدبوغة بمستخلصات لحاء الشجر الطبيعي في توسكانا. تكتسب بريقاً ولوناً أغنى (Patina) مع مرور السنوات.',
    sizes: ['One Size (52 x 28 x 26 cm)'],
    details: ['دباغة نباتية خالصة بدون كيماويات', 'سحابات نحاسية ثقيلة مقاومة للصدأ', 'حزام كتف جلدي مبطن قابل للإزالة', 'قفل أمان إيطالي كلاسيكي مع مفتاح']
  }
];

// 2. Global Currency & Rates
const CURRENCIES = {
  EUR: { symbol: '€', rate: 1, label: 'يورو (EUR)' },
  USD: { symbol: '$', rate: 1.08, label: 'دولار أمريكي (USD)' },
  EGP: { symbol: 'ج.م ', rate: 53.5, label: 'جنيه مصري (EGP)' },
  GBP: { symbol: '£', rate: 0.85, label: 'جنيه إسترليني (GBP)' }
};

let currentCurrency = 'EUR';

// 3. Shopping Cart State
let cart = JSON.parse(localStorage.getItem('bellini_cart') || '[]');

// 4. Bespoke Customizer State
let bespokeState = {
  silhouette: { name: 'قصة نابولي غير المبطنة (Spalla Camicia)', price: 450 },
  fabric: { name: 'صوف لورو بيانا سوبر 160 (كحلي ملكي)', price: 1600 },
  lapel: { name: 'ياقة مدببة عريضة كلاسيكية (Peak Lapel 10cm)', price: 200 },
  buttons: { name: 'أزرار قرن الجاموس الإيطالي الطبيعي المطفي', price: 120 },
  monogram: 'SB'
};

// 5. Initialize Store Controller
document.addEventListener('DOMContentLoaded', () => {
  renderProducts('all');
  updateCartUI();
  setupFilterButtons();
  setupCurrencySelector();
  setupBespokeStudio();
  setupSearch();
  setupLookbookHotspots();
});

// Format Price Helper
function formatPrice(amountEUR) {
  const curr = CURRENCIES[currentCurrency];
  const converted = Math.round(amountEUR * curr.rate);
  return `${curr.symbol}${converted.toLocaleString()}`;
}

// Render Products Grid
function renderProducts(category = 'all', searchQuery = '') {
  const container = document.getElementById('products-grid');
  if (!container) return;

  let filtered = PRODUCTS;
  if (category !== 'all') {
    filtered = filtered.filter(p => p.category === category);
  }
  if (searchQuery.trim() !== '') {
    const q = searchQuery.toLowerCase().trim();
    filtered = filtered.filter(p => 
      p.name.toLowerCase().includes(q) || 
      p.arabicName.toLowerCase().includes(q) ||
      p.fabric.toLowerCase().includes(q) ||
      p.origin.toLowerCase().includes(q)
    );
  }

  if (filtered.length === 0) {
    container.innerHTML = `
      <div class="col-span-full py-20 text-center">
        <span class="material-symbols-outlined text-4xl text-[var(--c-stone)] mb-3">search_off</span>
        <h3 class="font-display text-2xl text-[var(--c-espresso)] mb-1">لم نجد قطعاً مطابقة لبحثك</h3>
        <p class="text-[var(--c-stone)] text-sm">جرب استخدام كلمات بحث أخرى مثل "صوف"، "حرير"، أو "معطف"</p>
      </div>
    `;
    return;
  }

  container.innerHTML = filtered.map(product => `
    <div class="product-card group flex flex-col bg-white border border-[var(--c-border)] p-4 transition-all duration-300 hover:border-[var(--c-siena)] hover:shadow-xl">
      <!-- Image with Badges -->
      <div class="product-card-img-wrapper aspect-[3/4] w-full mb-4 relative cursor-pointer" onclick="openQuickView('${product.id}')">
        <img src="${product.image}" alt="${product.name}" class="product-card-img w-full h-full object-cover object-top" loading="lazy" />
        
        <!-- Luxury Floating Badge -->
        <div class="absolute top-3 right-3 flex flex-col gap-1 z-10">
          <span class="badge-luxury badge-siena">${product.badge}</span>
        </div>

        <!-- Origin Tag -->
        <div class="absolute bottom-3 left-3 bg-white/90 backdrop-blur-sm px-2.5 py-1 text-[11px] font-medium tracking-wider text-[var(--c-espresso)] border border-[var(--c-border)]">
          📍 ${product.origin}
        </div>

        <!-- Hover Quick View Action Button -->
        <div class="absolute inset-x-3 bottom-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 flex gap-2">
          <button type="button" class="flex-1 bg-[var(--c-espresso)] text-[var(--c-travertine)] py-2 text-xs tracking-wider uppercase font-semibold hover:bg-[var(--c-siena)] transition-colors flex items-center justify-center gap-1.5 shadow-md">
            <span>نظرة سريعة وتفصيل</span>
          </button>
        </div>
      </div>

      <!-- Content -->
      <div class="flex-1 flex flex-col justify-between">
        <div>
          <span class="text-[11px] uppercase tracking-widest text-[var(--c-siena)] font-bold mb-1 block">${product.fabric}</span>
          <h3 class="font-display text-xl text-[var(--c-espresso)] font-semibold leading-snug hover:text-[var(--c-siena)] cursor-pointer transition-colors" onclick="openQuickView('${product.id}')">
            ${product.arabicName}
          </h3>
          <p class="font-logo text-xs text-[var(--c-stone)] tracking-wider mt-0.5 mb-2">${product.name}</p>
        </div>

        <div class="pt-3 border-t border-[var(--c-border)] flex items-center justify-between mt-2">
          <div>
            <span class="text-xs text-[var(--c-stone)] block">السعر</span>
            <span class="font-display text-xl font-bold text-[var(--c-espresso)]">${formatPrice(product.price)}</span>
          </div>
          <button onclick="quickAddToCart('${product.id}')" type="button" class="w-10 h-10 rounded-full border border-[var(--c-border)] flex items-center justify-center text-[var(--c-espresso)] hover:bg-[var(--c-siena)] hover:text-white hover:border-[var(--c-siena)] transition-all" title="إضافة للحقيبة">
            <span class="material-symbols-outlined text-[19px]">shopping_bag</span>
          </button>
        </div>
      </div>
    </div>
  `).join('');
}

// Filter Navigation Tabs
function setupFilterButtons() {
  const buttons = document.querySelectorAll('.filter-tab-btn');
  buttons.forEach(btn => {
    btn.addEventListener('click', () => {
      buttons.forEach(b => {
        b.classList.remove('bg-[var(--c-espresso)]', 'text-[var(--c-travertine)]');
        b.classList.add('bg-white', 'text-[var(--c-espresso)]');
      });
      btn.classList.remove('bg-white', 'text-[var(--c-espresso)]');
      btn.classList.add('bg-[var(--c-espresso)]', 'text-[var(--c-travertine)]');
      
      const category = btn.dataset.category || 'all';
      renderProducts(category);
    });
  });
}

// Currency Switcher
function setupCurrencySelector() {
  const selects = document.querySelectorAll('.currency-selector');
  selects.forEach(sel => {
    sel.value = currentCurrency;
    sel.addEventListener('change', (e) => {
      currentCurrency = e.target.value;
      selects.forEach(s => s.value = currentCurrency);
      renderProducts();
      updateCartUI();
      updateBespokeSummary();
      showToast(`تم تغيير العملة إلى: ${CURRENCIES[currentCurrency].label}`);
    });
  });
}

// Live Search
function setupSearch() {
  const searchInput = document.getElementById('store-search-input');
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      renderProducts('all', e.target.value);
    });
  }
}

// Quick View Modal
window.openQuickView = function(productId) {
  const product = PRODUCTS.find(p => p.id === productId);
  if (!product) return;

  const modal = document.getElementById('quick-view-modal');
  const modalContent = document.getElementById('quick-view-content');
  if (!modal || !modalContent) return;

  modalContent.innerHTML = `
    <div class="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
      <!-- Gallery Column -->
      <div class="aspect-[3/4] w-full bg-[var(--c-cream)] relative overflow-hidden border border-[var(--c-border)]">
        <img src="${product.image}" alt="${product.name}" class="w-full h-full object-cover object-top" />
        <span class="badge-luxury badge-siena absolute top-4 right-4">${product.badge}</span>
      </div>

      <!-- Details Column -->
      <div class="flex flex-col h-full justify-between">
        <div>
          <div class="flex items-center gap-2 mb-2">
            <span class="text-xs font-bold uppercase tracking-widest text-[var(--c-siena)]">${product.origin}</span>
            <span class="text-[var(--c-stone)]">•</span>
            <span class="text-xs text-[var(--c-stone)] font-medium">${product.fabric}</span>
          </div>

          <h2 class="font-display text-3xl font-bold text-[var(--c-espresso)] mb-1">${product.arabicName}</h2>
          <p class="font-logo text-sm text-[var(--c-stone)] mb-4">${product.name}</p>

          <div class="p-3 bg-[var(--c-cream)]/50 border border-[var(--c-border)] rounded-sm mb-5">
            <span class="text-xs text-[var(--c-stone)] block mb-0.5">السعر الفاخر الشامل للشحن المؤمن</span>
            <span class="font-display text-3xl font-bold text-[var(--c-siena)]">${formatPrice(product.price)}</span>
          </div>

          <p class="text-sm leading-relaxed text-[var(--c-espresso)]/85 mb-5 font-sans">${product.description}</p>

          <!-- Specifications list -->
          <div class="mb-6">
            <h4 class="font-display text-base font-bold text-[var(--c-espresso)] mb-2">مميزات الحياكة الإيطالية:</h4>
            <ul class="text-xs text-[var(--c-stone)] space-y-1.5 list-disc list-inside">
              ${product.details.map(d => `<li>${d}</li>`).join('')}
            </ul>
          </div>

          <!-- Size Selection -->
          <div class="mb-6">
            <div class="flex justify-between items-center mb-2">
              <span class="text-xs font-bold text-[var(--c-espresso)] uppercase tracking-wider">اختر القياس الإيطالي:</span>
              <span class="text-xs text-[var(--c-siena)] underline cursor-pointer">دليل القياسات الأوروبية</span>
            </div>
            <div class="flex flex-wrap gap-2" id="modal-size-options">
              ${product.sizes.map((s, idx) => `
                <button type="button" class="size-choice-btn px-4 py-2 text-xs font-medium border ${idx === 0 ? 'border-[var(--c-siena)] bg-[var(--c-siena)] text-white' : 'border-[var(--c-border)] bg-white text-[var(--c-espresso)] hover:border-[var(--c-siena)]'} transition-all" data-size="${s}">
                  ${s}
                </button>
              `).join('')}
            </div>
          </div>
        </div>

        <!-- Add to Bag CTA -->
        <div class="pt-4 border-t border-[var(--c-border)] flex gap-3">
          <button type="button" onclick="addToBagFromModal('${product.id}')" class="flex-1 bg-[var(--c-espresso)] text-[var(--c-travertine)] py-3.5 text-xs tracking-widest uppercase font-bold hover:bg-[var(--c-siena)] transition-colors flex items-center justify-center gap-2 shadow-lg">
            <span class="material-symbols-outlined text-[18px]">shopping_bag</span>
            <span>إضافة إلى حقيبة المقتنيات</span>
          </button>
        </div>
      </div>
    </div>
  `;

  // Attach size selection handlers
  const sizeBtns = modalContent.querySelectorAll('.size-choice-btn');
  sizeBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      sizeBtns.forEach(b => {
        b.className = 'size-choice-btn px-4 py-2 text-xs font-medium border border-[var(--c-border)] bg-white text-[var(--c-espresso)] hover:border-[var(--c-siena)] transition-all';
      });
      btn.className = 'size-choice-btn px-4 py-2 text-xs font-medium border border-[var(--c-siena)] bg-[var(--c-siena)] text-white transition-all';
    });
  });

  modal.classList.remove('hidden');
  modal.classList.add('flex');
};

window.closeQuickView = function() {
  const modal = document.getElementById('quick-view-modal');
  if (modal) {
    modal.classList.add('hidden');
    modal.classList.remove('flex');
  }
};

// Add to Cart Handlers
window.quickAddToCart = function(productId) {
  const product = PRODUCTS.find(p => p.id === productId);
  if (!product) return;
  const defaultSize = product.sizes[0];
  addToCartInternal(product, defaultSize);
};

window.addToBagFromModal = function(productId) {
  const product = PRODUCTS.find(p => p.id === productId);
  if (!product) return;
  const selectedSizeBtn = document.querySelector('#modal-size-options .bg-\\[var\\(--c-siena\\)\\]');
  const size = selectedSizeBtn ? selectedSizeBtn.dataset.size : product.sizes[0];
  addToCartInternal(product, size);
  closeQuickView();
};

function addToCartInternal(product, size) {
  const existingIdx = cart.findIndex(item => item.id === product.id && item.size === size);
  if (existingIdx > -1) {
    cart[existingIdx].quantity += 1;
  } else {
    cart.push({
      id: product.id,
      name: product.arabicName,
      italianName: product.name,
      price: product.price,
      image: product.image,
      size: size,
      quantity: 1
    });
  }
  saveCart();
  updateCartUI();
  toggleCartDrawer(true);
  showToast(`تمت إضافة "${product.arabicName}" إلى حقيبتك الفاخرة! ✨`);
}

function saveCart() {
  localStorage.setItem('bellini_cart', JSON.stringify(cart));
}

// Cart Drawer Operations
window.toggleCartDrawer = function(open = true) {
  const drawer = document.getElementById('cart-drawer');
  const backdrop = document.getElementById('cart-backdrop');
  if (!drawer || !backdrop) return;

  if (open) {
    drawer.classList.remove('translate-x-full');
    backdrop.classList.remove('hidden');
  } else {
    drawer.classList.add('translate-x-full');
    backdrop.classList.add('hidden');
  }
};

window.updateItemQty = function(index, delta) {
  if (!cart[index]) return;
  cart[index].quantity += delta;
  if (cart[index].quantity <= 0) {
    cart.splice(index, 1);
  }
  saveCart();
  updateCartUI();
};

window.removeFromCart = function(index) {
  if (!cart[index]) return;
  const item = cart[index];
  cart.splice(index, 1);
  saveCart();
  updateCartUI();
  showToast(`تمت إزالة "${item.name}" من الحقيبة`);
};

function updateCartUI() {
  const countEls = document.querySelectorAll('.cart-count-badge');
  const itemsContainer = document.getElementById('cart-items-list');
  const subtotalEl = document.getElementById('cart-subtotal-price');

  const totalCount = cart.reduce((sum, item) => sum + item.quantity, 0);
  countEls.forEach(el => {
    el.textContent = totalCount;
    if (totalCount > 0) el.classList.remove('hidden');
    else el.classList.add('hidden');
  });

  const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  if (subtotalEl) {
    subtotalEl.textContent = formatPrice(subtotal);
  }

  if (!itemsContainer) return;

  if (cart.length === 0) {
    itemsContainer.innerHTML = `
      <div class="py-16 text-center flex flex-col items-center justify-center">
        <span class="material-symbols-outlined text-4xl text-[var(--c-stone)] mb-2">shopping_bag</span>
        <h4 class="font-display text-xl text-[var(--c-espresso)] mb-1">حقيبة مقتنياتك فارغة</h4>
        <p class="text-xs text-[var(--c-stone)] mb-4">استكشف تشكيلتنا الإيطالية الحصرية واختر ما يناسب ذوقك الرفيع.</p>
        <button onclick="toggleCartDrawer(false)" type="button" class="px-5 py-2.5 bg-[var(--c-espresso)] text-white text-xs uppercase tracking-wider font-semibold hover:bg-[var(--c-siena)] transition-colors">
          تصفح التشكيلة
        </button>
      </div>
    `;
    return;
  }

  itemsContainer.innerHTML = cart.map((item, idx) => `
    <div class="flex gap-4 p-3 bg-white border border-[var(--c-border)]">
      <img src="${item.image}" alt="${item.name}" class="w-20 h-24 object-cover object-top border border-[var(--c-border)]" />
      <div class="flex-1 flex flex-col justify-between">
        <div>
          <div class="flex justify-between items-start">
            <h5 class="font-display text-base font-bold text-[var(--c-espresso)] leading-tight">${item.name}</h5>
            <button onclick="removeFromCart(${idx})" type="button" class="text-[var(--c-stone)] hover:text-red-700 transition-colors p-1" title="حذف">
              <span class="material-symbols-outlined text-[16px]">close</span>
            </button>
          </div>
          <span class="text-[11px] text-[var(--c-stone)] block font-logo">${item.italianName}</span>
          <span class="text-xs text-[var(--c-siena)] font-semibold mt-1 block">القياس: ${item.size}</span>
        </div>

        <div class="flex justify-between items-center pt-2 border-t border-[var(--c-border)]">
          <div class="flex items-center border border-[var(--c-border)]">
            <button onclick="updateItemQty(${idx}, -1)" type="button" class="w-6 h-6 flex items-center justify-center text-xs hover:bg-[var(--c-travertine)]">-</button>
            <span class="w-7 text-center text-xs font-semibold">${item.quantity}</span>
            <button onclick="updateItemQty(${idx}, 1)" type="button" class="w-6 h-6 flex items-center justify-center text-xs hover:bg-[var(--c-travertine)]">+</button>
          </div>
          <span class="font-display text-sm font-bold text-[var(--c-espresso)]">${formatPrice(item.price * item.quantity)}</span>
        </div>
      </div>
    </div>
  `).join('');
}

// 6. Interactive Bespoke Tailoring Studio ("Su Misura")
function setupBespokeStudio() {
  const options = document.querySelectorAll('.bespoke-option');
  options.forEach(opt => {
    opt.addEventListener('click', () => {
      const group = opt.dataset.group;
      const val = opt.dataset.value;
      const price = parseInt(opt.dataset.price || '0', 10);
      const name = opt.dataset.name;

      document.querySelectorAll(`.bespoke-option[data-group="${group}"]`).forEach(o => o.classList.remove('selected'));
      opt.classList.add('selected');

      bespokeState[group] = { name, price };
      updateBespokeSummary();
    });
  });

  const monogramInput = document.getElementById('bespoke-monogram-input');
  if (monogramInput) {
    monogramInput.addEventListener('input', (e) => {
      bespokeState.monogram = (e.target.value || 'SB').toUpperCase().slice(0, 3);
      updateBespokeSummary();
    });
  }

  updateBespokeSummary();
}

function updateBespokeSummary() {
  const totalBase = 1200; // base tailoring bench fee
  const total = totalBase + 
    bespokeState.silhouette.price + 
    bespokeState.fabric.price + 
    bespokeState.lapel.price + 
    bespokeState.buttons.price;

  const totalEl = document.getElementById('bespoke-total-price');
  const detailsEl = document.getElementById('bespoke-summary-details');
  const monogramBadge = document.getElementById('bespoke-monogram-preview');

  if (totalEl) totalEl.textContent = formatPrice(total);
  if (monogramBadge) monogramBadge.textContent = bespokeState.monogram;

  if (detailsEl) {
    detailsEl.innerHTML = `
      <div class="flex justify-between py-1 text-xs border-b border-[var(--c-border)]">
        <span class="text-[var(--c-stone)]">القصة المختارة:</span>
        <span class="font-semibold text-[var(--c-espresso)]">${bespokeState.silhouette.name}</span>
      </div>
      <div class="flex justify-between py-1 text-xs border-b border-[var(--c-border)]">
        <span class="text-[var(--c-stone)]">القماش الفاخر:</span>
        <span class="font-semibold text-[var(--c-espresso)]">${bespokeState.fabric.name}</span>
      </div>
      <div class="flex justify-between py-1 text-xs border-b border-[var(--c-border)]">
        <span class="text-[var(--c-stone)]">نوع الياقة:</span>
        <span class="font-semibold text-[var(--c-espresso)]">${bespokeState.lapel.name}</span>
      </div>
      <div class="flex justify-between py-1 text-xs border-b border-[var(--c-border)]">
        <span class="text-[var(--c-stone)]">الأزرار الحرفية:</span>
        <span class="font-semibold text-[var(--c-espresso)]">${bespokeState.buttons.name}</span>
      </div>
      <div class="flex justify-between py-1 text-xs">
        <span class="text-[var(--c-stone)]">الأحرف المطرزة (Monogram):</span>
        <span class="font-bold text-[var(--c-siena)] font-display tracking-widest">${bespokeState.monogram}</span>
      </div>
    `;
  }
}

window.orderBespokeSuit = function() {
  const totalBase = 1200;
  const total = totalBase + 
    bespokeState.silhouette.price + 
    bespokeState.fabric.price + 
    bespokeState.lapel.price + 
    bespokeState.buttons.price;

  const bespokeProduct = {
    id: 'bespoke-' + Date.now(),
    arabicName: `بدلة تفصيل خاص Su Misura [${bespokeState.monogram}]`,
    name: `Abito Su Misura Bellini [${bespokeState.monogram}]`,
    price: total,
    image: 'https://images.unsplash.com/photo-1594938298603-c8148c4dae35?auto=format&fit=crop&w=600&q=80',
    size: 'مخصص حسب قياسات العميل',
    quantity: 1
  };

  cart.push(bespokeProduct);
  saveCart();
  updateCartUI();
  toggleCartDrawer(true);
  showToast('تم حجز وتخصيص بدلتك الإيطالية "Su Misura" وإضافتها إلى حقيبة المقتنيات! 🧵✂️');
};

// 7. Lookbook Interactive Hotspots
function setupLookbookHotspots() {
  const pins = document.querySelectorAll('.hotspot-pin');
  pins.forEach(pin => {
    pin.addEventListener('click', (e) => {
      e.stopPropagation();
      const targetId = pin.dataset.productId;
      if (targetId) {
        openQuickView(targetId);
      }
    });
  });
}

// 8. Toast Notifications
function showToast(message, duration = 4000) {
  let container = document.getElementById('store-toast-container');
  if (!container) {
    container = document.createElement('div');
    container.id = 'store-toast-container';
    document.body.appendChild(container);
  }

  const toast = document.createElement('div');
  toast.className = 'store-toast';
  toast.innerHTML = `
    <div class="flex items-center gap-2">
      <span class="material-symbols-outlined text-[var(--c-siena)] text-[20px]">verified</span>
      <span class="text-xs font-medium leading-relaxed">${message}</span>
    </div>
    <button type="button" class="text-[var(--c-stone)] hover:text-white" onclick="this.parentElement.remove()">
      <span class="material-symbols-outlined text-[16px]">close</span>
    </button>
  `;

  container.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateY(15px)';
    toast.style.transition = 'all 0.3s ease';
    setTimeout(() => toast.remove(), 300);
  }, duration);
}
