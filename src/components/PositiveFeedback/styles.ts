import styled from "styled-components/native";
import { Image } from 'react-native'

export const Container = styled.View`
  flex: 1;

  align-items: center;
  justify-content: center;

  background-color: ${({ theme }) => theme.COLORS.base.white};
`;

export const Illustration = styled(Image)`
  margin: 24px 0;

  align-self: center;
`;