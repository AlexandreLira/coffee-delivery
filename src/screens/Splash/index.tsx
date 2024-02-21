import { useEffect } from "react";
import {
    Dimensions,
    View
} from "react-native";
import Animated, {
    useSharedValue,
    useAnimatedStyle,
    withTiming,
    interpolate,
    withDelay,
    runOnJS
} from 'react-native-reanimated';
import { useNavigation } from '@react-navigation/native'

import LogoName from '../../assets/images/logo_name.svg';
import LogoIcon from '../../assets/images/coffee_icon.svg';
import { styles } from "./styles";

const HEIGHT = Dimensions.get('screen').height

export function Splash() {
    const navigation = useNavigation()

    const background = useSharedValue(0)
    const nameAnimation = useSharedValue(0)

    const styles_background = useAnimatedStyle(() => ({
        width: background.value,
        height: background.value,
        opacity: interpolate(background.value, [0, HEIGHT], [0, 1])
    }))

    const styles_name = useAnimatedStyle(() => ({
        transform: [
            { translateX: interpolate(nameAnimation.value, [0, 100], [100, 30]) }
        ],
        opacity: interpolate(nameAnimation.value, [0, 100], [0, 1]),
        position: 'absolute'
    }))

    const styles_icon = useAnimatedStyle(() => ({
        opacity: interpolate(background.value, [0, HEIGHT], [0, 1]),
        transform: [
            { translateX: interpolate(nameAnimation.value, [0, 100], [0, -50]) }
        ],
    }))

    function goHome() {
        setTimeout(() => {
            navigation.navigate('Home' as never)

        }, 500)
    }

    useEffect(() => {

        setTimeout(() => {
            background.value = withTiming(HEIGHT * 2, { duration: 1000 })
            nameAnimation.value = withDelay(1000, withTiming(100, null, () =>
                runOnJS(goHome)()
            ))
        }, 2000)


    }, [])

    return (
        <View style={styles.container}>
            <Animated.View style={[styles.background, styles_background]}>

                <Animated.View style={styles_icon}>
                    <LogoIcon height={70} />
                </Animated.View>

                <Animated.View style={[styles.name, styles_name]}>
                    <LogoName height={70} />
                </Animated.View>

            </Animated.View>



        </View>
    )
}