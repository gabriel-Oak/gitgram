import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  toolBar: {
    minHeight: 56,
    display: 'flex',
    justifyContent: 'space-between'
  },
  title: {
    fontSize: '1.25rem',
  },
  avatar: {
    position: 'absolute',
    top: 0,
    left: 0,
  },
  avatarContainer: {
    position: 'relative', 
    width: 40, 
    height: 40, 
    cursor: 'pointer',
  }
});

export default useStyles;
