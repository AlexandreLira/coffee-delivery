import { ReactNode, createContext, useEffect, useState } from "react";
import { ICoffee } from "../components/CoffeeCard";


export interface AddCoffeeProps extends ICoffee {
    size: string;
    amount: number
}

export type ICart = AddCoffeeProps

export interface CartContextDataProps {
    cart: AddCoffeeProps[]
    addCoffee: (value: AddCoffeeProps) => void
    deleteCoffee: (id: string) => void,
    quantity: {
        decrease: (id: string) => void;
        increase: (id: string) => void;
    };
    totalPrice: number
}

interface CartContextProviderProps {
    children: ReactNode
}

export const CartContext = createContext({} as CartContextDataProps)

export function CartContextProvider({ children }: CartContextProviderProps) {
    const [cart, setCart] = useState<ICart[]>([])
    const [totalPrice, setTotalPrice] = useState(0)

    function addCoffee(value: AddCoffeeProps) {
        const id = value.id + value.size
        const index = cart.findIndex(item => item.id == id)
        const foundCoffee = index !== -1

        if (foundCoffee) {
            const coffees = cart
            const coffee = coffees[index]
            coffees[index] = {
                ...coffee,
                amount: coffee.amount + value.amount
            }

            calculatePrice(coffees)
            return
        }

        const coffee = {
            ...value,
            id: id
        }



        const items = [...cart, coffee]

        calculatePrice(items)
        setCart(items)
    }

    function increase(id: string) {
        const coffee = cart.find(item => item.id == id)
        const index = cart.findIndex(item => item.id == id)
        coffee.amount++




        const coffees = cart
        coffees[index] = coffee

        calculatePrice(coffees)

        setCart(coffees)


    }

    function decrease(id: string) {
        const coffee = cart.find(item => item.id == id)
        const index = cart.findIndex(item => item.id == id)
        coffee.amount--

        if (coffee.amount == 0) return



        const coffees = cart
        coffees[index] = coffee

        calculatePrice(coffees)

        setCart(coffees)
    }


    const quantity = {
        increase,
        decrease
    }

    function deleteCoffee(id: string) {
        const coffees = cart.filter(coffee => coffee.id !== id)
        calculatePrice(coffees)
        setCart(coffees)
    }

    function calculatePrice(coffes: AddCoffeeProps[]) {
        const price = coffes.reduce((acc, value) => {
            const a = acc + value.amount * value.price

            return a
        }, 0)

        setTotalPrice(price)
    }



    return (
        <CartContext.Provider value={{ cart, addCoffee, deleteCoffee, quantity, totalPrice }}>
            {children}
        </CartContext.Provider>
    )
}

