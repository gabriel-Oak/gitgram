import { AppBar, Avatar, Toolbar, Typography } from '@material-ui/core';
import React from 'react';
import { connect } from 'react-redux';
import { StoreState } from '../../../store/types';
import { GithubUser } from '../../../utils/interfaces/github';
import Skeleton from '@material-ui/lab/Skeleton';
import useStyles from './styles';

interface Props {
  user: GithubUser | null;
  loading: boolean;
}

const TopBar: React.FC<Props> = ({ user, loading }) => {
  const classes = useStyles();

  return (
    <AppBar>
      <Toolbar className={classes.toolBar}>
        <Typography variant="h6">
          Gitgram
        </Typography>

        Search

        {!loading && user ? (
          <Avatar alt={user.name} src={user.avatar_url} />
        ) : (
          <Skeleton variant="circle" width={40} height={40} />
        )}
      </Toolbar>
    </AppBar>
  );
}

const mapState = (state: StoreState) => state.auth;

export default connect(mapState)(TopBar);
