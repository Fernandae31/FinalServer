// ℹ️ Gets access to environment variables/settings
// https://www.npmjs.com/package/dotenv
require("dotenv").config();

// ℹ️ Connects to the database
require("./db");

// Handles http requests (express is node js framework)
// https://www.npmjs.com/package/express
const express = require("express");
const app = express();

// ℹ️ This function is getting exported from the config folder. It runs most pieces of middleware
require("./config")(app);

//API/Figures/Products 

const FigureRouter = require("./routes/Figure.routes");
const ProductCollectionRouter = require("./routes/ProductCollection.routes");
const authRouter = require('./routes/auth.routes');


router.use("/figures", FigureRouter);
router.use("/products", ProductCollectionRouter);
router.use('/auth', authRouter);



// 👇 Start handling routes here
const indexRoutes = require("./routes/index.routes");
app.use("/api", indexRoutes);


// ❗ To handle errors. Routes that don't exist or errors that you handle in specific routes

require("./error-handling")(app);

module.exports = app;