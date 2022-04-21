import styled from 'styled-components/native';
import { LinearGradient } from 'expo-linear-gradient';
import { SafeAreaView, Platform, Dimensions } from 'react-native'

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
//height: ${Dimensions.get('window').height+'px'};
export const ContentBody = styled.View`
width:${Dimensions.get('window').width+'px'};
height:910px;
padding:${Platform.OS === 'ios'? `13px 16px 13px 16px` : `30px 16px 13px 16px`};
`;

export const Wrapper = styled.View`
width:100%;
height: 100%;
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
height:45%;
top:16px;
align-items:flex-start;
justify-content:flex-end;

`;

export const TitleTemp = styled.Text`
color:#FFF;
font-size:${Platform.OS === 'ios'? `120px` : `100px`};
font-weight:100;
`;


export const TextBold = styled.Text`
font-weight:700;
`;

export const TextMoisture = styled.Text`
color:#FFF;
top:8px;
font-size:22px;
font-weight:300;
`;

export const TextDay = styled.Text`
color:#FFF;
top:20px;
font-size:22px;
font-weight:100;
`;

export const TextDate = styled.Text`
color:#FFF;
top:20px;
font-size:18px;
font-weight:100;
`;

export const TextAddres = styled.Text`
 top:30px;
 color:#FFF;
 font-size:18px;
`;

export const WrapperScroll = styled.View`
 top:40px;
 width:${Dimensions.get('window').width+'px'};
 left:-16px;
`;


export const ItemContentScroll = styled.View`
width:120px;
height:120px;
margin-left:5px ;
margin-right:5px ;
justify-content:space-between ;
background-color:#A9C5CE ;
opacity:0.5 ;
border-radius:12px;
`;

export const ButtonUpdate = styled.TouchableOpacity`
 position:absolute ;
 align-items:center;
 justify-content:center;
 width:70px;
 height:70px;
 border-radius:100px ;
 right: 20px;
 bottom:40px;
 background-color:#1F5467;
 box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;
