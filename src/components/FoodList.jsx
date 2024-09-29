import FoodItems from "./FoodItem";
export default function foodList({ foodData }) {
  return (
    <div>
      {foodData.map((food) => (
        <FoodItems key={food.id} food={food} />
      ))}
    </div>
  );
}
