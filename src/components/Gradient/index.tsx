import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import { SafeAreaView } from "react-native";

import { style } from "./styles";

type GradientTypes = {
  theme: { background: Array<string> };
  children: any;
};

const Gradient = ({ theme, children }: GradientTypes) => {
  return (
    <LinearGradient colors={theme.background} style={style.container}>
      <SafeAreaView style={style.container}>{children}</SafeAreaView>
    </LinearGradient>
  );
};

export default Gradient;
