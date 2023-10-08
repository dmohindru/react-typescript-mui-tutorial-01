import './App.css';
import { createTheme, colors, ThemeProvider } from '@mui/material';
// import { MuiMasonry } from './components/MuiMasonry';
import { MuiResponsiveness } from './components/MuiResponsiveness';
// import { MuiTimeline } from './components/MuiTimeline';
// import { MuiLoadingButton } from './components/MuiLoadingButton';
// import { MuiTabs } from './components/MuiTabs';
// import { MuiSkeletonSimple } from './components/MuiSkeltonSimple';
// import { MuiProgress } from './components/MuiProgress';
// import { MuiSkeleton } from './components/MuiSkeleton';
// import { MuiAlert } from './components/MuiAlert';
// import { MuiDialog } from './components/MuiDialog';
// import { MuiSnakbar } from './components/MuiSnakbar';
// import { MuiTable } from './components/MuiTable';
// import { MuiTypography } from './components/MuiTypography';
// import { MuiButton } from './components/MuiButton';
// import { MuiTextField } from './components/MuiTextField';
// import { MuiSelect } from './components/MuiSelect';
// import { MuiRadioButton } from './components/MuiRadioButton';
// import { MuiCheckbox } from './components/MuiCheckbox';
// import { MuiSwitch } from './components/MuiSwitch';
// import { MuiRating } from './components/MuiRating';
// import { MuiAutocomplete } from './components/MuiAutocomplete';
// import { MuiLayout } from './components/MuiLayout';
// import { MuiLayoutGrid } from './components/MuiLayoutGrid';
// import { MuiCard } from './components/MuiCard';
// import { MuiAccordion } from './components/MuiAccordion';
// import { MuiImageList } from './components/MuiImageList';
// import { MuiNavbar } from './components/MuiNavbar';
// import { MuiLink } from './components/MuiLink';
// import { MuiBreadcrumbs } from './components/MuiBreadcrumbs';
// import { MuiDrawer } from './components/MuiDrawer';
// import { MuiSpeedDial } from './components/MuiSpeedDial';
// import { MuiBottomNavigation } from './components/MuiBottomNavigation';
// import { MuiAvatar } from './components/MuiAvatar';
// import { MuiBadge } from './components/MuiBadge';
// import { MuiList } from './components/MuiList';
// import { MuiChip } from './components/MuiChip';
// import { MuiTooltip } from './components/MuiTootip';

const theme = createTheme({
  status: {
    danger: '#e53e3e'
  },
  palette: {
    secondary: {
      main: colors.orange[500]
    },
    neutral: {
      main: colors.grey[500],
      darker: colors.grey[700]

    }
  }
});
function App() {
  return (
    // <LocalizationProvider dateAdapter={AdapterDateFns}>
    <ThemeProvider theme={theme}>
    <div className="App">
      {/* <MuiTypography /> */}
      {/* <MuiButton /> */}
      {/* <MuiTextField /> */}
      {/* <MuiSelect /> */}
      {/* <MuiRadioButton /> */}
      {/* <MuiCheckbox /> */}
      {/* <MuiSwitch /> */}
      {/* <MuiRating /> */}
      {/* <MuiAutocomplete /> */}
      {/* <MuiLayout /> */}
      {/* <MuiLayoutGrid /> */}
      {/* <MuiCard /> */}
      {/* <MuiAccordion /> */}
      {/* <MuiImageList /> */}
      {/* <MuiNavbar /> */}
      {/* <MuiBreadcrumbs /> */}
      {/* <MuiDrawer /> */}
      {/* <MuiSpeedDial /> */}
      {/* <MuiBottomNavigation /> */}
      {/* <MuiAvatar /> */}
      {/* <MuiBadge /> */}
      {/* <MuiList /> */}
      {/* <MuiChip /> */}
      {/* <MuiTooltip /> */}
      {/* <MuiTable /> */}
      {/* <MuiAlert /> */}
      {/* <MuiSnakbar /> */}
      {/* <MuiDialog /> */}
      {/* <MuiProgress /> */}
      {/* <MuiSkeleton /> */}
      {/* <MuiSkeletonSimple /> */}
      {/* <MuiLoadingButton /> */}
      {/* <MuiTabs /> */}
      {/* <MuiTimeline /> */}
      {/* <MuiMasonry /> */}
      <MuiResponsiveness />
    </div>
    </ThemeProvider>
    // </LocalizationProvider>
  );
}

export default App;
