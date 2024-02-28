import { StyleSheet, View } from "react-native";
import { theme } from "../../theme/theme";
import { Text } from "../Text";
import { styling } from "./styles";

interface TagProps {
    title: string;
    textColor?: string;
    bg?: string;
    selected?: boolean

}

export function Tag(props: TagProps) {
    const {
        textColor = theme.colors.white,
        bg = theme.colors.purple,
        title,
        selected
    } = props


    const styles = styling({ bg })

    return (
        <View style={[styles.container, selected && styles.selected]}>
            <Text
                type="tag"
                color={selected ? textColor : bg }
            >{title.toUpperCase()}</Text>
        </View>
    )
}
