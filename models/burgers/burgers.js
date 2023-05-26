const Schemas = require("../Schemas/mongooseSchema");

const getAll = async () => {
  const resp = await Schemas.Burgers.find();
  return resp;
};

module.exports = {
  getAll,
};
