import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import {Link} from 'react-router-dom';
import '../scss/button.scss';


const ButtonPrimary = (props) => {
  const { variant,rootid,rootclass,name,handleOnClick,whereTo} = props;

  return (
    <Button variant={variant}
      id={rootid}
      className={rootclass}
      onClick={handleOnClick}
    >
      <Link to={whereTo}>
        {name}
      </Link>

    </Button>
  );

};

ButtonPrimary.propTypes = {
  rootid: PropTypes.string.isRequired,
  rootclass: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default ButtonPrimary;
