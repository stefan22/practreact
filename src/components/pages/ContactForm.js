import React, {Component} from 'react';
import '../../scss/form.scss';
import TextInputField from '../form/TextInputField';
import SelectOption from '../form/SelectOption';
import CheckboxInputField from '../form/CheckboxInputField';
import FormButton from '../form/FormButton';

class ContactForm extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    const {type,name,value,checked} = e.target;
    if(type === 'checkbox') {
      console.log(name, ' => ',checked);
    } else {
      console.log(name, ' => ',value);
    }
  }



  render() {
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
          <div className='col-12 header'>
            <h1 className='mt-3 mb-3 text-center'>We got your feedback...
            <small className='text-muted ml-3'> as soon as you enter it</small>
            </h1>
          </div>
        </div>
        <div className='row'>
          <div className='col-12 main-content'>
            <div className='form-wrapper'>
              <form>

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

                <FormButton
                  label={'Submit'}
                  name={'submit'}
                />




              </form>
            </div>
          </div>
        </div>
      </div>

    );
  }
}


export default ContactForm;
