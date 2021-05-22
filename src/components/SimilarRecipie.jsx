import React from "react";
import { Link } from "react-router-dom";

import List from "./List";
import axios from "axios";
import { Toaster, toast } from "react-hot-toast";
function SimilarRecipie(props) {
  const [data, setData] = React.useState([]);
  const {
    match: { params },
  } = props;
  //console.log(data);
  const getData = async () => {
    try {
      const res = await axios.get(
        `https://api.spoonacular.com/recipes/${params.query}/similar?apiKey=ad0bf0be4ce04adbbcf887e87b2973bd`
      );
      //console.log(res.data.recipes[0]);
      console.log(res.data);
      if (!Object.keys(res.data).length) {
        toast.error("Please Enter a Valid Query 🙂");
      } else if (Object.keys(res.data).length) {
        setData(res.data);
      }
    } catch (err) {
      console.log(err);
    }
  };
  React.useEffect(() => {
    getData();
  });

  return (
    <div>
      <Toaster position="top-right" reverseOrder={false} />
      <h1>
        <Link to="/">Recipie App</Link>
      </h1>
      <button>
        <Link to={`/information/${params.query}`}>Go back</Link>
      </button>
      <ol>
        {data.map((ob) => {
          return <List data={ob}></List>;
        })}
      </ol>
    </div>
  );
}

export default SimilarRecipie;
