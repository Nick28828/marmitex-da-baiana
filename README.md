# 🍲 Marmitex da Baiana

> Sabor caseiro com alma baiana

Site profissional de delivery para **Marmitex da Baiana**, construído com React, Vite, TypeScript e Tailwind CSS. O cliente finaliza o pedido diretamente pelo WhatsApp.

![Preview](preview.png)

---

## 🚀 Funcionalidades

- **Cardápio completo** — Marmitas, Pratos do Dia e Bebidas
- **Busca de produtos** — Encontre itens rapidamente
- **Carrinho de compras** — Salvo no LocalStorage (persiste ao recarregar)
- **Checkout via WhatsApp** — Mensagem formatada automaticamente
- **Status da loja** — Aberto/Fechado baseado no horário
- **100% responsivo** — Mobile-first, funciona em celular, tablet e desktop
- **Micro-animações** — Experiência fluida e profissional

---

## 📦 Stack

| Tecnologia | Uso |
|------------|-----|
| React 19 | UI Library |
| Vite | Build tool |
| TypeScript | Tipagem estática |
| Tailwind CSS 4 | Estilização |
| Lucide React | Ícones |

---

## 🛠️ Como rodar

```bash
# Clonar
git clone https://github.com/Nick28828/marmitex-da-baiana.git
cd marmitex-da-baiana

# Instalar dependências
npm install

# Rodar em desenvolvimento
npm run dev

# Build para produção
npm run build
```

---

## 📁 Estrutura do projeto

```
src/
├── components/
│   ├── Header.tsx            # Cabeçalho com logo
│   ├── SearchBar.tsx         # Barra de busca
│   ├── CategoryTabs.tsx      # Abas de categorias
│   ├── ProductCard.tsx       # Card do produto
│   ├── ProductGrid.tsx       # Grid de produtos
│   ├── CartDrawer.tsx        # Carrinho lateral (desktop)
│   ├── CartItem.tsx          # Item do carrinho
│   ├── MobileCartBar.tsx     # Barra fixa inferior (mobile)
│   ├── CheckoutModal.tsx     # Modal de finalização
│   ├── CustomerForm.tsx      # Formulário do cliente
│   ├── DeliverySelector.tsx  # Entrega ou retirada
│   ├── PaymentSelector.tsx   # Forma de pagamento
│   └── BenefitsSection.tsx   # Seção de benefícios
├── config/
│   └── store.ts              # Configurações da loja
├── contexts/
│   └── CartContext.tsx        # Contexto do carrinho
├── data/
│   └── products.ts           # Dados dos produtos
├── hooks/
│   ├── useCart.ts            # Hook do carrinho
│   └── useStoreStatus.ts    # Status aberto/fechado
├── pages/
│   └── Home.tsx              # Página principal
├── types/
│   └── index.ts              # Tipos TypeScript
└── utils/
    ├── currency.ts           # Formatação BRL
    └── whatsapp.ts           # Geração de mensagem
```

---

## ⚙️ Configuração

Edite `src/config/store.ts` para personalizar:

```typescript
export const store: StoreConfig = {
  storeName: 'Marmitex da Baiana',
  whatsappNumber: '5511999999999', // ← Seu número
  deliveryFee: 5.0,
  minimumOrder: 15.0,
  address: 'Rua das Flores, 123 - Pelourinho, Salvador - BA',
  openingHours: {
    seg: { open: '11:00', close: '15:00' },
    // ...
  },
};
```

### Imagens dos produtos

Coloque as imagens em `/public/products/`:

```
/public/products/
├── marmita-pequena.jpg
├── marmita-media.jpg
├── marmita-grande.jpg
├── feijoada.jpg
├── bife-acebolado.jpg
├── frango-grelhado.jpg
├── coca-cola.jpg
├── suco.jpg
└── agua.jpg
```

Caso as imagens não existam, um fallback elegante é exibido.

---

## 🌐 Deploy

O site está hospedado no **Netlify**:

**→ https://marmitex-da-baiana-v2.netlify.app**

Para fazer deploy manual:
```bash
npm run build
npx netlify deploy --dir=dist --prod
```

---

## 📄 Licença

Este é um projeto privado. Todos os direitos reservados.
