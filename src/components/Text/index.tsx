import React from 'react';
import type { TextProps, TextStyle } from 'react-native';
import { Text as RNText } from 'react-native';
import { styles } from './styles';
import { theme } from '../../theme/theme';
import { fonts } from '../../theme/fonts';

export type TextTypes = keyof typeof styles

export interface DOTextProps extends TextProps {
  color?: string;
  font?: keyof typeof fonts;
  size?: number;
  type?: TextTypes;
}
export function Text(props: DOTextProps) {
  const {
    type = 'label',
    font,
    size,
    ...rest
  } = props;

  const style = [
    {
      color: props.color || theme.colors.white,
    },
    styles[type],
    props.style,
  ];

  if (font) {
    style.push({ fontFamily: font } as TextStyle)
  }

  if (size) {
    style.push({ fontSize: size } as TextStyle)
  }

  return (
    <RNText {...rest} style={[style]}>
      {props.children}
    </RNText>
  );
}
