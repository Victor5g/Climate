import { StatusBar } from 'expo-status-bar';
import { Image, ScrollView, View } from 'react-native'

import { 
  Wrapper, 
  Title, 
  Gradient,
  ContentTitle,
  ContentIlustration,
  TitleTemp,
  TextMoisture,
  TextBold,
  TextDay,
  TextDate,
  TextAddres,
  ButtonUpdate,
  WrapperScroll,
  ItemContentScroll,
  ContentBody
} from './styles';

//icon
import { Entypo } from '@expo/vector-icons'; 
import { MaterialIcons } from '@expo/vector-icons';

//themes
import themes from '../../themes';

//images
import Rain from '../../assets/illustrations/Rain.png'


export default function Home() {

  return (
    <Gradient theme={themes.cloudyTheme.background}>
      <Wrapper>
       <ScrollView 
       scrollEnabled={true} 
       showsVerticalScrollIndicator={false} 
       style={{width:'100%', height:'100%'}}>
         <ContentBody>
            <ContentTitle>
                <Title>Dia chuvoso e frio</Title>
            </ContentTitle>

            <ContentIlustration>
                <Image style={{width:"80%", height:"100%", position:'absolute', right:-16, bottom:40}} source={Rain} />
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
       
              <WrapperScroll>
                <ScrollView 
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                alwaysBounceHorizontal={true}
                  >
                    <ItemContentScroll>

                    </ItemContentScroll>
                    <ItemContentScroll>

                    </ItemContentScroll>
                    <ItemContentScroll>

                    </ItemContentScroll>
                    <ItemContentScroll>

                    </ItemContentScroll>
                    <ItemContentScroll>

                    </ItemContentScroll>

                  </ScrollView>
           
              </WrapperScroll>
          </ContentBody>
       </ScrollView>

       <ButtonUpdate onPress={()=>{console.log("Update")}}>
          <MaterialIcons name="my-location" size={30} color="white"/>
       </ButtonUpdate>
    </Wrapper>
    <StatusBar style='auto'/>
    </Gradient>
  );
}
