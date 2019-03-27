import React, {Component} from 'react';
import '../../scss/form.scss';

class SelectOption extends Component {

  render() {
    const {label,options,name,handleChange} = this.props;

    return (
      <div className="form-group">
        <label htmlFor={name}>{label}
        </label>
          {
            <select
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



}


export default SelectOption;
