// --- Configuração da loja ---
const STORE = {
    whatsappNumber: '5541999999999',
    // Horário de funcionamento por dia da semana (0 = Domingo ... 6 = Sábado)
    hours: {
        0: null,
        1: { open: 8, close: 19 },
        2: { open: 8, close: 19 },
        3: { open: 8, close: 19 },
        4: { open: 8, close: 19 },
        5: { open: 8, close: 19 },
        6: { open: 8, close: 12 }
    }
};

const DAY_LABELS = ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'];

// --- Promoções por dia da semana (0 = Domingo ... 6 = Sábado) ---
const PROMOTIONS = {
    0: {
        title: 'Domingo descansando!',
        desc: 'A mercearia está fechada no domingo, mas amanhã às 8:00 estaremos de volta com os bolos caseiros quentinhos!',
        badge: 'Abrimos Segunda 8h',
        image: 'https://images.unsplash.com/photo-1517433670267-08bbd4be890f?auto=format&fit=crop&w=600&q=80',
        priceTag: 'Até Segunda!'
    },
    1: {
        title: 'Segunda do Bolo Caseiro',
        desc: 'Comece a semana mais doce! Na compra de qualquer bolo caseiro inteiro (Cuca, Fubá ou Cenoura), ganhe 15% de desconto.',
        badge: '15% OFF em Bolos',
        image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=600&q=80',
        priceTag: 'A partir de R$ 18,00'
    },
    2: {
        title: 'Terça do Combo Salgado + Refri',
        desc: '1 Coxinha cremosa ou Empadão quentinho + 1 Guaraná ou Coca caçulinha por um preço especial de lanche da tarde.',
        badge: 'Combo Lanche R$ 11,90',
        image: 'https://images.unsplash.com/photo-1626700051175-6818013e1d4f?auto=format&fit=crop&w=600&q=80',
        priceTag: 'Apenas R$ 11,90'
    },
    3: {
        title: 'Quarta dos Frios e Queijos',
        desc: '200g de Muçarela fatiada + 200g de Presunto fatiado na hora com desconto especial para o seu lanche da noite.',
        badge: 'Combo Frios Especial',
        image: 'https://images.unsplash.com/photo-1631379578550-7038263db699?auto=format&fit=crop&w=600&q=80',
        priceTag: 'Apenas R$ 19,90'
    },
    4: {
        title: 'Quinta do Café & Pão na Chapa',
        desc: 'Compre 1/2 kg de pão francês quentinho e leve 1 café passado na hora na faixa para viagem!',
        badge: 'Ganhe 1 Café Passado',
        image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=600&q=80',
        priceTag: 'Oferta do Pão'
    },
    5: {
        title: 'Sexta do Happy Hour & Tabuinha',
        desc: 'Combo Tábua do Seu Zé: Salame fatiado (150g) + Queijo Provolone ou Colonial (150g) + Azeitonas temperadas.',
        badge: 'Tábua Petisco R$ 29,90',
        image: 'https://images.unsplash.com/photo-1541529086526-db283c563270?auto=format&fit=crop&w=600&q=80',
        priceTag: 'Apenas R$ 29,90'
    },
    6: {
        title: 'Sábado de Broa & Café da Manhã',
        desc: 'Broas artesanais de milho e centeio fresquinhas saindo logo cedo às 08:00 para seu fim de semana!',
        badge: 'Broas Fresquinhas',
        image: 'https://images.unsplash.com/photo-1586444248902-2f64eddc13df?auto=format&fit=crop&w=600&q=80',
        priceTag: 'R$ 7,50 / unidade'
    }
};

// --- Catálogo de produtos ---
const PRODUCTS = [
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
