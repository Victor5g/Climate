import styled from 'styled-components/native';

export const Wrapper = styled.SafeAreaView`
flex:1;
background-color:${props => props.theme.background};
align-items:flex-start;
justify-content:flex-start;
flex-direction:column;
`;

export const Title = styled.Text`
color:#FFF;
font-size:20px;
`;