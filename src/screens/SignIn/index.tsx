import { StatusBar } from 'expo-status-bar';
import { Text } from 'react-native';

import { Container } from "./styles";

export default function SignIn() {
    return (
        <Container>
          <Text>Open up SignIn to start working on your app!</Text>
          <StatusBar style="auto" />
        </Container>
      );
}