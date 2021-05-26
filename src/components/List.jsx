import React from "react";
import { Link } from "react-router-dom";
function List(props) {
  const ob = props.data;

  // console.log(ob.image);

  return (
    <div>
      <li>
        <Link to={`/information/${ob.id}`} className="srcUnit">
          {ob.image ? <img src={ob.image} alt="" className="srcImage" /> : null}

          <p className="srcText">{ob.title}</p>
        </Link>
      </li>
    </div>
  );
}

export default List;
