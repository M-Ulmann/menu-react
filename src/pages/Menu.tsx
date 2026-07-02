import { useState } from 'react';
import { DishesGrid } from './DishesGrid';
import './Menu.css';
import { MenuTitle } from "./MenuTitle";
import { SortButtons } from './SortButtons';

export function Menu(){

  const [sort, setSort] = useState<string>('');

  const [isAscending, setIsAscending] = useState<boolean>(true);

  return (
    <>

      <MenuTitle />

      <SortButtons setSort={setSort} setIsAscending={setIsAscending} isAscending={isAscending}/>

      <DishesGrid sort={sort} isAscending={isAscending}/>

    </>
  );
}