import { TouchableOpacity, View } from "react-native";
import { theme } from "../../theme/theme";
import { Icon } from "../Icon";
import { Divider } from "../Divider";
import { Text } from "../Text";
import { Minus, Plus, Trash } from "phosphor-react-native";
import { AddCoffeeProps } from "../../contexts/CartContext";
import { styling } from "./styles";

export interface CartItemProps {
    value: AddCoffeeProps;
    onDelete: () => void;
}

export function CartItem({ value, onDelete }: CartItemProps) {
    const styles = styling()
    return (
        <View style={styles.container} >
            <Icon
                height={64}
                name={value.icon}
                style={{ marginLeft: -24 }}
            />
            <Divider size={4} vertical />
            <View style={styles.content}>
                <View>
                    <Text
                        type="text_md"
                        color={theme.colors.gray_100}
                    >
                        {value.name}
                    </Text>
                    <Divider size={2} />
                    <Text
                        type="text_sm"
                        color={theme.colors.gray_400}
                    >
                        {value.size}
                    </Text>
                    <Divider size={8} />
                    <View style={{ flexDirection: 'row' }}>
                        <View style={styles.amountWrapper}>
                            <TouchableOpacity style={styles.amountButton}>
                                <Minus size={20} color={theme.colors.purple} weight="bold" />
                            </TouchableOpacity>
                            <Divider size={10} vertical />
                            <Text
                                type="text_md"
                                color={theme.colors.gray_100}
                            >{1}</Text>
                            <Divider size={10} vertical />

                            <TouchableOpacity style={styles.amountButton} >
                                <Plus size={20} color={theme.colors.purple} weight="bold" />
                            </TouchableOpacity>

                        </View>
                        <Divider size={8} vertical />
                        <TouchableOpacity
                            style={styles.deleteButton}
                            onPress={onDelete}
                        >
                            <Trash
                                size={20}
                                color={theme.colors.purple}
                            />

                        </TouchableOpacity>

                    </View>

                </View>

                <Text
                    type="title_sm"
                    color={theme.colors.gray_100}
                    style={styles.price}
                >
                    R$ {value.price}
                </Text>
            </View>
        </View>
    )
}