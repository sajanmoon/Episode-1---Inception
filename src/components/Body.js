import RestroCard from "./RestroCard";
import { useEffect, useState } from "react";

const Body = () => {
  const [listOfRest, setListOfRest] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.7040592&lng=77.10249019999999&collection=83667"
    );
    const json = await data.json();
    setListOfRest(
      json.data.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    // console.log(json);
    console.log(
      json.data.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  return (
    <div className="body">
      <div className="filterBtn">
        <button
          className="filter"
          onClick={() => {
            const filtrRset = listOfRest.filter(
              (cards) => cards.data.avgRating > 4
            );
            setListOfRest(filtrRset);
          }}
        >
          TOP RATED RESTURANT
        </button>
      </div>
      <div className="resContainer">
        {listOfRest.map((rest, index) => (
          <RestroCard key={rest.data.id} resData={rest} />
        ))}
        
      </div>
    </div>
  );
};

export default Body;
