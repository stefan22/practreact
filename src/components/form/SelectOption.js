import React, {Component} from 'react';
import '../../scss/form.scss';

class SelectOption extends Component {
  constructor(props) {
    super(props);
    this.handleChangeSelectOption = this.handleChangeSelectOption.bind(this);
  }

  handleChangeSelectOption(e) {
    const {name,value} = e.target;
    console.log(name, ' => ', value);

  }


  render() {
    //console.log(this);
    const {label,name} = this.props;
    const [first,second,third] = this.props.options;

    return (
      <div className="mt-3 role-option">
        <label className="mr-sm-2" htmlFor={name}>{label}</label>
        <select
          onChange={this.handleChangeSelectOption}
          name={name}
          className='custom-select mr-sm-2'
          id={name}>
          <option defaultValue>Choose...</option>
          <option value={first}>{first}</option>
          <option value={second}>{second}</option>
          <option value={third}>{third}</option>
        </select>
      </div>
    );
  }



}

export default SelectOption;
