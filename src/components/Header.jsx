import React from "react";
import axios from "axios";
import MainCard from "./MainCard";
//import SearchResult from "./SearchResult";
//"https://api.spoonacular.com/recipes/random?apiKey=ad0bf0be4ce04adbbcf887e87b2973bd"
//"https://api.spoonacular.com/recipes/complexSearch?query=pasta&apiKey=ad0bf0be4ce04adbbcf887e87b2973bd"
function Header() {
  const [data, setData] = React.useState({});
  const [Query, setQuery] = React.useState("");
  const getData = async () => {
    try {
      const res = await axios.get(
        "https://api.spoonacular.com/recipes/random?apiKey=ad0bf0be4ce04adbbcf887e87b2973bd"
      );
      //console.log(res.data.recipes[0]);
      setData(res.data.recipes[0]);
    } catch (err) {
      console.log(err);
    }
    //renderData(randomData);
  };

  const renderData = (obj, type) => {
    if (Object.keys(obj).length) {
      return <MainCard data={data}></MainCard>;
    }
  };

  React.useEffect(() => {
    getData();
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
      <button>
        <a href={`search/${Query}`}>Search</a>
      </button>

      {renderData(data)}
    </div>
  );
}

export default Header;
