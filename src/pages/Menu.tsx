import { DishesGrid } from './DishesGrid';
import './Menu.css';
import { MenuTitle } from "./MenuTitle";
import { SortButtons } from './SortButtons';

export function Menu(){

  

  return (
    <>

      <MenuTitle />

      <SortButtons />

      <DishesGrid />

    </>
  );
}