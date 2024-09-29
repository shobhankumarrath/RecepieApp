import { useEffect, useState } from "react";
import Url from "./UrlDetails";
import Styles from "./search.module.css";
const apiUrlLink = "https://api.spoonacular.com/recipes/complexSearch";
const apiKey = "bd5ea96d39bc43ce883616ee81751ad7";
export default function Search({ foodData, setFoodData }) {
  const [query, setQuery] = useState("pizza");
  useEffect(() => {
    async function fetchFood() {
      const res = await fetch(`${apiUrlLink}?query=${query}&apiKey=${apiKey}`);
      const data = await res.json();
      console.log(data.results);
      setFoodData(data.results);
    }
    fetchFood();
  }, [query]);
  return (
    <div className={Styles.searchContainer}>
      <input
        className={Styles.input}
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
    </div>
  );
}
