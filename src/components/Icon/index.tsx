import { SvgProps } from 'react-native-svg';


import Americano from '../../assets/images/americano.svg';
import Arabe from '../../assets/images/arabe.svg';
import CafeComLeite from '../../assets/images/cafe-com-leite.svg';
import CafeGelado from '../../assets/images/cafe-gelado.svg';
import Capuccino from '../../assets/images/capuccino.svg';
import ChocolateQuente from '../../assets/images/chocolate-quente.svg';
import Cubano from '../../assets/images/cubano.svg';
import ExpressoCremoso from '../../assets/images/expresso-cremoso.svg';
import Expresso from '../../assets/images/expresso.svg';
import Havaiano from '../../assets/images/havaiano.svg';
import Irlandes from '../../assets/images/irlandes.svg';
import Latte from '../../assets/images/latte.svg';
import Macchiato from '../../assets/images/macchiato.svg';
import Mochaccino from '../../assets/images/mochaccino.svg';

export const caffees_images = {
    'arabe': Arabe,
    'americano': Americano,
    'cafe-com-leite': CafeComLeite,
    'cafe-gelado': CafeGelado,
    'capuccino': Capuccino,
    'chocolate-quente': ChocolateQuente,
    'cubano': Cubano,
    'expresso-cremoso': ExpressoCremoso,
    'expresso': Expresso,
    'havaiano': Havaiano,
    'irlandes': Irlandes,
    'latte': Latte,
    'macchiato': Macchiato,
    'mochaccino': Mochaccino,
}

export type CaffesImagesType =  keyof typeof caffees_images

interface IconProps extends SvgProps {
    name: CaffesImagesType
}

export function Icon(props: IconProps) {
    const { name = 'arabe', ...rest } = props
    const Component = caffees_images[name]
    return (
        <>
            <Component {...rest} />
        </>
    )
}