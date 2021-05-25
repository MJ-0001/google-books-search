const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes/routes-index");
const app = express();
const PORT = process.env.PORT || 3001;
const logger = require("morgan");

app.use(logger("dev"));
// Configure body parsing for AJAX requests
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/public"));
}

// Add routes, both API and view
app.use(routes);

// Connect to the Mongo DB
mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost:27017/google_book_search",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
  }
);

// Start the API server
app.listen(PORT, () =>
  console.log(`Server now listening on PORT ${PORT}!`)
);
