import React from "react";

function Header(props) {
  const [Query, setQuery] = React.useState("");
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
      <button>Search</button>
    </div>
  );
}

export default Header;
