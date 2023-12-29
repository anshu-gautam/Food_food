import { useEffect, useState } from "react";

import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurant from "../utils/useRestaurant";
import RestaurantCategory from "./RestaurantCategory";
const RestaurantMenu = () => {
  const { resId } = useParams();
  const resInfo = useRestaurant(resId);

  if (resInfo === null) return <Shimmer />;
  const { name, costForTwoMessage, cuisines } =
    resInfo?.cards[0]?.card?.card?.info;

  // const { itemCards } =
  //   resInfo.cards[2].groupedCard.cardGroupMap.REGULAR.cards[1].card.card;

  const categories =
    resInfo.cards[2].groupedCard.cardGroupMap.REGULAR.cards.filter(
      (c) =>
        c?.card?.card?.["@type"] ==
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  return (
    <div className="text-center">
      <h1 className="my-6 font-bold text-2xl">{name}</h1>
      <p className="font-bold text-lg">
        {cuisines.join(", ")} - {costForTwoMessage}
      </p>
      {categories.map((category) => (
        <RestaurantCategory data={category?.card?.card} />
      ))}
    </div>
  );
};

export default RestaurantMenu;
