import React from 'react';

export const DataBottomTable = (props) => {

  return (

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
            <td>{props.firstname ? props.firstname : 'n/a'}</td>
            <td>{props.lastname ? props.lastname : 'n/a'}</td>
            <td>{props.jobtitle ? props.jobtitle : 'n/a'}</td>
            <td>{props.company ? props.company : 'n/a'}</td>
            <td>{props.salary ? props.salary : '0'}</td>
            <td>{props.preference ? props.preference : 'n/a'}</td>
            <td>{props.terms ? 'true':'false'}</td>
          </tr>
          </tbody>
      </table>
    </div>);

};


export let options = [

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


export const IsFormDataValid = (props) => {
  if (
    props.firstname.length >= 3 &&
    props.lastname.length >= 3 &&
    props.jobtitle.length >= 7 && //jobtitle at least 7 length
    props.company.length >= 3 &&  //company name at least 3 length
    props.salary > 0 &&           //salary anything greater than zero
    props.preference !== '' &&    //role preference pick one
    props.terms !== false         //must accept terms

  ) {
    return true;
  }

}

