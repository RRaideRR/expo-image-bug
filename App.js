import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import { Image } from 'expo-image';

export default function App() {
  return (
    <View style={{flex: 1}}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
      <Image
        source={require('./src/assets/favicon.png')}
        style={{ width: 300, height: 300 }}
      />
    </View>
  );
}
