import React from "react";
import '../style/App.css';
import '../style/CenterContent.css';

const Blog =()=>{
    const blogPosts = [
        {
          id: 1,
          title: 'The Importance of SEO in Digital Marketing',
          date: 'September 15, 2023',
          content:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac tristique nisi. Integer ut ante ac dolor viverra varius.'
        },
        {
          id: 2,
          title: 'Web Development Trends for 2023',
          date: 'August 30, 2023',
          content:
            'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Suspendisse dapibus ipsum id sapien luctus, non placerat tellus convallis.'
        },
        {
          id: 3,
          title: 'Mastering Social Media Marketing: Tips and Strategies',
          date: 'August 10, 2023',
          content:
            'Vivamus vel sapien sit amet lectus facilisis tristique ut ut massa. Fusce id luctus eros, at fringilla elit. Ut eget fermentum neque.'
        }
        // Add more blog posts as needed
      ];
    
    return(
        
            <div className="post" >

<div className="blog">
      <h2>Blog</h2>
      <div className="blog-posts">
        {blogPosts.map((post) => (
          <div className="blog-post" key={post.id}>
            <h3>{post.title}</h3>
            <p className="blog-post-date">{post.date}</p>
            <p>{post.content}</p>
            <a href={`/blog/${post.id}`} className="read-more-link">
              Read More
            </a>
          </div>
        ))
        }
      </div>
    </div>
            </div>
        
    );

}
export default Blog;