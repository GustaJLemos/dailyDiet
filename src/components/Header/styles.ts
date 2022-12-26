import styled from "styled-components/native";

type ContainerStyleProps = {
  backgroundColor: string;
}

export const Container = styled.View<ContainerStyleProps>`
  width: 100%;
  height: 140px;

  background-color: ${({ backgroundColor }) => backgroundColor};

  align-items: center;
  justify-content: center;
`;

export const ContentHeader = styled.View`
  width: 100%;
  
  flex-direction: row;
  
  padding: 0 24px;
`;