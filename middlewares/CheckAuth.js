const { StatusCodes } = require("http-status-codes");
const ErrorWithStatus = require("./ErrorWithStatus");
const jwt = require("jsonwebtoken");

const CheckAuth = async (req, res, next) => {
	const { authorization: accessToken } = req.headers;

	if (!accessToken || !accessToken.startsWith("Bearer ")) {
		return next();
	}

	const token = accessToken.split(" ")[1];

	if (!token) return next();

	try {
		const decoded = jwt.verify(token, process.env.JWT_SECRET);
		req.user = { id: decoded.id, email: decoded.email };
		return next();
	} catch (error) {
		next();
	}
};

const user = {
    email: 'alexkingsley@gmail.com',
    password: 'testUser1234'
};

// Sign the token
const token = jwt.sign(user, process.env.JWT_SECRET, { expiresIn: '1h' });

console.log(token);

module.exports = CheckAuth;