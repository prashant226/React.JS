import RestaurantCard from "./RestaurantCard";
// import restaurantList from "../common/mockData";
import { useEffect, useState } from "react";
import Shimmer from "./shimmer";
// const listOfRest = someFunctionThatMightReturnUndefined() || [];

const Body = () => {
  //STATE VARIOWERFULL::ABLES WHICH ARE REALLY Powerfull::
  const [listOfRest, setListofRest] = useState([]);
  const [filteredRestuarant, setRes] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/update"
    );
    const json = await data.json();
    // OPTIONAL CHAINING
    setListofRest(json?.data?.cards[2]?.data?.data?.cards);
    setRes(json?.data?.cards[2]?.data?.data?.cards);
  };

  //conditional rendering

  console.log("body rendered");

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

  return listOfRest.length == 0 ? (
    <Shimmer />
  ) : (
    <div className="restaurant-list">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            className="search-box"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            onClick={() => {
              //filter the restaurant cards and update the UI
              //search-text
              console.log(searchText);

              const filteredRestuarant = listOfRest.filter((res) => {
                res.data.name == searchText;
              });
              setListofRest(filteredRestuarant);
            }}
          >
            Search
          </button>
        </div>
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
