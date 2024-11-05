import  { useState } from 'react';
import pokers from "./../../porkers_data";

import ComponentC from "./ComponentC";
import ComponentB from "./ComponentB";

function ComponentA() {
  const [hogs, setHogs] = useState(porkers);

  return <div>
    <ComponentB/>
    <ComponentC  hogs= {hogs}/>
  </div>
}

export default ComponentA;
