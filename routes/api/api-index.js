const path = require("path");
const router = require("express").Router();
const bookRoutes = require("./api-books");

// Book routes
router.use("/book", bookRoutes);

// For anything else, render the html page
router.use(function(req, res) {
  res.sendFile(path.join(__dirname, "../../client/public/index.html"));
});

module.exports = router;
