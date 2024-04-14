import { useMealsListContext } from "../hooks/TryCreateContext";

const TryUseContext = () => {

    // Import the useMealsListContext hook from the "../hooks/TryCreateContext" module
    const { meals } = useMealsListContext();
    
    return (
        <div>
        <p>Task: TryUseContext, TryCreateContext</p>
        {/* Map over the meals array and render a <p> element for each meal */}
        {meals.map((meal, index) => (
            <p key={index}>{meal}</p>
        ))}
        </div>
    );
};

export default TryUseContext;