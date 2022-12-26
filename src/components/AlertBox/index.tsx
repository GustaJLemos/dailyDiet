import { Button } from '@components/Button';
import { Typography } from '@components/Typography';
import React from 'react';
import { Modal, ModalProps, View } from 'react-native';
import { ButtonContainer, Container, Content } from './styles';

type Props = ModalProps & {
  onCancel: () => void;
  onConfirm: () => void;
}

export function AlertBox({ onCancel, onConfirm, ...rest }: Props) {
  return (
    <Modal animationType='fade' transparent statusBarTranslucent {...rest}>
      <Container>
        <Content>
          <Typography fontFamily='bold' fontSize='title_S' style={{ textAlign: 'center' }}>
            Deseja realmente excluir o {'\n'} registro da refeição?
          </Typography>
          <ButtonContainer>
            <Button 
              text='Cancelar'
              type='SECONDARY'
              style={{ width: '48%' }}
              onPress={onCancel}
            />
            <Button 
              text='Sim, excluir'
              style={{ width: '48%' }}
              onPress={onConfirm}
            />
          </ButtonContainer>
        </Content>
      </Container>
    </Modal>
  );
}