import RestaurantCard from "./RestaurantCard";
import restaurantList from "../common/mockData";
import { useState } from "react";

const Body = () => {
  //STATE VARIOWERFULL::ABLES WHICH ARE REALLY Powerfull::
  const [listOfRest, setRes] = useState(restaurantList);

  //NORMAL JS VARIABLE::
  //   let listOfRest = [];
  //   let listOfRestJS = [
  //     {
  //       data: {
  //         id: "74453",
  //         name: "Domino's Pizza",

  //         cloudinaryImageId: "bz9zkh2aqywjhpankb07",
  //         cuisines: ["Pizzas"],
  //         tags: [],
  //         costForTwo: 40000,

  //         deliveryTime: 45,
  //         avgRating: "4.5",
  //       },
  //     },
  //     {
  //       data: {
  //         id: "74493",
  //         name: "KFC",

  //         cloudinaryImageId: "bz9zkh2aqywjhpankb07",
  //         cuisines: ["Pizzas"],
  //         tags: [],
  //         costForTwo: 40000,

  //         deliveryTime: 45,
  //         avgRating: "3.5",
  //       },
  //     },
  //   ];

  return (
    <div className="restaurant-list">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = listOfRest.filter(
              (res) => res.data.avgRating > 4
            );
            setRes(filteredList);
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
