import React from "react";
import { IllustrationWeathers } from "./styles";

type IllustrationTypes = {
  IconName: string | undefined;
};

const Illustration = ({ IconName }: IllustrationTypes) => {
  return (
    <IllustrationWeathers
      source={{
        uri: `https://openweathermap.org/img/wn/${IconName}@2x.png`,
      }}
    />
  );
};

export default Illustration;
