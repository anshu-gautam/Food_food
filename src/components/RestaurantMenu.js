import { useEffect, useState } from "react";

import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { MENU_API } from "../utils/constant";
import useRestaurant from "../utils/useRestaurant";
const RestaurantMenu = () => {
  const { resId } = useParams();
  const resInfo = useRestaurant(resId);

  if (resInfo === null) return <Shimmer />;
  const { name, costForTwoMessage, cuisines } =
    resInfo?.cards[0]?.card?.card?.info;

  const { itemCards } =
    resInfo.cards[2].groupedCard.cardGroupMap.REGULAR.cards[1].card.card;

  console.log(itemCards);

  return (
    <div>
      <h1>{name}</h1>
      <p>
        {cuisines.join(", ")} - {costForTwoMessage}
      </p>
      <h2>Menu</h2>
      <ul>
        {itemCards.map((item) => (
          <li key={item.card.info.id}>
            {item.card.info.name} - {"RS"} {item.card.info.price / 100}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
