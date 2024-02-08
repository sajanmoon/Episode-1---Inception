import resList from "../utils/mockData";
import RestroCard, { withPromotedLabel } from "./RestroCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
  const [listOfRest, setListOfRest] = useState([]);

  const [searchText, setSearchText] = useState("");

  console.log("listOfRest", listOfRest);

  const ResturantCardPromoted = withPromotedLabel(RestroCard);

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

  const checkOnlineStatus = useOnlineStatus();

  if (checkOnlineStatus === false) {
    return <h1>You are offline</h1>;
  }

  return listOfRest.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filterBtn flex">
        <div className="serchBtn m-4 p-4">
          <input
            type="text"
            className="border border-solid border-black "
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            className="px-4 py-2 m-4 bg-green-100 rounded-lg "
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
        <div className=" m-4 p-4 flex items-center">
          <button
            className="filter bg-gray-200 rounded-lg p-2"
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
      </div>
      <div className="flex flex-wrap">
        {listOfRest.map((restaurant, index) => (
          <Link
            key={restaurant.info.id}
            to={"/resturant/" + restaurant.info.id}
          >
            {restaurant.info.isOpen ? (
              <ResturantCardPromoted resData={restaurant} />
            ) : (
              <RestroCard resData={restaurant} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
