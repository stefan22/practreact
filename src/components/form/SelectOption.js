import React from 'react';
import PropTypes from 'prop-types';
import '../../scss/form.scss';

const SelectOption = ({
  label,options,name,handleChange,handleOnBlur
}) => {

    return (
      <div className="form-group">
        <label htmlFor={name}>{label}
        </label>
          {
            <select
              onBlur={handleOnBlur}
              onChange={handleChange}
              className="custom-select"
              name={name}
              id={name}>
                <option defaultValue>Choose...</option>
                {
                  options.map((option,idx) =>
                   <option key={idx} value={option.value}>{option.name}</option>
                  )
                }
            </select>
          }
      </div>
    );

}

SelectOption.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  handleOnBlur: PropTypes.func,
};


export default SelectOption;
