import { foodList } from "../assets/foodList";
import './DishesGrid.css';

export function DishesGrid(){
  return(
    <div className="dishes-grid">

      <div className="dish-container">

        <div className="dish-img">
          <img src={foodList[0].picture} alt="dish-img" />
        </div>

        <div className="dish-info">

          <div className="dish-upper">

            <h2 className="dish-name">{foodList[0].name}</h2>

            <p className="dish-price">${(foodList[0].price / 100).toFixed(2)}</p>

          </div>
          
          <p className="dish-desc">{foodList[0].description}</p>

        </div>

      </div>

      <div className="dish-container">

        <div className="dish-img">
          <img src={foodList[0].picture} alt="dish-img" />
        </div>

        <div className="dish-info">

          <div className="dish-upper">

            <h2 className="dish-name">{foodList[0].name}</h2>

            <p className="dish-price">${(foodList[0].price / 100).toFixed(2)}</p>

          </div>
          
          <p className="dish-desc">{foodList[0].description}</p>

        </div>

      </div>

    </div>
  );
}