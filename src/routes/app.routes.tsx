import React from 'react';
import { NavigationContainer, NavigationProp } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Splash } from '../screens/Splash';
import { Home } from '../screens/Home';
import { Details } from '../screens/Details';
import { Cart } from '../screens/Cart';
import { OrderCompleted } from '../screens/OrderCompleted';

export type RootStackParamList = {
    Splash: undefined;
    Home: undefined;
    Details: undefined;
    Cart: undefined;
    OrderCompleted: undefined;

};

export type StackNavigation = NavigationProp<RootStackParamList>;

const Stack = createNativeStackNavigator<RootStackParamList>()

export function Routes() {

    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                <Stack.Screen
                    name='Splash'
                    component={Splash}
                    options={{
                        gestureEnabled: false
                    }}
                />
                <Stack.Screen
                    name='Home'
                    component={Home}
                    options={{
                        gestureEnabled: false,
                    }}
                />
                <Stack.Screen
                    name='Details'
                    options={{
                        animation: 'fade_from_bottom'
                    }}
                    component={Details}
                />
                <Stack.Screen
                    name='Cart'
                    component={Cart}
                />
                <Stack.Screen
                    options={{
                        animation: 'fade'
                    }}
                    name='OrderCompleted'
                    component={OrderCompleted}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}