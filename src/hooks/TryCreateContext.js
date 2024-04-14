import React, { createContext, useState } from 'react';

// Create the meals context
const MealsContext = createContext();

// Create the meals data
const todaysMeals = ["Baked Beans", "Baked Sweet Potatoes", "Baked Potatoes"];

// Create a meals provider component
const MealsProvider = ({ children }) => {
    // State to hold the meals data
    const [meals, setMealsList] = useState(todaysMeals);

    return (
        <MealsContext.Provider value={{ meals }}>
            {children}
        </MealsContext.Provider>
    );
};

// Export a custom hook to access the meals list context
export const useMealsListContext = () => React.useContext(MealsContext);

// Export the meals provider component as the default export
export default MealsProvider;