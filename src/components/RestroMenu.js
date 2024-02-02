import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const RestroMenu = () => {
  const [restInfo, setRestInfo] = useState([]);

  const { restID } = useParams();
  console.log(restID);

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(
      "https://foodfire.onrender.com/api/menu?page-type=REGULAR_MENU&complete-menu=true&lat=23.0747676&lng=72.535598&&submitAction=ENTER&restaurantId=" +
        restID
    );
    const json = await data.json();
    setRestInfo(json.data);
    console.log("jsonI", json);

    console.log(
      "json",
      json.data.cards[2].groupedCard.cardGroupMap.REGULAR.cards[1].card.card
        .categories
    );
  };

  //   console.log("restInfo", restInfo);
  if (restInfo.length === 0) return <h1>No data</h1>;

  const { name, cuisines, costForTwoMessage } =
    restInfo?.cards[0]?.card?.card?.info;

  const { itemCards, price } =
    restInfo?.cards[2]?.groupedCard?.cardGroupMap.REGULAR.cards[1].card.card
      .categories[0];

  console.log("itemCards", itemCards);

  return (
    <div>
      <h1>{name}</h1>
      <h2>{cuisines.join(", ")}</h2>
      <h3>{costForTwoMessage}</h3>
      <ul>
        {itemCards.map((res) => (
          <li key={res.card.info.id}>
            {res.card.info.name} - Rs.{res.card.info.price / 100}
          </li>
        ))}
        <li>{itemCards[0].card.info.name}</li>

        <li>Burger</li>
        <li>Diet coke</li>
      </ul>
    </div>
  );
};

export default RestroMenu;
