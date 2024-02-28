import { theme } from "../../theme/theme";
import { Text, TextTypes } from "../Text";

interface PriceProps {
    color?: string;
    value: string;
    textSize?: TextTypes
}

export function Price(props: PriceProps) {
    const {
        color = theme.colors.yellow_dark,
        textSize = 'title_lg'
    } = props
    return (
        <Text
            color={color}
            type="text_sm"
            style={{ textAlign: 'center' }}
        >
            R$
            <Text color={color} type={textSize}>
                {props.value}
            </Text>
        </Text>
    )
}