import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import '../../../scss/jobs-form.scss';

class JobCreationForm extends Component {

  render() {
    const {id,heading,company,role,salary,location,
           applyAt,aboutCompanyUrl,createdBy,views,clicks
          } = this.props;


    return (
      <div>
          <form className='job-form'>
            <div className='job-item'>
              <span>Id</span>
              <Link to={`/local-jobs/${id}`}>
              {id}
              </Link>
            </div>
            <div className='job-item'>
              <span className='job-item_heading'>Heading</span> {heading}
            </div>
            <div className='job-item'>
              <span>Company</span>{company}
            </div>
            <div className='job-item'>
              <span>Role</span>{role}
            </div>
            <div className='job-item'>
              <span>Salary</span>{salary}
            </div>
            <div className='job-item'>
              <span>Location</span>{location}
            </div>
            <div className='job-item'>
              <span>Apply at</span>{applyAt}
            </div>
            <div className='job-item'>
              <span>About company</span>{aboutCompanyUrl}
            </div>
            <div className='job-item'>
              <span>Created by</span>{createdBy}
            </div>
            <div className='job-item'>
              <span>Views</span>{views}
            </div>
            <div className='job-item'>
              <span>Clicks</span>{clicks}
            </div>

          </form>


      </div>
    )
  }


}

export default JobCreationForm;



