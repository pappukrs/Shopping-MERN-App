// server.js

const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());
app.use(express.json());

const products = [
  {
    id: 1,
    name: "Product 1",
    price: 10.0,
    img: "https://cdn.shopify.com/s/files/1/0613/8622/7909/products/PimaJerseyShirtBlue-2_3c3f397f-c369-4f7c-941c-236c5b66f82a_1800x1800.jpg?v=1654594444",
  },
  {
    id: 2,
    name: "Product 2",
    price: 20.0,
    img: "https://m.media-amazon.com/images/I/91Pka1f3yKS._UX679_.jpg",
  },
  {
    id: 3,
    name: "Product 3",
    price: 30.0,
    img: "https://img5.gadgetsnow.com/gd/images/products/additional/large/G391967_View_1/mobiles/smartphones/realme-narzo-50i-prime-64-gb-mint-green-4-gb-ram-.jpg",
  },
  {
    id: 4,
    name: "Product 4",
    price: 70.0,
    img: "https://cdn.shopify.com/s/files/1/0613/8622/7909/products/PimaJerseyShirtBlue-2_3c3f397f-c369-4f7c-941c-236c5b66f82a_1800x1800.jpg?v=1654594444",
  },
  {
    id: 5,
    name: "Product 5",
    price: 80.0,
    img: "https://m.media-amazon.com/images/I/91Pka1f3yKS._UX679_.jpg",
  },
  {
    id: 6,
    name: "Product 6",
    price: 40.0,
    img: "https://img5.gadgetsnow.com/gd/images/products/additional/large/G391967_View_1/mobiles/smartphones/realme-narzo-50i-prime-64-gb-mint-green-4-gb-ram-.jpg",
  },
  {
    id: 7,
    name: "Product 7",
    price: 70.0,
    img: "https://cdn.shopify.com/s/files/1/0613/8622/7909/products/PimaJerseyShirtBlue-2_3c3f397f-c369-4f7c-941c-236c5b66f82a_1800x1800.jpg?v=1654594444",
  },
  {
    id: 8,
    name: "Product 8",
    price: 80.0,
    img: "https://m.media-amazon.com/images/I/91Pka1f3yKS._UX679_.jpg",
  },
  {
    id: 9,
    name: "Product 9",
    price: 70.0,
    img: "https://img5.gadgetsnow.com/gd/images/products/additional/large/G391967_View_1/mobiles/smartphones/realme-narzo-50i-prime-64-gb-mint-green-4-gb-ram-.jpg",
  },
  {
    id: 10,
    name: "Product 10",
    price: 10.0,
    img: "https://cdn.shopify.com/s/files/1/0613/8622/7909/products/PimaJerseyShirtBlue-2_3c3f397f-c369-4f7c-941c-236c5b66f82a_1800x1800.jpg?v=1654594444",
  },
  {
    id: 11,
    name: "Product 11",
    price: 11.0,
    img: "https://m.media-amazon.com/images/I/91Pka1f3yKS._UX679_.jpg",
  },
  {
    id: 12,
    name: "Product 12",
    price: 30.0,
    img: "https://img5.gadgetsnow.com/gd/images/products/additional/large/G391967_View_1/mobiles/smartphones/realme-narzo-50i-prime-64-gb-mint-green-4-gb-ram-.jpg",
  },
  {
    id: 13,
    name: "Product 13",
    price: 100.0,
    img: "https://cdn.shopify.com/s/files/1/0613/8622/7909/products/PimaJerseyShirtBlue-2_3c3f397f-c369-4f7c-941c-236c5b66f82a_1800x1800.jpg?v=1654594444",
  },
  {
    id: 14,
    name: "Product 14",
    price: 20.0,
    img: "https://m.media-amazon.com/images/I/91Pka1f3yKS._UX679_.jpg",
  },
  {
    id: 15,
    name: "Product 15",
    price: 30.0,
    img: "https://img5.gadgetsnow.com/gd/images/products/additional/large/G391967_View_1/mobiles/smartphones/realme-narzo-50i-prime-64-gb-mint-green-4-gb-ram-.jpg",
  },
  {
    id: 16,
    name: "Product 17",
    price: 10.0,
    img: "https://cdn.shopify.com/s/files/1/0613/8622/7909/products/PimaJerseyShirtBlue-2_3c3f397f-c369-4f7c-941c-236c5b66f82a_1800x1800.jpg?v=1654594444",
  },
  {
    id: 18,
    name: "Product 18",
    price: 20.0,
    img: "https://m.media-amazon.com/images/I/91Pka1f3yKS._UX679_.jpg",
  },
  {
    id: 19,
    name: "Product 19",
    price: 30.0,
    img: "https://img5.gadgetsnow.com/gd/images/products/additional/large/G391967_View_1/mobiles/smartphones/realme-narzo-50i-prime-64-gb-mint-green-4-gb-ram-.jpg",
  },
  {
    id: 20,
    name: "Product 21",
    price: 10.0,
    img: "https://cdn.shopify.com/s/files/1/0613/8622/7909/products/PimaJerseyShirtBlue-2_3c3f397f-c369-4f7c-941c-236c5b66f82a_1800x1800.jpg?v=1654594444",
  },
  {
    id: 22,
    name: "Product 22",
    price: 20.0,
    img: "https://m.media-amazon.com/images/I/91Pka1f3yKS._UX679_.jpg",
  },
  {
    id: 23,
    name: "Product 23",
    price: 30.0,
    img: "https://img5.gadgetsnow.com/gd/images/products/additional/large/G391967_View_1/mobiles/smartphones/realme-narzo-50i-prime-64-gb-mint-green-4-gb-ram-.jpg",
  },
  {
    id: 24,
    name: "Product 24",
    price: 10.0,
    img: "https://cdn.shopify.com/s/files/1/0613/8622/7909/products/PimaJerseyShirtBlue-2_3c3f397f-c369-4f7c-941c-236c5b66f82a_1800x1800.jpg?v=1654594444",
  },
  {
    id: 25,
    name: "Product 25",
    price: 20.0,
    img: "https://m.media-amazon.com/images/I/91Pka1f3yKS._UX679_.jpg",
  },
  {
    id: 26,
    name: "Product 26",
    price: 30.0,
    img: "https://img5.gadgetsnow.com/gd/images/products/additional/large/G391967_View_1/mobiles/smartphones/realme-narzo-50i-prime-64-gb-mint-green-4-gb-ram-.jpg",
  },
  {
    id: 27,
    name: "Product 27",
    price: 10.0,
    img: "https://cdn.shopify.com/s/files/1/0613/8622/7909/products/PimaJerseyShirtBlue-2_3c3f397f-c369-4f7c-941c-236c5b66f82a_1800x1800.jpg?v=1654594444",
  },
  {
    id: 28,
    name: "Product 28",
    price: 20.0,
    img: "https://m.media-amazon.com/images/I/91Pka1f3yKS._UX679_.jpg",
  },
  {
    id: 29,
    name: "Product 29",
    price: 30.0,
    img: "https://img5.gadgetsnow.com/gd/images/products/additional/large/G391967_View_1/mobiles/smartphones/realme-narzo-50i-prime-64-gb-mint-green-4-gb-ram-.jpg",
  },
  {
    id: 30,
    name: "Product 30",
    price: 10.0,
    img: "https://cdn.shopify.com/s/files/1/0613/8622/7909/products/PimaJerseyShirtBlue-2_3c3f397f-c369-4f7c-941c-236c5b66f82a_1800x1800.jpg?v=1654594444",
  },
  {
    id: 31,
    name: "Product 31",
    price: 20.0,
    img: "https://m.media-amazon.com/images/I/91Pka1f3yKS._UX679_.jpg",
  },
  {
    id: 32,
    name: "Product 32",
    price: 30.0,
    img: "https://img5.gadgetsnow.com/gd/images/products/additional/large/G391967_View_1/mobiles/smartphones/realme-narzo-50i-prime-64-gb-mint-green-4-gb-ram-.jpg",
  },
  {
    id: 33,
    name: "Product 33",
    price: 10.0,
    img: "https://cdn.shopify.com/s/files/1/0613/8622/7909/products/PimaJerseyShirtBlue-2_3c3f397f-c369-4f7c-941c-236c5b66f82a_1800x1800.jpg?v=1654594444",
  },
  {
    id: 34,
    name: "Product 34",
    price: 20.0,
    img: "https://m.media-amazon.com/images/I/91Pka1f3yKS._UX679_.jpg",
  },
  {
    id: 35,
    name: "Product 35",
    price: 30.0,
    img: "https://img5.gadgetsnow.com/gd/images/products/additional/large/G391967_View_1/mobiles/smartphones/realme-narzo-50i-prime-64-gb-mint-green-4-gb-ram-.jpg",
  },
];

let nextOrderId = 100;
const orders = [];

app.get("/api/products", (req, res) => {
  res.json(products);
});
app.post("/api/order", (req, res) => {
  const order = {
    id: nextOrderId++,
    items: req.body.items,
  };
  orders.push(order);
  res.json(order);

  console.log(order);
});

app.listen(5000, () => {
  console.log("Server started on port 5000");
});
