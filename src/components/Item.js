import React from "react";
import { useState } from "react";
import PropTypes from "prop-types";

function Item(props){
  const [quantity, setCount] = useState(props.quantity);

  // commit. move buy and restock to item detail?

  // function decrement() {
  //   setCount(quantity => quantity - 1);
  //   // logic to handle out-of-stock
  // }

  // function restock(event) {
  //   event.preventDefault();
  //   setCount(quantity => parseInt(quantity) + parseInt(event.target.quantity.value));
  //   // alert('a')
  // }

  return (
    <React.Fragment>
      <div onClick = {() => props.whenItemClicked(props.id)}>
        <h3>{props.name}</h3>
        <p><em>{props.description}</em></p>
        {props.quantity > 0 &&
          <p>In stock: {props.quantity}</p>
        }
        {props.quantity == 0 &&
          <p><strong>Out of Stock</strong></p>
        }
      </div>
      {/* <button onClick={decrement}>Buy</button>
      <form onSubmit={restock}>
        <input type='number' name='quantity' min="1" />
        <button>Restock</button>
      </form> */}
      <hr/>
    </React.Fragment>
  );
}

Item.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  quantity: PropTypes.string.isRequired,
  id: PropTypes.string,
  whenItemClicked: PropTypes.func
};

export default Item;