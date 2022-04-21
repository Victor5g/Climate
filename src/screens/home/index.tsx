import { StatusBar } from 'expo-status-bar';

import { 
  Wrapper, 
  Title, 
  Gradient,
  ContentTitle,
  ContentIlustration,
  TitleTemp
} from './styles';

import themes from '../../themes';

export default function Home() {

  return (
    <Gradient theme={themes.cloudyTheme.background}>
      <Wrapper>

      <ContentTitle>
        <Title>Dia chuvoso e frio</Title>
      </ContentTitle>

      <ContentIlustration>
        <TitleTemp>19&deg;</TitleTemp>
      </ContentIlustration>
      

    </Wrapper>
    {/* <StatusBar style='auto'/> */}
    </Gradient>
  );
}
