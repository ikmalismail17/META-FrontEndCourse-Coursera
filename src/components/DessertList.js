function DessertsList(props) {
    // Implement the component here.
    //using map(), filter() and props()
    return (
      <div>
        <ul>
            {props.data.filter((item) => item.calories < 500).sort((a, b) => a.calories - b.calories).map((item, index) => {
                return <li key={index}>{item.name} - {item.calories} cal</li>
            })}
        </ul>
      </div>
    );
  }
  
  export default DessertsList;