const uri = process.env.ATLAS_URI;
const mongoose = require("mongoose");
// Connect Database
mongoose
  .connect(uri, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  })
  .then(() => console.log("Mongodb database is connected successfully:-"));
