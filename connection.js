require("dotenv").config();
const mongoose = require("mongoose");

const connectionStr = `mongodb+srv://${process.env.DB_USER}:${process.env.MONGODB_PASSWORD}@cluster0.djpz5qz.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`;

mongoose
  .connect(connectionStr, { useNewUrlparser: true })
  .then(() => console.log("connected to mongodb"))
  .catch((err) => console.log(err));

mongoose.connection.on("error", (err) => {
  console.log(err);
});
