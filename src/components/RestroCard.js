import { useContext } from "react";
import { CDN_URL } from "../utils/constant";
import UserContext from "../utils/UserContext";

const RestroCard = ({ resData }) => {
  const { loggedInUser } = useContext(UserContext);
  // const { resData } = props;

  const { cloudinaryImageId, name, cuisines, avgRating } = resData?.info;
  return (
    <div className="m-4 p-4 w-[200px] h-[400px] rounded-lg bg-gray-100 hover:bg-gray-200">
      <img className="rounded-xl" src={CDN_URL + cloudinaryImageId} alt="" />
      <h2 className=" font-bold py-4 text-lg">{name}</h2>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating} ratings</h4>
      <h4>{loggedInUser}</h4>
    </div>
  );
};

// Higher order component

export const withPromotedLabel = (RestroCard) => {
  return (props) => {
    return (
      <div>
        <label className=" absolute bg-gray-500 text-white m-2 p-1 rounded-lg">
          Open Now
        </label>
        <RestroCard {...props} />
      </div>
    );
  };
};

export default RestroCard;
