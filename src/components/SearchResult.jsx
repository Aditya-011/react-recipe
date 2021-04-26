import React from "react";

function SearchResult(props) {
  const data = props.data;
  console.log(data);
  return (
    <div>
      <li>
        <img src={data.image} alt="" />
        <p>Name : {data.title}</p>
      </li>
    </div>
  );
}

export default SearchResult;
