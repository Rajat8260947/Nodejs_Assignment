
const express = require('express');
const app = express();
const port = 3000; 


const menProducts = [
  {
    id: 1,
    name: 'Men\'s Shirt',
    price: 1000
  },
  {
    id: 2,
    name: 'Men\'s Jeans',
    price: 2000
  },
  {
    id: 3,
    name: 'Men\'s Shoes',
    price: 3000
  },
  {
    id: 4,
    name: 'Men\'s Watch',
    price: 4000
  },
  {
    id: 5,
    name: 'Men\'s Belt',
    price: 500
  },
  {
    id: 6,
    name: 'Men\'s Wallet',
    price: 600
  },
  {
    id: 7,
    name: 'Men\'s Sunglasses',
    price: 700
  },
  {
    id: 8,
    name: 'Men\'s Cap',
    price: 800
  },
  {
    id: 9,
    name: 'Men\'s T-shirt',
    price: 900
  },
  {
    id: 10,
    name: 'Men\'s Shorts',
    price: 1000
  }
 
];

const womenProducts = [
  {
    id: 11,
    name: 'Women\'s Kurti',
    price: 1000
  },
  {
    id: 12,
    name: 'Women\'s Saree',
    price: 2000
  },
  {
    id: 13,
    name: 'Women\'s Dress',
    price: 3000
  },
  {
    id: 14,
    name: 'Women\'s Shoes',
    price: 4000
  },
  {
    id: 15,
    name: 'Women\'s Bag',
    price: 500
  },
  {
    id: 16,
    name: 'Women\'s Jewellery',
    price: 600
  },
  {
    id: 17,
    name: 'Women\'s Sunglasses',
    price: 700
  },
  {
    id: 18,
    name: 'Women\'s Scarf',
    price: 800
  },
  {
    id: 19,
    name: 'Women\'s Top',
    price: 900
  },
  {
    id: 20,
    name: 'Women\'s Skirt',
    price: 1000
  }

];

app.get('/', (req, res) => {
  res.send('Welcome to Men & Women Dummy Data');
});

app.get('/men', (req, res) => {
  res.json(menProducts);
});

app.get('/women', (req, res) => {
  res.json(womenProducts);
});

app.get('/other', (req, res) => {
  res.status(404).send('Page not found');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
