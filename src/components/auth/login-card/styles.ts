import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)'
  },
  container: {
    textAlign: 'center',
    width: '100vw',
    maxWidth: 344,
  }
});

export default useStyles;