import React from "react";
import PropTypes from "prop-types";

function ReusableForm(props) {
  return (
    <React.Fragment>
      <form onSubmit={props.formSubmissionHandler}>
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

ReusableForm.propTypes = {
  formSubmissionHandler: PropTypes.func,
  buttonText: PropTypes.string
}

export default ReusableForm;