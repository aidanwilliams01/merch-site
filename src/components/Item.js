import React from "react";
import { useState } from "react";
import PropTypes from "prop-types";

function Item(props){
  const [quantity, setCount] = useState(props.quantity);

  function decrement() {
    setCount(quantity => quantity - 1);
    // logic to handle out-of-stock
  }

  function restock(event) {
    event.preventDefault();
    setCount(quantity => parseInt(quantity) + parseInt(event.target.quantity.value));
    // alert('a')
  }

  return (
    <React.Fragment>
      <h3>{props.name}</h3>
      <p><em>{props.description}</em></p>
      <p>In stock: {quantity}</p>
      <button onClick={decrement}>Buy</button>
      <form onSubmit={restock}>
        <input type='number' name='quantity' min="1" />
        <button>Restock</button>
      </form>
      <hr/>
    </React.Fragment>
  );
}

Item.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  quantity: PropTypes.string.isRequired
};

export default Item;