import styled from "styled-components/native";
import { TouchableOpacity } from 'react-native'

export const Container = styled.View`
  flex: 1;

  padding: 24px 24px 0 24px;

  background-color: ${({ theme }) => ( theme.COLORS.base.white )}
`;

export const Header = styled.View`
  flex: 1;
  flex-direction: row;

  justify-content: space-between;

  min-height: 48px;
  max-height: 48px;

  margin: 18px 0;
`;

export const NewMeal = styled.View`
  margin-top: 10px; 
  margin-bottom: 20px;
`;