import React, {Component} from 'react';
import '../../scss/form.scss';

class FormButton extends Component {
  constructor(props) {
    super(props);
    this.handleFormButtonClick = this.handleFormButtonClick.bind(this);
  }

  handleFormButtonClick(e) {
    e.preventDefault();
    console.log('form submitted');
  }


  render() {
    const {label,name} = this.props;

    return (
      <div className="form-group">
        <button
          onClick={this.handleFormButtonClick}
          type={name}
          className="btn btn-primary">{label}</button>
      </div>
    );
  }



}


export default FormButton;
