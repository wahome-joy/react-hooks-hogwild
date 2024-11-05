
import componentD from "./ComponentD";


function ComponentC(props){
const { hogs } = props ;

return(
<div style={{display:"flex", flexWrap:"wrap"}}>
    {hogs.map((hog , index) =>{
   return <ComponentD key={index} hog={hog}/>;
    })}
</div>
);
}

export default ComponentC;