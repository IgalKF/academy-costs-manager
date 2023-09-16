import './App.css';
import { HitButton } from './components/base-controls/hit-button/hit-button';
import { HitDatepicker } from './components/base-controls/hit-datepicker/hit-datepicker';
import { HitIcon } from './components/base-controls/hit-icon/hit-icon';
import { theme } from './themes/default-theme';
import { ThemeProvider } from '@mui/material/styles';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { HitLabel } from './components/base-controls/hit-label/hit-label';
import { HitTable } from './components/page-components/hit-table/hit-table';
import { HitSelect } from './components/base-controls/hit-select/hit-select';

/**
 * Main application component.
 * @returns Application component element.
 */
function App() {
  return (
    <div className='App'>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <ThemeProvider theme={theme}>
          <HitButton icon='filter' type='contained'>Lol</HitButton>
          <HitIcon>filter</HitIcon>
          <HitDatepicker>dfgdfgdfg</HitDatepicker>
          <HitLabel fontType='title' bold={false}>dfsdsfds</HitLabel>
          <HitSelect options={['dsfsdf']} label='Choose Category' />
          <HitTable />
        </ThemeProvider>
      </LocalizationProvider>
    </div>
  );
}

export default App;
