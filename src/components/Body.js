import ResturantCard from "./RestaurantCard";
import { useContext, useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

const Body = () => {
  const [listOfResturants, setListOfResturants] = useState([]);
  const [filteredResturant, setFilteredResturant] = useState([]);
  const [searchText, setSearchText] = useState("");
  const { loggedInUser, setUserName } = useContext(UserContext);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.4698577&lng=78.3578246&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const jsonData = await data.json();

    const resturantData =
      jsonData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants;
    // console.log(resturantData);

    setListOfResturants(resturantData);
    setFilteredResturant(resturantData);
  };

  const onlineStatus = useOnlineStatus();
  if (onlineStatus === false)
    return <h1>look like you're offline!! Check your Internet connection.</h1>;

  if (listOfResturants?.length === 0) {
    return <Shimmer />;
  }

  return (
    <div className="body">
      <div className="flex">
        <div className="m-4 p-4">
          <input
            className=" border border-blue-800 rounded-md "
            type="text"
            data-testid="searchInput"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            className="bg-green-400 px-4 py-1 mx-4 rounded-md"
            onClick={() => {
              const filteredResturant = listOfResturants?.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setFilteredResturant(filteredResturant);
            }}
          >
            Search
          </button>
        </div>
        <div className="m-4 p-4 flex items-center">
          <button
            className="bg-green-400 px-4 py-1 mx-2 rounded-md"
            onClick={() => {
              const filteredList = listOfResturants.filter(
                (res) => res.info.avgRating > 4
              );
              setFilteredResturant(filteredList);
            }}
          >
            Top rated resturant
          </button>
        </div>
        <div className="search m-4 p-4 flex items-center">
          <label>UserName : </label>
          <input
            className="border border-black p-2"
            value={loggedInUser}
            onChange={(e) => setUserName(e.target.value)}
          />
        </div>
      </div>
      <div className="flex flex-wrap">
        {filteredResturant?.map((resturant) => (
          <Link
            key={resturant.info.id}
            to={"/restaurants/" + resturant.info.id}
          >
            <ResturantCard resData={resturant} />
          </Link>
        ))}
      </div>
    </div>
  );
};
export default Body;
