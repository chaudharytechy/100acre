const mongoose = require('mongoose');

const blogSchema = new mongoose.Schema({
    blog_Image: {
        public_id: {
            type: String,
        },
        url: {
            type: String,
        },
    },
    blog_Title: {
        type: String,
    },
    blog_Description: {
        type: String,
    },
   
    author:{
        type: String,
       
    },
    published_Date: {
        type: Date,
        default: Date.now
    },
    blog_Category: {
        type: String, 
    },
   
});
const BlogModel = mongoose.model('Blog', blogSchema);

module.exports = BlogModel;
