import { TouchableOpacity } from "react-native";
import styled from "styled-components/native";

export const Container = styled(TouchableOpacity)`
  flex-direction: row;

  width: 100%;
  height: 50px;

  padding: 12px;
  margin-bottom: 6px;

  border: 1px solid ${({ theme }) => theme.COLORS.base.gray500};
  border-radius: 8px;

  align-items: center;
`;

export const Separator = styled.View`
  width: 2px;
  height: 14px;

  background-color: ${({ theme }) => theme.COLORS.base.gray500};

  margin: 0 12px
`;