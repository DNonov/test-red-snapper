const Express = require("express");
const path = require("path");
const app = Express();

app.get("*", (req, res) => {
	res.sendFile(path.resolve("build", "index.html"));
});

const PORT = process.env.PORT || 3030;
app.listen(PORT);