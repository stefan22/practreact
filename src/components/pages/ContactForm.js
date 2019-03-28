import React, {Component} from 'react';
import '../../scss/form.scss';
import TextInputField from '../form/TextInputField';
import SelectOption from '../form/SelectOption';
import CheckboxInputField from '../form/CheckboxInputField';
import {DataBottomTable, options, IsFormDataValid} from '../helpers';

class ContactForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isFormVisible: true,
      firstname: '',
      lastname: '',
      jobtitle: '',
      company: '',
      salary: 0,
      preference: '',
      terms: false,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleFormSubmission = this.handleFormSubmission.bind(this);
    this.toggleFormVisibility = this.toggleFormVisibility.bind(this);
    this.handleOnBlur = this.handleOnBlur.bind(this);
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

  handleOnBlur(e) {
   const {name} = e.target;
   if(name === 'firstname') {
     console.log('blur', ' => ',name);
     this.setState({
       firstnameError: this.state.firstname.length <= 2 ? true: false,
     });
   }
   else if(name === 'lastname') {
     this.setState({
      lastnameError: this.state.lastname.length <= 2 ? true: false,
     });
   }

  }



  render() {
    const {
      isFormVisible,firstname,lastname,
      jobtitle,company,salary,preference,
      terms,firstnameError,lastnameError} = this.state;
    const enableButton = IsFormDataValid(this.state);

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

              {/* keeps values in form */}
              <div style={{visibility: isFormVisible ? 'visible': 'hidden'}}>
                <form onSubmit={this.handleFormSubmission}>

                  <TextInputField
                    label={'First Name'}
                    name={'firstname'}
                    required={true}
                    handleOnBlur={this.handleOnBlur}
                    handleChange={this.handleChange}
                  />

                  {
                    !!firstnameError &&
                      <p className='text-monospace form-error'>
                      Firstname must be  at least 3 characters long</p>
                  }


                  <TextInputField
                    label={'Last Name'}
                    name={'lastname'}
                    required={true}
                    handleChange={this.handleChange}
                    handleOnBlur={this.handleOnBlur}
                  />

                  {
                    !!lastnameError &&
                      <p className='text-monospace form-error'>
                      Lastname must be  at least 3 characters long</p>
                  }


                  <TextInputField
                    label={'Job Title'}
                    name={'jobtitle'}
                    handleChange={this.handleChange}
                  />
                  <TextInputField
                    label={'Company'}
                    name={'company'}
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
                      disabled={!enableButton}
                      type='submit'
                      className="btn btn-primary">Submit</button>
                  </div>

                </form>

              </div>
            </div>


            <DataBottomTable
              firstname={firstname}
              lastname={lastname}
              jobtitle={jobtitle}
              company={company}
              salary={salary}
              preference={preference}
              terms={terms}

            />

          </div>
        </div>
      </div>

    );
  }
}


export default ContactForm;


