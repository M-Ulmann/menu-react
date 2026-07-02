import { useState } from 'react';
import { DishesGrid } from './DishesGrid';
import './Menu.css';
import { MenuTitle } from "./MenuTitle";
import { SortButtons } from './SortButtons';

export function Menu(){

  const [sort, setSort] = useState<string>('');

  console.log(sort)

  return (
    <>

      <MenuTitle />

      <SortButtons setSort={setSort} />

      <DishesGrid sort={sort} />

    </>
  );
}