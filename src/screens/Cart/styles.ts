import { StyleSheet } from "react-native";
import { theme } from "../../theme/theme";

export const styling = () => StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: theme.colors.gray_900,
    },
    header: {
        width: '100%',
        height: 76,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'center',
        borderBottomWidth: 1,
        borderBottomColor: theme.colors.gray_700
    },
    backIcon: {
        position: "absolute",
        left: 35
    },
    deleteWrapper: {
        height: '100%',
        width: '100%',
        justifyContent: 'center',
        marginLeft: 32,
        alignItems: 'flex-start'
    },
    footerAction: {
        width: '100%',
        height: '22%',
        backgroundColor: theme.colors.white,
        paddingHorizontal: 32,
        paddingVertical: 28,
        ...theme.shadow[9]
    },
    footerPriceWrapper: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    }

})