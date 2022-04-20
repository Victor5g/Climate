import { ThemeProvider } from 'styled-components';
import Home from './src/screens/home';
import Theme from './src/themes'

export default function App() {
  return (
    <ThemeProvider theme={Theme.nightTheme}>
       <Home/>
    </ThemeProvider>
  );
}
