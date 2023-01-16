const app = require("./config/serverConfig");

const routerAuth = require("./routers/auth.routes");
const routerQuestion = require("./routers/question.routes");

app.use("/auth", routerAuth);
app.use("/question", routerQuestion);

app.use((req, res) => {
  res.status(404).json({ message: "Not found" });
});

app.use((err, req, res, next) => {
  const { status = 500, message = "Server error" } = err;
  res.status(status).json({ message });
});

module.exports = app;
