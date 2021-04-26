import React from "react";
import { Link } from "react-router-dom";
function SearchResult(props) {
  const data = props.data;
  console.log(data);
  return (
    <div>
      <li>
        <Link to="/individual">
          <img src={data.image} alt="" />
          <p>Name : {data.title}</p>
        </Link>
      </li>
    </div>
  );
}

export default SearchResult;
