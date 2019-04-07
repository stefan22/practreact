import React from 'react';
import PropTypes from 'prop-types';
import {NavLink} from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import { fade } from '@material-ui/core/styles/colorManipulator';
import { withStyles } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import '../scss/topnav.scss';
import {navigation} from '../data/navdata';

const {label0,label1,label2,label3,label4,label5} = navigation;

const styles = theme => ({
  root: {
    width: '100%',
  },
  grow: {
    flexGrow: 1,
  },
  topBar: {
    backgroundColor: '#F44336',
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
  title: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing.unit,
      width: 'auto',
    },
  },
  searchIcon: {
    width: theme.spacing.unit * 9,
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
    width: '100%',
  },

  inputInput: {
    paddingTop: theme.spacing.unit,
    paddingRight: theme.spacing.unit,
    paddingBottom: theme.spacing.unit,
    paddingLeft: theme.spacing.unit * 10,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: 120,
      '&:focus': {
        width: 200,
      },
    },
  },
});

function SearchAppBar(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.topBar}>
        <Toolbar>
          <IconButton className={classes.menuButton} color="inherit" aria-label="Open drawer">
            <MenuIcon />
          </IconButton>
          <Typography className={classes.title} variant="h6" color="inherit" noWrap>
            <NavLink to={label1.linkUrl} className='nav-link'
               activeClassName='is-active' exact={true}
               >
               {label1.name}
            </NavLink>
          </Typography>
          <Typography className={classes.title} variant="h6" color="inherit" noWrap>
            <NavLink to={label2.linkUrl} className='nav-link'
               activeClassName='is-active' exact={true}
               >
               {label2.name}
            </NavLink>
          </Typography>
          <Typography className={classes.title} variant="h6" color="inherit" noWrap>
            <NavLink to={label3.linkUrl} className='nav-link'
               activeClassName='is-active' exact={true}
               >
               {label3.name}
            </NavLink>
          </Typography>
          <Typography className={classes.title} variant="h6" color="inherit" noWrap>
            <NavLink to={label4.linkUrl} className='nav-link' activeClassName='is-active' exact={true}
               >
              {label4.name}
            </NavLink>
          </Typography>
          <Typography className={classes.title} variant="h6" color="inherit" noWrap>
            <NavLink to={label5.linkUrl} className='nav-link'
               activeClassName='is-active' exact={true}
               >
              {label5.name}
            </NavLink>
          </Typography>

          <div className={classes.grow} />
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
            />
          </div>

          <Typography className={classes.title} variant="h6" color="inherit" noWrap>
            <NavLink to={label0.linkUrl} className='nav-link'
               activeClassName='is-active' exact={true}
               >
               {label0.name}
            </NavLink>
          </Typography>

        </Toolbar>
      </AppBar>
    </div>
  );
}

SearchAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SearchAppBar);
