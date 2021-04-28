import React from "react";
import { Link } from "react-router-dom";
function Navbar() {
  const [Query, setQuery] = React.useState("");

  return (
    <div>
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
        <Link to={`search/${Query}`}>Search</Link>
      </button>
    </div>
  );
}

export default Navbar;
