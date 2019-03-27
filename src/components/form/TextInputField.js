import React, {Component} from 'react';
import '../../scss/form.scss';

class TextInputField extends Component {

  render() {
    const {label,name,handleChange} = this.props;
    let placeholder = `Enter ${name}`;
    return (
      <div className="form-group">
        <label htmlFor={name}>{label}
        </label>
        <input
          onChange={handleChange}
          name={name}
          type="text"
          className="form-control"
          id={name} placeholder={placeholder} />
      </div>
    );
  }




}


export default TextInputField;
