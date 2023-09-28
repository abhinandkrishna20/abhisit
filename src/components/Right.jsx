import React from "react";
import '../style/App.css';
import Profilebox from "./Profilebox";
const Right =()=>{
    return(
        <div>
            <aside className="RightSidebar">
            <Profilebox />
            <Profilebox />
            <Profilebox />
            </aside>
        </div>
    );

}
export default Right;

