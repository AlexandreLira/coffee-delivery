import { StyleSheet } from "react-native";
import { theme } from "../../theme/theme";

export const styles = StyleSheet.create({
    bagde: {
        minWidth: 24,
        height: 24,
        backgroundColor: theme.colors.purple,
        borderRadius: 24,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        right: -18,
        top: -18,
        zIndex: 1

    },
})