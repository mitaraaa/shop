const router = require("express").Router();

router.post("/post", (req, res) => {
	const username = req.body.username;
	console.log(username);
	res.send(`username: ${username}`);
});

module.exports = router;
