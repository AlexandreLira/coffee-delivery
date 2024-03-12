import { StyleSheet } from "react-native";
import { theme } from "../../theme/theme";

export const styling = () => StyleSheet.create({
    container: {
        flexDirection: 'row',
        paddingHorizontal: 32,
        paddingVertical: 16,
        height: 117,
        alignItems: 'center',
        borderBottomColor: theme.colors.gray_700,
        borderBottomWidth: 1
    },
    content: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        flex: 1
    },
    amountWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: theme.colors.gray_600,
        borderRadius: 6,
    },
    amountButton: {
        width: 36,
        aspectRatio: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    deleteButton: {
        width: 36,
        aspectRatio: 1,
        backgroundColor: theme.colors.gray_700,
        borderRadius: 6,
        justifyContent: 'center',
        alignItems: 'center'
    },
    price: {
        marginTop: -2
    }
})