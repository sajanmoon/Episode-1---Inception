import resList from "../utils/mockData";
import RestroCard from "./RestroCard";
import { useEffect, useState } from "react";

const Body = () => {
  const [listOfRest, setListOfRest] = useState(resList);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/mapi/homepage/getCards?lat=12.9715987&lng=77.5945627"
    );
    const json = await data.json();
    console.log(
      json?.data.success.cards[4].gridWidget.gridElements.infoWithStyle
        .restaurants
    );
    setListOfRest(
      json?.data?.success?.cards[4]?.gridWidget?.gridElements?.infoWithStyle
        ?.restaurants
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
        {listOfRest.map((rest) => (
          <RestroCard key={rest.info?.id} resData={rest} />
        ))}
      </div>
    </div>
  );
};

export default Body;
