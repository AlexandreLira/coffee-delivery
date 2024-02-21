import { StyleSheet } from "react-native";
import { theme } from "../../theme/theme";

export const styles = StyleSheet.create({

    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: theme.colors.purple_dark
    },
    background: {
        backgroundColor: theme.colors.purple,
        borderRadius: 999,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
    },
    name: {
        marginLeft: 14,
    }
})