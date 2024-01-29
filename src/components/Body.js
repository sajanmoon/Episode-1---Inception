import RestroCard from "./RestroCard";
import resList from "../utils/mockData";

const Body = () => {
  return (
    <div className="body">
      <div className="searchBar">SearchBar</div>
      <div className="resContainer">
        {resList.map((rest) => (
          <RestroCard key={rest.data.id} resData={rest} />
        ))}
      </div>
    </div>
  );
};

export default Body;
