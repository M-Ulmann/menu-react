import { Dish } from './Dish';
import './DishesGrid.css';

interface prop{
  sort: string;
}

export function DishesGrid({sort} : prop){
  return(
    <div className="dishes-grid">

      <Dish sort={sort} />

    </div>
  );
}