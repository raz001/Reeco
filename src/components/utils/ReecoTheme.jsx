import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
        main: '#0F9D58',
    },
    secondary: {
        main: '#4285F4',
    },
  },
});

export default function ReecoTheme({ children }) {
    return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}