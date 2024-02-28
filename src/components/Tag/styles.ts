import { StyleSheet } from "react-native";

export const styling = ({bg}) => StyleSheet.create({
    container: {
        height: 25,
        minWidth: 60,
        paddingHorizontal: 12,
        borderRadius: 25,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'flex-start',
       

        backgroundColor: 'transparent',
        borderColor: bg,
        borderWidth: 1,
    },
    selected:{
        backgroundColor: bg,
    }
})