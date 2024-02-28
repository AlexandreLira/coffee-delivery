import { Dimensions, Pressable, PressableProps, StyleSheet, View, ViewProps } from "react-native";
import { theme } from "../../theme/theme";
import { Text } from "../Text";
import { Divider } from "../Divider";
import Latte from '../../assets/images/latte.svg';
import { CaffesImagesType, Icon } from "../Icon";



export type ICaffe = {
    name: string;
    category: string;
    description: string;
    price: string;
    icon: CaffesImagesType;
}

interface CoffeeCardProps extends PressableProps {
    coffee: ICaffe
}

export function CoffeeCardCatalog({ coffee, ...rest }: CoffeeCardProps) {


    return (
        <Pressable style={styles.container} {...rest}>

            <Icon
                height={120}
                style={styles.coffeeImage}
                name={coffee.icon}
            />
            <Divider size={8} vertical />

            <View style={{ flex: 1 }}>


                <Divider size={14} />

                <Text
                    type="title_md"
                    color={theme.colors.gray_200}
                    style={{ flexShrink: 1 }}
                >
                    {coffee.name}
                </Text>
                <Divider size={4} />
                <Text
                    type="text_xs"
                    color={theme.colors.gray_200}
                >

                    {coffee.description}
                </Text>
                <Divider size={14} />


                <Text
                    color={theme.colors.yellow_dark}
                    type="text_sm"
                >
                    R$
                    <Text color={theme.colors.yellow_dark} type="title_lg">
                        {coffee.price}
                    </Text>
                </Text>
            </View>
        </Pressable>
    )
}


const styles = StyleSheet.create({
    container: {

        flexDirection: 'row',
        backgroundColor: theme.colors.gray_800,
        borderTopLeftRadius: 6,
        borderTopRightRadius: 36,
        borderBottomLeftRadius: 36,
        borderBottomRightRadius: 6,
        padding: 12,

        borderWidth: 1,
        borderColor: theme.colors.gray_700,

    },
    coffeeImage: {
        marginTop: -44
    }
})