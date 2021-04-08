const express = require('express');
const app = express();
const port = 8090;
const clientRoutes = require("./src/routes/clientRouter.js");


app.listen(port, () => console.log(`Server app listening on port http://localhost:${port}`));

app.use("/Client", clientRoutes);