import { useState } from "react";

function ComponentD(props) {
const {hog} = props ;

const[showHog , setShowHog] =useState(false);


return <div 
onClick={(e)=>{
  setShowHog(!setShowHog) ; 
}}
style={{width:"150px", margin:"30px", border:"1px solid black"}}>
    <div>
        <img src={hog.img} alt="" style={{width:"300px"}}/>
    </div>
    {showHog&& (
    <div style={{padding:"10px"}}>
          
        <p>
            Name <b>{hog.name}</b>
        </p>
        <p>
            Specialty <b>{hog.specialty}</b>
        </p>
        <p>
            Weight <b>{hog.weight}</b>
        </p>
        <p>
           Medal <b>{hog['highest medal achieved']}</b>
        </p>

    </div>
    )}
</div>

}
