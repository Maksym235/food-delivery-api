const Schemas = require("../Schemas/mongooseSchema");
const addOrder = async (body) => {
  const newOrder = {
    ...body,
  };
  const order = await Schemas.Orders.create(newOrder);
  return order;
};
const getOrder = async (body) => {
  const { email, phone } = body;
  const order = await Schemas.Orders.find({ email: email, phone: phone });
  return order;
};

module.exports = addOrder;
