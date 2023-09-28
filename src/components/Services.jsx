import React from "react";
import '../style/App.css';
import '../style/CenterContent.css';

const Services =()=>{
    return(
        <div className="post">
            <div className="services">
      <h2>Our Services</h2>
      <p>
        At [Your Company Name], we offer a range of professional services to help you grow your online presence and achieve your digital goals. Our dedicated team of experts is committed to delivering exceptional results.
      </p>
      <div className="service">
        <h3>Search Engine Optimization (SEO)</h3>
        <p>
          Our SEO services are designed to boost your website's visibility and rankings on major search engines. We employ proven strategies to improve organic search results, drive traffic, and increase conversions.
        </p>
      </div>
      <div className="service">
        <h3>Web Development</h3>
        <p>
          We specialize in creating responsive and user-friendly websites that captivate your audience. Whether you need a new website or want to revamp your existing one, our web development team is ready to turn your vision into reality.
        </p>
      </div>
      <div className="service">
        <h3>Social Media Marketing</h3>
        <p>
          Harness the power of social media to engage with your target audience and build brand loyalty. Our social media marketing services encompass strategy development, content creation, and effective campaigns to drive engagement and conversions.
        </p>
      </div>
      <p>
        No matter your business goals, we tailor our services to meet your unique needs. Let us help you succeed in the digital landscape.
      </p>
    </div>

        </div>
    );
}
export default Services;
