require("dotenv").config({ path: ".env" });
const express = require("express");
const app = express();
const connectDB = require("./connectDB");
const applyRoutes = require("./routes");
const PORT = process.env.PORT || 9000;

applyRoutes(app);

// Start the server if not being used as a library
if (!module.parent) {
	connectDB(process.env.Database_URI);

	app.listen(PORT, () => {
		console.log(`Server is listening on PORT ${PORT}`);
	});
}

module.exports = app;