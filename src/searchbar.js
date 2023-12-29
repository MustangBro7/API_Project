import React, { useState } from "react";
import "./searchbar.css";
import ActionAreaCard from "./sample";

function SearchBar() {
  const [input, setInput] = useState("");
  const [val, setVal] = useState([]);
  const [res, setRes] = useState([]);

  async function booze(value) {
    try {
      const response = await fetch(
        "https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=" + value
      );
      const data = await response.json();

      if (data.drinks) {
        setVal(data.drinks);

        const idDrinks = data.drinks.map(drink => drink.idDrink);
        const recipeResponses = await Promise.all(
          idDrinks.map(idDrink => recipe(idDrink))
        );

        const combinedData = data.drinks.map((drink, index) => ({
          ...drink,
          recipeData: recipeResponses[index]
        }));

        setRes(combinedData);
        console.log(combinedData)
    } else {
        // Handle the case when no drinks are found
        console.log("No drinks found");
      }
    } catch (error) {
      console.log("Error fetching drinks", error);
    }
  }

  async function recipe(idDrink) {
    try {
        console.log(idDrink)
      const response = await fetch(
        // "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=" + idDrink
        'http://localhost:3001/data/'+idDrink
      );
      const data = await response.json();
      console.log(data)
      return data.drinks[0] || {};
    } catch (error) {
      console.log("Error fetching recipe", error);
      return {};
    }
  }

  function handleChange(value) {
    setInput(value);
  }

  function handleSubmit() {
    console.log(input);
    booze(input);
  }
  return (
    <div>
      <input
        className="searchbox"
        value={input}
        onChange={(e) => handleChange(e.target.value)}
        placeholder="Enter Alcohol or Cocktail"
      ></input>
      <button className="searchbutton" onClick={handleSubmit}>
        Search
      </button>
      <div className="cocktails_container">
        {res.map((valObj, id) => (
          <ActionAreaCard
            key={id}
            image={valObj.strDrinkThumb}
            name={valObj.strDrink}
            // recipeData={valObj.strIngredient1}
            
            recipeData={Array.from({ length: 16 }, (_, i) => valObj.recipeData[`strIngredient${i + 1}`]).join(' ')}
          />
        ))}
      </div>
    </div>
  );
}

export default SearchBar;
