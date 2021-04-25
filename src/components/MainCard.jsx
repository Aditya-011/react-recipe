import React from "react";

const MainCard = (props) => {
  const [data, setData] = React.useState(props.data);
  console.log(data);
  return (
    <div className="card">
      <h3>Name : {data.title} </h3>
      <img src={data.image} alt="" />
      <p>Cuisine Type : {data.cuisines[0]} </p>
      <p>DishType : {data.dishTypes}</p>
      <p>Instruction : {data.instructions}</p>
      <p>Summary : {data.summary}</p>
    </div>
  );
};

export default MainCard;
