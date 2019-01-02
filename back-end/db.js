const mongoose = require("mongoose");

module.exports = {
  connectTo: function(database = "moody", host = "localhost") {
    return mongoose.connect(`mongodb://${host}/${database}`);
  },
};
