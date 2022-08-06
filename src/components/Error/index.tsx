import React from "react";
import {
  Container,
  Title,
  Ilustration,
  Message,
  ButtonTrygain,
  TextButton,
} from "./styles";

import Satelite from "../../assets/satelliteOrbit.png";

interface ButtonProp {
  onPress?: () => void;
}

const ErroScreen = (props: ButtonProp) => {
  return (
    <Container>
      <Ilustration source={Satelite} />
      <Title>Oops!</Title>
      <Message>
        Não foi possivel obter os dados climaticos da sua localização.
      </Message>
      <ButtonTrygain onPress={props.onPress}>
        <TextButton>Tente Novamente</TextButton>
      </ButtonTrygain>
    </Container>
  );
};

export default ErroScreen;
