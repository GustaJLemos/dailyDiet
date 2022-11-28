import { ActivityIndicatorProps } from "react-native";
import styled from "styled-components/native";

export type LoadIndicatorStyleProps = {
  color?: string
}

export const Container = styled.View`
  flex: 1;

  align-content: center;
  justify-content: center;
`;