const Schemas = require("../Schemas/mongooseSchema");

const getAllPizzas = async () => {
  const resp = await Schemas.Pizzas.find();
  return resp;
};

module.exports = {
  getAllPizzas,
};
