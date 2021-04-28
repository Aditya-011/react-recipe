import React from "react";
import { Link } from "react-router-dom";
import { Toaster, toast } from "react-hot-toast";
function Navbar() {
  const [Query, setQuery] = React.useState("");

  return (
    <div>
      <Toaster position="top-right" reverseOrder={false} />
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
      <button
        onClick={() => {
          if (!Query.length) {
            toast.error("Please Enter a Query 🙂");
          }
        }}
      >
        <Link to={Query.length ? `search/${Query}` : ""}>Search</Link>
      </button>
    </div>
  );
}

export default Navbar;
