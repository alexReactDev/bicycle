const express = require("express");
const path = require("path");
const port = 4001;

const app = express();

app.use(express.static(path.join(__dirname, "/build")));
app.get("/", (req, res) => {
	return res.sendFile(path.join(__dirname, "/build/index.html"));
})

app.listen(port, () => {
	console.log(`App started on port ${port}`);
})