import React, {Component} from 'react';
import '../../scss/form.scss';

class SelectOption extends Component {

  render() {
    const {label,options,name,handleChange,handleOnBlur} = this.props;

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



}


export default SelectOption;
