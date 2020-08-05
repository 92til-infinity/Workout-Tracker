const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 3000;

const app = express();

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

const mongoUri = process.env.MONGODB_URI || "mongodb://localhost/workout";

mongoose.connect(mongoUri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
});

require("./routes/api-Routes.js")(app);
require("./routes/html-Routes.js")(app);
// app.use(require("./routes/api-Routes.js"));
// app.use(require("./routes/html-Routes.js"));

app.listen(PORT, () => {
    console.log(`App running on port ${PORT}!`);
});
