const express = require('express');
const app = express();
const PORT = 3000;

const homeRoutes = require("./routes");

app.use("/", homeRoutes);

app.listen(PORT, () => {
console.log(`Server is running on http://localhost:${PORT}`);
});