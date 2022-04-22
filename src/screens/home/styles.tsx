import styled from 'styled-components/native';
import { LinearGradient } from 'expo-linear-gradient';
import { SafeAreaView, Platform, Dimensions } from 'react-native'

type GradientTypes = {
  theme:Array<string>;
  children:any;
}

export const Gradient = ({theme, children}:GradientTypes) => {
  return (
    <LinearGradient colors={theme} style={{flex:1}}>
      <SafeAreaView style={{flex:1}}>
         {children}
      </SafeAreaView>
    </LinearGradient>
  )
}

export const ContentTitle = styled.View`
width:129px;
`;

export const Title = styled.Text`
color:#FFF;
font-weight:500 ;
font-size:28px;
padding-left:16px ;
`;

export const ContentIlustration = styled.View`
width:100%;
height:320px;
top:16px;
align-items:flex-start;
justify-content:flex-end;
padding-left:16px ;

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
padding-left:16px ;
`;

export const TextDay = styled.Text`
color:#FFF;
top:20px;
font-size:22px;
font-weight:100;
padding-left:16px ;
padding-right:16px ;
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
 padding-left:16px ;
 padding-right:16px ;
`;

export const WrapperScroll = styled.ScrollView`
 top:40px;
 width:${Dimensions.get('screen').width+'px'};
 height:130px;
 margin-bottom:39%;
`;

export const ItemContentScroll = styled.TouchableOpacity`
width:100px;
height:100px;
margin-left:5px ;
margin-right:5px ;
padding:8px;
align-items:center ;
justify-content:space-around ;
background-color:rgba(255, 255, 255, 0.2) ;
border-radius:12px;
align-items: center;
flex-direction:column ;
`;

export const TextItem = styled.Text`
 color:#FFF;
 font-size:20px;
 opacity:1;
`;

export const ButtonUpdate = styled.TouchableOpacity`
 position:absolute ;
 align-items:center;
 justify-content:center;
 width:70px;
 height:70px;
 border-radius:100px ;
 right: 20px;
 bottom:20px;
 background-color:#1F5467;
 box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;
