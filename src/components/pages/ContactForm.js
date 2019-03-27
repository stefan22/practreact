import React, {Component} from 'react';
import '../../scss/form.scss';
import TextInputField from '../form/TextInputField';
import SelectOption from '../form/SelectOption';
import CheckboxInputField from '../form/CheckboxInputField';

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


  isFormDataValid = (state) => {
    if (
      state.jobtitle.length >= 7 && //jobtitle at least 7 length
      state.company.length >= 3 &&  //company name at least 3 length
      state.salary > 0 &&           //salary anything greater than zero
      state.preference !== '' &&    //role preference pick one
      state.terms !== false         //must accept terms

    ) {
      return true;
    }

  }




  render() {
    const {
      isFormVisible,firstname,lastname,jobtitle,company,salary,preference,terms} = this.state;
    console.log(this);
    const enableButton = this.isFormDataValid(this.state);

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
                    handleChange={this.handleChange}
                  />
                  <TextInputField
                    label={'Last Name'}
                    name={'lastname'}
                    required={true}
                    handleChange={this.handleChange}
                  />
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

            <div className='form-info'>
                <table className='table table-sm table-dark'>
                  <thead>
                    <tr><th scope='row'>State form data</th></tr>
                    <tr>
                      <th scope='col'>#</th>
                      <th scope='col'>First</th>
                      <th scope='col'>Last</th>
                      <th scope='col'>Job title</th>
                      <th scope='col'>Company</th>
                      <th scope='col'>Salary</th>
                      <th scope='col'>Preference</th>
                      <th scope='col'>Terms</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope='row'>1</th>
                      <td>{firstname ? firstname : 'n/a'}</td>
                      <td>{lastname ? lastname : 'n/a'}</td>
                      <td>{jobtitle ? jobtitle : 'n/a'}</td>
                      <td>{company ? company : 'n/a'}</td>
                      <td>{salary ? salary : '0'}</td>
                      <td>{preference ? preference : 'n/a'}</td>
                      <td>{terms ? 'true':'false'}</td>
                    </tr>
                   </tbody>
                </table>
              </div>

          </div>
        </div>
      </div>

    );
  }
}


export default ContactForm;
