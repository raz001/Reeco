import { createTheme, ThemeProvider } from '@mui/material/styles';

export const palette = {
  primary: {
      main: '#388E3C',
  },
  secondary: {
      main: '#4285F4',
  },
};

const theme = createTheme({
  palette,
});

export default function ReecoTheme({ children }) {
    return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}