import { FlatList, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { ArrowLeft } from "phosphor-react-native";

import { EDGES } from "../Home";
import { Text } from "../../components/Text";
import { CartItem } from "../../components/CartItem";
import { EmptyState } from "./EmptyState";

import { useCart } from "../../hooks/useCart";


import { theme } from "../../theme/theme";
import { styling } from "./styles";

export function Cart() {
    const { cart } = useCart()
    const styles = styling()
    return (
        <SafeAreaView style={styles.container} edges={EDGES}>
            <View style={styles.header}>
                <ArrowLeft
                    size={24}
                    color={theme.colors.gray_100}
                    style={styles.backIcon}
                />
                <Text color={theme.colors.gray_200} type="title_sm">Carrinho</Text>
            </View>

            <FlatList
                data={cart}
                ListEmptyComponent={<EmptyState />}
                renderItem={({ item }) =>
                    <CartItem value={item} />
                }
            />

        </SafeAreaView>


    )
}

