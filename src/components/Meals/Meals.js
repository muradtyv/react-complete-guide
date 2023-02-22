import React from "react";
import AvailableMeals from "./AvaliableMeals";
import MealsSummary from "./MealsSummary";


const Meals = ( ) => {
    return <React.Fragment>
        <MealsSummary/>
        <AvailableMeals/>
    </React.Fragment>
}

export default Meals;