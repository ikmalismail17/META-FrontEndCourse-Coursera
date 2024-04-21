import React from "react";

function FetchRandomData() {
  const [user, setUser] = React.useState([]);

  const fetchData = () => {
    fetch("https://randomuser.me/api/?results=1")
    .then((response) => response.json())
    .then((data) => setUser(data))
    .catch((err) => console.log(err))
  };

  React.useEffect(() => {
    fetchData();
  }, []);

  return Object.keys(user).length > 0 ? (
    <div>
      <h2>Name: {user.results[0].name.first}</h2>
      <img src={user.results[0].picture.large} alt=""/>
    </div>
  ) : (
    <h1>Data pending...</h1>
  );
}

export default FetchRandomData;
