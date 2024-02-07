import { CDN_URL } from "../utils/constant";

const RestroCard = ({ resData }) => {
  // const { resData } = props;

  const { cloudinaryImageId, name, cuisines, avgRating } = resData?.info;
  return (
    <div className="m-4 p-4 w-[200px] h-[400px] rounded-lg bg-gray-200">
      <img className="rounded-xl" src={CDN_URL + cloudinaryImageId} alt="" />
      <h2 className=" font-bold py-4 text-lg">{name}</h2>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating} ratings</h4>
    </div>
  );
};

export default RestroCard;
