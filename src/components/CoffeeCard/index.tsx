import { Dimensions, StyleSheet, View } from "react-native";
import { theme } from "../../theme/theme";
import { Text } from "../Text";
import { Divider } from "../Divider";
import Latte from '../../assets/images/latte.svg';
import Animated, { Extrapolation, interpolate, useAnimatedStyle } from "react-native-reanimated";
import { CaffesImagesType, Icon } from "../Icon";

const WIDTH = Dimensions.get('screen').width
export const ITEM_WIDTH = WIDTH / 2

export type ICoffee = {
    id: string;
    name: string;
    category: string;
    description: string;
    price: string;
    icon: CaffesImagesType;
}

interface CoffeeCardProps {
    contentOffset: any;
    index: number;
    coffee: ICoffee
}

export function CoffeeCard({ index, contentOffset, coffee }: CoffeeCardProps) {

    const inputRange = [
        (index - 1) * ITEM_WIDTH,
        index * ITEM_WIDTH,
        (index + 1) * ITEM_WIDTH,
    ]

    const imageStyle = useAnimatedStyle(() => {


        const outputRange = [0.5, 1.2, 0.5]
        const scale = interpolate(
            contentOffset.value,
            inputRange,
            outputRange,
            Extrapolation.CLAMP
        )
        return {
            transform: [
                { scale }
            ]
        }
    })

    const rStyle = useAnimatedStyle(() => {

        const scale = interpolate(
            contentOffset?.value,
            inputRange,
            [0.7, 1, 0.7],
            Extrapolation.CLAMP
        )



        return {
            transform: [
                { scale: scale },
            ]
        }
    })

 



    return (

        <Animated.View style={[styles.container, rStyle]}>

            <Animated.View style={imageStyle}>
                <Icon
                    height={120}
                    style={styles.coffeeImage}
                    name={coffee.icon}
                />
            </Animated.View>


            <Divider size={8} />


            <View style={{
                backgroundColor: theme.colors.purple_light,
                height: 21,
                minWidth: 60,
                paddingHorizontal: 8,
                borderRadius: 21,
                justifyContent: 'center',
                alignItems: 'center',
                alignSelf: 'center'
            }}>
                <Text
                    type="tag"
                    color={theme.colors.purple_dark}
                >{coffee.category.toUpperCase()}</Text>
            </View>

            <Divider size={14} />

            <Text
                type="title_md"
                color={theme.colors.gray_200}
                style={{ textAlign: 'center', flexShrink: 1 }}
            >
                {coffee.name}
            </Text>
            <Divider size={4} />
            <Text
                type="text_xs"
                color={theme.colors.gray_200}
                style={{ textAlign: 'center' }}
            >

                {coffee.description}
            </Text>
            <Divider size={14} />


            <Text
                color={theme.colors.yellow_dark}
                type="text_sm"
                style={{ textAlign: 'center' }}
            >
                R$
                <Text color={theme.colors.yellow_dark} type="title_lg">
                    {coffee.price}
                </Text>
            </Text>

        </Animated.View>
    )
}


const styles = StyleSheet.create({
    container: {
        height: 262,
        width: ITEM_WIDTH,
        backgroundColor: theme.colors.gray_800,
        borderTopLeftRadius: 6,
        borderTopRightRadius: 36,
        borderBottomLeftRadius: 36,
        borderBottomRightRadius: 6,
        padding: 12,

        borderWidth: 1,
        borderColor: theme.colors.gray_700
    },
    coffeeImage: {
        alignSelf: 'center',
        marginTop: -44
    }
})