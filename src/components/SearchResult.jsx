import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
function SearchResult() {
  const [data, setData] = React.useState([]);

  //console.log(data);
  const getData = async () => {
    try {
      const res = await axios.get(
        `https://api.spoonacular.com/recipes/complexSearch?query=${Query}&apiKey=ad0bf0be4ce04adbbcf887e87b2973bd`
      );
      //console.log(res.data.recipes[0]);
      setData(res.data.results);
    } catch (err) {
      console.log(err);
    }
  };

  const renderList = (obj) => {
    if (obj.length) {
      //clearRandomData();
      console.log(Data);
      console.log("enter");

      return (
        <ol>
          {obj.map((ob) => {
            return <SearchResult data={ob}></SearchResult>;
          })}
        </ol>
      );
    }
  };
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
