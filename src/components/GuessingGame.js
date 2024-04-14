const GuessingGame = () => {
    function handleClick() { 
        let randomNum = Math.floor(Math.random() * 3) + 1;
        console.log(randomNum);
        let userInput = prompt('type a number');
        alert(`Computer number: ${randomNum}, Your guess: ${userInput}`);
        
        if(randomNum === parseInt(userInput)){
            alert('You guess correctly!');
        } else {
            alert('You guess incorrectly!');
        }
      }
    
      return (
        <div style={{ marginBottom : "10px" }}>
          <p>Task: Add a button and handle a click event</p>
          <button onClick={handleClick}>Guess the number between 1 and 3</button>
        </div>
      );
}

export default GuessingGame;