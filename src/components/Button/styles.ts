import { TouchableOpacity } from "react-native";
import styled from "styled-components/native";

export type ButtonStyleProps = {
  type?: 'PRIMARY' | 'SECONDARY'
}

export const Container = styled(TouchableOpacity)<ButtonStyleProps>`
  flex-direction: row;

  width: 100%;
  height: 50px;

  border: 1px solid ${({ theme }) => theme.COLORS.base.gray200};
  border-radius: 8px;

  background-color: ${({ theme, type }) => 
  type === 'PRIMARY' ? theme.COLORS.base.gray200 : theme.COLORS.base.white};

  align-items: center;
  justify-content: center;
`; 