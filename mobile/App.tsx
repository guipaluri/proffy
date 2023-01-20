import { StatusBar } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

import { Archivo_400Regular, Archivo_700Bold, useFonts } from '@expo-google-fonts/archivo';
import { Poppins_400Regular, Poppins_600SemiBold } from '@expo-google-fonts/poppins';

import AppStack from './src/routes/AppStack';

import { Loading } from './src/components/Loading';

export default function App() {

  const [fontsLoaded] = useFonts({
    Archivo_400Regular,
    Archivo_700Bold,
    Poppins_400Regular,
    Poppins_600SemiBold
  });

  if (!fontsLoaded) {
    return (
      <Loading />
    )
  }

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <AppStack />
      <StatusBar barStyle="light-content" backgroundColor="transparent" translucent />
    </GestureHandlerRootView>
  );
}