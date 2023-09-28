import React from "react";
import '../style/App.css';
import Profilebox from "./Profilebox";
const Left =()=>{
    return(
        <div>
           <aside className="LeftSidebar">
            <Profilebox />
            <Profilebox />
            <Profilebox />
           </aside>
        </div>
    );

}
export default Left;

