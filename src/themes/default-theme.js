/*
Team Members:
Igal Khalfin    313190811
Itay Halaf      205585193
Tamara Slouzky  318875846
*/
import { createTheme  } from '@mui/material/styles';

const theme = createTheme({
    components: {
      // Name of the component ⚛️
      MuiButton: {
        defaultProps: {
          // The default props to change
          sx: { 
            textTransform: 'none'
          },
        },
      },
      MuiFormControl: {
        defaultProps: {
          margin: 'normal',
        }
      },
    },
  });

export { theme };