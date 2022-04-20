import { StatusBar } from 'expo-status-bar';
import { ThemeProvider } from 'styled-components';

import { Wrapper, Title } from './styles';

export default function Home() {
  return (
    <Wrapper>
       <StatusBar style="light"/>
      <Title>Open up App.tsx to start working on your app!</Title>
    </Wrapper>
  );
}
