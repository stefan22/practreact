import React, {Component} from 'react';
import '../scss/list.scss';

class List extends Component {
  render() {
    console.log(this);
    const {users, itemElement: Item} = this.props;
    return (
      <div className='table-wrapper'>
       <table
            width='100%'
            align='center'
            cellPadding='10'
            cellSpacing='10'
            border='1'>
          <thead>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Username</th>
              <th>Phone</th>
              <th>Website</th>
            </tr>
          </thead>

            {
              users.map((itm,idx) => {
                return (
                  <Item key={itm.id} seckey={idx}
                        {...itm}
                  />
                );
              })
            }

        </table>
      </div>
    );
  }

}


export default List;
