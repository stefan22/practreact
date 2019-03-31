import React, {Component} from 'react';
import PropTypes from 'prop-types';
import '../scss/list.scss';

class List extends Component {
  render() {
    const {items, tableHeadings, itemElement: Item} = this.props;
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
              <th>{tableHeadings.heading1}</th>
              <th>{tableHeadings.heading2}</th>
              <th>{tableHeadings.heading3}</th>
              <th>{tableHeadings.heading4}</th>
              <th>{tableHeadings.heading5}</th>
            </tr>
          </thead>

            {
              items.map((itm,idx) => {
                return (
                  <Item key={idx} seckey={idx}
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

List.propTypes = {
  items: PropTypes.array.isRequired,
  itemElement: PropTypes.func.isRequired,
  tableHeadings: PropTypes.object.isRequired,
}


export default List;
