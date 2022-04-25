import React from "react";
import { createShimmerPlaceholder } from "react-native-shimmer-placeholder";
import { LinearGradient } from "expo-linear-gradient";
import { Fragment } from "react";

import { style } from "./styles";

type ShimmerTypes = {
  children: any;
  height?: number;
  visible: Boolean;
  theme: { background: Array<string> };
  width?: number;
};
const ShimmerPlaceholder = createShimmerPlaceholder(LinearGradient);

const Shimmer = ({ children, theme, visible, width, height }: ShimmerTypes) => {
  return (
    <Fragment>
      {visible ? (
        children
      ) : (
        <ShimmerPlaceholder
          width={width ? width : 200}
          height={height ? height : style.defaultHeightShimmer.height}
          style={style.containerShimmer}
          shimmerColors={theme.background}
          visible={visible}
        />
      )}
    </Fragment>
  );
};

export default Shimmer;
