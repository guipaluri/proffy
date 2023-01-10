import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

import TeacherList from '../pages/TeacherList';
import Favorites from '../pages/Favorites';

const { Navigator, Screen } = createBottomTabNavigator();

function StudyTabs() {
    return (
        <Navigator
            screenOptions={{
                headerShown: false,
                tabBarStyle: {
                    elevation: 0,
                    shadowOpacity: 0,
                    height: 64
                },
                tabBarItemStyle: {
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'center'
                },
                tabBarIconStyle: {
                    flex: 0,
                    width: 24,
                    height: 24,
                },
                tabBarLabelStyle: {
                    fontFamily: 'Archivo_700Bold',
                    fontSize: 13,
                    marginLeft: 16,
                },
                tabBarInactiveBackgroundColor: '#FAFAFC',
                tabBarActiveBackgroundColor: '#EBEBF5',
                tabBarInactiveTintColor: '#C1BCCC',
                tabBarActiveTintColor: '#32264D',
            }}
        >
            <Screen
                name={"TeacherList"}
                component={TeacherList}
                options={{
                    tabBarLabel: 'Proffys',
                    tabBarIcon: ({ color, size, focused }) => {
                        return (
                            <Ionicons name="ios-easel" size={size} color={focused ? '#8257E5' : color} />
                        );
                    }
                }}
            />
            <Screen
                name={"Favorites"}
                component={Favorites}
                options={{
                    tabBarLabel: 'Favoritos',
                    tabBarIcon: ({ color, size, focused }) => {
                        return (
                            <Ionicons name="ios-heart" size={size} color={focused ? '#8257E5' : color} />
                        );
                    }
                }}
            />
        </Navigator>
    );
}

export default StudyTabs;