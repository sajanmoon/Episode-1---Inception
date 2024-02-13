import { useParams } from "react-router-dom";
import { CDN_URL } from "../utils/constant";
import useResturantMenu from "../utils/useResturantMenu";
import RestroCategory from "./RestroCategory";
import { useState } from "react";

const RestroMenu = () => {
  const { restID } = useParams();

  console.log("restID", restID);

  const [showIndex, setShowIndex] = useState(0);

  const restInfo = useResturantMenu(restID);

  // console.log("restInfo", restInfo);
  if (restInfo.length === 0) return <h1>Loading...</h1>;

  const { name, cuisines, costForTwoMessage, cloudinaryImageId } =
    restInfo?.cards[0]?.card?.card?.info;

  const { itemCards } =
    restInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card
      ?.card;

  // console.log(
  //   "reccomnded",
  //   restInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards
  // );

  const categories =
    restInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
  // console.log("categories", categories);

  if (itemCards) {
    return (
      <div className=" text-center">
        <h1 className=" font-bold my-3 text-4xl">{name}</h1>
        <h2 className=" font-bold my-3 text-xl">{cuisines.join(", ")}</h2>
        {categories.map((cat, index) => (
          <RestroCategory
            key={cat.card.card.title}
            data={cat.card.card}
            showItems={index === showIndex ? true : false}
            setShowIndex={() => setShowIndex(index)}
          />
        ))}
      </div>
    );
  } else {
    return <h1>No data </h1>;
  }
};

export default RestroMenu;
