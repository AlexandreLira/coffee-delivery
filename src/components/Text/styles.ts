import { StyleSheet } from "react-native";
import { fonts } from "../../theme/fonts";

export const styles = StyleSheet.create({
    title_xl: {
        fontSize: 36,
        fontFamily: fonts.Baloo2_Bold
    },
    title_lg: {
        fontSize: 24,
        fontFamily: fonts.Baloo2_Bold,
        lineHeight: 28,
    },
    title_md: {
        fontSize: 20,
        fontFamily: fonts.Baloo2_Bold,
        lineHeight: 28,
    },
    title_sm: {
        fontSize: 16,
        fontFamily: fonts.Baloo2_Bold,
    },
    title_xs: {
        fontSize: 14,
        fontFamily: fonts.Baloo2_Bold,
    },
    text_md: {
        fontSize: 16,
        fontFamily: fonts.Roboto_Regular,
    },
    text_sm: {
        fontSize: 14,
        fontFamily: fonts.Roboto_Regular,
        // lineHeight: 28,
    },
    text_xs: {
        fontSize: 12,
        fontFamily: fonts.Roboto_Regular,
        // lineHeight: 28,
    },
    tag: {
        fontSize: 10,
        fontFamily: fonts.Roboto_Bold,
        // lineHeight: 28,
    },
    button: {
        fontSize: 14,
        fontFamily: fonts.Roboto_Bold,
        // lineHeight: 28,
    },
})