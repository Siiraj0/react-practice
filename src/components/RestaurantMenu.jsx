import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";

const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState(null);

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=11.1556686&lng=75.891155&restaurantId=595208&catalog_qa=undefined&submitAction=ENTER"
    );
    const json = await data.json();
    console.log(json);

    setResInfo(json.data);
  };

  if (resInfo === null) {
    return <Shimmer />;
  }

  const { name, cuisines, costForTwoMessage } = resInfo?.cards?.find(
    (card) => card?.card?.card?.info
  )?.card?.card?.info || { name: "No Name Found" };

  const { itemCards } = resInfo?.cards
    ?.find((card) => card?.groupedCard)
    ?.groupedCard?.cardGroupMap?.REGULAR?.cards?.find(
      (c) => c?.card?.card?.itemCards
    )?.card?.card || { itemCards: [] };

  console.log(itemCards);

  return (
    <div className="menu">
      <h1>{name}</h1>
      <p>
        {cuisines.join(",")} - {costForTwoMessage}
      </p>

      <ul>
        {itemCards.map((item) => (
          <li> {item.card.info.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
