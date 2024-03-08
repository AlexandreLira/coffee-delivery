import { useEffect, useRef, useState } from "react";
import { FlatList, View } from "react-native";
import { Edges } from "react-native-safe-area-context";
import Animated, {
    useAnimatedScrollHandler,
    useSharedValue,
    withTiming
} from "react-native-reanimated";
import { StatusBar } from "expo-status-bar";

import { coffee_list } from "../../utils/constant";
import { separateCategories } from "../../utils/functions";
import { HeaderCatalogList } from "./headerCatologList";
import { CoffeeSectionList } from "./coffeeSectionList";
import { Header } from "./header";
import { Hero } from "./hero";
import { styles } from "./styles";

export const EDGES: Edges = { bottom: 'off', top: 'additive' }

const sections = separateCategories(coffee_list)
const categories = sections.map(item => item.title)

export function Home() {
    const [tab, setTab] = useState('Tradicionais')

    const introAnimation = useSharedValue(0)
    const contentOffset = useSharedValue(0)
    const scrollY = useSharedValue(0)
    const [heroSize, setHeroSize] = useState(0)
    const [sectionSize, setSectionSize] = useState(0)

    const flatListRef = useRef<FlatList>()


    const scrollHandler = useAnimatedScrollHandler({
        onScroll: (event) => {
            scrollY.value = event.contentOffset.y;
        },
    });


    useEffect(() => {
        introAnimation.value = withTiming(100, { duration: 500 })

    }, [])


    return (
        <View
            style={styles.container}
        >
            <StatusBar style={'dark'} />
            <Header scrollY={scrollY} />


            <Animated.FlatList
                data={categories}
                ref={flatListRef}
                keyExtractor={item => item.toString()}
                onScroll={scrollHandler}
                stickyHeaderIndices={[1]}
                renderItem={({ index }) => {
                    switch (index) {
                        case 0:
                            return (
                                <Hero
                                    contentOffset={contentOffset}
                                    introAnimation={introAnimation}
                                    scrollY={scrollY}
                                    onLayout={event => setHeroSize(event.nativeEvent.layout.height)}
                                />
                            )

                        case 1:
                            return (
                                <HeaderCatalogList
                                    categories={categories}
                                    flatListRef={flatListRef}
                                    setTab={setTab}
                                    tab={tab}
                                    heroSize={heroSize}

                                />
                            )
                        case 2:
                            return (
                                <CoffeeSectionList
                                    sections={sections}

                                />
                            )
                    }
                }}
            />


            <View style={styles.footer} />

        </View >
    )
}

