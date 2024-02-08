import { useEffect, useState } from "react";

const useResturantMenu = (restID) => {
  const [restInfo, setRestInfo] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://foodfire.onrender.com/api/menu?page-type=REGULAR_MENU&complete-menu=true&lat=23.0747676&lng=72.535598&&submitAction=ENTER&restaurantId=" +
        restID
    );
    const json = await data.json();
    // console.log("json.data", json.data);
    setRestInfo(json.data);
  };
  return restInfo;
};
export default useResturantMenu;
