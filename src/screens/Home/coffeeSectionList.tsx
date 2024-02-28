import { SectionList, View } from "react-native"
import { CoffeeCardCatalog } from "../../components/CoffeCardCatalog"
import { theme } from "../../theme/theme"
import { Divider } from "../../components/Divider"
import { Text } from "../../components/Text"
import { useNavigation } from "@react-navigation/native"

export interface CoffeeSectionListProps {
    sections: {
        title: string;
        data: any[];
    }[]
}

export function CoffeeSectionList(props: CoffeeSectionListProps) {
    const { sections } = props
    const navigation = useNavigation()
    return (
        <View style={{
            paddingHorizontal: 32,
            backgroundColor: theme.colors.white,
            justifyContent: 'center',

        }}>
            <Divider size={16} />

            <SectionList
                sections={sections}
                style={{ gap: 32 }}

                renderItem={({ item, index }) =>
                    <CoffeeCardCatalog
                        coffee={item}
                        // @ts-ignore
                        onPress={() => navigation.navigate('Details', { coffee: item })}
                    />
                }

                onViewableItemsChanged={(event) => {
                    // const category = event.viewableItems[0]?.
                    // if (!category) return
                    // if (category && item.category !== tab) {
                    //     setTab(category)
                    // }
                }}
                renderSectionHeader={({ section: { title } }) => (
                    <Text
                        type="title_xs"
                        color={theme.colors.gray_400}

                    >{title}</Text>
                )}
            />
        </View>
    )
}