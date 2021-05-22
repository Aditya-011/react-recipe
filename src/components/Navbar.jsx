import React from "react";
import { Link } from "react-router-dom";
import { Toaster, toast } from "react-hot-toast";
function Navbar(props) {
  const [Query, setQuery] = React.useState("");

  return (
    <div>
      <Toaster position="top-right" reverseOrder={false} />
      <h1>
        <Link to="/">Recipie App</Link>
      </h1>
      <div className="input-container">
        <div className="input-wrapper">
          <input
            type="text"
            className="srcinput"
            placeholder="What are you looking for ?"
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
            <Link to={Query.length ? `/search/${Query}` : ""}>
              <i class="fas fa-search"></i>
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
