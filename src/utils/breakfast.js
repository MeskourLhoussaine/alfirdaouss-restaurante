// src/utils/data/pizzas.js
const pizzas = [
  {
    id: 1,
    name: 'MARGHERITA',
    price: '40 DH',
   ingredients: [
    { name: "Tomate", icon: "pizza" },
    { name: "Mozzarella", icon: "cheese" },
    { name: "Basilic", icon: "veggie" }
  ],
    image: require('../utils/images/Margherita-Pizza.jpg'),
    description: 'Une pizza classique italienne simple et savoureuse.'
  },
  {
    id: 2,
    name: 'THON',
    price: '50 DH',
   ingredients: [
      { name: "Sauce tomate", icon: "pizza" },
      { name: "Mozzarella", icon: "cheese" },
      { name: "Thon", icon: "fish" },
      { name: "Oignons rouges", icon: "veggie" },
      { name: "Origan", icon: "veggie" }
    ],
    image: require('../utils/images/pecheur_thon.jpg'),
    description: 'Une pizza gourmande au thon et oignons rouges.'
  },
  {
    id: 3,
    name: 'VÉGÉTARIENNE',
    price: '50 DH',
    ingredients: [
      'Sauce tomate',
      'Mozzarella',
      'Poivrons',
      'Champignons',
      'Olives noires',
      'Oignons',
      'Courgettes'
    ],
    image: require('../utils/images/pizza-vegetarienne.jpg'),
    description: 'Une pizza colorée pleine de légumes frais et savoureux.'
  },
  {
    id: 4,
    name: 'VIANDE HACHÉE',
    price: '55 DH',
    ingredients: [
      { name: "Sauce tomate", icon: "pizza" },
      { name: "Mozzarella", icon: "cheese" },
      { name: "Viande hachée assaisonnée", icon: "chicken" },
      { name: "Oignons", icon: "veggie" },
      { name: "Poivrons", icon: "veggie" },
      { name: "Origan", icon: "veggie" }
    ],
    image: require('../utils/images/pizza-viand-hache.jpeg'),
    description: 'Une pizza généreuse à la viande hachée et aux épices douces.'
  },
  {
    id: 5,
    name: 'DINDE',
    price: '55 DH',
   ingredients: [
      { name: "Sauce tomate", icon: "pizza" },
      { name: "Mozzarella", icon: "cheese" },
      { name: "Émincés de dinde", icon: "chicken" },
      { name: "Champignons", icon: "veggie" },
      { name: "Olives vertes", icon: "veggie" }
    ],
    image: require('../utils/images/pizza-dinde.jpg'),
    description: 'Une pizza légère et savoureuse à la dinde et aux champignons.'
  },
  {
    id: 6,
    name: 'MIXTE',
    price: '60 DH',
   ingredients: [
      { name: "Sauce tomate", icon: "pizza" },
      { name: "Mozzarella", icon: "cheese" },
      { name: "Viande hachée", icon: "chicken" },
      { name: "Thon", icon: "fish" },
      { name: "Poivrons", icon: "veggie" },
      { name: "Oignons", icon: "veggie" }
    ],
    image: require('../utils/images/pizza-mixte.jpg'),
    description: 'Un mélange gourmand terre et mer pour les indécis.'
  },
  {
    id: 7,
    name: 'NAPOLITAINE',
    price: '60 DH',
   ingredients: [
      { name: "Sauce tomate", icon: "pizza" },
      { name: "Mozzarella", icon: "cheese" },
      { name: "Anchois", icon: "fish" },
      { name: "Câpres", icon: "veggie" },
      { name: "Olives noires", icon: "veggie" },
      { name: "Origan", icon: "veggie" }
    ],
    image: require('../utils/images/pizza-napolitaine.jpg'),
    description: 'Une pizza typique du sud de l’Italie au goût prononcé.'
  },
  {
    id: 8,
    name: 'QUATRE SAISONS',
    price: '70 DH',
     ingredients: [
      { name: "Sauce tomate", icon: "pizza" },
      { name: "Mozzarella", icon: "cheese" },
      { name: "Jambon", icon: "chicken" },
      { name: "Champignons", icon: "veggie" },
      { name: "Artichauts", icon: "veggie" },
      { name: "Olives noires", icon: "veggie" }
    ],
    image: require('../utils/images/Pizzeria-4-saisons.jpg'),
    description: 'Une pizza en quatre parties pour quatre fois plus de plaisir.'
  },
  {
    id: 9,
    name: 'CALZONE',
    price: '70 DH',
   ingredients: [
      { name: "Sauce tomate", icon: "pizza" },
      { name: "Mozzarella", icon: "cheese" },
      { name: "Jambon", icon: "chicken" },
      { name: "Œuf", icon: "veggie" },
      { name: "Champignons", icon: "veggie" }
    ],
    image: require('../utils/images/pizza-palzon.jpeg'),
    description: 'Une pizza pliée italienne, fondante et bien garnie.'
  },
  {
    id: 10,
    name: 'FRUITS DE MER',
    price: '80 DH',
    ingredients: [
      { name: "Sauce tomate", icon: "pizza" },
      { name: "Mozzarella", icon: "cheese" },
      { name: "Calamars", icon: "fish" },
      { name: "Crevettes", icon: "fish" },
      { name: "Moules", icon: "fish" },
      { name: "Persil frais", icon: "veggie" }
    ],
    image: require('../utils/images/fruit-mer.png'),
    description: 'Une pizza marine pour les amateurs de fruits de mer.'
  }
    
];

export default pizzas;
