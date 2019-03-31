import React, {Component} from 'react';
import '../../scss/form.scss';
import TextInputField from '../form/TextInputField';
import SelectOption from '../form/SelectOption';
import CheckboxInputField from '../form/CheckboxInputField';
import {DataBottomTable, options, IsFormDataValid} from '../helpers';
import {formErrors} from '../../data/formErrors';

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
      required: false,
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
    }
    if(name === 'firstname') {
      this.setState({
        firstname: value,
        firstnameError: (value.length >= 3) ? false: formErrors.firstnameError,
      });
    }
    else if(name === 'lastname') {
      this.setState({
        lastname:value,
        lastnameError: (value.length >= 3) ? false: formErrors.lastnameError,
      });
    }
    else if(name === 'jobtitle') {
      this.setState({
        jobtitle: value,
        jobtitleError: (value.length >= 5) ? false: formErrors.jobtitleError,
      });
    }
    else if(name === 'company') {
      this.setState({
        company: value,
        companyError: (value.length >= 3) ? false: formErrors.companyError,
      });
    }

    else if(name === 'salary') {
      this.setState({
        salary: value,
        salaryError: (value > 0) ? false: formErrors.salaryError,
      });
    }

    else if(name === 'preference') {
      this.setState({
        preference: value,
        preferenceError: value.includes('Choose...') ? formErrors.preferenceError: false,
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
   const {name,value} = e.target;
   if(name === 'firstname') {
     this.setState({
       firstnameError: value.length <= 2 ? formErrors.firstnameError: false,
     });
   }
   else if(name === 'lastname') {
     this.setState({
      lastnameError: value.length <= 2 ? formErrors.lastnameError: false,
     });
   }

   else if(name === 'jobtitle') {
      this.setState({
      jobtitleError: value.length <= 4 ? formErrors.jobtitleError: false,
      });
    }

    else if(name === 'company') {
      this.setState({
       companyError: value.length <= 2 ? formErrors.companyError: false,
      });
    }

    else if(name === 'salary') {
      this.setState({
       salaryError: value <= 0 ? formErrors.salaryError: false,
      });
    }

    else if(name === 'preference') {
      console.log('blur', ' => ',name);
      this.setState({
       preferenceError:  value.includes('Choose...') ? formErrors.preferenceError: false,

      });
    }

  }

  render() {

    const {
      isFormVisible,firstname,lastname,
      jobtitle,company,salary,preference,
      terms,firstnameError,lastnameError,
      jobtitleError,companyError,salaryError,preferenceError} = this.state;
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
                      {firstnameError}</p>
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
                      {lastnameError}</p>
                  }

                  <TextInputField
                    label={'Job Title'}
                    name={'jobtitle'}
                    required={true}
                    handleChange={this.handleChange}
                    handleOnBlur={this.handleOnBlur}
                  />

                  {
                    !!jobtitleError &&
                      <p className='text-monospace form-error'>
                      {jobtitleError}</p>
                  }

                  <TextInputField
                    label={'Company'}
                    name={'company'}
                    handleChange={this.handleChange}
                    handleOnBlur={this.handleOnBlur}
                  />

                  {
                    !!companyError &&
                      <p className='text-monospace form-error'>
                      {companyError}</p>
                  }

                  <TextInputField
                    label={'Salary'}
                    name={'salary'}
                    handleChange={this.handleChange}
                    handleOnBlur={this.handleOnBlur}
                  />

                  {
                    !!salaryError &&
                      <p className='text-monospace form-error'>
                      {salaryError}</p>
                  }

                  <SelectOption
                    label={'Role Preference'}
                    options={options}
                    name={'preference'}
                    handleChange={this.handleChange}
                    handleOnBlur={this.handleOnBlur}
                  />

                  {
                    !!preferenceError &&
                      <p className='text-monospace form-error'>
                      {preferenceError}</p>
                  }

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


