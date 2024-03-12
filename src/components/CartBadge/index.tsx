import { ShoppingCart } from "phosphor-react-native";
import { TouchableOpacity, TouchableOpacityProps, View } from "react-native";
import { theme } from "../../theme/theme";
import { styles } from "./styles";
import { Badge } from "../Badge";

interface CartBadgeProps extends TouchableOpacityProps {
    value: number
}

export function CartBadge({ value, ...rest }: CartBadgeProps) {
    return (
        <TouchableOpacity {...rest}>
            {value > 0 &&
                <Badge value={value} style={styles.bagde} />
            }
            <ShoppingCart color={theme.colors.yellow_dark} weight="fill" />
        </TouchableOpacity>
    )
}