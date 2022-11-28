import { Typography } from "@components/Typography";
import { Container, PercentContainer } from "./styles";
import { Feather } from '@expo/vector-icons';
import { useTheme } from "styled-components";

type Props = {
  isOnADiet: boolean;
  showIcon?: boolean;
}

export function MealEstatistics({ isOnADiet, showIcon = true }: Props) {
  const { COLORS: { brand } } = useTheme()

  return (
    <Container isOnADiet={isOnADiet}>
      <PercentContainer>
        <Typography 
          fontSize="title_G" 
          fontFamily="bold" 
          style={{ textAlign: 'center', flex: 1 }}
        >
          90,86%
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
        das refeições dentro da dieta
      </Typography>
    </Container>
  );  
}