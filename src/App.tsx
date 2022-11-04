import React, {useState} from 'react';
import meatImage from './assets/meat.png';
import cheeseImage from './assets/cheese.png';
import saladImage from './assets/salad.png';
import baconImage from './assets/bacon.png';
import Burger from "./components/Burger/Burger";
import BurgerMaker from "./components/BurgerMaker/BurgerMaker";

interface Ingredient {
  name: string;
  price: number;
  image: string;
  id: number;
}

interface item {
  name: string;
  count: number;
  id: number;
}

const ALLINGREDIENTS: Ingredient[] = [
  {name: "Salad", price: 10, image: saladImage, id: 1},
  {name: "Bacon", price: 60, image: baconImage, id: 2},
  {name: "Cheese", price: 50, image: cheeseImage, id: 3},
  {name: "Meat", price: 80, image: meatImage, id: 4},
];

function App() {
  const [ingredients, setIngredients] = useState([
    {name: 'Salad', count: 0, id: 1},
    {name: 'Bacon', count: 0, id: 2},
    {name: 'Cheese', count: 0, id: 3},
    {name: 'Meat', count: 0, id: 4},
  ]);

  const BurgerDraw = ingredients.map(burger => {
    return <Burger count={burger.count} classname={burger.name} key={burger.id}/>
  });

  const getCount = (index: number) => {
    const ingredient = ingredients.find(ingredient => ingredient.id === index);
    return ingredient?.count ?? 0;
  };

  const buttonAdd = (id: number) => {
    setIngredients(prev => prev.map(ingredient => {
      return ingredient.id === id ? {
        ...ingredient,
        count: ingredient.count + 1,
      } : ingredient;
    }));
  };

  const buttonDelete = (id: number) => {
    setIngredients(prev => prev.map(ingredient => {
      return ingredient.id === id && ingredient.count !== 0 ?
        {...ingredient, count: ingredient.count - 1,} : ingredient;
    }));
  };


  const BurgerMake = ALLINGREDIENTS.map((item) => {
    return <BurgerMaker buttonDelete={() => buttonDelete(item.id)} buttonAdd={() => buttonAdd(item.id)}
                        image={item.image} name={item.name} count={getCount(item.id)} key={item.id}/>
  });

  return (
    <div className="container d-flex justify-content-around mt-5 align-items-center gap-1 flex-wrap">
      <div className="d-flex flex-column gap-3 border border-danger border-3 rounded-2 p-2">
        <h3 className="text-center">Ingredients</h3>
        {BurgerMake}
      </div>
      <div className="drawBurger-block border border-danger border-3 rounded-2">
        <h3 className="text-center">Burger</h3>
        <div className="Burger">
          <div className="BreadTop">
            <div className="Seeds1"></div>
            <div className="Seeds2"></div>
          </div>
          {BurgerDraw}
          <div className="BreadBottom"></div>
        </div>

      </div>
    </div>
  );
}

export default App;
