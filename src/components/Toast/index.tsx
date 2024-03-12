import { useEffect, useState } from "react";
import { Pressable, TouchableOpacity, View } from "react-native";
import { ArrowRight, ShoppingCart } from "phosphor-react-native";
import Animated, {
    withSequence,
    Easing,
    interpolate,
    useAnimatedStyle,
    useSharedValue,
    withTiming,
    withDelay,
    Extrapolation
} from "react-native-reanimated";

import { Text } from "../Text";
import { Divider } from "../Divider";
import { Badge } from "../Badge";
import { useCart } from "../../hooks/useCart";
import { theme } from "../../theme/theme";
import { styles } from "./styles";
import { useNavigation } from "@react-navigation/native";


export function Toast() {
    const [firstRender, setFirstRender] = useState(true)
    const animation = useSharedValue(0)

    const { cart } = useCart()
    const navigation = useNavigation()

    const { colors } = theme
    const HEIGHT_SIZE = 96

    const start_styles = useAnimatedStyle(() => {
        const INPUT = [0, 50]
        const OUTPUT = [HEIGHT_SIZE * 5, HEIGHT_SIZE]
        return {
            display: animation.value == 0 ? 'none' : 'flex',
            height: interpolate(animation.value, INPUT, OUTPUT, Extrapolation.CLAMP),
            opacity: interpolate(animation.value, INPUT, [0, 1]),
            transform: [
                {
                    translateY: interpolate(
                        animation.value,
                        [50, 100],
                        [0, HEIGHT_SIZE],
                        Extrapolation.CLAMP
                    )
                }
            ]
        }
    })


    function animated() {
        const second = 1000
        const DELAY = second * 2
        animation.value = withSequence(
            withTiming(50, { easing: Easing.elastic(), duration: second }),
            withDelay(DELAY, withTiming(100, { duration: second * 0.6 }))
        )

    }

    function start() {
        if (firstRender) {
            setFirstRender(false)
            return
        }
        if (animation.value !== 0) {
            animation.value = 0
        }
        animated()
    }

    useEffect(() => {
        start()
    }, [cart]);

    return (
        <Animated.View style={[styles.container, start_styles]}>
            <Pressable style={styles.content} onPress={() => navigation.navigate('Cart')}>


                <View style={styles.cart}>
                    {cart.length > 0 &&
                        <Badge value={cart.length} style={styles.badge} />
                    }
                    <ShoppingCart
                        weight="fill"
                        color={colors.white}
                        size={20}
                    />

                </View>

                <Text
                    style={styles.text}
                    color={theme.colors.gray_400}
                    type="text_sm"

                >
                    1 café
                    <Text
                        type="button"
                        color={theme.colors.gray_400}
                    >
                        {' '}Irlandês{' '}
                    </Text>
                    de
                    <Text
                        type="button"
                        color={theme.colors.gray_400}
                    >
                        {' '}227ml{' '}
                    </Text>
                    adicionado ao carrinho
                </Text>

                <View style={styles.action}>
                    <Text
                        color={theme.colors.purple}
                        size={12}
                        font="Roboto_Bold">
                        VER
                    </Text>
                    <Divider size={4} vertical />
                    <ArrowRight size={16} color={theme.colors.purple} />
                </View>
            </Pressable>
        </Animated.View >
    )
}