import React from "react";
import PropTypes from "prop-types";
import { v4 } from 'uuid';

function NewItemForm(props){

  function handleNewItemFormSubmission(event) {
    event.preventDefault();
    props.onNewItemCreation({
      name: event.target.name.value,
      description: event.target.description.value,
      quantity: event.target.quantity.value,
      id: v4()
    });
  }

  return (
    <React.Fragment>
      <form onSubmit={handleNewItemFormSubmission}>
        {/* change below */}
        <label>Name: </label>
        <input
          type='text'
          name='name'
          placeholder='Name' />
        <br></br>
        <label>Description: </label>
        <br></br>
        <textarea
          name='description'
          placeholder='Product description.' />
        <br></br>
        <label>Quantity: </label>
        <input
          type='number'
          name='quantity'
          min="1" />
        <br></br>
        <button type='submit'>Submit</button>
      </form>
    </React.Fragment>
  );
}

NewItemForm.propTypes = {
  onNewItemCreation: PropTypes.func
}

export default NewItemForm