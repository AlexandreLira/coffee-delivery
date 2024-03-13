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
import Animated, { Easing, FadeIn, LinearTransition, SlideInRight, interpolate, useAnimatedStyle, useSharedValue, withDelay, withTiming } from "react-native-reanimated";
import { useNavigation } from "@react-navigation/native";
import { Button } from "../../components/Button";
import { Divider } from "../../components/Divider";
import { useEffect } from "react";

export function Cart() {
    const { cart, deleteCoffee } = useCart()
    const styles = styling()

    const animation = useSharedValue(0)

    const navigation = useNavigation()


    const footerStyles = useAnimatedStyle(() => ({
        transform: [{ translateY: interpolate(animation.value, [100, 0], [0, 180]) }],
    }))

    function handleDeleteItem(id: string) {
        deleteCoffee(id)
    }

    function handleGoHome() {
        navigation.navigate('Home')
    }

    useEffect(() => {
        if (cart.length == 0) {
            animation.value = withTiming(0, { easing: Easing.ease })

        } else {
            animation.value = withDelay(250,
                withTiming(100, { easing: Easing.ease })
            )
        }
    }, [cart])

    return (
        <SafeAreaView style={styles.container} edges={EDGES}>
            <View style={styles.header}>
                <TouchableOpacity
                    onPress={handleGoHome}
                    style={styles.backIcon}
                >
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
                ListEmptyComponent={
                    <Animated.View entering={FadeIn}>
                        <EmptyState onPress={handleGoHome} />
                    </Animated.View>
                }
                itemLayoutAnimation={LinearTransition.springify().delay(500)}
                renderItem={({ item, index }) =>
                    <Animated.View
                        entering={SlideInRight.delay(index * 50)}
                        exiting={SlideInRight}
                    >
                        <Swipeable
                            onSwipeableOpen={() => handleDeleteItem(item.id)}
                            containerStyle={{ backgroundColor: theme.colors.red_light }}
                            leftThreshold={10}
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

            <Animated.View style={[styles.footerAction, footerStyles]}>
                <View style={styles.footerPriceWrapper}>
                    <Text
                        type="text_md"
                        color={theme.colors.gray_200}
                    >Valor Total</Text>
                    <Text
                        type="title_md"
                        color={theme.colors.gray_200}
                    >R$ 9,99</Text>
                </View>
                <Divider size={22} />
                <Button title="CONFIRMAR PEDIDO" bg={theme.colors.yellow_dark} />
            </Animated.View>


        </SafeAreaView>


    )
}

