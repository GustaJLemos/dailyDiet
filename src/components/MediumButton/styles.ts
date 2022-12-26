import { TouchableOpacity } from "react-native";
import styled from "styled-components/native";

export type ButtonStyleProps = {
  type: 'green' | 'red',
  selected: boolean,
}

export const Container = styled(TouchableOpacity)<ButtonStyleProps>`
  flex-direction: row;

  width: 168px;
  height: 50px;

  border: 1px solid ${({ theme, selected, type }) => selected 
  ? theme.COLORS.brand[type].dark : theme.COLORS.base.gray600};
  border-radius: 8px;

  background-color: ${({ theme, selected, type }) => selected 
   ? theme.COLORS.brand[type].mid : theme.COLORS.base.gray600};

  align-items: center;
  justify-content: center;
`; 