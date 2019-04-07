import React, {Component} from 'react';
import '../../../scss/jobslist.scss';

class JobsList extends Component {
  render() {
    const {jobs,itemElement: Item} = this.props;

    return (
      <div>
        {
          !!jobs &&
          jobs.map((job,idx) =>
            <Item
              {...job}
              key={idx}
            />
          )
        }
      </div>
    )
  }

}


export default JobsList;








