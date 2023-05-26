const Schemas = require("../Schemas/mongooseSchema");

const getAllHotDogs = async () => {
  const resp = await Schemas.HotDogs.find();
  return resp;
};
module.exports = {
  getAllHotDogs,
};
