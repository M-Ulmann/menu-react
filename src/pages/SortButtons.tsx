import './SortButtons.css';

export function SortButtons(){
  return(
    <div className="buttons-container">

      <button className="button-all">All</button>

      <button className="button-breakfast">Breakfast</button>

      <button className="button-lunch">Lunch</button>

      <button className="button-shakes">Shakes</button>

      <button className="button-dinner">Dinner</button>

      <button className="button-sort-price">

        <img className="sort-price-img" src="https://cdn-icons-png.flaticon.com/512/10407/10407117.png" alt="sort-price-icon" />

      </button>
    </div>
  );
}