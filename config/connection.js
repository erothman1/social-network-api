const { connect, connection, set } = require("mongoose")
set("strictQuery", false)

connect("mongodb://localhost/commentExample", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})

module.exports = connection