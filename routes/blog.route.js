const express = require("express");
const IsAuthenticated = require("../middlewares/IsAuthenticated");
const Wrapper = require("../middlewares/Wrapper");
const {
	getBlogs,
	createBlog,
	getBlog,
	deleteBlog,
	getUserBlog,
	updateBlog,
} = require("../controllers/blog.controller");
const CheckAuth = require("../middlewares/CheckAuth");
const Router = express.Router();

Router.route("/")
	.get(Wrapper(getBlogs))
	.post(IsAuthenticated, Wrapper(createBlog));
Router.route("/me").get(IsAuthenticated, Wrapper(getUserBlog));
Router.route("/:id")
	.get(CheckAuth, Wrapper(getBlog))
	.patch(IsAuthenticated, Wrapper(updateBlog))
	.delete(IsAuthenticated, Wrapper(deleteBlog));

module.exports = Router;