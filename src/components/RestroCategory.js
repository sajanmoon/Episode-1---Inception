import { useState } from "react";
import ItemList from "./ItemList";

const RestroCategory = ({ data, showItems, setShowIndex }) => {
  // const [showItems, setShowItems] = useState(false);
  // console.log("data", data);

  const handleClick = () => {
    setShowIndex();
  };
  return (
    <div>
      {/* Header  */}
      <div className=" w-6/12 mx-auto my-4 bg-gray-200 shadow-lg p-4 ">
        <div
          className="flex justify-between cursor-pointer"
          onClick={handleClick}
        >
          <span className="font-bold text-lg">
            {data.title} ({data.itemCards.length})
          </span>
          <span>⬇️</span>
        </div>
        <div>{showItems && <ItemList items={data.itemCards} />}</div>
      </div>
    </div>
  );
};
export default RestroCategory;
