const { Pool } = require("pg");

const pool = new Pool({
  user: "keyin",
  host: "localhost",
  database: "qap3fsdb",
  password: "keyin2021",
  port: 5434,
});

// Function to get all products
const getProducts = async () => {
  const result = await pool.query("SELECT * FROM products");
  return result.rows;
};

// Function to add a product
const addProduct = async (product) => {
  const { name, description, price, quantity } = product;
  await pool.query(
    "INSERT INTO products (name, description, price, quantity) VALUES ($1, $2, $3, $4)",
    [name, description, price, quantity]
  );
};

// Function to update a product
const updateProduct = async (product_id, product) => {
  const { name, description, price, quantity } = product;
  await pool.query(
    "UPDATE products SET name = $1, description = $2, price = $3, quantity = $4 WHERE product_id = $5",
    [name, description, price, quantity, product_id]
  );
};

// Function to delete a product
const deleteProduct = async (product_id) => {
  await pool.query("DELETE FROM products WHERE product_id = $1", [product_id]);
};

module.exports = {
  getProducts,
  addProduct,
  updateProduct,
  deleteProduct,
};
