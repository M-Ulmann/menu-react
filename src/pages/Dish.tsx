import { foodList } from "../assets/foodList";
import './Dish.css';

interface prop{
  sort: string;
  isAscending: boolean;
}

export function Dish({sort, isAscending} : prop){

  const sortedList = foodList.filter((food) => {
    if(sort === 'all' || sort === ''){
      return food.type;
    }
    return food.type === sort;
  });


  const priceSortedList = [...sortedList].sort((priceA, priceB) => {
    if(isAscending){
      return priceA.price - priceB.price
    }
    else{
      return priceB.price - priceA.price;
    }
  });
  
  return(
    <>
      {priceSortedList.map((food) => {
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