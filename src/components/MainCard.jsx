import React from "react";
import parse from "html-react-parser";
const MainCard = (props) => {
  const data = props.data;

  console.log(data);
  return (
    <div className="card">
      <div className="title">
        <h3>{data.title} </h3>
      </div>
      <img src={data.image} className="image" alt="Cuisine Image" />
      <div className="data">
        {data.cuisines.length ? (
          <p>
            Cuisine Type :
            {data.cuisines.map((type) => {
              return <span> {type},</span>;
            })}
          </p>
        ) : null}
        {data.dishTypes.length ? (
          <div className="dishtype">
            <p>
              Dish type :
              {data.dishTypes.map((diet) => {
                return <span> {diet},</span>;
              })}
            </p>
          </div>
        ) : null}

        <p className="instruction">
          Instruction : <p> {parse(data.instructions)}</p>
        </p>
        <p>Summary :</p>
        <p> {parse(data.summary)}</p>
      </div>
    </div>
  );
};

export default MainCard;
