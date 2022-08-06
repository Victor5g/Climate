import React from "react";
import { TouchableOpacityProps } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

import { MaterialIcons } from "@expo/vector-icons";

import { ButtonUpdate, styleGradient } from "./styles";

type ButtonTypes = TouchableOpacityProps & {
  theme: { background: Array<string> };
  loading?: boolean;
};

const ButtonUp = ({ theme, loading, ...rest }: ButtonTypes) => {
  return (
    <ButtonUpdate {...rest}>
      <LinearGradient
        colors={theme.background}
        style={styleGradient.contentGradient}
      />
      {loading ? (
          <MaterialIcons name="my-location" size={30} color="white" />
        ) : (
          <MaterialIcons name="location-searching" size={30} color="white" />
        )}
    </ButtonUpdate>
  );
};

export default ButtonUp;
