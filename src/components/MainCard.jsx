import React from "react";
import parse from "html-react-parser";
const MainCard = (props) => {
  const data = props.data;

  //console.log(data);
  return (
    <div className="card">
      <h3>Name : {data.title} </h3>
      <img src={data.image} alt="" />
      <p>Cuisine Type : {data.cuisines[0]} </p>
      <p>DishType : {data.dishTypes}</p>
      <p>Instruction : {parse(data.instructions)}</p>
      <p>Summary : {parse(data.summary)}</p>
    </div>
  );
};

export default MainCard;
