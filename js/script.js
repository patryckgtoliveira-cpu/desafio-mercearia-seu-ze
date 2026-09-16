// --- Data Models ---
const promotions = {
    1: { // Segunda
        dayName: 'Segunda-feira',
        title: ' Segunda do Bolo Caseiro',
        desc: 'Comece a semana mais doce! Na compra de qualquer bolo caseiro inteiro (Cuca, Fubá ou Cenoura), ganhe 15% de desconto.',
        badge: '15% OFF em Bolos',
        image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=600&q=80',
        priceTag: 'A partir de R$ 18,00'
    },
    2: { // Terça
        dayName: 'Terça-feira',
        title: ' Terça do Combo Salgado + Refri',
        desc: '1 Coxinha cremosa ou Empadão quentinho + 1 Guaraná ou Coca caçulinha por um preço especial de lanche da tarde.',
        badge: 'Combo Lanche R$ 11,90',
        image: 'https://images.unsplash.com/photo-1626700051175-6818013e1d4f?auto=format&fit=crop&w=600&q=80',
        priceTag: 'Apenas R$ 11,90'
    },
    3: { // Quarta
        dayName: 'Quarta-feira',
        title: ' Quarta dos Frios e Queijos',
        desc: '200g de Muçarela fatiada + 200g de Presunto fatiado na hora com desconto especial para o seu lanche da noite.',
        badge: 'Combo Frios Especial',
        image: 'https://images.unsplash.com/photo-1631379578550-7038263db699?auto=format&fit=crop&w=600&q=80',
        priceTag: 'Apenas R$ 19,90'
    },
    4: { // Quinta
        dayName: 'Quinta-feira',
        title: ' Quinta do Café & Pão na Chapa',
        desc: 'Compre 1/2 kg de pão francês quentinho e leve 1 café passado na hora na faixa para viagem!',
        badge: 'Ganhe 1 Café Passado',
        image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=600&q=80',
        priceTag: 'Oferta do Pão'
    },
    5: { // Sexta
        dayName: 'Sexta-feira',
        title: ' Sexta do Happy Hour & Tabuinha',
        desc: 'Combo Tábua do Seu Zé: Salame fatiado (150g) + Queijo Provolone ou Colonial (150g) + Azeitonas temperadas.',
        badge: 'Tábua Petisco R$ 29,90',
        image: 'https://images.unsplash.com/photo-1541529086526-db283c563270?auto=format&fit=crop&w=600&q=80',
        priceTag: 'Apenas R$ 29,90'
    },
    6: { // Sábado
        dayName: 'Sábado',
        title: ' Sábado de Broa & Café da Manhã',
        desc: 'Broas artesanais de milho e centeio fresquinhas saindo logo cedo às 08:00 para seu fim de semana!',
        badge: 'Broas Fresquinhas',
        image: 'https://images.unsplash.com/photo-1586444248902-2f64eddc13df?auto=format&fit=crop&w=600&q=80',
        priceTag: 'R$ 7,50 / unidade'
    },
    0: { // Domingo (Fechado - Destaque de Segunda)
        dayName: 'Domingo (Fechado)',
        title: ' Domingo descansando!',
        desc: 'A mercearia está fechada no domingo, mas amanhã às 8:00 estaremos de volta com os bolos caseiros quentinhos!',
        badge: 'Abrimos Segunda 8h',
        image: 'https://images.unsplash.com/photo-1517433670267-08bbd4be890f?auto=format&fit=crop&w=600&q=80',
        priceTag: 'Até Segunda!'
    }
};

const products = [
    { id: 1, name: 'Pão Francês Quentinho (kg)', category: 'paes', price: 14.90, unit: 'kg', img: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=400&q=80', desc: 'Fresco e crocante, saindo em várias fornadas ao dia.' },
    { id: 2, name: 'Broa de Milho Colonial', category: 'paes', price: 7.50, unit: 'un', img: 'https://images.unsplash.com/photo-1586444248902-2f64eddc13df?auto=format&fit=crop&w=400&q=80', desc: 'Receita tradicional do interior, bem fofinha.' },
    { id: 3, name: 'Queijo Colonial Curitibano (200g)', category: 'frios', price: 16.50, unit: '200g', img: 'https://images.unsplash.com/photo-1452195100486-9cc805987862?auto=format&fit=crop&w=400&q=80', desc: 'Sabor marcante, fatiado bem fininho na hora.' },
    { id: 4, name: 'Salame Hamburguês Fatiado (150g)', category: 'frios', price: 14.00, unit: '150g', img: 'https://images.unsplash.com/photo-1541529086526-db283c563270?auto=format&fit=crop&w=400&q=80', desc: 'Perfeito para aperitivos ou sanduíches especiais.' },
    { id: 5, name: 'Bolo Caseiro de Cuca de Goiabada', category: 'bolos', price: 22.00, unit: 'un', img: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=400&q=80', desc: 'Farofa crocante por cima e recheio generoso.' },
    { id: 6, name: 'Bolo de Fubá Cremoso', category: 'bolos', price: 18.00, unit: 'un', img: 'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=400&q=80', desc: 'Aquele gosto de casa de vó para o café da tarde.' },
    { id: 7, name: 'Coxinha de Frango com Catupiry', category: 'salgados', price: 8.50, unit: 'un', img: 'https://images.unsplash.com/photo-1626700051175-6818013e1d4f?auto=format&fit=crop&w=400&q=80', desc: 'Massa leve e recheio bem temperado.' },
    { id: 8, name: 'Empadão de Frango com Queijo', category: 'salgados', price: 9.50, unit: 'fatia', img: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=400&q=80', desc: 'Massa podre que derrete na boca.' },
    { id: 9, name: 'Café Passado na Hora (Copo 200ml)', category: 'bebidas', price: 4.50, unit: 'un', img: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=400&q=80', desc: 'Café forte e quentinho passado no coador.' },
    { id: 10, name: 'Vinho Colonial de Mesa (750ml)', category: 'bebidas', price: 28.00, unit: 'garrafa', img: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=400&q=80', desc: 'Vinho suave perfeito para acompanhar a tábua de frios.' },
    { id: 11, name: 'Presunto Cozido Fatiado (200g)', category: 'frios', price: 9.80, unit: '200g', img: 'https://images.unsplash.com/photo-1631379578550-7038263db699?auto=format&fit=crop&w=400&q=80', desc: 'Fresquinho para seu misto-quente.' },
    { id: 12, name: 'Queijo Muçarela (200g)', category: 'frios', price: 11.50, unit: '200g', img: 'https://images.unsplash.com/photo-1486297678162-eb2a19b0a32d?auto=format&fit=crop&w=400&q=80', desc: 'Derrete fácil e fatiado fininho.' }
];

// State Management
let cart = [];
let currentCategory = 'all';
let selectedDayPromo = new Date().getDay(); // Default to today

// --- Core Application Functions ---
window.addEventListener('DOMContentLoaded', () => {
    document.getElementById('year').textContent = new Date().getFullYear();
    checkBusinessStatus();
    renderDayTabs();
    renderPromoDisplay(selectedDayPromo);
    renderProducts(products);
});

// 1. Check if store is open based on hours: Mon-Fri 8-19, Sat 8-12
function checkBusinessStatus() {
    const now = new Date();
    const day = now.getDay(); // 0 = Sun, 1 = Mon, ... 6 = Sat
    const hour = now.getHours();
    const statusBadge = document.getElementById('status-badge');

    let isOpen = false;

    if (day >= 1 && day <= 5) {
        // Monday to Friday
        if (hour >= 8 && hour < 19) isOpen = true;
    } else if (day === 6) {
        // Saturday
        if (hour >= 8 && hour < 12) isOpen = true;
    }

    if (isOpen) {
        statusBadge.className = 'inline-flex items-center px-2 py-0.5 rounded-full font-bold text-xs bg-emerald-500 text-white shadow-sm';
        statusBadge.innerHTML = '<span class="w-2 h-2 rounded-full bg-white mr-1.5 animate-pulse"></span> ABERTO AGORA';
    } else {
        statusBadge.className = 'inline-flex items-center px-2 py-0.5 rounded-full font-bold text-xs bg-rustic-red text-white shadow-sm';
        statusBadge.innerHTML = '<span class="w-2 h-2 rounded-full bg-amber-200 mr-1.5"></span> FECHADO AGORA';
    }
}

// 2. Render Day Tabs for Promos
function renderDayTabs() {
    const tabsContainer = document.getElementById('day-tabs');
    const dayLabels = ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'];
    const today = new Date().getDay();

    tabsContainer.innerHTML = dayLabels.map((label, idx) => {
        const isSelected = idx === selectedDayPromo;
        const isToday = idx === today;
        
        return `
            <button onclick="selectPromoDay(${idx})" class="px-4 py-2.5 rounded-xl font-bold text-xs sm:text-sm transition flex flex-col items-center gap-0.5 border ${
                isSelected 
                    ? 'bg-brand-600 text-white border-brand-700 shadow-md scale-105' 
                    : 'bg-stone-50 text-stone-700 border-stone-200 hover:bg-amber-100'
            }">
                <span>${label} ${isToday ? '⭐' : ''}</span>
                <span class="text-[10px] opacity-80">${isToday ? '(Hoje)' : ''}</span>
            </button>
        `;
    }).join('');
}

function selectPromoDay(dayIndex) {
    selectedDayPromo = dayIndex;
    renderDayTabs();
    renderPromoDisplay(dayIndex);
}

function renderPromoDisplay(dayIndex) {
    const promo = promotions[dayIndex];
    const display = document.getElementById('promo-display');
    
    display.innerHTML = `
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            <div class="lg:col-span-8 space-y-4">
                <div class="inline-flex items-center gap-2 bg-rustic-red text-white px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                    <i class="fa-solid fa-fire"></i> ${promo.badge}
                </div>
                <h3 class="font-serif text-2xl sm:text-3xl font-bold text-brand-900">${promo.title}</h3>
                <p class="text-stone-700 text-sm sm:text-base leading-relaxed">${promo.desc}</p>
                
                <div class="pt-2 flex flex-wrap items-center gap-4">
                    <span class="text-xl font-extrabold text-brand-700">${promo.priceTag}</span>
                    <a href="https://wa.me/5541999999999?text=Olá%20Seu%20Zé!%20Gostaria%20de%20aproveitar%20a%20promoção:%20${encodeURIComponent(promo.title)}" target="_blank" class="bg-emerald-600 hover:bg-emerald-700 text-white font-bold px-5 py-2.5 rounded-xl text-sm shadow transition flex items-center gap-2">
                        <i class="fa-brands fa-whatsapp text-lg"></i> Garanta a sua no Whats
                    </a>
                </div>
            </div>
            <div class="lg:col-span-4">
                <img src="${promo.image}" alt="${promo.title}" class="w-full h-48 sm:h-56 object-cover rounded-xl shadow-md border-2 border-white" onerror="this.src='https://placehold.co/600x400/92400e/ffffff?text=Promo+Seu+Ze'">
            </div>
        </div>
    `;
}

// 3. Render Product Cards
function renderProducts(items) {
    const grid = document.getElementById('product-grid');
    
    if (items.length === 0) {
        grid.innerHTML = `
            <div class="col-span-full py-12 text-center text-stone-500">
                <i class="fa-solid fa-magnifying-glass text-4xl mb-3 text-stone-300"></i>
                <p class="text-base font-medium">Nenhum produto encontrado com essa busca.</p>
                <button onclick="setCategory('all')" class="mt-3 text-brand-600 underline font-bold text-sm">Ver todos os produtos</button>
            </div>
        `;
        return;
    }

    grid.innerHTML = items.map(p => `
        <div class="bg-white rounded-2xl overflow-hidden border border-stone-200 shadow-sm hover:shadow-md transition flex flex-col justify-between group">
            <div>
                <div class="relative h-44 overflow-hidden bg-stone-100">
                    <img src="${p.img}" alt="${p.name}" class="w-full h-full object-cover group-hover:scale-105 transition duration-300" onerror="this.src='https://placehold.co/400x300/d97706/ffffff?text=${encodeURIComponent(p.name)}'">
                    <span class="absolute top-3 right-3 bg-rustic-cream/90 text-brand-900 font-bold text-xs px-2.5 py-1 rounded-full shadow border border-amber-200">
                        R$ ${p.price.toFixed(2).replace('.', ',')} / ${p.unit}
                    </span>
                </div>
                <div class="p-4 space-y-2">
                    <h3 class="font-bold text-stone-900 text-base group-hover:text-brand-600 transition">${p.name}</h3>
                    <p class="text-xs text-stone-500 leading-relaxed">${p.desc}</p>
                </div>
            </div>
            <div class="p-4 pt-0">
                <button onclick="addToCart(${p.id})" class="w-full bg-amber-100 hover:bg-brand-600 hover:text-white text-brand-900 font-bold py-2.5 px-4 rounded-xl text-sm transition flex items-center justify-center gap-2">
                    <i class="fa-solid fa-plus text-xs"></i> Adicionar à Lista
                </button>
            </div>
        </div>
    `).join('');
}

// 4. Filtering Logic
function setCategory(cat) {
    currentCategory = cat;
    
    // Update active state on category buttons
    document.querySelectorAll('.cat-btn').forEach(btn => {
        btn.classList.remove('bg-brand-600', 'text-white');
        btn.classList.add('bg-white', 'text-stone-700');
    });
    event.currentTarget.classList.remove('bg-white', 'text-stone-700');
    event.currentTarget.classList.add('bg-brand-600', 'text-white');

    filterProducts();
}

function filterProducts() {
    const query = document.getElementById('search-input').value.toLowerCase();
    
    const filtered = products.filter(p => {
        const matchesCat = currentCategory === 'all' || p.category === currentCategory;
        const matchesQuery = p.name.toLowerCase().includes(query) || p.desc.toLowerCase().includes(query);
        return matchesCat && matchesQuery;
    });

    renderProducts(filtered);
}

// 5. Cart Management
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;

    const existingItem = cart.find(item => item.id === productId);
    if (existingItem) {
        existingItem.qty += 1;
    } else {
        cart.push({ ...product, qty: 1 });
    }

    updateCartUI();
    showToast(`"${product.name}" adicionado à lista!`);
}

function updateQuantity(productId, change) {
    const item = cart.find(i => i.id === productId);
    if (!item) return;

    item.qty += change;
    if (item.qty <= 0) {
        cart = cart.filter(i => i.id !== productId);
    }

    updateCartUI();
}

function updateCartUI() {
    // Count total items
    const totalCount = cart.reduce((sum, item) => sum + item.qty, 0);
    document.getElementById('cart-count').textContent = totalCount;

    // Calculate total price
    const totalPrice = cart.reduce((sum, item) => sum + (item.price * item.qty), 0);
    document.getElementById('cart-total-price').textContent = `R$ ${totalPrice.toFixed(2).replace('.', ',')}`;

    // Render items in Modal
    const container = document.getElementById('cart-items-container');
    const sendBtn = document.getElementById('send-whatsapp-btn');

    if (cart.length === 0) {
        container.innerHTML = `
            <div class="py-12 text-center text-stone-400">
                <i class="fa-solid fa-basket-shopping text-5xl mb-3 text-amber-200"></i>
                <p class="font-medium text-stone-600">Sua lista está vazia!</p>
                <p class="text-xs text-stone-400 mt-1">Navegue no balcão e adicione os itens que você precisa.</p>
            </div>
        `;
        sendBtn.disabled = true;
    } else {
        sendBtn.disabled = false;
        container.innerHTML = cart.map(item => `
            <div class="bg-white p-3.5 rounded-xl border border-stone-200 flex items-center justify-between gap-3 shadow-sm">
                <div class="flex-grow">
                    <h4 class="font-bold text-stone-900 text-sm">${item.name}</h4>
                    <p class="text-xs text-stone-500">R$ ${item.price.toFixed(2).replace('.', ',')} / ${item.unit}</p>
                </div>
                <div class="flex items-center gap-2 bg-stone-100 rounded-lg p-1 border border-stone-200">
                    <button onclick="updateQuantity(${item.id}, -1)" class="w-7 h-7 bg-white rounded text-stone-700 font-bold hover:bg-stone-200 transition text-xs flex items-center justify-center">-</button>
                    <span class="font-bold text-xs text-stone-800 px-1">${item.qty}</span>
                    <button onclick="updateQuantity(${item.id}, 1)" class="w-7 h-7 bg-white rounded text-stone-700 font-bold hover:bg-stone-200 transition text-xs flex items-center justify-center">+</button>
                </div>
            </div>
        `).join('');
    }
}

function toggleCartModal() {
    const modal = document.getElementById('cart-modal');
    modal.classList.toggle('hidden');
}

function sendOrderWhatsApp() {
    if (cart.length === 0) return;

    let text = "Olá, Seu Zé! Gostaria de fazer o seguinte pedido na mercearia:\n\n";
    let total = 0;

    cart.forEach(item => {
        const subtotal = item.price * item.qty;
        total += subtotal;
        text += `• ${item.qty}x ${item.name} (R$ ${subtotal.toFixed(2).replace('.', ',')})\n`;
    });

    text += `\n*Total Estimado: R$ ${total.toFixed(2).replace('.', ',')}*\n`;
    text += `\nPodem me informar sobre o tempo para entrega/retirada no Centro? Obrigado!`;

    const encodedText = encodeURIComponent(text);
    window.open(`https://wa.me/5541999999999?text=${encodedText}`, '_blank');
}

function showToast(message) {
    const toast = document.getElementById('toast');
    document.getElementById('toast-message').textContent = message;
    toast.classList.remove('hidden');

    setTimeout(() => {
        toast.classList.add('hidden');
    }, 3000);
}
