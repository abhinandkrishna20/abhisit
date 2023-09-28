import React from "react";
import '../style/App.css';
import '../style/CenterContent.css';
import pic from '../images/img1.jpg';

const Postbox =({author, timeAgo, content})=>{
return(
    <div className="post">
      <div className="post-header">
        <img
          src={pic}
          alt="User Profile"
          className="profile-picture"
        />
        <div className="user-info">
          <h2>{author}</h2>
          <p>{timeAgo}</p>
        </div>
      </div>
      <div className="post-content">
        <div className="content">
        <p>{content}</p>
        </div>
        
      </div>
      <div className="post-actions">
        <button>Like</button>
        <button>Comment</button>
        <button>Share</button>
      </div>
      <div >

      </div>
    </div>
);
}
export default Postbox;