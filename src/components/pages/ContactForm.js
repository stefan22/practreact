import React, {Component} from 'react';
import '../../scss/form.scss';
import {Link} from 'react-router-dom';
import TextInputField from '../form/TextInputField';
import SelectOption from '../form/SelectOption';
import CheckboxInputField from '../form/CheckboxInputField';

class ContactForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isFormVisible: true,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleFormSubmission = this.handleFormSubmission.bind(this);
    this.toggleFormVisibility = this.toggleFormVisibility.bind(this);
  }

  handleChange(e) {
    const {type,name,value,checked} = e.target;
    if(type === 'checkbox') {
      console.log(name, ' => ',checked);
      this.setState({
        [name]:checked
      });
    } else {
      console.log(name, ' => ',value);
      this.setState({
        [name]: value
      });
    }
  }

  handleFormSubmission(e) {
    e.preventDefault();
    console.log(this.state);

  }

  toggleFormVisibility() {
    this.setState(prevState => ({
      isFormVisible: !prevState.isFormVisible,
    }));
  }




  render() {
    const {isFormVisible} = this.state
    let options=[
      {
        name: 'Full-time',
        value: 'full-time',
      },
      {
        name: 'Part-time',
        value: 'part-time',
      },
      {
        name: 'Remote',
        value: 'remote',
      }
    ];


    return (
      <div className='container'>
        <div className='row'>
          <div className='col-12'>
            <div className='header'>
              <h1 className='mt-3 mb-3 text-center'>We got your feedback...
              <small className='text-muted ml-3'> as soon as you enter it</small>
              </h1>
              <p className='mt-3 text-center'>
                <button onClick={this.toggleFormVisibility} className='btn btn-outline-dark btn-sm'>
                  {(isFormVisible) ? 'Hide Form' : 'Show Form'}
                </button>
              </p>
            </div>
          </div>
        </div>
        <div className='row'>
          <div className='col-12 main-content'>
            <div className='form-wrapper'>

            { (isFormVisible) &&


              <form onSubmit={this.handleFormSubmission}>

                <TextInputField
                  label={'First Name'}
                  name={'first-name'}
                  handleChange={this.handleChange}
                />
                <TextInputField
                  label={'Last Name'}
                  name={'last-name'}
                  handleChange={this.handleChange}
                />
                <TextInputField
                  label={'Job Title'}
                  name={'job-title'}
                  handleChange={this.handleChange}
                />
                <TextInputField
                  label={'Company'}
                  name={'company-name'}
                  handleChange={this.handleChange}
                />
                <TextInputField
                  label={'Salary'}
                  name={'salary'}
                  handleChange={this.handleChange}
                />
                <SelectOption
                  label={'Role Preference'}
                  options={options}
                  name={'preference'}
                  handleChange={this.handleChange}
                />
                <CheckboxInputField
                  name={'terms'}
                  label={'Accept terms'}
                  smallPrints={' We\'ll never share your information with anyone.'}
                  handleChange={this.handleChange}
                />
                <div className="form-group">
                  <button
                    type='submit'
                    className="btn btn-primary">Submit</button>
                </div>

              </form>

            }


            </div>
          </div>
        </div>
      </div>

    );
  }
}


export default ContactForm;
