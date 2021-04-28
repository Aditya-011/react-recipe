import React from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import axios from "axios";
import { Toaster, toast } from "react-hot-toast";

function SearchResult(props) {
  const [data, setData] = React.useState([]);
  const {
    match: { params },
  } = props;
  //console.log(data);
  const getData = async () => {
    try {
      const res = await axios.get(
        `https://api.spoonacular.com/recipes/complexSearch?query=${params.query}&apiKey=ad0bf0be4ce04adbbcf887e87b2973bd`
      );
      //console.log(res.data.recipes[0]);
      console.log(res.data.results);
      if (!Object.keys(res.data.results).length) {
        toast.error("Please Enter a Valid Query 🙂");
      } else if (Object.keys(res.data.results).length) {
        setData(res.data.results);
      }
    } catch (err) {
      console.log(err);
    }
  };

  React.useEffect(() => {
    getData();
  }, [params.query]);

  return (
    <div>
      <Toaster position="top-right" reverseOrder={false} />
      <Navbar value={params.query}></Navbar>
      <ol>
        {data.map((ob) => {
          return (
            <li>
              <Link to={`/information/${ob.id}`}>
                <img src={ob.image} alt="" />
                <p>Name : {ob.title}</p>
              </Link>
            </li>
          );
        })}
      </ol>
    </div>
  );
}

export default SearchResult;
