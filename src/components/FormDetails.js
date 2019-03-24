import React, {Component} from 'react';
import '../scss/list.scss';

class FormDetails extends Component {
  render() {
    let {name} = this.props;

     let firstName = name.split(' ')[0];
     let lastName = name.split(' ')[1];

    return (
      <form className='form-inline'>

          <label for='first-name'>First Name: </label>
          <input type='text' className='form-control mx-auto' id='first-name'
          placeholder='enter first name' name='first-name' />


          <label for='last-name'>Last Name: </label>
          <input type='text' className='form-control mx-auto' id='last-name'
          placeholder='enter last name' name='last-name' />

        <button type='submit' className='btn btn-primary'>Submit</button>
      </form>

    );
  }

}


export default FormDetails;



