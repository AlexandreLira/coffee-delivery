import { ReactNode, createContext, useState } from "react";
import { ICoffee } from "../components/CoffeeCard";


export interface AddCoffeeProps extends ICoffee  {
    id?: string;
    size: string;
    amount: number
}

export type ICart = AddCoffeeProps

export interface CartContextDataProps {
    cart: AddCoffeeProps[]
    addCoffee: (value: AddCoffeeProps) => void
    deleteCoffee: (id: string) => void
}

interface CartContextProviderProps {
    children: ReactNode
}

export const CartContext = createContext({} as CartContextDataProps)

export function CartContextProvider({ children }: CartContextProviderProps) {
    const [cart, setCart] = useState<ICart[]>([])

    function addCoffee(value: AddCoffeeProps){
        const items = [...cart, value]
        setCart(items)
    }

    function deleteCoffee(id: string){
        const coffees = cart.filter(coffee => coffee.id !== id)
        setCart(coffees)
    }

    return (
        <CartContext.Provider value={{cart, addCoffee, deleteCoffee}}>
            {children}
        </CartContext.Provider>
    )
}

