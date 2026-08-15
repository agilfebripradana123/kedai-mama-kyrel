export const menuData = [
  // =========================
  // ⭐ 3 MENU UTAMA
  // =========================

  {
    id: 0,
    category: "Makanan",
    name: "Seblak",
    special: true,
    image: "/assets/menu/seblak.webp",
    description: "Seblak dengan pilihan paket sesuai selera.",
    variants: [
      {
        name: "Paket 1",
        price: 8000,
        description: "Seblak basic",
      },
      {
        name: "Paket 2",
        price: 12000,
        description: "Seblak dengan topping lebih lengkap",
      },
      {
        name: "Paket 3",
        price: 16000,
        description: "Seblak spesial dengan topping lengkap",
      },
    ],
    level: {
      freeUntil: 2,
      additionalPrice: 1000,
    },
  },

  {
    id: 7,
    category: "Makanan",
    name: "Mie Jebew",
    image: "/assets/menu/mie-jebew.webp",
    variants: [
      {
        name: "Porsi Kecil",
        price: 5000,
      },
      {
        name: "Porsi Besar",
        price: 10000,
      },
    ],
    level: {
      freeUntil: 2,
      additionalPrice: 1000,
    },
  },

  {
    id: 15,
    category: "Makanan",
    name: "Mie Level Syalala",
    price: 10000,
    image: "/assets/menu/mie-level-syalala.webp",
    level: {
      freeUntil: 2,
      additionalPrice: 1000,
    },
  },

  // =========================
  // 🍫 VARIAN + TOPPING
  // =========================

  {
    id: 9,
    category: "Makanan",
    name: "Cheese Roll",
    image: "/assets/menu/cheese-roll.webp",
    toppings: ["Coklat", "Strawberry", "Matcha", "Tiramisu"],
    variants: [
      {
        name: "Porsi Kecil",
        price: 5000,
      },
      {
        name: "Porsi Besar",
        price: 10000,
      },
    ],
  },

  {
    id: 10,
    category: "Makanan",
    name: "Pisang Coklat",
    image: "/assets/menu/pisang-coklat.webp",
    toppings: ["Coklat", "Strawberry", "Matcha", "Tiramisu"],
    variants: [
      {
        name: "Porsi Kecil",
        price: 5000,
      },
      {
        name: "Porsi Besar",
        price: 10000,
      },
    ],
  },

  {
    id: 11,
    category: "Makanan",
    name: "Pisang Nugget",
    image: "/assets/menu/pisang-nugget.webp",
    toppings: ["Coklat", "Strawberry", "Matcha", "Tiramisu"],
    variants: [
      {
        name: "Porsi Kecil",
        price: 5000,
      },
      {
        name: "Porsi Besar",
        price: 10000,
      },
    ],
  },

  // =========================
  // 🍽️ VARIAN SAJA
  // =========================

  {
    id: 6,
    category: "Makanan",
    name: "Sosis Jontor",
    image: "/assets/menu/sosis-jontor.webp",
    variants: [
      {
        name: "Porsi Kecil",
        price: 5000,
      },
      {
        name: "Porsi Besar",
        price: 10000,
      },
    ],
  },

  {
    id: 8,
    category: "Makanan",
    name: "Cireng Isi Ayam Suwir Chili Oil",
    image: "/assets/menu/cireng-isi-ayam-suwir-chili-oil.webp",
    variants: [
      {
        name: "Porsi Kecil",
        price: 5000,
      },
      {
        name: "Porsi Besar",
        price: 10000,
      },
    ],
  },

  // =========================
  // 🍽️ TANPA VARIAN & TOPPING
  // =========================

  {
    id: 1,
    category: "Makanan",
    name: "Kentang Goreng",
    price: 5000,
    image: "/assets/menu/kentang-goreng.webp",
  },

  {
    id: 2,
    category: "Makanan",
    name: "Basreng Jontor",
    price: 5000,
    image: "/assets/menu/basreng-jontor.webp",
  },

  {
    id: 3,
    category: "Makanan",
    name: "Mix Platter",
    price: 10000,
    image: "/assets/menu/mix-platter.webp",
  },

  {
    id: 4,
    category: "Makanan",
    name: "Bakso Ayam Jontor",
    price: 5000,
    image: "/assets/menu/bakso-ayam-jontor.webp",
  },

  {
    id: 5,
    category: "Makanan",
    name: "Bakso Sapi Jontor",
    price: 10000,
    image: "/assets/menu/bakso-sapi-jontor.webp",
  },

  {
    id: 12,
    category: "Makanan",
    name: "Ayam Geprek",
    price: 10000,
    image: "/assets/menu/ayam-geprek.webp",
  },

  {
    id: 13,
    category: "Makanan",
    name: "Nasi Goreng",
    price: 10000,
    image: "/assets/menu/nasi-goreng.webp",
  },

  {
    id: 14,
    category: "Makanan",
    name: "Bakso Tetelan",
    price: 10000,
    image: "/assets/menu/bakso-tetelan.webp",
  },

  // =========================
  // 🥤 MINUMAN
  // =========================

  {
    id: 17,
    category: "Minuman",
    name: "Es Teh Jumbo",
    image: "/assets/menu/es-teh-jumbo.webp",
    variants: [
      {
        name: "Cup Kecil",
        price: 3000,
      },
      {
        name: "Cup Besar",
        price: 4000,
      },
    ],
  },

  {
    id: 18,
    category: "Minuman",
    name: "Pop Ice",
    price: 3000,
    image: "/assets/menu/pop-ice.webp",
  },

  {
    id: 19,
    category: "Minuman",
    name: "Es Jeruk",
    price: 5000,
    image: "/assets/menu/es-jeruk.webp",
  },

  {
    id: 20,
    category: "Minuman",
    name: "Pop Ice Milky",
    price: 5000,
    image: "/assets/menu/pop-ice.webp",
  },

  {
    id: 21,
    category: "Minuman",
    name: "Es Millo",
    price: 5000,
    image: "/assets/menu/es-millo.webp",
  },

  {
    id: 22,
    category: "Minuman",
    name: "Es Chocolatos",
    price: 5000,
    image: "/assets/menu/es-chocolatos.webp",
  },
];
