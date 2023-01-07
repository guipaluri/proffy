import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { propsNavigationStack } from './types';

import Landing from '../pages/Landing'
import GiveClasses from '../pages/GiveClasses';

const { Navigator, Screen } = createNativeStackNavigator<propsNavigationStack>();

function AppStack() {
    return (
        <NavigationContainer>
            <Navigator screenOptions={{ headerShown: false }}>
                <Screen name="Landing" component={Landing} />
                <Screen name="GiveClasses" component={GiveClasses} />
            </Navigator>
        </NavigationContainer>
    );
}

export default AppStack;