import { Home } from '@screens/Home';
import { theme } from '@theme/index';
import { ThemeProvider } from 'styled-components';
import { useFonts, NunitoSans_400Regular, NunitoSans_700Bold } from '@expo-google-fonts/nunito-sans'
import { Loading } from '@components/Loading';
import { Estatistics } from '@screens/Estatistics';
import { NewMeal } from '@screens/NewMeal';
import { Routes } from './src/routes/index';

export default function App() {
  const [fontsLoaded] = useFonts({ NunitoSans_400Regular, NunitoSans_700Bold }) 

  return (
    <ThemeProvider theme={theme}>
        {fontsLoaded ? <Routes /> : <Loading />}
    </ThemeProvider>
  );
}
