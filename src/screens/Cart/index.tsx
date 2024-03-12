import { TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { ArrowLeft, Trash } from "phosphor-react-native";

import { EDGES } from "../Home";
import { Text } from "../../components/Text";
import { CartItem } from "../../components/CartItem";
import { EmptyState } from "./EmptyState";

import { useCart } from "../../hooks/useCart";


import { theme } from "../../theme/theme";
import { styling } from "./styles";
import { Swipeable } from "react-native-gesture-handler";
import Animated, { LinearTransition, SlideInRight } from "react-native-reanimated";
import { useNavigation } from "@react-navigation/native";

export function Cart() {
    const { cart, deleteCoffee } = useCart()
    const styles = styling()

    const navigation = useNavigation()

    function handleDeleteItem(id: string) {
        deleteCoffee(id)
    }

    return (
        <SafeAreaView style={styles.container} edges={EDGES}>
            <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backIcon}>
                    <ArrowLeft
                        size={24}
                        color={theme.colors.gray_100}

                    />
                </TouchableOpacity>
                <Text color={theme.colors.gray_200} type="title_sm">Carrinho</Text>
            </View>

            <Animated.FlatList
                data={cart}
                keyExtractor={item => item.id}
                ListEmptyComponent={<EmptyState />}
                itemLayoutAnimation={LinearTransition.springify().delay(500)}
                renderItem={({ item, index }) =>
                    <Animated.View
                        entering={SlideInRight.delay(index * 50)}
                        exiting={SlideInRight}
                    >
                        <Swipeable
                            onSwipeableOpen={() => handleDeleteItem(item.id)}
                            containerStyle={{ backgroundColor: theme.colors.red_light }}
                            renderLeftActions={() =>
                                <View style={styles.deleteWrapper}>
                                    <Trash color={theme.colors.red_dark} size={28} />
                                </View>
                            }
                        >
                            <CartItem
                                value={item}
                                onDelete={() => handleDeleteItem(item.id)}
                            />
                        </Swipeable>
                    </Animated.View>
                }
            />


        </SafeAreaView>


    )
}

