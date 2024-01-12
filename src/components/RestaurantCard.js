import { useContext } from "react";
import { CDN_URL } from "../utils/constant";
import UserContext from "../utils/UserContext";

const RestaurantCard = (props) => {
  const { resData } = props;
  console.log(resData);
  const { cloudinaryImageId, name, cuisines, avgRating, costForTwo } =
    resData?.info;

  const { loggedInUser } = useContext(UserContext);

  return (
    <div className="m-4 p-4 w-[250px] rounded-md bg-gray-100">
      <img className="rounded-md" src={CDN_URL + cloudinaryImageId} />
      <h3 className=" font-bold text-lg py-4"> {name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating} stars</h4>
      <h4>{costForTwo}</h4>
      <h4>{resData.info.sla.deliveryTime} minutes</h4>
      <h4 className="font-bold">{loggedInUser}</h4>
    </div>
  );
};

export default RestaurantCard;
