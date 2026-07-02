import { Dish } from './Dish';
import './DishesGrid.css';

interface prop{
  sort: string;
  isAscending: boolean;
}

export function DishesGrid({sort, isAscending} : prop){
  return(
    <div className="dishes-grid">

      <Dish sort={sort} isAscending={isAscending}/>

    </div>
  );
}