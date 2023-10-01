// Please don't change the pre-written code
// Import the necessary modules here
import {blogs} from "../models/blog.model.js";
export const renderBlogs = (req,res) => {
  // Write your code here
  return res.render("blogs",{blogs});
};
export const renderBlogForm = (req,res) => {
  return res.render("addBlogForm");
};
export const addBlog = (req,res) => {
  blogs.push(req.body);
  res.status(200).render("blogs", { blogs: blogs }); 
};
