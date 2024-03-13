import { ShoppingCart } from "phosphor-react-native";
import { StyleSheet, View } from "react-native";
import { theme } from "../../theme/theme";
import { Divider } from "../../components/Divider";
import { Text } from "../../components/Text";
import { Button } from "../../components/Button";

export interface EmptyStateProps {
    onPress: () => void;
}

export function EmptyState({ onPress }: EmptyStateProps) {
    return (
        <View style={styles.container}>
            <ShoppingCart
                color={theme.colors.gray_500}
                size={24}
                weight="fill"
            />
            <Divider size={15} />
            <Text
                type="text_sm"
                color={theme.colors.gray_400}
            >Seu carrinho está vazio</Text>
            <Divider size={32} />
            <Button title="VER CATÁLAGO" onPress={onPress} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 64,
        alignItems: 'center',
        flex: 1,
    }
})