import { CDN_URL } from "../utils/constant";

const ItemList = ({ items }) => {
  //   console.log("items", items);
  return (
    <div>
      {items.map((item) => (
        <div
          key={item.card.info.id}
          className=" p-2 m-2 border-b-2 border-gray-300 text-left flex justify-between"
        >
          <div className=" py-2 w-9/12">
            <span className=" font-bold">{item.card.info.name}</span>
            <span>
              --Price: Rs.
              {item.card.info.price
                ? item.card.info.price / 100
                : item.card.info.defaultPrice / 100}
            </span>
            <p className=" text-xs"> {item.card.info.description}</p>
          </div>
          <div className=" w-3/12">
            <img className=" " src={CDN_URL + item.card.info.imageId} alt="" />
            <div>
              <button className=" bg-white mx-16">ADD+</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
export default ItemList;
