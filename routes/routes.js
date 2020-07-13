const router = require("express").Router();
const quizController = require("../controller/controller");
// Matches with "/api/books"
  router.route("/")
    .get(quizController.findAll)
    .post(quizController.create);

module.exports = router;