const burgerMethods = require("../../models/burgers/burgers");
const { ControllerWrapper } = require("../../Helpers");

const getAll = async (req, res) => {
  const products = await burgerMethods.getAll();

  res.json({
    status: "success",
    code: 200,
    products,
  });
};

module.exports = {
  getAll: ControllerWrapper(getAll),
};
