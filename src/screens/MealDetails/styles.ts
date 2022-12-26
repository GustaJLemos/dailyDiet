import styled from "styled-components/native";

export const Content = styled.View`
  flex: 1;

  border-top-left-radius: 16px;
  border-top-right-radius: 16px;

  background-color: ${({ theme }) => theme.COLORS.base.white};

  margin-top: -12px;

  padding: 32px 24px;
`;

export const IsOnADiet = styled.View`
  width: 160px;
  flex-direction: row;

  background-color: ${({ theme }) => theme.COLORS.base.gray600};

  align-items: center;
  justify-content: center;

  padding: 6px 0;

  border-radius: 20px;
`;