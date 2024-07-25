const express = require("express");
const router = express.Router();

// Mock data
const products = [
  {
    product_id: 1,
    name: "Product_1",
    desc: "Description 1",
    price: 5.99,
    quantity: 10,
  },
  {
    product_id: 2,
    name: "Product_2",
    desc: "Description 2",
    price: 15.0,
    quantity: 20,
  },
  {
    product_id: 3,
    name: "Product_3",
    desc: "Description 3",
    price: 25.0,
    quantity: 30,
  },
];

// GET all products
router.get("/products", (req, res) => {
  res.json(products);
});

// router.post
router.post("/products", (req, res) => {
  const newProduct = req.body;
  products.push(newProduct);
  res.json(newProduct);
});

// router.put
router.put("/products/:product_id", (req, res) => {
  const product_id = req.params.product_id;
  const newProduct = req.body;
  const index = products.findIndex(
    (product) => product.product_id === parseInt(product_id)
  );
  products[index] = newProduct;
  res.json(newProduct);
});

// router.patch
router.patch("/products/:product_id", (req, res) => {
  const product_id = req.params.product_id;
  const newProduct = req.body;
  const index = products.findIndex(
    (product) => product.product_id === parseInt(product_id)
  );
  products[index] = { ...products[index], ...newProduct };
  res.json(products[index]);
});

// router.delete
router.delete("/products/:product_id", (req, res) => {
  const product_id = req.params.product_id;
  const index = products.findIndex(
    (product) => product.product_id === parseInt(product_id)
  );
  products.splice(index, 1);
  res.json({ message: `Product ${product_id} has been deleted` });
});

module.exports = router;
