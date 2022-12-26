import styled from "styled-components/native";

export const Content = styled.View`
  flex: 1;

  border-top-left-radius: 16px;
  border-top-right-radius: 16px;

  background-color: ${({ theme }) => theme.COLORS.base.white};

  margin-top: -12px;

  padding: 32px 24px;
`;

export const DateAndTimeContainer = styled.View`
  flex-direction: row; 

  justify-content: space-between;

  margin-bottom: 24px;
`;

export const ContainerButtons = styled.View`
  flex-direction: row; 

  justify-content: space-between;
`;