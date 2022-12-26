import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background-color: rgba(0, 0, 0, .25);

  align-items: center;
  justify-content: center;

  padding: 0 24px;
`;

export const Content = styled.View`
  width: 100%;
  height: 190px;
  
  align-items: center;
  justify-content: space-between;

  border-radius: 8px;

  padding: 24px 24px;

  background-color: ${({ theme }) => theme.COLORS.base.white};

  z-index: 10;
`;

export const ButtonContainer = styled.View`
  width: 100%;

  flex-direction: row;
  justify-content: space-between;
`;