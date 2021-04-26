import React from "react";

function SearchResult(props) {
  const data = props.data;
  console.log(data);
  return (
    <div>
      <li>
        <a href="/individual">
          <img src={data.image} alt="" />
          <p>Name : {data.title}</p>
        </a>
      </li>
    </div>
  );
}

export default SearchResult;
