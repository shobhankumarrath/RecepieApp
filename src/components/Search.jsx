import { useEffect, useState } from "react";
import Url from "./UrlDetails";
import Styles from "./search.module.css";

// Base API URL
const apiUrlLink = "https://api.spoonacular.com/recipes/complexSearch";

// Access the API key from environment variables
const apiKey = import.meta.env.VITE_API_KEY;

export default function Search({ foodData, setFoodData }) {
  const [query, setQuery] = useState("pizza");

  useEffect(() => {
    async function fetchFood() {
      try {
        const res = await fetch(
          `${apiUrlLink}?query=${query}&apiKey=${apiKey}`
        );

        // Check if the response is OK (status in the range 200-299)
        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`); // Throw error for non-2xx responses
        }

        const data = await res.json();
        console.log(data.results);
        setFoodData(data.results);
        setError(null); // Clear error if the fetch is successful
      } catch (error) {
        console.error("Error fetching food data:", error);
        setError("Failed to fetch data. Please try again later."); // Set error message
      }
    }
    fetchFood();
  }, [query]); // Include setFoodData in dependency array

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
