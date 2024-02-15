const initialState = {
  categories: [
    { id: 'bed', name: 'Bed' },
    { id: 'chair', name: 'Chair' },
    { id: 'sofa', name: 'Sofa' },
    { id: 'table', name: 'Table' },
    { id: 'dining', name: 'Dining' },
  ],
  products: [
    {
      id: 'aenean-ru-bristique-1',
      name: 'Aenean Ru Bristique 1',
      category: 'bed',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      isFavorite: false,
      isCompare: false,
      image: process.env.PUBLIC_URL + '/images/products/bed_1.jpg',
    },
    {
      id: 'aenean-ru-bristique-2',
      name: 'Aenean Ru Bristique 2',
      category: 'bed',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      isFavorite: true,
      isCompare: false,
      image: process.env.PUBLIC_URL + '/images/products/bed_2.jpg',
    },
    {
      id: 'aenean-ru-bristique-3',
      name: 'Aenean Ru Bristique 3',
      category: 'bed',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      isFavorite: false,
      isCompare: true,
      image: process.env.PUBLIC_URL + '/images/products/bed_3.jpg',
    },
    {
      id: 'aenean-ru-bristique-4',
      name: 'Aenean Ru Bristique 4',
      category: 'bed',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      isFavorite: true,
      isCompare: true,
      image: process.env.PUBLIC_URL + '/images/products/bed_4.jpg',
    },
    {
      id: 'aenean-ru-bristique-5',
      name: 'Aenean Ru Bristique 5',
      category: 'bed',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      isFavorite: false,
      isCompare: false,
      image: process.env.PUBLIC_URL + '/images/products/bed_5.jpg',
    },
    {
      id: 'aenean-ru-bristique-6',
      name: 'Aenean Ru Bristique 6',
      category: 'bed',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      isFavorite: true,
      isCompare: true,
      image: process.env.PUBLIC_URL + '/images/products/bed_6.jpg',
    },
    {
      id: 'aenean-ru-bristique-7',
      name: 'Aenean Ru Bristique 7',
      category: 'bed',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      isFavorite: false,
      isCompare: true,
      image: process.env.PUBLIC_URL + '/images/products/bed_7.jpg',
    },
    {
      id: 'aenean-ru-bristique-8',
      name: 'Aenean Ru Bristique 8',
      category: 'bed',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      isFavorite: true,
      isCompare: false,
      image: process.env.PUBLIC_URL + '/images/products/bed_8.jpg',
    },
    {
      id: 'aenean-ru-bristique-9',
      name: 'Aenean Ru Bristique 9',
      category: 'bed',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      isFavorite: true,
      isCompare: false,
      image: process.env.PUBLIC_URL + '/images/products/bed_2.jpg',
    },
    {
      id: 'aenean-ru-bristique-10',
      name: 'Aenean Ru Bristique 10',
      category: 'bed',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      isFavorite: false,
      isCompare: true,
      image: process.env.PUBLIC_URL + '/images/products/bed_4.jpg',
    },
    {
      id: 'aenean-ru-bristique-11',
      name: 'Aenean Ru Bristique 11',
      category: 'bed',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      isFavorite: true,
      isCompare: true,
      image: process.env.PUBLIC_URL + '/images/products/bed_6.jpg',
    },
    {
      id: 'aenean-ru-bristique-12',
      name: 'Aenean Ru Bristique 12',
      category: 'bed',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      isFavorite: true,
      isCompare: true,
      image: process.env.PUBLIC_URL + '/images/products/bed_8.jpg',
    },
    {
      id: 'aenean-ru-bristique-13',
      name: 'Aenean Ru Bristique 13',
      category: 'bed',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      isFavorite: false,
      isCompare: true,
      image: process.env.PUBLIC_URL + '/images/products/bed_1.jpg',
    },
    {
      id: 'aenean-ru-bristique-14',
      name: 'Aenean Ru Bristique 14',
      category: 'bed',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      isFavorite: false,
      isCompare: true,
      image: process.env.PUBLIC_URL + '/images/products/bed_3.jpg',
    },
    {
      id: 'aenean-ru-bristique-15',
      name: 'Aenean Ru Bristique 15',
      category: 'bed',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      isFavorite: true,
      isCompare: false,
      image: process.env.PUBLIC_URL + '/images/products/bed_5.jpg',
    },
    {
      id: 'aenean-ru-bristique-16',
      name: 'Aenean Ru Bristique 16',
      category: 'bed',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      isFavorite: false,
      isCompare: false,
      image: process.env.PUBLIC_URL + '/images/products/bed_7.jpg',
    },
    {
      id: 'aenean-ru-bristique-17',
      name: 'Aenean Ru Bristique 17',
      category: 'bed',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      isFavorite: false,
      isCompare: true,
      image: process.env.PUBLIC_URL + '/images/products/bed_1.jpg',
    },
    {
      id: 'aenean-ru-bristique-18',
      name: 'Aenean Ru Bristique 18',
      category: 'bed',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      isFavorite: false,
      isCompare: true,
      image: process.env.PUBLIC_URL + '/images/products/bed_4.jpg',
    },
    {
      id: 'aenean-ru-bristique-19',
      name: 'Aenean Ru Bristique 19',
      category: 'bed',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      isFavorite: false,
      isCompare: true,
      image: process.env.PUBLIC_URL + '/images/products/bed_6.jpg',
    },
    {
      id: 'aenean-ru-bristique-20',
      name: 'Aenean Ru Bristique 20',
      category: 'bed',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      isFavorite: true,
      isCompare: false,
      image: process.env.PUBLIC_URL + '/images/products/bed_5.jpg',
    },
    {
      id: 'aenean-ru-bristique-21',
      name: 'Aenean Ru Bristique 21',
      category: 'bed',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      isFavorite: false,
      isCompare: false,
      image: process.env.PUBLIC_URL + '/images/products/bed_8.jpg',
    },
    {
      id: 'aenean-ru-bristique-22',
      name: 'Aenean Ru Bristique 22',
      category: 'bed',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      isFavorite: false,
      isCompare: true,
      image: process.env.PUBLIC_URL + '/images/products/bed_7.jpg',
    },
    {
      id: 'aenean-ru-bristique-23',
      name: 'Aenean Ru Bristique 23',
      category: 'bed',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      isFavorite: true,
      isCompare: false,
      image: process.env.PUBLIC_URL + '/images/products/bed_2.jpg',
    },
    {
      id: 'aenean-ru-bristique-24',
      name: 'Aenean Ru Bristique 24',
      category: 'bed',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      isFavorite: false,
      isCompare: false,
      image: process.env.PUBLIC_URL + '/images/products/bed_3.jpg',
    },
    {
      id: 'elidi-1',
      name: 'Eldi 1',
      category: 'chair',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      isFavorite: true,
      isCompare: false,
      oldPrice: 35,
      image: process.env.PUBLIC_URL + '/images/products/chair_1.jpg',
    },
    {
      id: 'elidi-2',
      name: 'Eldi 2',
      category: 'chair',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      isFavorite: false,
      isCompare: false,
      image: process.env.PUBLIC_URL + '/images/products/chair_2.jpg',
    },
    {
      id: 'elidi-3',
      name: 'Eldi 3',
      category: 'chair',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      isFavorite: true,
      isCompare: false,
      image: process.env.PUBLIC_URL + '/images/products/chair_3.jpg',
    },
    {
      id: 'madera-1',
      name: 'Madera 1',
      category: 'sofa',
      price: 20,
      stars: 4,
      promo: 'sale',
      newFurniture: true,
      isFavorite: false,
      isCompare: false,
      oldPrice: 25,
      image: process.env.PUBLIC_URL + '/images/products/sofa_1.jpg',
    },
    {
      id: 'madera-2',
      name: 'Madera 2',
      category: 'sofa',
      price: 20,
      stars: 4,
      promo: 'sale',
      newFurniture: true,
      isFavorite: false,
      isCompare: false,
      image: process.env.PUBLIC_URL + '/images/products/sofa_2.jpg',
    },
    {
      id: 'madera-3',
      name: 'Madera 3',
      category: 'sofa',
      price: 20,
      stars: 4,
      promo: 'sale',
      newFurniture: true,
      isFavorite: true,
      isCompare: false,
      oldPrice: 25,
      image: process.env.PUBLIC_URL + '/images/products/sofa_3.jpg',
    },
    {
      id: 'madera-4',
      name: 'Madera 4',
      category: 'sofa',
      price: 20,
      stars: 4,
      promo: 'sale',
      newFurniture: true,
      isFavorite: true,
      isCompare: false,
      oldPrice: 25,
      image: process.env.PUBLIC_URL + '/images/products/sofa_4.jpg',
    },
    {
      id: 'madera-5',
      name: 'Madera 5',
      category: 'sofa',
      price: 20,
      stars: 4,
      promo: 'sale',
      newFurniture: true,
      isFavorite: false,
      isCompare: false,
      image: process.env.PUBLIC_URL + '/images/products/sofa_5.jpg',
    },
    {
      id: 'madera-6',
      name: 'Madera 6',
      category: 'sofa',
      price: 20,
      stars: 4,
      promo: 'sale',
      newFurniture: true,
      isFavorite: false,
      isCompare: false,
      oldPrice: 25,
      image: process.env.PUBLIC_URL + '/images/products/sofa_6.jpg',
    },
    {
      id: 'madera-7',
      name: 'Madera 7',
      category: 'sofa',
      price: 20,
      stars: 4,
      promo: 'sale',
      newFurniture: true,
      isFavorite: true,
      isCompare: false,
      image: process.env.PUBLIC_URL + '/images/products/sofa_7.jpg',
    },
    {
      id: 'madera-8',
      name: 'Madera 8',
      category: 'sofa',
      price: 20,
      stars: 4,
      promo: 'sale',
      newFurniture: true,
      isFavorite: false,
      isCompare: false,
      oldPrice: 25,
      image: process.env.PUBLIC_URL + '/images/products/sofa_8.jpg',
    },
    {
      id: 'madera-9',
      name: 'Madera 9',
      category: 'sofa',
      price: 20,
      stars: 4,
      promo: 'sale',
      newFurniture: true,
      isFavorite: true,
      isCompare: false,
      image: process.env.PUBLIC_URL + '/images/products/sofa_9.jpg',
    },
    {
      id: 'tarsele-1',
      name: 'Tarsele 1',
      category: 'table',
      price: 25,
      stars: 5,
      promo: 'sale',
      newFurniture: true,
      isFavorite: false,
      isCompare: false,
      oldPrice: 30,
      image: process.env.PUBLIC_URL + '/images/products/table_1.jpg',
    },
    {
      id: 'tarsele-2',
      name: 'Tarsele 2',
      category: 'table',
      price: 25,
      stars: 5,
      promo: 'sale',
      newFurniture: true,
      isFavorite: true,
      isCompare: false,
      image: process.env.PUBLIC_URL + '/images/products/table_2.jpg',
    },
    {
      id: 'tarsele-3',
      name: 'Tarsele 3',
      category: 'table',
      price: 25,
      stars: 5,
      promo: 'sale',
      newFurniture: true,
      isFavorite: false,
      isCompare: false,
      image: process.env.PUBLIC_URL + '/images/products/table_3.jpg',
    },
    {
      id: 'tarsele-4',
      name: 'Tarsele 4',
      category: 'table',
      price: 25,
      stars: 5,
      promo: 'sale',
      newFurniture: true,
      isFavorite: true,
      isCompare: false,
      oldPrice: 30,
      image: process.env.PUBLIC_URL + '/images/products/table_4.jpg',
    },
    {
      id: 'tarsele-5',
      name: 'Tarsele 5',
      category: 'table',
      price: 25,
      stars: 5,
      promo: 'sale',
      newFurniture: true,
      isFavorite: false,
      isCompare: false,
      image: process.env.PUBLIC_URL + '/images/products/table_5.jpg',
    },
    {
      id: 'Scandi 1',
      name: 'Scandi 1',
      category: 'dining',
      price: 50,
      stars: 5,
      promo: 'sale',
      newFurniture: true,
      isFavorite: false,
      isCompare: false,
      oldPrice: 60,
      image: process.env.PUBLIC_URL + '/images/products/dining_1.jpg',
    },
    {
      id: 'Scandi 2',
      name: 'Scandi 2',
      category: 'dining',
      price: 50,
      stars: 5,
      promo: 'sale',
      newFurniture: true,
      isFavorite: false,
      isCompare: false,
      image: process.env.PUBLIC_URL + '/images/products/dining_2.jpg',
    },
    {
      id: 'Scandi 3',
      name: 'Scandi 3',
      category: 'dining',
      price: 50,
      stars: 5,
      promo: 'sale',
      newFurniture: true,
      isFavorite: true,
      isCompare: false,
      image: process.env.PUBLIC_URL + '/images/products/dining_3.jpg',
    },
    {
      id: 'Scandi 4',
      name: 'Scandi 4',
      category: 'dining',
      price: 50,
      stars: 5,
      promo: 'sale',
      newFurniture: true,
      isFavorite: false,
      isCompare: false,
      oldPrice: 60,
      image: process.env.PUBLIC_URL + '/images/products/dining_4.jpg',
    },
    {
      id: 'Scandi 5',
      name: 'Scandi 5',
      category: 'dining',
      price: 50,
      stars: 5,
      promo: 'sale',
      newFurniture: true,
      isFavorite: true,
      isCompare: false,
      image: process.env.PUBLIC_URL + '/images/products/dining_5.jpg',
    },
    {
      id: 'Scandi 6',
      name: 'Scandi 6',
      category: 'dining',
      price: 50,
      stars: 5,
      promo: 'sale',
      newFurniture: true,
      isFavorite: false,
      isCompare: false,
      oldPrice: 60,
      image: process.env.PUBLIC_URL + '/images/products/dining_6.jpg',
    },
    {
      id: 'Scandi 7',
      name: 'Scandi 7',
      category: 'dining',
      price: 50,
      stars: 5,
      promo: 'sale',
      newFurniture: true,
      isFavorite: false,
      isCompare: false,
      image: process.env.PUBLIC_URL + '/images/products/dining_7.jpg',
    },
    {
      id: 'Scandi 8',
      name: 'Scandi 8',
      category: 'dining',
      price: 50,
      stars: 5,
      promo: 'sale',
      newFurniture: true,
      isFavorite: false,
      isCompare: false,
      image: process.env.PUBLIC_URL + '/images/products/dining_8.jpg',
    },
    {
      id: 'Scandi 9',
      name: 'Scandi 9',
      category: 'dining',
      price: 50,
      stars: 5,
      promo: 'sale',
      newFurniture: true,
      isFavorite: true,
      isCompare: false,
      oldPrice: 60,
      image: process.env.PUBLIC_URL + '/images/products/dining_9.jpg',
    },
    {
      id: 'Scandi 10',
      name: 'Scandi 10',
      category: 'dining',
      price: 50,
      stars: 5,
      promo: 'sale',
      newFurniture: true,
      isFavorite: true,
      isCompare: false,
      image: process.env.PUBLIC_URL + '/images/products/dining_10.jpg',
    },
    {
      id: 'Scandi 11',
      name: 'Scandi 11',
      category: 'dining',
      price: 50,
      stars: 5,
      promo: 'sale',
      newFurniture: true,
      isFavorite: false,
      isCompare: false,
      image: process.env.PUBLIC_URL + '/images/products/dining_11.jpg',
    },
    {
      id: 'Scandi 12',
      name: 'Scandi 12',
      category: 'dining',
      price: 50,
      stars: 5,
      promo: 'sale',
      newFurniture: true,
      isFavorite: false,
      isCompare: false,
      image: process.env.PUBLIC_URL + '/images/products/dining_12.jpg',
    },
  ],
  cart: {
    products: [],
  },
};

export default initialState;
