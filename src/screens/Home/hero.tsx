import { Image, TouchableOpacity, View, ViewProps } from "react-native";
import { styles } from './styles'
import Animated, { Extrapolation, SharedValue, interpolate, interpolateColor, useAnimatedStyle } from "react-native-reanimated";
import { theme } from "../../theme/theme";
import { Divider } from "../../components/Divider";
import { Text } from "../../components/Text";
import { SearchBar } from "../../components/SearchBar";
import { coffee_list } from "../../utils/constant";
import { CoffeeCard, ITEM_WIDTH } from "../../components/CoffeeCard";
import coffeeBean from '../../assets/images/coffeeBean.png'
import { useNavigation } from "@react-navigation/native";

export interface HeroProps extends ViewProps {
    introAnimation: SharedValue<number>;
    scrollY: SharedValue<number>;
    contentOffset: SharedValue<number>;
}

export function Hero(props: HeroProps) {

    const { introAnimation, scrollY, contentOffset, ...rest } = props

    const { colors } = theme

    const navigation = useNavigation()

    const introStyle = useAnimatedStyle(() => ({
        height: interpolate(introAnimation.value, [0, 100], [0, 300]),
        backgroundColor: interpolateColor(scrollY.value, [0, 300], [colors.gray_100, colors.white]),
    }))

    const searchStyle = useAnimatedStyle(() => ({
        transform: [
            { translateY: interpolate(introAnimation.value, [0, 100], [100, 0]) }
        ]
    }))
    const flatListStyle = useAnimatedStyle(() => ({
        transform: [
            { translateY: interpolate(scrollY.value, [200, 600], [0, ITEM_WIDTH * 2], Extrapolation.CLAMP) }
        ],
        opacity: interpolate(scrollY.value, [200, 500], [1, 0], Extrapolation.CLAMP)

    }))

    return (
        <View style={styles.content} {...rest}>
            <Animated.View style={[styles.intro, introStyle]}>

                <Animated.View style={searchStyle}>
                    <Divider size={15} />
                    <Text type="title_md">Encontre o café perfeito para qualquer hora do dia</Text>
                    <Divider size={15} />

                    <SearchBar placeholder="Pesquisar" />


                    <Image
                        source={coffeeBean}
                        style={styles.image}
                        resizeMode="contain"
                    />
                </Animated.View>

            </Animated.View>

            <Animated.FlatList
                data={coffee_list}
                keyExtractor={item => item.name.toString()}
                horizontal
                scrollEventThrottle={16}
                onScroll={event => contentOffset.value = event.nativeEvent.contentOffset.x}
                style={[styles.flatList, flatListStyle]}
                pagingEnabled
                snapToInterval={ITEM_WIDTH}
                decelerationRate="fast"

                showsHorizontalScrollIndicator={false}
                contentContainerStyle={styles.flatListContent}
                renderItem={({ item, index }) =>
                    <TouchableOpacity
                        // @ts-ignore
                        onPress={() => navigation.navigate('Details', { coffee: item })}
                    >

                        <CoffeeCard

                            index={index}
                            coffee={item}
                            contentOffset={contentOffset}

                        />
                    </TouchableOpacity>
                }
            />

        </View>
    )
}