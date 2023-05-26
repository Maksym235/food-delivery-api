const pizzaMethods = require("../../models/pizzas/pizzas");
const { ControllerWrapper } = require("../../Helpers");
const getPizzas = async (req, res) => {
  const products = await pizzaMethods.getAllPizzas();
  res.json({
    status: "success",
    code: 200,
    products,
  });
};

module.exports = {
  getPizzas: ControllerWrapper(getPizzas),
};
