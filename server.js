const express = require("express");
const bodyParser = require("body-parser");
const expressHbs = require("express-handlebars");
const app = express();

app.engine("handlebars", expressHbs());
app.set("view engine", "handlebars");
app.set("views", "views");

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => console.log(`Server started onport ${PORT}`));
