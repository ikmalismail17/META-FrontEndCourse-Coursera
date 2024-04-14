import { useReducer } from 'react';

// Define a reducer function that takes in a state and an action, and returns a new state based on the action type
const reducer = (state, action) => {
    switch (action.type) {
        // If the action type is 'increment', increase the count in the state by 1
        case 'increment':
            return { count: state.count + 1 };
        // If the action type is 'decrement', decrease the count in the state by 1
        case 'decrement':
            return { count: state.count - 1 };
        // If the action type is not recognized, throw an error
        default:
            throw new Error();
    }
}

// Define a functional component called TryUseReducer
const TryUseReducer = () => {
    // Define an initial state object with a count property set to 100
    const initialState = { count: 100 };
    // Use the useReducer hook from the 'react' library to manage state and dispatch actions
    const [state, dispatch] = useReducer(reducer, initialState);

    // Render the component JSX
    return (
        <div>
            <p>Task: useReducer</p>
            <h1>Count: {state.count}</h1>
            <button onClick={() => dispatch({ type: 'increment' })}>+</button>
            <button onClick={() => dispatch({ type: 'decrement' })}>-</button>
        </div>
    );
}

// Export the TryUseReducer component as the default export of the module
export default TryUseReducer;