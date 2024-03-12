
import { useCallback } from 'react';
import { useFonts } from "expo-font";
import * as SplashScreen from 'expo-splash-screen';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

import { Routes } from './src/routes/app.routes';

import { Baloo2_700Bold } from '@expo-google-fonts/baloo-2';
import { Roboto_400Regular, Roboto_700Bold } from '@expo-google-fonts/roboto';
import { StatusBar } from 'expo-status-bar';
import { CartContextProvider } from './src/contexts/CartContext';
import { fonts } from './src/theme/fonts';


export default function App() {
  const [fontsLoaded] = useFonts({
    [fonts.Baloo2_Bold]: Baloo2_700Bold,
    [fonts.Roboto_Regular]: Roboto_400Regular,
    [fonts.Roboto_Bold]: Roboto_700Bold,
  })

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded)
    return null;
  return (
    <GestureHandlerRootView
      style={{ flex: 1 }}
      onLayout={onLayoutRootView}
    >
      <StatusBar style='light' />
      <CartContextProvider>
        <Routes />
      </CartContextProvider>
    </GestureHandlerRootView>
  );
}

