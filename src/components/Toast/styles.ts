import { StyleSheet } from "react-native";
import { theme } from "../../theme/theme";

export const styles = StyleSheet.create({
    container: {
        backgroundColor: theme.colors.white,
        height: 96,
        width: '100%',
        zIndex: 1,
        position: 'absolute',
        bottom: 0,
        ...theme.shadow[9]
    },
    content: {
        alignItems: 'flex-start',
        justifyContent: 'space-between',
        flexDirection: 'row',
        paddingHorizontal: 32,
        paddingVertical: 28,

    },
    text: {
        flexShrink: 1,
        paddingHorizontal: 24
    },
    cart: {
        backgroundColor: theme.colors.gray_500,
        width: 36,
        aspectRatio: 1,
        borderRadius: 6,
        justifyContent: 'center',
        alignItems: 'center'
    },
    badge: {
        right: -10,
        top: -10
    },
    action: {
        height: 36,
        flexDirection: 'row',
        alignItems: 'center',

    }
})