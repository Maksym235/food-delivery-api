const express = require("express");
const app = express();
const cors = require("cors");

const allShopsRouter = require("./routes/allShops/allShops");
const burgersRouter = require("./routes/burgers/burgers");
const hotDogsRouter = require("./routes/hotDogs/hotDogs");
const pizzaRouter = require("./routes/pizzas/pizzas");
const ordersRouter = require("./routes/orders/orders");

app.use(cors());
app.use(express.json());

app.use("/allShops", allShopsRouter);
app.use("/burgers", burgersRouter);
app.use("/pizzas", pizzaRouter);
app.use("/hotDogs", hotDogsRouter);
app.use("/orders", ordersRouter);

app.use((req, res) => {
  res.status(404).json({ message: "Not found" });
});

app.use((err, req, res, next) => {
  res.status(500).json({ message: err.message });
});

module.exports = app;
