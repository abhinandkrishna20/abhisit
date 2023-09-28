import React from "react";
import '../style/App.css';
import '../style/CenterContent.css';
import '../style/Contact.css';

const Contact =()=>{
    return(
        <div className="post">
             <div className="contact-form-container">
      <h2>Contact Us</h2>
      <form className="contact-form" 
    //   onSubmit={handleSubmit}
      >
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            // value={formData.name}
            // onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            // value={formData.email}
            // onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            // name="message"
            // value={formData.message}
            // onChange={handleChange}
            required
          ></textarea>
        </div>
        <button type="submit" className="submit-button">
          Submit
        </button>
      </form>
    </div>

        </div>
    );

}
export default Contact;