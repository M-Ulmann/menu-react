import type React from 'react';
import './SortButtons.css';

interface props{
  setSort: React.Dispatch<React.SetStateAction<string>>;
  setIsAscending: React.Dispatch<React.SetStateAction<boolean>>;
  isAscending: boolean
}

export function SortButtons({setSort, setIsAscending, isAscending} : props){

  function sortState(e: React.MouseEvent<HTMLButtonElement>){
    setSort(e.currentTarget.name)
  }

  function ascendingState(){
    setIsAscending(!isAscending);
  }

  return(
    <div className="buttons-container">

      <button name='all' onClick={sortState} className="button-all">All</button>

      <button name='breakfast' onClick={sortState} className="button-breakfast">Breakfast</button>

      <button name='lunch' onClick={sortState} className="button-lunch">Lunch</button>

      <button name='shakes' onClick={sortState} className="button-shakes">Shakes</button>

      <button name='dinner' onClick={sortState} className="button-dinner">Dinner</button>

      <button onClick={ascendingState} className="button-sort-price">

        <img className="sort-price-img" src="https://cdn-icons-png.flaticon.com/512/10407/10407117.png" alt="sort-price-icon" />

      </button>
    </div>
  );
}