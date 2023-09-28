import React from "react";
import '../style/App.css';
import '../style/CenterContent.css';
import Postbox from "./Postbox";
import Contact from "./Contact";
// import Aboutus from "./Services";
import Services from "./Services";

import Aboutus from "./Aboutus";
import Blog from "./Blog";


const Center =({activeContent})=>{
    return(
        <div>
           <main className="CenterContent">
           {
        activeContent ==='post' && (
            <div>
                <Postbox
        author="Abhinand Krishna"
        timeAgo="2 hours ago"
        content="This is a sample post content..."
      />
            </div>
        )
      }
           
      {
        activeContent ==='contact' && (
            <div>
                <Contact />
            </div>
        )
      }
       {
        activeContent ==='aboutus' && (
            <div>
                <Aboutus />
            </div>
        )
      }
       {
        activeContent ==='services' && (
            <div>
                <Services />
            </div>
        )
      }
       {
        activeContent ==='blog' && (
            <div>
                <Blog />
            </div>
        )
      }
      
           </main>
        </div>
    );

}
export default Center;

