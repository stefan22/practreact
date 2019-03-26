import React, {Component} from 'react';
import '../../scss/form.scss';

class CheckboxInputField extends Component {
  constructor(props) {
    super(props);
    this.handleCheckboxInputChange = this.handleCheckboxInputChange.bind(this);
  }

  handleCheckboxInputChange(e) {
    const {name,checked} = e.target;
    console.log(name, ' => ', checked);
  }


  render() {
    const {name,label} = this.props;
    return (
      <div className='checkbox-input-field'>
        <input
            onChange={this.handleCheckboxInputChange}
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
