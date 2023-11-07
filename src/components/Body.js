import ResturantCard from "./ResturantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

const Body = () => {
  const [listOfResturants, setListOfResturants] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.4698577&lng=78.3578246&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const jsonData = await data.json();
    const resturant_list = "restaurant_grid_listing";
    const restaurantCard = jsonData?.data?.cards?.find(
      (card) => card.card.card.id === resturant_list
    );

    const resturantData =
      restaurantCard?.card?.card?.gridElements?.infoWithStyle?.restaurants;

    console.log(resturantData);
    setListOfResturants(resturantData);
    
    if (listOfResturants.length === 0) {
      return <Shimmer />;
    }
  };
  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            const filteredResturant = listOfResturants.filter(
              (res) => res.info.avgRating > 4
            );
            setListOfResturants(filteredResturant);
          }}
        >
          Top rated resturant
        </button>
      </div>
      <div className="res-container">
        {listOfResturants.map((resturant) => (
          <ResturantCard key={resturant.info.id} resData={resturant} />
        ))}
      </div>
    </div>
  );
};
export default Body;
