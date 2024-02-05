import RestaurantCard from "./RestaurantCard";
import restaurantList from "../common/mockData";

const Body = () => {
  let listOfRest = [
    {
      data: {
        id: "74453",
        name: "Domino's Pizza",

        cloudinaryImageId: "bz9zkh2aqywjhpankb07",
        cuisines: ["Pizzas"],
        tags: [],
        costForTwo: 40000,

        deliveryTime: 45,
        avgRating: "4.5",
      },
    },
    {
      data: {
        id: "74493",
        name: "KFC",

        cloudinaryImageId: "bz9zkh2aqywjhpankb07",
        cuisines: ["Pizzas"],
        tags: [],
        costForTwo: 40000,

        deliveryTime: 45,
        avgRating: "3.5",
      },
    },
  ];

  return (
    <div className="restaurant-list">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            // console.log("Button-Clicked");
            //FILTER LOGIC HERE::
            listOfRest = listOfRest.filter((res) => res.data.avgRating > 4);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>

      {listOfRest.map((restaurant) => {
        return <RestaurantCard key={restaurant.data.id} {...restaurant.data} />;
      })}
    </div>
  );
};
export default Body;
