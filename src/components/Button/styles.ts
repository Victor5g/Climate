import styled from "styled-components/native";
import { StyleSheet } from "react-native";

export const styleGradient = StyleSheet.create({
  contentGradient: {
    width: "100%",
    height: "100%",
    borderRadius: 100,
    alignItems: "center",
    justifyContent: "center",
    position:'absolute',
  },
});

export const ButtonUpdate = styled.TouchableOpacity`
  position: absolute;
  align-items: center;
  justify-content: center;
  width: 70px;
  height: 70px;
  border-radius: 100px;
  right: 20px;
  bottom: 40px;
  background-color: #1f5467;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;
