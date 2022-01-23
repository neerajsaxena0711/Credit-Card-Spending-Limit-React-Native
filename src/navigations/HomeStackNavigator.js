import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import DebitCard from '../Screens/DebitCard';
import SpendingLimit from '../Screens/SpendingLimit';


const HomeNavigator = () => {

    const HomeStack = createNativeStackNavigator();

    return (
        <HomeStack.Navigator initialRouteName="Tasks" screenOptions={{ headerShown: false }} >
            <HomeStack.Screen name="DebitCard" component={DebitCard}></HomeStack.Screen>
            <HomeStack.Screen name="SpendingLimit" component={SpendingLimit}></HomeStack.Screen>
        </HomeStack.Navigator>
    )
}

export default HomeNavigator;