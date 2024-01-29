import { CDN_URL } from "../utils/constant";

const RestroCard = (props) => {
  const { resData } = props;
  const { name, avgRating, cuisines, cloudinaryImageId } = resData.data;
  return (
    <div className="restroCard">
      <img className="meghnaCard" src={CDN_URL + cloudinaryImageId} alt="" />
      <h2>{name}</h2>
      <h4>{cuisines.join(",")}</h4>
      <h4>{avgRating} ratings</h4>
    </div>
  );
};

export default RestroCard;
