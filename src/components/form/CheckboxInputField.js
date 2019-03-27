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
    const {smallPrints,name,label} = this.props;

    return (
      <div className="form-group form-check">
        <input
          onChange={this.handleCheckboxInputChange}
          type="checkbox"
          className="form-check-input"
          name={name}
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
