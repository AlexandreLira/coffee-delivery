import { Pressable, PressableProps, StyleSheet } from "react-native";
import { theme } from "../../theme/theme";
import { Text } from "../Text";

interface ButtonProps extends PressableProps {
    title: string
    bg?: string;
}

export function Button(props: ButtonProps) {
    const { title, bg = theme.colors.purple, disabled,...rest } = props

    const backgroundColor = { backgroundColor: bg }

    return (
        <Pressable
            style={[styles.container, backgroundColor, disabled && {opacity: 0.3}]}
            {...rest}
        >
            <Text
                type="button"
                color={theme.colors.white}
            >{title}</Text>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: 46,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 6,
    }
})