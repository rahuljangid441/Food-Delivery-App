import { useState } from "react";
import { restrauntList } from "../constants";
import RestrauntCard from "./RestaurantCard";
const Body = () => {
  // let searchText="CHINA GATHERING"
  const [searchText, setSearchText] = useState("");
  const [restaurants, setRestaurants] = useState(restrauntList);

  function filterData(searchText, restaurants) {
    const filterData = restaurants.filter((restaurants) =>
      restaurants.data.name.includes(searchText)
    );
    return filterData;
  }

  return (
    <>
      <div className="search-container">
        <input
          type="text"
          className="search-input"
          placeholder="search dish or restuarant"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />

        <button
          className="search-btn"
          onClick={() => {
            const data = filterData(searchText, restaurants);
            setRestaurants(data);
          }}
        >
          Search
        </button>
      </div>
      <div className="restraunt-list">
        {restaurants.map((restaurant) => {
          return (
            <RestrauntCard {...restaurant.data} key={restaurant.data.id} />
          );
        })}
      </div>
    </>
  );
};

export default Body;
