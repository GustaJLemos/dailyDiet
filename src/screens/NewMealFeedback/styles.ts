import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;

  background-color: ${({ theme }) => theme.COLORS.base.white};

  padding: 24px 24px;

  justify-items: center;
  justify-content: center;
`;