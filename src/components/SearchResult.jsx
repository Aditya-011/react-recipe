import React from "react";
//import { Redirect } from "react-router-dom";
import Navbar from "./Navbar";
import List from "./List";
import axios from "axios";
import { Toaster, toast } from "react-hot-toast";

function SearchResult(props) {
  const [data, setData] = React.useState([]);
  //const [query, setQuery] = React.useState("");
  const {
    match: { params },
  } = props;
  //setQuery(params.query);
  //console.log(data);
  /*const getData = async () => {
    try {
      const res = await axios.get(
        `https://api.spoonacular.com/recipes/complexSearch?query=${params.query}&apiKey=ad0bf0be4ce04adbbcf887e87b2973bd`
      );
      //console.log(res.data.recipes[0]);
      //console.log(res.data.results);
      if (!Object.keys(res.data.results).length) {
        toast.error("Please Enter a Valid Query 🙂");
      } else if (Object.keys(res.data.results).length) {
        setData(res.data.results);
      }
    } catch (err) {
      //console.log(err);
    }
  };*/

  React.useEffect(() => {
    const getData = async () => {
      try {
        const res = await axios.get(
          `https://api.spoonacular.com/recipes/complexSearch?query=${params.query}&apiKey=ad0bf0be4ce04adbbcf887e87b2973bd`
        );
        //console.log(res.data.recipes[0]);
        //console.log(res.data.results);
        if (!Object.keys(res.data.results).length) {
          toast.error("Please Enter a Valid Query 🙂");
        } else if (Object.keys(res.data.results).length) {
          setData(res.data.results);
        }
      } catch (err) {
        //console.log(err);
      }
    };
    getData();
  }, [params.query]);

  return (
    <div>
      <Toaster position="top-right" reverseOrder={false} />
      <Navbar value={params.query}></Navbar>

      <ul>
        {data.map((ob) => {
          return <List data={ob}></List>;
        })}
      </ul>
    </div>
  );
}

export default SearchResult;
