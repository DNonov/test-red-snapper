const Express = require("express");
const path = require("path");
const app = Express();

app.get("*", (req, res) => {
	res.sendFile(path.resolve("build", "index.html"));
});

app.listen(3030);