import React, {Component} from 'react';
import '../scss/list.scss';

class ListDetails extends Component {
  render() {
    const {id,name,username,phone,website} = this.props;
    return (

          <tbody>
            <tr>
              <td>{id}</td>
              <td>{name}</td>
              <td>{username}</td>
              <td>{phone}</td>
              <td>{website}</td>
            </tr>
          </tbody>
    );
  }

}


export default ListDetails;



