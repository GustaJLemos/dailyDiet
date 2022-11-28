import { theme } from "@theme/index";
import styled from "styled-components/native";

export type StyledFontSizeProps = 
  'title_G' |
  'title_M' |
  'title_S' |
  'title_XS'|
  'body_M'  |
  'body_S'  |
  'body_XS';

export type StyledFontFamilyProps = 
  'regular' | 
  'bold';

export type StyledFontColorProps = 
  'gray100' |
  'gray200' |
  'gray300' |
  'gray400' |
  'gray500' |
  'gray600' |
  'gray700' |
  'white' 

type Props = {
  fontSize: StyledFontSizeProps;
  fontFamily: StyledFontFamilyProps;
  fontColor: StyledFontColorProps;
}

export const Container = styled.Text<Props>`
  font-size: ${({ theme, fontSize }) => theme.FONT_SIZE[fontSize]};
  font-family: ${({ theme, fontFamily }) => theme.FONT_FAMILY[fontFamily]};
  color: ${({ theme, fontColor }) => theme.COLORS.base[fontColor]}
`;