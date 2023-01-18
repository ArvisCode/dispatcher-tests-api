const router = require("express").Router();
const { authenticate } = require("../middleware");
const { isValidId } = require("../middleware");
const question = require("../controllers/question");

router.get("/question", authenticate, question.getAllQuestion);

router.get("/question/:id", authenticate, isValidId, question.getQuestionById);

router.post("/question", authenticate, question.addNewQuestion);

router.post("/question/:id", authenticate, isValidId, question.updateQuestion);

router.delete(
  "/question/:id",
  authenticate,
  isValidId,
  question.removeQuestion
);

module.exports = router;
