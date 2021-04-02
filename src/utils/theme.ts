import { createMuiTheme } from '@material-ui/core/styles';
import { ptBR } from '@material-ui/core/locale';
import blue from '@material-ui/core/colors/blue';
import red from '@material-ui/core/colors/red';
import green from '@material-ui/core/colors/green';

const theme = createMuiTheme({
  palette: {
    primary: {
      dark: '#18003c',
      main: '#230057',
      light: '#4f3378',
    },
    secondary: {
      dark: '#003c6c',
      main: '#01579b',
      light: '#3378af',
    },
    error: red,
    info: blue,
    success: green,
    background: {
      default: '#000015',
    },
  },
  overrides: {
    MuiCssBaseline: {
      '@global': {
        body: {
          backgroundColor: '#000015',
        },
      },
    },
  },
}, ptBR);

export default theme;
