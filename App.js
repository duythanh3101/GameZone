import React, {useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Home from './screens/home';
import { AppLoading } from 'expo'; 
import * as Font from 'expo-font';
import Navigator from './routes/homeStack';

const getFonts = () => {
    return Font.loadAsync({
        'nunito-bold': require('./assets/fonts/Nunito-Bold.ttf'),
        'nunito-regular': require('./assets/fonts/Nunito-Regular.ttf')
      });
  };

export default function App() {
  const [fontLoaded, setFontLoaded] = useState(false);

  if (fontLoaded){
    return (
      <Navigator />
    );
  }
  else{
    return (
      <AppLoading
        startAsync={getFonts}
        onFinish= {() => setFontLoaded(true)}
      />
    );
  }
 
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
