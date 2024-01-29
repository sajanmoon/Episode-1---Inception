import RestroCard from "./RestroCard";
import resList from "../utils/mockData";
import { useState } from "react";

const Body = () => {
  const [listOfRest, setListOfRest] = useState(resList);

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
          <RestroCard key={rest.data.id} resData={rest} />
        ))}
      </div>
    </div>
  );
};

export default Body;
