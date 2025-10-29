// src/utils/data/tacos.js
const tacos = [
  {
    id: 1,
    name: 'TACOS CLASSIQUE',
    price: '40 DH',
    ingredients: [
      { name: "Tortilla", icon: "bread" },
      { name: "Viande hachée", icon: "chicken" },
      { name: "Frites", icon: "fries" },
      { name: "Fromage", icon: "cheese" },
      { name: "Sauce blanche", icon: "sauce" }
    ],
    image: require('../utils/images/tacos.png'),
    description: 'Un tacos simple et savoureux avec viande hachée et sauce blanche.'
  },
  {
    id: 2,
    name: 'TACOS POULET',
    price: '45 DH',
    ingredients: [
      { name: "Tortilla", icon: "bread" },
      { name: "Poulet mariné", icon: "chicken" },
      { name: "Frites", icon: "fries" },
      { name: "Fromage", icon: "cheese" },
      { name: "Sauce samouraï", icon: "sauce" }
    ],
    image: require('../utils/images/tacos.png'),
    description: 'Un tacos gourmand garni de poulet mariné et de sauce samouraï.'
  },
  {
    id: 3,
    name: 'TACOS MIXTE',
    price: '50 DH',
    ingredients: [
      { name: "Tortilla", icon: "bread" },
      { name: "Poulet", icon: "chicken" },
      { name: "Viande hachée", icon: "chicken" },
      { name: "Frites", icon: "fries" },
      { name: "Fromage", icon: "cheese" },
      { name: "Sauce fromagère", icon: "sauce" }
    ],
    image: require('../utils/images/tacos.png'),
    description: 'Le meilleur des deux mondes : poulet et viande hachée dans un tacos fondant.'
  },
  {
    id: 4,
    name: 'TACOS CORDON BLEU',
    price: '55 DH',
    ingredients: [
      { name: "Tortilla", icon: "bread" },
      { name: "Cordon bleu", icon: "chicken" },
      { name: "Frites", icon: "fries" },
      { name: "Fromage", icon: "cheese" },
      { name: "Sauce barbecue", icon: "sauce" }
    ],
    image: require('../utils/images/tacos.png'),
    description: 'Un tacos croustillant au cordon bleu et à la sauce barbecue.'
  },
  {
    id: 5,
    name: 'TACOS MERGUEZ',
    price: '50 DH',
    ingredients: [
      { name: "Tortilla", icon: "bread" },
      { name: "Merguez", icon: "chicken" },
      { name: "Frites", icon: "fries" },
      { name: "Fromage", icon: "cheese" },
      { name: "Sauce algérienne", icon: "sauce" }
    ],
    image: require('../utils/images/tacos.png'),
    description: 'Un tacos épicé à la merguez et à la sauce algérienne relevée.'
  },
  {
    id: 6,
    name: 'TACOS FRUITS DE MER',
    price: '65 DH',
    ingredients: [
      { name: "Tortilla", icon: "bread" },
      { name: "Crevettes", icon: "fish" },
      { name: "Calamars", icon: "fish" },
      { name: "Frites", icon: "fries" },
      { name: "Sauce tartare", icon: "sauce" }
    ],
    image: require('../utils/images/tacos.png'),
    description: 'Un tacos original aux fruits de mer pour les amateurs de saveurs marines.'
  },
  {
    id: 7,
    name: 'TACOS XXL',
    price: '70 DH',
    ingredients: [
      { name: "Double tortilla", icon: "bread" },
      { name: "Poulet", icon: "chicken" },
      { name: "Viande hachée", icon: "chicken" },
      { name: "Frites", icon: "fries" },
      { name: "Double fromage", icon: "cheese" },
      { name: "Sauce au choix", icon: "sauce" }
    ],
    image: require('../utils/images/tacos.png'),
    description: 'Un tacos géant pour les gros appétits, deux viandes et beaucoup de fromage.'
  }
];

export default tacos;
