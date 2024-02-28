import React from 'react';
import type { TextProps } from 'react-native';
import { Text as RNText } from 'react-native';
import { styles } from './styles';
import { theme } from '../../theme/theme';

export type TextTypes = keyof typeof styles

export interface DOTextProps extends TextProps {
  color?: any;
  fontFamily?: any;
  // color?:  keyof typeof colors ;
  // fontFamily?: keyof typeof Fonts,
  type?: TextTypes;
}
export function Text(props: DOTextProps) {
  const { type = 'label', ...rest } = props;

  const style = [
    {
      color: props.color || theme.colors.white,
    },
    styles[type],
    props.style,
  ];

  return (
    <RNText {...rest} style={[style]}>
      {props.children}
    </RNText>
  );
}
