import { useState } from "react";
const hog ={
    name: "Babe",
    specialty: "Being incredibly cute",
    greased: false,
    weight: 2.0,
    "highest medal achieved": "bronze",
    image:
      "https://raw.githubusercontent.com/learn-co-curriculum/react-hooks-hogwild/master/public/images/babe.jpg",
};
function ComponentB () {}
const [name , setName] =useState ("");
const [specialty , setSpecialty] =useState ("");
const [weight , setWeight] =useState (0);
const [greased , setGreased] =useState (checked);
const [image, setImage] =useState ("");
const [medal, setMedal] =useState ("");



return(
    <div style={{display:"flex"}}>
<div style={{flex: 1}}></div>
<p>
    <label style={{}}>Name</label>
    <input onChange={(e)=>{
        setName(e.target.value);
        }}
         value={"name"}/>
</p>
<p>
<label style={{}}>Specialty</label>
    <input onChange={(e)=>{
        setSpecialty(e.target.value);
        }}
         value={"specialty"}/> 
</p>
<p>
<label style={{}}>greased</label>
    <input  type="checkbox" checked={greased} onChange={(e)=>{
        if (e.target.value=== "checked"){
            setGreased(true);
        }else{
            setGreased(false);
        }
        }}/>
        
</p>

    </div>
)



export default ComponentB