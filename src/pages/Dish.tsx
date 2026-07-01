import { foodList } from "../assets/foodList";
import './Dish.css';

export function Dish(){

  return(
    <>
      {foodList.map((food) => {
        return(
        <div key={food.name} className="dish-container">

          <div className="dish-img">
            <img src={food.picture} alt="dish-img" />
          </div>
    
          <div className="dish-info">
    
            <div className="dish-upper">
    
              <h2 className="dish-name">{food.name}</h2>
    
              <p className="dish-price">${(food.price / 100).toFixed(2)}</p>
    
            </div>
            
            <p className="dish-desc">{food.description}</p>
    
          </div>
    
        </div>
        );

      })}
    </>
  );

}