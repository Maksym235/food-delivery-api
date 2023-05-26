const Joi = require("joi");
Joi.objectId = require("joi-objectid")(Joi);

const orderSchema = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().required(),
  phone: Joi.string().required(),
  address: Joi.string().required(),
  selected: Joi.array().items({
    _id: Joi.objectId().required(),
    name: Joi.string().required(),
    price: Joi.number().required(),
    quantity: Joi.number().required(),
  }),
});

const schemas = {
  orderSchema,
};

module.exports = schemas;
