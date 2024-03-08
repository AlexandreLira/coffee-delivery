import { ShoppingCart } from "phosphor-react-native";
import { TouchableOpacity, View } from "react-native";
import { theme } from "../../theme/theme";
import { Text } from "../Text";
import { styles } from "./styles";

interface CartBadgeProps {
    value: number
}

export function CartBadge({ value }: CartBadgeProps) {
    return (
        <TouchableOpacity>
            {value > 0 &&
                <View style={styles.bagde}>
                    <Text type="text_xs" >{value}</Text>
                </View>
            }
            <ShoppingCart color={theme.colors.yellow_dark} weight="fill" />
        </TouchableOpacity>
    )
}