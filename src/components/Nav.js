import React from "react";
import piggy from "../assets/porco.png";

function Nav({ onGreasedFilter, onSortChange }) {
	return (
	  <div>
		<button onClick={onGreasedFilter}>Toggle Greased</button>
		<select onChange={(e) => onSortChange(e.target.value)}>
		  <option value="">Sort by</option>
		  <option value="name">Name</option>
		  <option value="weight">Weight</option>
		</select>
	  </div>
	);
  }

export default Nav;
