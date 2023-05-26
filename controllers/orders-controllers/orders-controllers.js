const addOrder = require("../../models/orders/orders");
const { ControllerWrapper } = require("../../Helpers");
const createOrder = async (req, res) => {
  try {
    const order = await addOrder(req.body);
    res.json({
      status: "success",
      code: 201,
      order,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = ControllerWrapper(createOrder);
