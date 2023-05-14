const { connect, connection, set } = require("mongoose")
set("strictQuery", false)

connect("mongodb://localhost/socialNetwork", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})

module.exports = connection