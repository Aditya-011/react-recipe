import React from "react";
import axios from "axios";
import MainCard from "./MainCard";
import { Link } from "react-router-dom";

function IndRecipie() {
  const [data, setdata] = React.useState({});
  const getData = async () => {
    try {
      const res = await axios.get(
        "https://api.spoonacular.com/recipes/654959/information?apiKey=ad0bf0be4ce04adbbcf887e87b2973bd"
      );
      //console.log(res.data.recipes[0]);
      console.log(res.data);
      setdata(res.data);
    } catch (err) {
      console.log(err);
    }
  };
  const renderData = (obj) => {
    //console.log(Object.keys(data).length);
    if (Object.keys(obj).length) {
      return <MainCard data={obj}></MainCard>;
    }
  };
  React.useEffect(() => {
    getData();
  }, []);
  return (
    <div>
      <button>
        <Link>Go back</Link>
      </button>
      {renderData(data)}
    </div>
  );
}

export default IndRecipie;
