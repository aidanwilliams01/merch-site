import React from "react";
import PropTypes from "prop-types";

function ItemDetail(props){
  const { item, onClickingDelete } = props;

  function decrement() {
    props.onEditItem({name: item.name, description: item.description, quantity: item.quantity - 1, id: item.id});
  }

  function restock(event) {
    event.preventDefault();
    props.onEditItem({name: item.name, description: item.description, quantity: parseInt(item.quantity) + parseInt(event.target.quantity.value), id: item.id});
  }

  return (
    <React.Fragment>
      <h1>Item Detail</h1>
      <h3>{item.name}</h3>
      <p><em>{item.description}</em></p>
      {item.quantity > 0 &&
        <p>In stock: {item.quantity}</p>
      }
      {item.quantity === 0 &&
        <p><strong>Out of Stock</strong></p>
      }
      {item.quantity > 0 &&
        <button onClick={decrement}>Buy</button>
      }
      <form onSubmit={restock}>
        <input type='number' name='quantity' min="1" />
        <button>Restock</button>
      </form>
      <button onClick={ props.onClickingEdit }>Update Item</button>
      <button onClick={()=> onClickingDelete(item.id) }>Delete Item</button>
      <hr/>
    </React.Fragment>
  );
}

ItemDetail.propTypes = {
  item: PropTypes.object,
  onEditItem: PropTypes.func,
  onClickingDelete: PropTypes.func,
  onClickingEdit: PropTypes.func
};

export default ItemDetail;