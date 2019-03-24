import React, {Component} from 'react';
import '../../scss/form.scss';

class TextInputField extends Component {
  constructor(props) {
    super(props);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleInputFocus = this.handleInputFocus.bind(this);
    this.handleInputBlur = this.handleInputBlur.bind(this);
  }

  handleInputChange(e) {
    const {name,value, parentElement} = e.target;
    console.log(name, ' => ', value, ' | parent-element => ', parentElement);
  }

  handleInputFocus() {
    console.log('focus');
  }

  handleInputBlur() {
    console.log('blur');
  }

  render() {
    console.log(this);

    const {label,name} = this.props;
    return (

        <div className='input-field'>
          <label htmlFor={name} className='input-field-label'>
            {label}
          </label>
          <input
            name={name}
            type='text'
            className='form-control input-field-text'
            id= {name}
            onChange={this.handleInputChange}
            onFocus={this.handleInputFocus}
            onBlur={this.handleInputBlur}
          />

        </div>

    );
  }
}


export default TextInputField;
