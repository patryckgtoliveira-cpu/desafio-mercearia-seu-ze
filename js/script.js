// --- Estado da aplicação ---
const state = {
    cart: [],
    category: 'all',
    query: '',
    selectedDay: new Date().getDay()
};

let toastTimer = null;

// --- Utilitários ---
const $ = (selector) => document.querySelector(selector);

const currency = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' });
const formatPrice = (value) => currency.format(value);

// Remove acentos e deixa minúsculo, para a busca achar "pao" em "Pão"
const normalize = (text) => text.normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase();

const whatsappLink = (message) =>
    `https://wa.me/${STORE.whatsappNumber}?text=${encodeURIComponent(message)}`;

// --- Status de funcionamento ---
function isStoreOpen(date = new Date()) {
    const hours = STORE.hours[date.getDay()];
    const hour = date.getHours();
    return Boolean(hours) && hour >= hours.open && hour < hours.close;
}

function renderBusinessStatus() {
    const badge = $('#status-badge');
    const base = 'inline-flex items-center px-2 py-0.5 rounded-full font-bold text-xs text-white shadow-sm';

    if (isStoreOpen()) {
        badge.className = `${base} bg-emerald-500`;
        badge.innerHTML = '<span class="w-2 h-2 rounded-full bg-white mr-1.5 animate-pulse"></span> ABERTO AGORA';
    } else {
        badge.className = `${base} bg-rustic-red`;
        badge.innerHTML = '<span class="w-2 h-2 rounded-full bg-amber-200 mr-1.5"></span> FECHADO AGORA';
    }
}

// --- Promoções ---
function renderDayTabs() {
    const today = new Date().getDay();

    $('#day-tabs').innerHTML = DAY_LABELS.map((label, day) => {
        const isToday = day === today;
        const style = day === state.selectedDay
            ? 'bg-brand-600 text-white border-brand-700 shadow-md scale-105'
            : 'bg-stone-50 text-stone-700 border-stone-200 hover:bg-amber-100';

        return `
            <button data-action="select-day" data-day="${day}" class="px-4 py-2.5 rounded-xl font-bold text-xs sm:text-sm transition flex flex-col items-center gap-0.5 border ${style}">
                <span>${label} ${isToday ? '⭐' : ''}</span>
                <span class="text-[10px] opacity-80">${isToday ? '(Hoje)' : ''}</span>
            </button>
        `;
    }).join('');
}

function renderPromo() {
    const promo = PROMOTIONS[state.selectedDay];
    const link = whatsappLink(`Olá Seu Zé! Gostaria de aproveitar a promoção: ${promo.title}`);

    $('#promo-display').innerHTML = `
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            <div class="lg:col-span-8 space-y-4">
                <div class="inline-flex items-center gap-2 bg-rustic-red text-white px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                    <i class="fa-solid fa-fire"></i> ${promo.badge}
                </div>
                <h3 class="font-serif text-2xl sm:text-3xl font-bold text-brand-900">${promo.title}</h3>
                <p class="text-stone-700 text-sm sm:text-base leading-relaxed">${promo.desc}</p>

                <div class="pt-2 flex flex-wrap items-center gap-4">
                    <span class="text-xl font-extrabold text-brand-700">${promo.priceTag}</span>
                    <a href="${link}" target="_blank" rel="noopener noreferrer" class="bg-emerald-600 hover:bg-emerald-700 text-white font-bold px-5 py-2.5 rounded-xl text-sm shadow transition flex items-center gap-2">
                        <i class="fa-brands fa-whatsapp text-lg"></i> Garanta a sua no Whats
                    </a>
                </div>
            </div>
            <div class="lg:col-span-4">
                <img src="${promo.image}" alt="${promo.title}" data-fallback="https://placehold.co/600x400/92400e/ffffff?text=Promo+Seu+Ze" class="w-full h-48 sm:h-56 object-cover rounded-xl shadow-md border-2 border-white">
            </div>
        </div>
    `;
}

function selectDay(day) {
    state.selectedDay = day;
    renderDayTabs();
    renderPromo();
}

// --- Catálogo ---
function getFilteredProducts() {
    const query = normalize(state.query);

    return PRODUCTS.filter((p) => {
        const matchesCategory = state.category === 'all' || p.category === state.category;
        const matchesQuery = normalize(`${p.name} ${p.desc}`).includes(query);
        return matchesCategory && matchesQuery;
    });
}

function productCard(p) {
    const fallback = `https://placehold.co/400x300/d97706/ffffff?text=${encodeURIComponent(p.name)}`;

    return `
        <div class="bg-white rounded-2xl overflow-hidden border border-stone-200 shadow-sm hover:shadow-md transition flex flex-col justify-between group">
            <div>
                <div class="relative h-44 overflow-hidden bg-stone-100">
                    <img src="${p.img}" alt="${p.name}" data-fallback="${fallback}" class="w-full h-full object-cover group-hover:scale-105 transition duration-300">
                    <span class="absolute top-3 right-3 bg-rustic-cream/90 text-brand-900 font-bold text-xs px-2.5 py-1 rounded-full shadow border border-amber-200">
                        ${formatPrice(p.price)} / ${p.unit}
                    </span>
                </div>
                <div class="p-4 space-y-2">
                    <h3 class="font-bold text-stone-900 text-base group-hover:text-brand-600 transition">${p.name}</h3>
                    <p class="text-xs text-stone-500 leading-relaxed">${p.desc}</p>
                </div>
            </div>
            <div class="p-4 pt-0">
                <button data-action="add-to-cart" data-id="${p.id}" class="w-full bg-amber-100 hover:bg-brand-600 hover:text-white text-brand-900 font-bold py-2.5 px-4 rounded-xl text-sm transition flex items-center justify-center gap-2">
                    <i class="fa-solid fa-plus text-xs"></i> Adicionar à Lista
                </button>
            </div>
        </div>
    `;
}

function renderProducts() {
    const items = getFilteredProducts();
    const grid = $('#product-grid');

    if (items.length === 0) {
        grid.innerHTML = `
            <div class="col-span-full py-12 text-center text-stone-500">
                <i class="fa-solid fa-magnifying-glass text-4xl mb-3 text-stone-300"></i>
                <p class="text-base font-medium">Nenhum produto encontrado com essa busca.</p>
                <button data-action="reset-filters" class="mt-3 text-brand-600 underline font-bold text-sm">Ver todos os produtos</button>
            </div>
        `;
        return;
    }

    grid.innerHTML = items.map(productCard).join('');
}

const CATEGORY_ACTIVE = ['bg-brand-600', 'text-white', 'border-brand-600', 'shadow-sm'];
const CATEGORY_INACTIVE = ['bg-white', 'text-stone-700', 'border-stone-200', 'hover:bg-amber-100'];

function renderCategoryButtons() {
    document.querySelectorAll('.cat-btn').forEach((btn) => {
        const isActive = btn.dataset.category === state.category;
        btn.classList.remove(...CATEGORY_ACTIVE, ...CATEGORY_INACTIVE);
        btn.classList.add(...(isActive ? CATEGORY_ACTIVE : CATEGORY_INACTIVE));
    });
}

function setCategory(category) {
    state.category = category;
    renderCategoryButtons();
    renderProducts();
}

function resetFilters() {
    state.query = '';
    $('#search-input').value = '';
    setCategory('all');
}

// --- Carrinho ---
const cartCount = () => state.cart.reduce((sum, item) => sum + item.qty, 0);
const cartTotal = () => state.cart.reduce((sum, item) => sum + item.price * item.qty, 0);

function addToCart(productId) {
    const product = PRODUCTS.find((p) => p.id === productId);
    if (!product) return;

    const item = state.cart.find((i) => i.id === productId);
    if (item) {
        item.qty += 1;
    } else {
        state.cart.push({ ...product, qty: 1 });
    }

    renderCart();
    showToast(`"${product.name}" adicionado à lista!`);
}

function changeQuantity(productId, delta) {
    const item = state.cart.find((i) => i.id === productId);
    if (!item) return;

    item.qty += delta;
    if (item.qty <= 0) {
        state.cart = state.cart.filter((i) => i.id !== productId);
    }

    renderCart();
}

function cartItem(item) {
    const qtyButton = 'w-7 h-7 bg-white rounded text-stone-700 font-bold hover:bg-stone-200 transition text-xs flex items-center justify-center';

    return `
        <div class="bg-white p-3.5 rounded-xl border border-stone-200 flex items-center justify-between gap-3 shadow-sm">
            <div class="flex-grow">
                <h4 class="font-bold text-stone-900 text-sm">${item.name}</h4>
                <p class="text-xs text-stone-500">${formatPrice(item.price)} / ${item.unit}</p>
            </div>
            <div class="flex items-center gap-2 bg-stone-100 rounded-lg p-1 border border-stone-200">
                <button data-action="change-qty" data-id="${item.id}" data-delta="-1" class="${qtyButton}" aria-label="Diminuir">-</button>
                <span class="font-bold text-xs text-stone-800 px-1">${item.qty}</span>
                <button data-action="change-qty" data-id="${item.id}" data-delta="1" class="${qtyButton}" aria-label="Aumentar">+</button>
            </div>
        </div>
    `;
}

function renderCart() {
    const isEmpty = state.cart.length === 0;

    $('#cart-count').textContent = cartCount();
    $('#cart-total-price').textContent = formatPrice(cartTotal());
    $('#send-whatsapp-btn').disabled = isEmpty;

    $('#cart-items-container').innerHTML = isEmpty
        ? `
            <div class="py-12 text-center text-stone-400">
                <i class="fa-solid fa-basket-shopping text-5xl mb-3 text-amber-200"></i>
                <p class="font-medium text-stone-600">Sua lista está vazia!</p>
                <p class="text-xs text-stone-400 mt-1">Navegue no balcão e adicione os itens que você precisa.</p>
            </div>
        `
        : state.cart.map(cartItem).join('');
}

function toggleCart() {
    $('#cart-modal').classList.toggle('hidden');
}

function sendOrder() {
    if (state.cart.length === 0) return;

    const lines = state.cart.map((item) =>
        `• ${item.qty}x ${item.name} (${formatPrice(item.price * item.qty)})`
    );

    const message = [
        'Olá, Seu Zé! Gostaria de fazer o seguinte pedido na mercearia:',
        '',
        ...lines,
        '',
        `*Total Estimado: ${formatPrice(cartTotal())}*`,
        '',
        'Podem me informar sobre o tempo para entrega/retirada no Centro? Obrigado!'
    ].join('\n');

    window.open(whatsappLink(message), '_blank', 'noopener');
}

// --- Toast ---
function showToast(message) {
    const toast = $('#toast');
    $('#toast-message').textContent = message;
    toast.classList.remove('hidden');

    // Reinicia o tempo se outro item for adicionado antes do toast sumir
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => toast.classList.add('hidden'), 3000);
}

// --- Eventos ---
const actions = {
    'toggle-cart': () => toggleCart(),
    'send-order': () => sendOrder(),
    'set-category': (el) => setCategory(el.dataset.category),
    'reset-filters': () => resetFilters(),
    'select-day': (el) => selectDay(Number(el.dataset.day)),
    'add-to-cart': (el) => addToCart(Number(el.dataset.id)),
    'change-qty': (el) => changeQuantity(Number(el.dataset.id), Number(el.dataset.delta))
};

function bindEvents() {
    // Um único listener trata todos os cliques com data-action, inclusive nos elementos criados via JS
    document.addEventListener('click', (event) => {
        const el = event.target.closest('[data-action]');
        if (el && actions[el.dataset.action]) {
            actions[el.dataset.action](el);
        }
    });

    $('#search-input').addEventListener('input', (event) => {
        state.query = event.target.value;
        renderProducts();
    });

    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape' && !$('#cart-modal').classList.contains('hidden')) {
            toggleCart();
        }
    });
}

// Troca imagens quebradas pela imagem reserva. Fica fora do DOMContentLoaded para
// pegar também as imagens fixas do HTML (o evento "error" não borbulha, por isso a captura)
document.addEventListener('error', (event) => {
    const img = event.target;
    if (img.tagName === 'IMG' && img.dataset.fallback) {
        img.src = img.dataset.fallback;
        delete img.dataset.fallback;
    }
}, true);

// --- Inicialização ---
document.addEventListener('DOMContentLoaded', () => {
    $('#year').textContent = new Date().getFullYear();
    bindEvents();
    renderBusinessStatus();
    renderDayTabs();
    renderPromo();
    renderCategoryButtons();
    renderProducts();
    renderCart();
});
