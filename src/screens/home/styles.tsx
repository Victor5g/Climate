import styled from 'styled-components/native';
import { LinearGradient } from 'expo-linear-gradient';
import { SafeAreaView } from 'react-native'

type GradientTypes = {
  theme:Array<string>;
  children:any;
}

export const Gradient = ({theme, children}:GradientTypes) =>{
  return (
  <LinearGradient colors={theme} style={{flex:1}}>
    <SafeAreaView>
      {children}
    </SafeAreaView>
  </LinearGradient>
  )
}

export const Wrapper = styled.View`
width:100%;
height: 100%;
padding:13px 16px 13px 16px;
align-items:flex-start;
justify-content:flex-start;
flex-direction:column;
`;

export const ContentTitle = styled.View`
width:129px;
`;

export const Title = styled.Text`
color:#1F5467;
font-weight:500 ;
font-size:28px;
`;

export const ContentIlustration = styled.View`
width:100%;
height:40%;
align-items:flex-start;
justify-content:flex-end;

`;

export const TitleTemp = styled.Text`
color:#FFF;
font-size:120px;
font-weight:100;
`;
