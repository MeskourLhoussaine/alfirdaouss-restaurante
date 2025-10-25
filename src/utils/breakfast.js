// src/utils/data/pizzas.js
const pizzas = [
  {
    id: 1,
    name: 'MARGHERITA',
    price: '40 DH',
    ingredients: ['Sauce tomate', 'Mozzarella', 'Basilic frais', "Huile d'olive"],
    image: require('../utils/images/Margherita-Pizza.jpg'),
    description: 'Une pizza classique italienne simple et savoureuse.'
  },
  {
    id: 2,
    name: 'THON',
    price: '50 DH',
    ingredients: ['Sauce tomate', 'Mozzarella', 'Thon', 'Oignons rouges', 'Origan'],
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
      'Sauce tomate',
      'Mozzarella',
      'Viande hachée assaisonnée',
      'Oignons',
      'Poivrons',
      'Origan'
    ],
    image: require('../utils/images/pizza-viand-hache.jpeg'),
    description: 'Une pizza généreuse à la viande hachée et aux épices douces.'
  },
  {
    id: 5,
    name: 'DINDE',
    price: '55 DH',
    ingredients: ['Sauce tomate', 'Mozzarella', 'Émincés de dinde', 'Champignons', 'Olives vertes'],
    image: require('../utils/images/pizza-dinde.jpg'),
    description: 'Une pizza légère et savoureuse à la dinde et aux champignons.'
  },
  {
    id: 6,
    name: 'MIXTE',
    price: '60 DH',
    ingredients: ['Sauce tomate', 'Mozzarella', 'Viande hachée', 'Thon', 'Poivrons', 'Oignons'],
    image: require('../utils/images/pizza-mixte.jpg'),
    description: 'Un mélange gourmand terre et mer pour les indécis.'
  },
  {
    id: 7,
    name: 'NAPOLITAINE',
    price: '60 DH',
    ingredients: ['Sauce tomate', 'Mozzarella', 'Anchois', 'Câpres', 'Olives noires', 'Origan'],
    image: require('../utils/images/pizza-napolitaine.jpg'),
    description: 'Une pizza typique du sud de l’Italie au goût prononcé.'
  },
  {
    id: 8,
    name: 'QUATRE SAISONS',
    price: '70 DH',
    ingredients: [
      'Sauce tomate',
      'Mozzarella',
      'Jambon',
      'Champignons',
      'Artichauts',
      'Olives noires'
    ],
    image: require('../utils/images/Pizzeria-4-saisons.jpg'),
    description: 'Une pizza en quatre parties pour quatre fois plus de plaisir.'
  },
  {
    id: 9,
    name: 'CALZONE',
    price: '70 DH',
    ingredients: ['Sauce tomate', 'Mozzarella', 'Jambon', 'Œuf', 'Champignons'],
    image: require('../utils/images/pizza-palzon.jpeg'),
    description: 'Une pizza pliée italienne, fondante et bien garnie.'
  },
  {
    id: 10,
    name: 'FRUITS DE MER',
    price: '80 DH',
    ingredients: ['Sauce tomate', 'Mozzarella', 'Calamars', 'Crevettes', 'Moules', 'Persil frais'],
    image: require('../utils/images/fruit-mer.png'),
    description: 'Une pizza marine pour les amateurs de fruits de mer.'
  }
    
];

export default pizzas;
