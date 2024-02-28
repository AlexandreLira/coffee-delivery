import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Splash } from '../screens/Splash';
import { Home } from '../screens/Home';
import { Details } from '../screens/Details';

const Stack = createNativeStackNavigator()

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
                        gestureEnabled: false
                    }}
                />
                <Stack.Screen
                    name='Details'
                    component={Details}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}