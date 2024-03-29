import { useEffect, useState } from "react";
import { Image, StyleSheet, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation, useRoute } from "@react-navigation/native";
import { ArrowLeft, Minus, Plus, ShoppingCart } from "phosphor-react-native";

import { EDGES } from "../Home";
import { Price } from "../../components/Price";
import { Divider } from "../../components/Divider";
import { Tag } from "../../components/Tag";
import { Button } from "../../components/Button";
import { Select } from "../../components/Select";
import { Smoke } from "../../components/Smoke";
import { Text } from "../../components/Text";

import { useCart } from "../../hooks/useCart";
import { AddCoffeeProps } from "../../contexts/CartContext";
import { theme } from "../../theme/theme";
import { coffee_list } from "../../utils/constant";
import { StatusBar } from "expo-status-bar";
import Animated, { interpolateColor, useAnimatedStyle, useSharedValue, withSequence, withTiming } from "react-native-reanimated";
import { textStyles } from "../../components/Text/styles";
import { Audio } from 'expo-av';
import * as Haptics from 'expo-haptics';


const COFFEE_SIZES = [
    '114ml',
    '140ml',
    '227ml',
]

export function Details() {
    const [coffee, setCoffee] = useState(coffee_list[0])
    const [selectedSize, setSelectedSize] = useState('')
    const [amount, setAmount] = useState(1)

    const navigation = useNavigation()
    const { params } = useRoute()
    const { addCoffee, cart } = useCart()

    const errorAnimation = useSharedValue(0)

    async function playSound() {
        const file = require('../../assets/sounds/cash_register.mp3');

        const { sound } = await Audio.Sound.createAsync(file, { shouldPlay: true });

        await sound.setPositionAsync(0);
        await sound.playAsync()
    }

    function increase() {
        setAmount(amount + 1)
    }
    function decrease() {
        if (amount == 1) return;
        setAmount(amount - 1)
    }

    function startErrorAnimation() {
        errorAnimation.value = withSequence(
            withTiming(100),
            withTiming(0, { duration: 1000 })
        )
    }

    async function handleAddCoffee() {
        if (selectedSize.length == 0) {
            await Haptics.notificationAsync(Haptics.NotificationFeedbackType.Error)
            startErrorAnimation()
            return
        }

        const product: AddCoffeeProps = {
            ...coffee,
            amount: amount,
            size: selectedSize,
        }
        addCoffee(product)
        playSound()
        navigation.goBack()
    }

    const styleErrorAnimation = useAnimatedStyle(() => ({
        color: interpolateColor(errorAnimation.value, [0, 100], [theme.colors.gray_400, theme.colors.red_dark]),
        ...textStyles.text_sm
    }))

    useEffect(() => {
        setCoffee(params?.coffee)
    }, [params])

    return (
        <SafeAreaView style={styles.container} edges={EDGES}>
            <StatusBar style="light" />
            <View style={styles.content}>

                <View style={styles.header}>
                    <TouchableOpacity onPress={navigation.goBack}>
                        <ArrowLeft size={24} color={theme.colors.white} />
                    </TouchableOpacity>
                    <ShoppingCart color={theme.colors.white} weight="fill" />
                </View>
                <Divider size={12} />

                <View style={{ justifyContent: 'flex-start' }}>
                    <Tag
                        title={coffee.category}
                        bg={theme.colors.gray_200}
                        selected
                    />
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-end' }}>

                        <Text type="title_lg">{coffee.name}</Text>
                        <Price value={(coffee.price * amount).toFixed(2)} textSize="title_xl" color={theme.colors.yellow} />
                    </View>
                    <Divider size={20} />
                    <Text
                        type="text_md"
                        color={theme.colors.gray_500}
                    >
                        {coffee.description}
                    </Text>
                </View>

                <Smoke />


            </View>
            <View style={{ backgroundColor: theme.colors.white, flex: 1, paddingHorizontal: 32 }}>

                <Image
                    source={require('../../assets/images/coffee.png')}
                    height={260}
                    style={{ alignSelf: 'center', marginTop: -230 }}
                />
                <Animated.Text style={styleErrorAnimation}>
                    Selecione o tamanho:
                </Animated.Text>
                <Divider size={8} />
                <View style={styles.select}>

                    {COFFEE_SIZES.map(size =>
                        <Select
                            errorAnimation={errorAnimation}
                            style={{ width: '32%' }}
                            onPress={() => setSelectedSize(size)}
                            key={size}
                            selected={size == selectedSize}
                            text={size}
                        />
                    )}
                </View>
                <Divider size={20} />

                <View style={{
                    height: 62,
                    backgroundColor: theme.colors.gray_700,
                    borderRadius: 6,
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    paddingHorizontal: 8,
                    flexDirection: 'row'
                }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <TouchableOpacity
                            style={styles.button}
                            onPress={decrease}
                            disabled={amount == 1}
                        >
                            <Minus size={20} color={theme.colors.purple} weight="bold" />
                        </TouchableOpacity>
                        <Divider size={10} vertical />
                        <Text
                            type="text_md"
                            color={theme.colors.gray_100}
                        >{amount}</Text>
                        <Divider size={10} vertical />

                        <TouchableOpacity
                            style={styles.button}
                            onPress={increase}
                        >
                            <Plus size={20} color={theme.colors.purple} weight="bold" />
                        </TouchableOpacity>

                    </View>
                    <Divider size={16} vertical />
                    <View style={{ flex: 1, }}>
                        <Button
                            disabled={selectedSize.length == 0}
                            title="ADICIONAR"
                            onPress={handleAddCoffee}
                            bg={theme.colors.purple_dark}
                        />
                    </View>
                </View>
            </View>

        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: theme.colors.gray_100, flex: 1
    },
    content: {
        backgroundColor: theme.colors.gray_100,
        height: '70%',
        paddingHorizontal: 32
    },
    header: {
        height: 76,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    select: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    button: {
        width: 36, height: 36, justifyContent: 'center', alignItems: 'center'
    }
})