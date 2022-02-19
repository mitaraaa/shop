const router = require("express").Router();

router.get("/userapi", (req, res) => {
	res.send("Test -> success!");
});

router.post("userpost", (req, res) => {
	const username = req.body.username;
	console.log(username);
});

module.exports = router;
