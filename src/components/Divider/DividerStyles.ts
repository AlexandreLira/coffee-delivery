import { StyleSheet } from 'react-native';
import { theme } from '../../theme/theme';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
  },

  VLine: {
    backgroundColor: theme.colors.purple,
    height: '100%',
    width: 1,
  },
  HLine: {
    backgroundColor: theme.colors.purple,
    width: '100%',
    height: 1,
  },
});
