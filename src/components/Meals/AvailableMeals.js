import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import Card from "../UI/Card";
import classes from "./AvailableMeals.module.css";
import MealsItem from "./MealItem/MealItem";
import  ReactLoading  from "react-loading";

export default function AvailableMeals() {
  const [meals, setMeals] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    setIsLoading(true);
    const fetchMeals = async () => {
      const response = await fetch(
        "https://restaurant-react-410cd-default-rtdb.europe-west1.firebasedatabase.app/meals.json"
      );
      const responseData = await response.json();

      const loadedMeals = [];

      for (const key in responseData) {
        loadedMeals.push({
          id: key,
          name: responseData[key].name,
          description: responseData[key].description,
          price: responseData[key].price,
        });
      }
      setMeals(loadedMeals);
      setIsLoading(false)
    };
    fetchMeals();
  }, []);
  const mealsList = meals.map((meal) => (
    <MealsItem
      id={meal.id}
      key={meal.id}
      description={meal.description}
      price={meal.price}
      name={meal.name}
    />
  ));
  return (
    <>
      
      <section className={classes.meals}>
        {isLoading ? (
          ReactDOM.createPortal(
            <ReactLoading type="spin" />,
            document.getElementById("loading")
          )
        ) : (
          <Card>
            <ul>{mealsList}</ul>
          </Card>
        )}
      </section>
    </>
  );
}
