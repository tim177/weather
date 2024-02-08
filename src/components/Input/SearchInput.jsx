import axios from "axios";
import React, { useState } from "react";

const SearchInput = ({ onSearch }) => {
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const apiKey = "066815500438cd9b599f4716e889e12b";
  const limit = "1";
  const handleChange = (event) => {
    setQuery(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      setLoading(true);
      setError(null);
      onSearch(null);
      const response = await axios.get(
        `https://api.openweathermap.org/geo/1.0/direct?q=${query}&limit=${limit}&appid=${apiKey}`
      );
      // console.log("result", response.data[0].lat);
      if (response) {
        const lat = response.data[0].lat;
        const lon = response.data[0].lon;
        onSearch({ lat, lon });
      }
    } catch (error) {
      setError("An error occurred while fetching data", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mx-auto">
      <div className="container__item">
        <form className="form flex" onSubmit={handleSubmit}>
          <input
            type="text"
            onChange={handleChange}
            value={query}
            className="form__field w-80 bg-white text-gray-600 font-normal shadow-md border-0 outline-none px-4 py-2"
            placeholder="Search a place"
          />
          <button
            type="submit"
            className="btn btn--primary btn--inside uppercase bg-blue-500 text-white font-semibold px-6 py-1 rounded-md shadow-md transition duration-200 ease-in hover:bg-blue-600 active:bg-blue-500 focus:outline-none"
          >
            Search
          </button>
        </form>
        {error && <div className="text-red-500">{error}</div>}
      </div>
    </div>
  );
};

export default SearchInput;
