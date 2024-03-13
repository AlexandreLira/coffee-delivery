import { TouchableOpacity, View } from "react-native";
import { theme } from "../../theme/theme";
import { Icon } from "../Icon";
import { Divider } from "../Divider";
import { Text } from "../Text";
import { Minus, Plus, Trash } from "phosphor-react-native";
import { AddCoffeeProps } from "../../contexts/CartContext";
import { styling } from "./styles";
import { useState } from "react";

export interface CartItemProps {
    value: AddCoffeeProps;
    onDelete: () => void;
    onIncrease?: () => {},
    onDecrease?: () => {}
}

export function CartItem({ value, onDelete, onDecrease, onIncrease }: CartItemProps) {
    const [amount, setAmount] = useState(value.amount)
    const styles = styling()


    function handleDecrease() {
        onDecrease()
        if (amount <= 1) return
        setAmount(state => state - 1)
    }
    function handleIncrease() {
        onIncrease()
        setAmount(state => state + 1)
    }
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
                            <TouchableOpacity
                                style={[styles.amountButton, {opacity: amount <= 1 ? 0.2 : 1}]}
                                onPress={handleDecrease}
                                disabled={amount <= 1}
                            >
                                <Minus size={20} color={theme.colors.purple} weight="bold" />
                            </TouchableOpacity>
                            <Divider size={10} vertical />
                            <Text
                                type="text_md"
                                color={theme.colors.gray_100}
                            >{amount}</Text>
                            <Divider size={10} vertical />

                            <TouchableOpacity style={styles.amountButton} onPress={handleIncrease} >
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
                    R$ {(value.price * amount).toFixed(2)}
                </Text>
            </View>
        </View>
    )
}