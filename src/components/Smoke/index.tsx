
import Smoke1 from '../../assets/smoke/smoke-1.svg'
import Smoke2 from '../../assets/smoke/smoke-2.svg'
import Smoke3 from '../../assets/smoke/smoke-3.svg'
import Smoke4 from '../../assets/smoke/smoke-4.svg'
import Smoke5 from '../../assets/smoke/smoke-5.svg'

import Animated, { Extrapolation, interpolate, useAnimatedStyle, useSharedValue, withDelay, withRepeat, withTiming } from "react-native-reanimated";
import { View } from "react-native";
import { useEffect } from "react";

export function Smoke() {

    const animation = useSharedValue(0)


    const style = (value: {
        start: number,
        end: number
    }) => useAnimatedStyle(() => ({
        opacity: interpolate(
            animation.value,
            [value.start, (value.start + value.end) / 2, value.end],
            [0, 1, 0],
            Extrapolation.CLAMP

        ),
        position: 'absolute',
        alignItems: 'flex-end',
        height: 200,
        marginTop: -100,
        alignSelf: 'center',
    }))


    const number = 1000

    useEffect(() => {

        animation.value = withTiming(number, { duration: 5000 })

    }, []);



    const value = number / 5

    return (

        <View style={{
            flex: 1,
            zIndex: 999,

        }}>




            <Animated.View style={style({ start: value * 0.5, end: value * 1 })}>

                <Smoke5 />
            </Animated.View>
            <Animated.View style={style({ start: value * 1 / 2, end: value * 2 })}>

                <Smoke4 />
            </Animated.View>
            <Animated.View style={style({ start: value * 2 / 2, end: value * 3 })}>
                <Smoke3 />
            </Animated.View>
            <Animated.View style={style({ start: value * 3 / 2, end: value * 4 })}>
                <Smoke2 />
            </Animated.View>
            <Animated.View style={style({ start: value * 4 / 2, end: value * 5 })}>
                <Smoke1 />
            </Animated.View>

        </View>

    )
}