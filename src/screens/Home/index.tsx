import {
    Text,
    View
} from "react-native";

import Icon from '../../assets/images/coffee_icon.svg';
import { theme } from "../../theme/theme";

export function Home() {
    return (
        <View style={{
            flex: 1,
          
          
            backgroundColor: theme.colors.white
        }}>
            <View style={{
                height: '50%',
                backgroundColor: theme.colors.gray_100
            }}>

                
            </View>
            <Text>Home</Text>

        </View>
    )
}