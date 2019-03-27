import React, {Component} from 'react';
import '../../scss/form.scss';

class SelectOption extends Component {
  constructor(props) {
    super(props);
    this.handleSelectOption = this.handleSelectOption.bind(this);
  }

  handleSelectOption(e) {
    const {name,value} = e.target;
    console.log(name, ' => ', value);
  }


  render() {
    const {label,options,name} = this.props;

    return (
      <div className="form-group">
        <label htmlFor={name}>{label}
        </label>
          {
            <select
              onChange={this.handleSelectOption}
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
