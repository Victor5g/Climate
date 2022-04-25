import React from "react";
import {
  AntDesign,
  Ionicons,
  Feather,
  Fontisto,
  Entypo,
  MaterialCommunityIcons,
} from "@expo/vector-icons";

type IconTypes = {
  provider: string;
  name: string;
  size: number;
  color: string;
};

const Icon = ({ name, provider, size, color }: IconTypes) => {
  switch (provider) {
    case "Entypo":
      return <Entypo name={name} size={size} color={color} />;

    case "Feather":
      return <Feather name={name} size={size} color={color} />;

    case "MaterialCommunityIcons":
      return <MaterialCommunityIcons name={name} size={size} color={color} />;

    case "Ionicons":
      return <Ionicons name={name} size={size} color={color} />;

    case "Fontisto":
      return <Fontisto name={name} size={size} color={color} />;

    case "AntDesign":
      return <AntDesign name={name} size={size} color={color} />;

    default:
      return <></>;
  }
};

export default Icon;
