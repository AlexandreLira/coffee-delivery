import { theme } from "../../theme/theme"
import { Text } from "../../components/Text"
import { Divider } from "../../components/Divider"
import { FlatList, TouchableOpacity, View } from "react-native"
import { Tag } from "../../components/Tag"

interface CoffeeCatalogListProps {
    heroSize: number;
    categories: any[];
    setTab: React.Dispatch<React.SetStateAction<string>>;
    flatListRef: React.MutableRefObject<FlatList<any>>;
    tab: string;
}

export function HeaderCatalogList(props: CoffeeCatalogListProps) {
    const { heroSize, categories, setTab, flatListRef, tab } = props
    return (
        <View style={{
            height: 90,
            paddingHorizontal: 32,
            backgroundColor: theme.colors.white,
            justifyContent: 'center',
            borderBottomWidth: 1,
            borderBottomColor: theme.colors.gray_700
        }}>
            <Text
                color={theme.colors.gray_300}
                type="title_sm"
            >
                Nossos cafés
            </Text>
            <Divider size={12} />
            <View style={{ flexDirection: 'row', gap: 8 }}>
                {categories.map((category, index) =>
                    <TouchableOpacity key={category} onPress={() => {
                        setTab(category)


                        const b = 80
                        const sizes = {
                            0: 1019 - b,
                            1: 1631 - b * 2,
                            2: 2447 - b * 4.2,
                        }


                        if (index == 0) {
                            flatListRef.current.scrollToOffset({ offset: heroSize })
                            return
                        }



                        flatListRef.current.scrollToOffset({ offset: sizes[index] })
                    }}>
                        <Tag title={category} selected={category == tab} />
                    </TouchableOpacity>
                )}

            </View>
        </View>
    )
}