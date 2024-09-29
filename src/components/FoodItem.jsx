import Styles from "./foodItem.module.css";
export default function foodItems({ food }) {
  return (
    <div className={Styles.itemContainer}>
      <img className={Styles.itemImage} src={food.image} alt="foodImage"></img>
      <div className={Styles.itemContent}>
        <p className={Styles.itemName}>{food.title}</p>
      </div>
      <div className={Styles.buttonContainer}>
        <button className={Styles.itemButton}>View Recepie</button>
      </div>
    </div>
  );
}
