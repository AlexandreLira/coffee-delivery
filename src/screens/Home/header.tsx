import { MapPin } from "phosphor-react-native";
import Animated, {
    Extrapolation,
    SharedValue,
    interpolate,
    interpolateColor,
    useAnimatedStyle
} from "react-native-reanimated";
import { theme } from "../../theme/theme";
import { Divider } from "../../components/Divider";
import { StyleSheet, View } from "react-native";
import { fonts } from "../../theme/fonts";
import { useCart } from "../../hooks/useCart";
import { CartBadge } from "../../components/CartBadge";

interface HeaderProps {
    scrollY: SharedValue<number>
}

export function Header(props: HeaderProps) {
    const { scrollY } = props

    const { cart } = useCart()

    const scrollYInputRange = [0, 300]

    const headerStyle = useAnimatedStyle(() => ({
        // opacity: interpolate(introAnimation.value, [0, 100], [0, 1]),
        backgroundColor: interpolateColor(scrollY.value, scrollYInputRange, ['transparent', theme.colors.white]),
        borderBottomWidth: 1,
        borderBottomColor: interpolateColor(scrollY.value, scrollYInputRange, ['transparent', theme.colors.gray_700])
    }))

    const contentStyle = useAnimatedStyle(() => ({
        height: interpolate(scrollY.value, scrollYInputRange, [76, 52], Extrapolation.CLAMP),

    }))

    const textStyle = useAnimatedStyle(() => ({
        color: interpolateColor(scrollY.value, scrollYInputRange, [theme.colors.white, theme.colors.gray_100])
    }))
    return (
        <Animated.View style={[headerStyle]}>
            <Divider size={62} />
            <Animated.View style={[styles.content, contentStyle]}>
                <View style={styles.location}>

                    <MapPin color={theme.colors.purple} weight="fill" />
                    <Divider vertical size={4} />
                    <Animated.Text style={[styles.text, textStyle]}>Porto Alegre, RS</Animated.Text>
                </View>
                <CartBadge value={cart.length} />
            </Animated.View>

        </Animated.View>

    )
}

const styles = StyleSheet.create({
    content: {
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
        paddingHorizontal: 32,
    },
    location: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    text: {
        fontSize: 14,
        fontFamily: fonts.Roboto_Regular,
    }

})