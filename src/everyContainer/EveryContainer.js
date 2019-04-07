import React from 'react';
import Typography from '@material-ui/core/Typography';

const EveryComponent = () => {

  return (
    <div className='container'>
      <div className='row'>
        <div className='col-12'>
        <div className='every-content'>

            <Typography variant='h5' gutterBottom>
              Every Component shows this
            </Typography>
            <Typography variant='body1' gutterBottom>
              Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
            </Typography>
            <Typography variant='body1' gutterBottom>
              It has survived not only five  centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
              </Typography>
            <Typography variant='body1' gutterBottom>
              It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            </Typography>
          </div>
        </div>
      </div>
    </div>
  );

};

export default EveryComponent;
