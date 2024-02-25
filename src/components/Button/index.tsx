import { View, Text } from "react-native";
import { theme } from "../../theme/theme";

interface ButtonProps {
    title: string
}

export function Button(props: ButtonProps) {
    const {title} = props
    return (
        <View style={{
            minWidth: 132,
            height: 46,
            backgroundColor: theme.colors.purple,
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 6,
            
        }}>
            <Text style={{ color: theme.colors.white }}>{title}</Text>
        </View>
    )
}