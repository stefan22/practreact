import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class NotFoundPage extends Component {
  render() {
    return (
      <div className="">
        <h1>Page Not found</h1>
        <button>
           <Link className='back-home' to='/'>Back to Homepage</Link>
        </button>

      </div>
    );
  }
}

export default NotFoundPage;
