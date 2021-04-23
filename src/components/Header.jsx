import React from "react";
import axios from "axios";
function Header(props) {
  const [state, setState] = React.useState([]);
  const [Query, setQuery] = React.useState("");
  const getdata = async () => {
    fetch(
      //"https://api.spoonacular.com/recipes/random?apiKey=ad0bf0be4ce04adbbcf887e87b2973bd",
      "https://api.spoonacular.com/recipes/complexSearch?query=pasta&apiKey=ad0bf0be4ce04adbbcf887e87b2973bd"
    )
      .then((response) => response.json())
      .then((data) => console.log(data));
  };

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
      <button onClick={getdata}>Search</button>
      <ul>
        {state.map((person) => (
          <li>{person.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default Header;
