import styled from "styled-components/native";

type ColorStyledProps = {
  isOnADiet: boolean;
}

export const Container = styled.View<ColorStyledProps>`
  flex: 1;

  min-height: 102px;
  max-height: 102px;

  padding: 4px;
  border-radius: 8px;

  align-items: center;
  justify-content: center;

  background-color: ${({ theme, isOnADiet }) => 
  isOnADiet ? theme.COLORS.brand.green.light : theme.COLORS.brand.red.light};

  margin-bottom: 22px
`;

export const PercentContainer = styled.View`
  width: 100%;  
  
  flex-direction: row;  
`;