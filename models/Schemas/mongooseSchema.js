const { Schema, model } = require("mongoose");

const { handlerMongooseError } = require("../../Helpers");

const BurgersSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    quantity: {
      type: Number,
      required: true,
    },
  },
  { versionKey: false, timestamps: true }
);

const Burgers = model("tasty_burgers", BurgersSchema);

const PizzasSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    quantity: {
      type: Number,
      required: true,
    },
  },
  { versionKey: false, timestamps: true }
);

const Pizzas = model("italian_pizzas", PizzasSchema);

const HotDogsSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    quantity: {
      type: Number,
      required: true,
    },
  },
  { versionKey: false, timestamps: true }
);

const HotDogs = model("best_hot_dogs", HotDogsSchema);

const OrdersSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    selected: {
      type: [
        {
          _id: {
            type: String,
            required: true,
          },
          name: {
            type: String,
            required: true,
          },
          price: {
            type: Number,
            required: true,
          },
          quantity: {
            type: Number,
            required: true,
          },
        },
      ],
    },
  },
  { versionKey: false, timestamps: true }
);
// const SearchOrderSchema = new Schema({
//   email: {
//     type: String,
//   },
//   phone: {
//     type: String,
//   },
// });

// const SearchOrder = model("orders", SearchOrderSchema);

const Orders = model("orders", OrdersSchema);

module.exports = {
  Burgers,
  Pizzas,
  HotDogs,
  Orders,
};
