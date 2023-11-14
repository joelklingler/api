const express = require("express");
const helmet = require("helmet");
const app = express();
app.use(helmet());
const port = 3000;

/* Routes */
const jumpdaysRouter = require("./routes/jumpdays");
const loadsRouter = require("./routes/loads");

app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.get("/", (req, res) => {
  res.json({ message: "ok" });
});

/* My Routes */
app.use("/jumpdays", jumpdaysRouter);
app.use('/loads', loadsRouter);

/* Error Handler Middleware */
app.use((err, req, res, next) => {
    const statusCode = err.statusCode || 500;
    console.error(err.message, err.stack);
    res.status(statusCode).json({ message: err.message });
    return;
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});