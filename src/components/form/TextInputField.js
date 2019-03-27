import React, {Component} from 'react';
import '../../scss/form.scss';

class TextInputField extends Component {
  constructor(props) {
    super(props);
    this.handleTextInputChange = this.handleTextInputChange.bind(this);
    this.handleTextInputFocus = this.handleTextInputFocus.bind(this);
    this.handleTextInputBlur = this.handleTextInputBlur.bind(this);

  }

  handleTextInputChange(e) {
    const {name,value} = e.target;
    console.log(name, ' => ', value);
  }

  handleTextInputFocus(){
    console.log('focus');
  }

  handleTextInputBlur() {
    console.log('blur');
  }


  render() {
    const {label,name} = this.props;
    let placeholder = `Enter ${name}`;
    return (
      <div className="form-group">
        <label htmlFor={name}>{label}
        </label>
        <input
          onChange={this.handleTextInputChange}
          onFocus={this.handleTextInputFocus}
          onBlur={this.handleTextInputBlur}
          name={name}
          type="text"
          className="form-control"
          id={name} placeholder={placeholder} />
      </div>
    );
  }




}


export default TextInputField;
