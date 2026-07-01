import { foodList } from "../assets/foodList";
import './Menu.css';

export function Menu(){
  return (
    <>
      <h1 className="page-title">our menu</h1>

      <div className="buttons-container">

        <button className="button-all">All</button>

        <button className="button-breakfast">Breakfast</button>

        <button className="button-lunch">Lunch</button>

        <button className="button-shakes">Shakes</button>

        <button className="button-dinner">Dinner</button>

        <button className="button-sort-price">Sort Price</button>
      </div>

      <div className="dishes-grid">

        <div className="dish-container">

          <div className="dish-img">
            <img src={foodList[0].picture} alt="dish-img" />
          </div>

          <div className="dish-info">

            <div className="dish-upper">

              <h2 className="dish-name">{foodList[0].name}</h2>

              <p className="dish-price">{foodList[0].price}</p>

            </div>
            
            <p className="dish-desc">{foodList[0].description}</p>

          </div>

        </div>

      </div>
    </>
  );
}