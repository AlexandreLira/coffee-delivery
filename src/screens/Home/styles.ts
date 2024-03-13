import { Platform, StyleSheet } from "react-native";
import { ITEM_WIDTH } from "../../components/CoffeeCard";
import { theme } from "../../theme/theme";

export const styles = StyleSheet.create({
    container: {
        flex: 1, backgroundColor: theme.colors.gray_100
    },
    content: {
        flex: 1,
        backgroundColor: theme.colors.white,

    },
    intro: {
        backgroundColor: theme.colors.gray_100,
        paddingHorizontal: 32
    },
    header: {
        height: 78 + 32,
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
        paddingHorizontal: 32,
        backgroundColor: 'transparent',
        paddingTop: 32

    },
    location: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    flatList: {
        overflow: 'visible',
        marginTop: -100,
    },
    flatListContent: {
        justifyContent: Platform.OS == 'ios' ? 'center' : 'flex-start',
        paddingTop: 32,
        paddingHorizontal: ITEM_WIDTH / 2,

    },
    image: {
        width: 83,
        position: 'absolute',
        right: -20,
        bottom: -83
    },
    footer: {
        width: '100%',
        height: '50%',
        bottom: 0,
        position: 'absolute',
        backgroundColor: theme.colors.white,
        zIndex: -1,
    }
})