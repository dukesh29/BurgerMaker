import React from 'react';

interface Ingredient {
  name:string;
  price:number;
  image:string;
  id:string;
}

const INGREDIENTS:Ingredient[] = [
  {name:"Meat", price:80, image:'./assets/meat.png', id:(Math.random()).toString()},
  {name:"Cheese", price:50, image:'./assets/cheese.png', id:(Math.random()).toString()},
  {name:"Salad", price:10, image:'./assets/salad.png', id:(Math.random()).toString()},
  {name:"Bacon", price:60, image:'./assets/bacon.png', id:(Math.random()).toString()}
];

const Ingredient = () => {
  return (
    <div>
      
    </div>
  );
};

export default Ingredient;