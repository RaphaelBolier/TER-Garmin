const express = require('express');
const app = express();
const port = 8090;
const clientRoutes = require("./src/routes/clientRouter.js");


app.listen(port, () => console.log(`Mongo server listening on port ${port}!`))

app.use("/Client", clientRoutes);