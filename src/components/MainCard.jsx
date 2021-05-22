import React from "react";
import parse from "html-react-parser";
const MainCard = (props) => {
  const data = props.data;

  //console.log(data);
  return (
    <div className="card">
      <div className="title">
        <h3>{data.title} </h3>
      </div>
      <img src={data.image} className="image" alt="Cuisine Image" />
      <p>{data.cuisines[0]} </p>
      <div className="dishtype">
        <p>Dish type : {data.dishTypes}</p>
      </div>
      <p>Instruction : {parse(data.instructions)}</p>
      <p>Summary : {parse(data.summary)}</p>
    </div>
  );
};

export default MainCard;
