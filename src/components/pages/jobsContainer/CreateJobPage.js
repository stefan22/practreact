import React, {Component} from 'react';
import '../../../scss/jobs-form.scss';
import JobCreationForm from './JobCreationForm';

class CreateJobPage extends Component {
  render() {
    return (
      <div>
        <h1>Create A Job Page</h1>
        <JobCreationForm />
      </div>
    )
  }


}

export default CreateJobPage;
