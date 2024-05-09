import React from "react";
import PropTypes from "prop-types";

function ItemDetail(props){
  const { item, onClickingDelete } = props;

  // function decrement() {
  //   props.onEditItem({name: props.item.name, description: props.item.description, quantity: props.item.quantity - 1, id: props.item.id});
  // }

  return (
    <React.Fragment>
      <h1>Item Detail</h1>
      <h3>{item.name}</h3>
      <p><em>{item.description}</em></p>
      <p>In stock: {item.quantity}</p>
      {/* <button onClick={decrement}>Buy</button> */}
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
  // onClickingEdit: PropTypes.func
};

export default ItemDetail;