import React, { InputHTMLAttributes } from 'react';

import { ColorPicker, Container, LabelPicker } from './styles';

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  title: string;
  name: string;
}

export const PickerColor = ({ title, name, ...rest }: Props) => {
  return (
    <Container>
      <LabelPicker htmlFor={name}>{title}</LabelPicker>
      <ColorPicker id={name} type='color' {...rest} />
    </Container>
  );
};
