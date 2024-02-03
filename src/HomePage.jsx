import React, { useState } from "react";
import SearchInput from "./components/Input/SearchInput";
import WeatherDisplay from "./WeatherDisplay";
import Navbar from "./Navbar";

function HomePage() {
  const [searchQuery, setSearchQuery] = useState();

  const handleSearch = (obj) => {
    setSearchQuery(obj);
  };

  return (
    <div>
      <Navbar />
      <div className="container flex-col justify-center items-center p-4">
        <div className="mb-3 ml-80">
          <SearchInput onSearch={handleSearch} />
        </div>

        <div className="flex flex-wrap flex-col items-start">
          {searchQuery && <WeatherDisplay searchQuery={searchQuery} />}
        </div>
      </div>
    </div>
  );
}

export default HomePage;
