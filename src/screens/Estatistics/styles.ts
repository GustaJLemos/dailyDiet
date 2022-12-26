import { TouchableOpacity } from "react-native";
import styled from "styled-components/native";

export type HeaderStyleProps = {
  isOnADiet: boolean;
}

export const Header = styled.View<HeaderStyleProps>`
  width: 100%;
  height: 180px;

  background-color: ${({ theme, isOnADiet }) => isOnADiet ? theme.COLORS.brand.green.mid : theme.COLORS.brand.red.mid};

  align-items: center;
  justify-content: center;

  padding: 0 24px;
`;

export const Content = styled.View`
  flex: 1;

  background-color: ${({ theme }) => theme.COLORS.base.gray700};

  border-top-left-radius: 16px;
  border-top-right-radius: 16px;

  margin-top: -12px;

  padding: 32px 24px;
`;
