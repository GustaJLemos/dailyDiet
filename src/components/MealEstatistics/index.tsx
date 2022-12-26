import { TouchableOpacityProps } from 'react-native';
import { Typography } from "@components/Typography";
import { Container, PercentContainer } from "./styles";
import { Feather } from '@expo/vector-icons';
import { useTheme } from "styled-components";

type Props = TouchableOpacityProps & {
  isOnADiet?: boolean;
  showIcon?: boolean;
  title: string;
  subtitle: string;
}

export function MealEstatistics({ title, subtitle, isOnADiet = true, showIcon = true, ...rest  }: Props) {
  const { COLORS: { brand } } = useTheme()

  return (
    <Container isOnADiet={isOnADiet} style={rest.style} {...rest}>
      <PercentContainer>
        <Typography 
          fontSize="title_G" 
          fontFamily="bold" 
          style={{ textAlign: 'center', flex: 1 }}
        >
          {title}
        </Typography>
        {
          showIcon && (
            <Feather 
              name="arrow-up-right" 
              size={24} 
              color={isOnADiet ? brand.green.dark : brand.red.dark} 
            />
          )
        }
      </PercentContainer>
      <Typography fontSize="body_S">
        {subtitle}
      </Typography>
    </Container>
  );  
}