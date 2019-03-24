import React, {Component} from 'react';
import '../../scss/form.scss';

class CheckboxInputField extends Component {
  render() {
    const {name,label} = this.props;
    return (
      <div className='checkbox-input-field'>
        <input
            type='checkbox'
            name={name}
            id={name}
            className='form-control checkbox-input-field'
            />
          <label htmlFor={name}>{label}</label>
      </div>
    );
  }



}


export default CheckboxInputField;
