import React from "react";
import Leftside from "./leftside";
import Rightside from "./rightside";

export default function Chatbot() {
    return(
        <div>
          <div className="h-screen overflow-auto">
            <div className="grid grid-cols-[350px_1fr]">
              <div>
                <Leftside/>
             </div>
             <div>
             <Rightside/>
             </div>  
            </div>
          </div>  
        </div>
    )
}