import React from "react";
import BlogPost from "./BlogPost";
import data from "./data";

export default function BlogList(){
    console.log(data)
   
    const blogPost = data.map(item=>(
        
        <BlogPost
        key={item.id}
        title={item.title}
        subTitle={item.subTitle}
        date={item.date}
        author={item.author}
        />
    ));
    return (
        <div className ="blogList">
            {blogPost}
        </div>
)}
