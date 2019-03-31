import React from 'react';
import PropTypes from 'prop-types';
import '../../scss/form.scss';

const TextInputField = ({
  label,name,handleChange,required,handleOnBlur
}) => {

    let placeholder = `Enter ${name}`;
    return (
      <div className="form-group">
        <label htmlFor={name}>{label}
        </label>
        <input
          onChange={handleChange}
          onBlur={handleOnBlur}
          name={name}
          type="text"
          className="form-control"
          required={required}
          id={name} placeholder={placeholder} />
      </div>
    );

}

TextInputField.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  handleOnBlur: PropTypes.func,
  required: PropTypes.bool,
  placeholder: PropTypes.string,
}


export default TextInputField;
