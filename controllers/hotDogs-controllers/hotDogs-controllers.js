const hotDogsMethod = require("../../models/hotDogs/hotDogs");
const { ControllerWrapper } = require("../../Helpers");
const getHotDogs = async (req, res) => {
  const products = await hotDogsMethod.getAllHotDogs();
  res.json({
    status: "success",
    code: 200,
    products,
  });
};

module.exports = {
  getHotDogs: ControllerWrapper(getHotDogs),
};
