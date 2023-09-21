/*
Team Members:
Igal Khalfin    313190811
Itay Halaf      205585193
Tamara Slouzky  318875846
*/
import { createTheme } from '@mui/material/styles';

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
      MuiTable: {
        defaultProps: {
          margin: "normal",
        },
      },
      MuiPaper: {
        defaultProps: {
          sx: { width: "100%", mb: 2 },
        },
      },
      Box: {
        defaultProps: {
          sx: {
            width: '100%',
          }
        }
      },
      Paper: {
        defaultProps: {
          width: "100%",
          mb: 2,
        }
      }
    },
  });

export { theme };
