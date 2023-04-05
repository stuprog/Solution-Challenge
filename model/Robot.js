const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const robotSchema = new Schema(
  {
    // mongo works with schema (entity)
    ID: {
      type: String,
    },
    name: {
      type: String,
    },
    lastupdate: {
      type: String,
    },
    // status: {
    //   type: String,
    // },
    creationdate: {
      type: String,
    },
    warranty: {
      type: String,
    },
  },
  {
    collection: "robot",
  }
);

const Robot = mongoose.model("Robot", robotSchema);
module.exports = {Robot};
