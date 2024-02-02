import resList from "../utils/mockData";
import RestroCard from "./RestroCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

const Body = () => {
  const [listOfRest, setListOfRest] = useState([]);

  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/api/seo/getListing?lat=23.144477092557135&lng=72.59576804274302"
    );
    const json = await data.json();
    console.log(
      "json",
      json?.data?.success?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
    setListOfRest(
      json?.data?.success?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
  };

  return listOfRest.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filterBtn">
        <div className="serchBtn">
          <input
            type="text"
            className="searchBox"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            onClick={() => {
              const filterResto = listOfRest.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setListOfRest(filterResto);
              console.log(searchText);
            }}
          >
            Search
          </button>
        </div>

        <button
          className="filter"
          onClick={() => {
            const filterReset = listOfRest.filter(
              (card) => card.info.avgRating > 4
            );
            setListOfRest(filterReset);
          }}
        >
          TOP RATED RESTURANT
        </button>
      </div>
      <div className="resContainer">
        {listOfRest.map((restaurant, index) => (
          <Link
            key={restaurant.info.id}
            to={"/resturant/" + restaurant.info.id}
          >
            <RestroCard resData={restaurant} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
