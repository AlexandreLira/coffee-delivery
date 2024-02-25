import {
    Dimensions,
    FlatList,
    StyleSheet,

    View
} from "react-native";

import { theme } from "../../theme/theme";
import { SafeAreaView, Edges } from "react-native-safe-area-context";
import { MapPin, ShoppingCart } from "phosphor-react-native";
import { SearchBar } from "../../components/SearchBar";
import { Divider } from "../../components/Divider";
import { Text } from "../../components/Text";
import { CoffeeCard, ITEM_WIDTH } from "../../components/CoffeeCard";
import { useSharedValue } from "react-native-reanimated";
import { coffee_list } from "../../utils/constant";

const EDGES: Edges = { bottom: 'off', top: 'additive' }

export function Home() {

    const contentOffset = useSharedValue(0)



    return (
        <SafeAreaView
            edges={EDGES}
            style={styles.container}
        >

            <View style={styles.content}>
                <View style={styles.hero}>

                    <View style={styles.header}>
                        <View style={styles.location}>

                            <MapPin color={theme.colors.purple} weight="fill" />
                            <Divider vertical size={4} />
                            <Text type="text_sm">Porto Alegre, RS</Text>
                        </View>

                        <ShoppingCart color={theme.colors.yellow_dark} weight="fill" />

                    </View>


                    <Divider size={15} />
                    <Text type="title_md">Encontre o café perfeito para qualquer hora do dia</Text>
                    <Divider size={15} />

                    <SearchBar placeholder="Pesquisar" />

                </View>

                <FlatList
                    data={coffee_list}
                    keyExtractor={item => item.name.toString()}
                    horizontal
                    scrollEventThrottle={16}
                    onScroll={event => contentOffset.value = event.nativeEvent.contentOffset.x}
                    style={styles.flatList}
                    pagingEnabled
                    snapToInterval={ITEM_WIDTH}
                    // bounces={false}
                    decelerationRate="fast"

                    showsHorizontalScrollIndicator={false}
                    contentContainerStyle={styles.flatListContent}
                    renderItem={({ item, index }) =>
                        <CoffeeCard
                            index={index}
                            coffee={item}
                            contentOffset={contentOffset}
                        />
                    }
                />

            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1, backgroundColor: theme.colors.gray_100
    },
    content: {
        flex: 1,
        backgroundColor: theme.colors.white,

    },
    hero: {
        height: '45%',
        backgroundColor: theme.colors.gray_100,
        paddingHorizontal: 32
    },
    header: {
        height: 78,
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',

    },
    location: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    flatList: {
        overflow: 'visible',
        marginTop: -100
    },
    flatListContent: {
        justifyContent: 'center',
        paddingHorizontal: ITEM_WIDTH / 2,

    }
})