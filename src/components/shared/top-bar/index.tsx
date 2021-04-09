import { AppBar, Avatar, ListItemIcon, Menu, MenuItem, Toolbar, Typography } from '@material-ui/core';
import React, { useRef, useState } from 'react';
import { connect } from 'react-redux';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import { StoreState } from '../../../store/types';
import { GithubUser } from '../../../utils/interfaces/github';
import Skeleton from '@material-ui/lab/Skeleton';
import useStyles from './styles';
import { logOutAction } from '../../auth/actions';

interface Props {
  user: GithubUser | null;
  loading: boolean;
  logOut: () => Object;
}

const TopBar: React.FC<Props> = ({ user, loading, logOut }) => {
  const classes = useStyles();
  const ref = useRef<HTMLDivElement>(null);
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const handleToggle = () => setMenuIsOpen(!menuIsOpen);

  return (
    <AppBar>
      <Toolbar className={classes.toolBar}>
        <Typography variant="h6">
          Gitgram
        </Typography>

        Search

        <div
          className={classes.avatarContainer}
          ref={ref}
          onClick={handleToggle}
        >
          <Skeleton
            variant="circle"
            width={40}
            className={classes.avatar}
            height={40}
            animation="wave"
          />

          {!loading && user && (
            <Avatar
              alt={user.name}
              className={classes.avatar}
              src={user.avatar_url}
            />
          )}
        </div>
      </Toolbar>

      <Menu
        id="user-menu"
        keepMounted
        anchorEl={ref.current}
        open={menuIsOpen}
        onClose={handleToggle}
      >
        <MenuItem onClick={logOut}>
          <ListItemIcon>
            <ExitToAppIcon />
          </ListItemIcon>
           
          <Typography variant="inherit">
            Logout
          </Typography>
        </MenuItem>
      </Menu>
    </AppBar>
  );
}

const mapState = (state: StoreState) => state.auth;

export default connect(mapState, {
  logOut: logOutAction,
})(TopBar);
