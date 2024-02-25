import { StyleSheet, TextInput, TextInputProps, View } from "react-native";
import { theme } from "../../theme/theme";
import { MagnifyingGlass } from "phosphor-react-native";
import { Divider } from "../Divider";
import { useRef, useState } from "react";

interface SearchBarProps extends TextInputProps {

}

export function SearchBar(props: SearchBarProps) {

    const InputRef = useRef<TextInput>(null)

    return (
        <View style={styles.container}>
            <MagnifyingGlass size={16} color={theme.colors.gray_400} />
            <Divider size={8} vertical />
            <TextInput
                ref={InputRef}
                {...props}
                placeholderTextColor={theme.colors.gray_400}
                selectionColor={theme.colors.gray_400}
                style={styles.input}
            />

        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        height: 42,
        backgroundColor: theme.colors.gray_200,
        borderRadius: 4,
        alignItems: 'center',
        paddingHorizontal: 12,
        flexDirection: 'row'
    },
    input: {
        flex: 1,
        color: theme.colors.white,
    }
})