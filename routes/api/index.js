const router = require("express").Router();
const bookRoutes = require("./books");
const path = require("path");

// Book routes
router.use("/books", bookRoutes);

// For anything else, render the html page
router.use(function(_req, res) {
  res.sendFile(path.join(__dirname, "../../public/index.html"));
});

module.exports = router;
