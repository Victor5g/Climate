import styled from "styled-components/native";

export const Container = styled.View`
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
`;

export const Ilustration = styled.Image`
  margin-bottom: 20px;
  width: 200px;
  height: 200px;
`;

export const Title = styled.Text`
  color: #fff;
  font-weight: 700;
  font-size: 35px;
  margin-bottom: 20px;
`;

export const Message = styled.Text`
  color: #fff;
  font-weight: 300;
  font-size: 20px;
  margin-horizontal: 15px;
  margin-bottom: 20px;
`;

export const ButtonTrygain = styled.TouchableOpacity`
  width: 180px;
  height: 40px;
  background-color: rgba(255, 255, 255, 0);
  align-items: center;
  justify-content: center;
  border-radius: 100px;
  border-color: #fff;
  border-width: 1px;
`;

export const TextButton = styled.Text`
  color: #fff;
  font-size: 15px;
`;
