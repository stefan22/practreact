import React, {Component} from 'react';
import '../scss/list.scss';

class FormList extends Component {
  render() {
    console.log(this);

    const {users, itemElement: Item} = this.props;
    return (
      <div className='table-wrapper'>


            {
              users.map((itm,idx) => {
                return (
                  <Item key={itm.id} seckey={idx}
                        {...itm}
                  />
                );
              })
            }


      </div>
    );
  }

}


export default FormList;
