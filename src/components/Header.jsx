import React from "react";
import axios from "axios";
import MainCard from "./MainCard";
import SearchResult from "./SearchResult";
//"https://api.spoonacular.com/recipes/random?apiKey=ad0bf0be4ce04adbbcf887e87b2973bd"
//"https://api.spoonacular.com/recipes/complexSearch?query=pasta&apiKey=ad0bf0be4ce04adbbcf887e87b2973bd"
function Header() {
  //
  const [randomData, setRandomData] = React.useState({});
  const [searchData, setSearchData] = React.useState([]);
  const [Query, setQuery] = React.useState("");
  //
  const getRandomData = async () => {
    try {
      const res = await axios.get(
        "https://api.spoonacular.com/recipes/random?apiKey=ad0bf0be4ce04adbbcf887e87b2973bd"
      );
      //console.log(res.data.recipes[0]);
      setRandomData(res.data.recipes[0]);
    } catch (err) {
      console.log(err);
    }
    //renderData(randomData);
  };
  //
  const getSearchData = async () => {
    try {
      const res = await axios.get(
        `https://api.spoonacular.com/recipes/complexSearch?query=${Query}&apiKey=ad0bf0be4ce04adbbcf887e87b2973bd`
      );
      //console.log(res.data.recipes[0]);
      setSearchData(res.data.results);
    } catch (err) {
      console.log(err);
    }
  };
  const renderList = (obj) => {
    if (obj.length) {
      console.log(searchData);
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
  const renderData = (obj) => {
    //console.log(Object.keys(data).length);
    if (Object.keys(obj).length) {
      return <MainCard data={randomData}></MainCard>;
    }
  };
  //getRandomData();
  React.useEffect(() => {
    getRandomData();
  }, []);
  return (
    <div className="header">
      <h1>Recipie App</h1>
      <input
        type="text"
        className="srcinput"
        value={Query}
        onChange={(e) => {
          setQuery(e.target.value);
          console.log(Query);
        }}
      />
      <button onClick={getSearchData}>Search</button>

      {renderList(searchData)}
      {renderData(randomData)}
    </div>
  );
}

export default Header;
