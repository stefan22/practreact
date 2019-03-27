import React, {Component} from 'react';
import '../../scss/form.scss';

class CheckboxInputField extends Component {

  render() {
    const {smallPrints,name,label,handleChange} = this.props;

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



}

export default CheckboxInputField;
