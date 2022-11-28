import styled from "styled-components/native";

export type CircleStyleProps = {
  size?: number;
  color?: string;
}

export const Container = styled.View<CircleStyleProps>`
  width: ${({ size }) => size + 'px'};
  height: ${({ size }) => size + 'px'};

  background-color: ${({ color }) => color};

  border-radius: 50px;
`;