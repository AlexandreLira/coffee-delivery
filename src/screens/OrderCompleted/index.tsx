import { View } from "react-native";
import { Text } from "../../components/Text";
import { theme } from "../../theme/theme";
import { Divider } from "../../components/Divider";
import { Button } from "../../components/Button";
import Animated, { Easing, Extrapolation, SlideInDown, SlideInLeft, SlideInRight, interpolate, useAnimatedStyle, useSharedValue, withDecay, withDelay, withRepeat, withSequence, withTiming } from "react-native-reanimated";
import { useEffect } from "react";
import { useNavigation } from "@react-navigation/native";

import Scooter from '../../assets/images/scooter.svg'
import { Canvas, LinearGradient, Path, useLoop } from "@shopify/react-native-skia";
import { styles } from "./styles";

export function OrderCompleted() {
    const animation = useSharedValue(0);
    const scooterAnimation = useSharedValue(0);

    const navigation = useNavigation()

    const textStyles = useAnimatedStyle(() => ({
        transform: [
            { translateY: interpolate(animation.value, [0, 100], [100, 0], Extrapolation.CLAMP) }
        ],
        opacity: interpolate(animation.value, [0, 100], [0, 1]),
        width: '100%',
        alignItems: 'center'
    }))

    const buttonStyles = useAnimatedStyle(() => {
        const start = 100;
        const end = 200
        return {
            opacity: interpolate(animation.value, [start, end], [0, 1]),
            width: '70%'
        }
    })

    const scooterStyles = useAnimatedStyle(() => ({
        transform: [
            { translateY: interpolate(scooterAnimation.value, [0, 100], [2, 0], Extrapolation.CLAMP) },
        ],
    }))

    const line1 = useLoop({
        duration: 600,
        easing: Easing.elastic()
    })
    const line2 = useLoop({
        duration: 700,
        easing: Easing.elastic()
    })
    const line3 = useLoop({
        duration: 800,
        easing: Easing.elastic()
    })

    useEffect(() => {
        animation.value =
            withSequence(
                withTiming(100),
                withDelay(500, withTiming(200))
            )
        scooterAnimation.value =
            withRepeat(withTiming(100), -1, true)
    }, [])

    return (
        <View style={styles.container}>


            <Canvas style={{
                width: 100,
                height: 100,
                position: 'absolute',
                top: '31%',
                left: '15%'
            }}>
                <Path
                    opacity={line1}
                    path="M96.8818 0.950493C92.0758 1.237 87.2684 1.46258 82.4598 1.62721C77.6513 1.80513 72.8418 1.92706 68.032 2.03822C63.2219 2.13139 58.4115 2.21251 53.5999 2.238C48.7886 2.27693 43.976 2.25395 39.1621 2.16905C43.9681 1.88148 48.7755 1.65544 53.5842 1.49093C58.3926 1.31324 63.2021 1.19133 68.0119 1.08132C72.8221 0.989324 77.6325 0.908201 82.4441 0.882948C87.2554 0.844477 92.068 0.866988 96.8818 0.950493Z"
                    color={theme.colors.yellow}

                />
                <Path
                    opacity={line2}
                    path="M58.1729 15.4295C53.3668 15.716 48.5594 15.9416 43.7507 16.1063C38.9424 16.2842 34.1328 16.4062 29.323 16.5172C24.5129 16.6104 19.7025 16.6916 14.8909 16.717C10.0796 16.756 5.26703 16.7331 0.453125 16.6481C5.25917 16.3604 10.0665 16.1344 14.8752 15.9699C19.6836 15.7922 24.4931 15.6703 29.3029 15.5604C34.1131 15.4684 38.9235 15.3872 43.7351 15.362C48.5464 15.3235 53.359 15.3459 58.1729 15.4295Z"
                    color={theme.colors.yellow}
                />
                <Path
                    opacity={line3}
                    path="M74.7178 31.6326C69.9117 31.9191 65.1043 32.1447 60.2957 32.3095C55.4873 32.4874 50.6777 32.6093 45.868 32.7203C41.0578 32.8135 36.2474 32.8948 31.4358 32.9201C26.6246 32.9592 21.812 32.9362 16.998 32.8513C21.8041 32.5636 26.6115 32.3375 31.4201 32.173C36.2285 31.9953 41.038 31.8734 45.8479 31.7635C50.658 31.6715 55.4685 31.5903 60.2801 31.5652C65.0913 31.5266 69.9039 31.5491 74.7178 31.6326Z"
                    color={theme.colors.yellow}
                />
            </Canvas>

            <Animated.View
                entering={SlideInLeft.duration(500).easing(Easing.elastic())}
                style={scooterStyles}
            >
                <Scooter />
            </Animated.View>



            <Divider size={47} />

            <Animated.View style={textStyles}>
                <Text
                    color={theme.colors.yellow_dark}
                    type="title_lg"
                >
                    Uhu! Pedido Confirmando
                </Text>
                <Divider size={8} />
                <Text
                    color={theme.colors.gray_200}
                    type="text_sm"
                    style={{ width: '60%', textAlign: 'center' }}
                >
                    Agora é só aguardar que logo o café chegará até você!
                </Text>
            </Animated.View>

            <Divider size={64} />

            <Animated.View style={buttonStyles}>
                <Button
                    title="IR PARA A HOME"
                    bg={theme.colors.purple_dark}
                    // @ts-ignore
                    onPress={() => navigation.navigate('Home')}
                />
            </Animated.View>
        </View>
    )
}