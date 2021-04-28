import React from "react";
import { Link } from "react-router-dom";
function List(props) {
  const ob = props.data;
  return (
    <div>
      <li>
        <Link to={`/information/${ob.id}`}>
          <img src={ob.image} alt="" />
          <p>Name : {ob.title}</p>
        </Link>
      </li>
    </div>
  );
}

export default List;
