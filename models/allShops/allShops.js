const Schemas = require("../Schemas/mongooseSchema");

const getAllShops = async () => {
  const burgers = await Schemas.Burgers.find();
  const pizzas = await Schemas.Pizzas.find();
  const hotDogs = await Schemas.HotDogs.find();
  return [...burgers, ...hotDogs, ...pizzas];
};

module.exports = getAllShops;
