import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';

import { styles } from "./styles";

export default function SignIn() {
    return (
        <View style={styles.container}>
          <Text>Open up SignIn to start working on your app!</Text>
          <StatusBar style="auto" />
        </View>
      );
}