import foods from "../../../data/Foods";
import FoodItem from "./FoodItem";

const FoodList = (props) => {
  const foodList = foods.map((item) => {
    return (
      <FoodItem
        name={item.name}
        price={item.price}
        id={item.id}
        key={item.id}
        desc={item.description}
      />
    );
  });
  return (
    <main className="food-container">
      <ul className="food-list">
        {foodList}
      </ul>
    </main>
  );
};

export default FoodList;
