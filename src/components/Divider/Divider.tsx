import React from 'react';
import { View } from 'react-native';
import { styles } from './DividerStyles';
interface DividerProps {
  line?: boolean;
  size?: number;
  vertical?: boolean;
}

export function Divider({ line, size = 8, vertical }: DividerProps) {
  const position = vertical ? 'width' : 'height';

  return (
    <View
      style={{
        justifyContent: 'center',
        alignItems: 'center',
        [position]: size,
      }}
    >
      {line && <View style={vertical ? styles.VLine : styles.HLine} />}
    </View>
  );
}
