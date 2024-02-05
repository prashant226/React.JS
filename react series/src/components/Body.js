import RestaurantCard from "./RestaurantCard";
import restaurantList from "../common/mockData";

const Body = () => {
  return (
    <div className="restaurant-list">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            console.log("Button-Clicked");
          }}
        >
          Top Rated Restaurants
        </button>
      </div>

      {restaurantList.map((restaurant) => {
        return <RestaurantCard key={restaurant.data.id} {...restaurant.data} />;
      })}
    </div>
  );
};
export default Body;
