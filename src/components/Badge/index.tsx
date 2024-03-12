import { StyleSheet, View, ViewProps } from "react-native";
import { theme } from "../../theme/theme";
import { Text } from "../Text";

interface BadgeProps extends ViewProps {
    value: number
}

export function Badge({ value, style, ...rest }: BadgeProps) {
    return (
        <View style={[styles.badge, style]} {...rest}>
            <Text type="text_xs" >{value}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    badge: {
        minWidth: 24,
        height: 24,
        backgroundColor: theme.colors.purple,
        borderRadius: 24,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        zIndex: 1
    }
})