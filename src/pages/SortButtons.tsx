import './SortButtons.css';

interface props{
  setSort: React.Dispatch<React.SetStateAction<string>>;
}

export function SortButtons({setSort} : props){

  return(
    <div className="buttons-container">

      <button onClick={() => {setSort('all')}} className="button-all">All</button>

      <button onClick={() => {setSort('breakfast')}} className="button-breakfast">Breakfast</button>

      <button onClick={() => {setSort('lunch')}} className="button-lunch">Lunch</button>

      <button onClick={() => {setSort('shakes')}} className="button-shakes">Shakes</button>

      <button onClick={() => {setSort('dinner')}} className="button-dinner">Dinner</button>

      <button className="button-sort-price">

        <img className="sort-price-img" src="https://cdn-icons-png.flaticon.com/512/10407/10407117.png" alt="sort-price-icon" />

      </button>
    </div>
  );
}