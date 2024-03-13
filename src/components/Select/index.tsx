import { useEffect } from "react";
import { Pressable, PressableProps, StyleSheet } from "react-native";
import { Text } from "../Text";
import { theme } from "../../theme/theme";
import Animated, { SharedValue, interpolateColor, useAnimatedStyle, useSharedValue, withTiming } from "react-native-reanimated";


interface SelectProps extends PressableProps {
    selected?: boolean;
    text: string;
    errorAnimation: SharedValue<number>
}

export function Select(props: SelectProps) {
    const { selected, text, errorAnimation, ...rest } = props
    const { colors } = theme
    const { gray_300, gray_700, purple } = colors

    const value = useSharedValue(0)

    const selectStyle = useAnimatedStyle(() => ({
        borderWidth: 1,
        borderColor: interpolateColor(value.value, [0, 100], ['transparent', purple]),
        backgroundColor: selected ? 'transparent' : colors.gray_700
    }))

    const errorStyles = useAnimatedStyle(() => ({
        borderColor: interpolateColor(errorAnimation.value, [0, 100], ['transparent', colors.red_dark]),
    }))


    useEffect(() => {

        value.value = withTiming(selected ? 100 : 0, { duration: 500 })

    }, [selected])

    return (
        <Pressable {...rest}>
            <Animated.View style={[styles.container, selectStyle, errorStyles]} >
                <Text
                    color={selected ? purple : gray_300}
                    type={selected ? 'button' : 'text_sm'}
                >{text}</Text>
            </Animated.View>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    container: {
        minWidth: 100,
        height: 40,
        backgroundColor: theme.colors.gray_700,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 6
    },
    select: {
        borderWidth: 1,
        borderColor: theme.colors.purple,
        backgroundColor: 'transparent'
    }
})