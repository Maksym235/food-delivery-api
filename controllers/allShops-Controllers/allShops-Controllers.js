const getAllShops = require("../../models/allShops/allShops");
const { ControllerWrapper } = require("../../Helpers");

const getAll = async (req, res) => {
  const products = await getAllShops();
  res.json({
    status: "success",
    code: 200,
    products,
  });
};

module.exports = ControllerWrapper(getAll);
