import { CDN_URL } from "../utils/constant";

const RestroCard = ({ resData }) => {
  // const { resData } = props;

  const { cloudinaryImageId, name, cuisines, avgRating } = resData?.info;
  return (
    <div className="restroCard">
      <img className="meghnaCard" src={CDN_URL + cloudinaryImageId} alt="" />
      <h2>{name}</h2>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating} ratings</h4>
    </div>
  );
};

export default RestroCard;
