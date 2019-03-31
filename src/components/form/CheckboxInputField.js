import React from 'react';
import PropTypes from 'prop-types';
import '../../scss/form.scss';

const CheckboxInputField = ({smallPrints,name,label,handleChange}) => {

    return (
      <div className="form-group form-check">
        <input
          onChange={handleChange}
          type="checkbox"
          className="form-check-input"
          name={name}
          required={true}
          id={name} />
        <label
          className="form-check-label"
          htmlFor={name}>
          {label}
        </label>
        <small id="emailHelp" className="form-text text-muted">
          {smallPrints}
        </small>
      </div>
    );

}

CheckboxInputField.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  smallPrints: PropTypes.string,
};


export default CheckboxInputField;
