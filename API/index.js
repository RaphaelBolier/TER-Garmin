const express = require('express');
const app = express();
const port = 8090;
const clientRoutes = require("./src/routes/clientRouter.js");
const dbClient = require("./src/config/DBconfig.js");

app.use("/Client", clientRoutes);

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
});