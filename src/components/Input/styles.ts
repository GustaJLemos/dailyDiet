import { TextInput } from "react-native";
import styled from "styled-components/native";

export const InputContainer = styled(TextInput)`
  width: 100%;
  height: 48px;

  border-radius: 8px;
  border: 1px solid ${({ theme }) => theme.COLORS.base.gray500};

  padding: 0 16px;
  
  color: ${({ theme }) => theme.COLORS.base.gray100};
  background-color: transparent;
`;