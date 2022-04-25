import styled from "styled-components/native";
import { Platform, Dimensions } from "react-native";

export const ContentTitle = styled.View`
  width: 140px;
  height: 140px;
`;

export const Title = styled.Text`
  color: #fff;
  font-weight: 500;
  font-size: 28px;
  padding-left: 16px;
`;

export const ContentIlustration = styled.View`
  width: 100%;
  height: 320px;
  top: 16px;
  align-items: flex-start;
  justify-content: flex-end;
  padding-left: 16px;
`;

export const TitleTemp = styled.Text`
  color: #fff;
  font-size: ${Platform.OS === "ios" ? `120px` : `100px`};
  font-weight: 100;
`;

export const TextBold = styled.Text`
  font-weight: 700;
`;

export const TextMoisture = styled.Text`
  color: #fff;
  top: 8px;
  font-size: 22px;
  font-weight: 300;
  padding-left: 16px;
`;

export const TextDay = styled.Text`
  color: #fff;
  top: 20px;
  font-size: 22px;
  font-weight: 100;
  padding-left: 16px;
  padding-right: 16px;
`;

export const TextDate = styled.Text`
  color: #fff;
  top: 20px;
  font-size: 18px;
  font-weight: 100;
`;

export const TextAddres = styled.Text`
  margin-top: 30px;
  color: #fff;
  font-size: 18px;
  padding-left: 16px;
  padding-right: 16px;
`;

export const ContentMinMax = styled.View`
  width: ${Dimensions.get("screen").width + "px"};
  flex-direction: row;
  justify-content: space-between;
  padding-left: 16px;
  padding-right: 23px;
  margin-bottom: 45%;
`;

export const TextMinMax = styled.Text`
  color: #fff;
  top: 20px;
  font-size: 40px;
`;

export const ItemContentScroll = styled.View`
  width: 100px;
  height: 100px;
  margin-left: 5px;
  margin-right: 5px;
  padding: 8px;
  align-items: center;
  justify-content: space-around;
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  align-items: center;
  flex-direction: column;
`;

export const TextItem = styled.Text`
  color: #fff;
  font-size: 20px;
  opacity: 1;
`;
