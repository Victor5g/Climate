import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Image, ScrollView } from 'react-native'

import {  
  Title, 
  Gradient,
  ContentTitle,
  ContentIlustration,
  TitleTemp,
  TextMoisture,
  TextBold,
  TextDay,
  TextDate,
  TextItem,
  TextAddres,
  ButtonUpdate,
  WrapperScroll,
  ItemContentScroll,
} from './styles';

//icon
import { 
  Entypo, 
  AntDesign, 
  Ionicons, 
  Feather, 
  FontAwesome5,
  Fontisto,
  MaterialCommunityIcons
 } from '@expo/vector-icons'; 

//themes
import themes from '../../themes';

//images
import Rain from '../../assets/illustrations/Rain.png'


export default function Home() {

  const [theme, setTheme] = useState([]);

  return (
    <Gradient  theme={themes.cloudyTheme.background}>
     <ScrollView style={{flex:1, paddingTop:30}}>

      <ContentTitle>
          <Title>Dia chuvoso e frio</Title>
      </ContentTitle>

      <ContentIlustration>
          <Image style={{width:"80%", height:"100%", position:'absolute', right:0, bottom:40}} source={Rain} /> 
          <TitleTemp>19&deg;</TitleTemp>
      </ContentIlustration>

      <TextMoisture>
          <Entypo name="drop" size={24} color="white"/>{" "}
                  65%
          </TextMoisture>

          <TextDay>
                <TextBold>Segunda feira{" "}</TextBold>
                <TextDate>10 de agosto de 2022</TextDate> 
              </TextDay>

              <TextAddres>
                R. Mario Pereira, 42, Pres. Dutra - MA, 65760-000, 
              </TextAddres>

              
                <WrapperScroll 
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                alwaysBounceHorizontal={true}
                  >
                    <ItemContentScroll>
                       <Ionicons name="rainy-outline" size={36} color="white" />
                        <TextItem> 11h </TextItem>
                    </ItemContentScroll>

                    <ItemContentScroll>
                       <Ionicons name="partly-sunny-outline" size={30} color="white" />
                       <TextItem> 12h </TextItem>
                    </ItemContentScroll>

                    <ItemContentScroll>
                       <Feather name="sun" size={30} color="white" />
                       <TextItem> 13h </TextItem>
                    </ItemContentScroll>

                    <ItemContentScroll>
                      <Fontisto name="night-alt-rain" size={30} color="white" />
                       <TextItem> 14h </TextItem>
                    </ItemContentScroll>

                    <ItemContentScroll>
                       <MaterialCommunityIcons name="weather-night" size={30} color="white"/>
                       <TextItem> 15h </TextItem>
                    </ItemContentScroll>

                    <ItemContentScroll>
                       <Ionicons name="md-cloudy-night-outline" size={30} color="white" />
                       <TextItem> 16h </TextItem>
                    </ItemContentScroll>

                    <ItemContentScroll>
                      <Fontisto name="day-rain" size={30} color="white" />
                      <TextItem> 17h </TextItem>
                    </ItemContentScroll>

                  </WrapperScroll>
           
      </ScrollView>
         <ButtonUpdate onPress={()=>{console.log("Update")}}>
           <AntDesign name="reload1" size={30} color="white"/>
        </ButtonUpdate>
       <StatusBar style='auto'/>
    </Gradient>
    
  );
}
