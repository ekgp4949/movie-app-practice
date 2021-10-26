import React from "react";
import PropTypes from "prop-types";

function Food({ id, name, rating }) {
  return <h2>I like {name}, {rating}</h2>
}

const foodILike = [
  {id:1, name:"a", rating: 5.0},
  {id:2, name:"b", rating: 4.9}
];

function App() {
  return (
  <div className="App">
    { foodILike.map((dish) => <Food key={dish.id} name={dish.name} rating={dish.rating}/>) }
  </div>
  );
}

Food.propTypes = {
  name: PropTypes.string.isRequired,
  rating: PropTypes.number //평점이 등록되지 않았을 수도 있음
};

export default App;
