import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import HomeScreen from '../screens/HomeScreen';
import NotificationScreen from '../screens/NotificationScreen';
import ProfileScreen from '../screens/ProfileScreen';
import { Ionicons } from '@expo/vector-icons';
import { COLORS } from '../theme/theme';
import { Home, Home2, Home3, Notification, Profile, SearchNormal1 } from 'iconsax-react-native'
import SearchScreen from '../screens/SearchScreen';

const Tab = createBottomTabNavigator();

const TabNavigation = () => {
  return (
    <Tab.Navigator screenOptions={({ route }) => ({
      headerShown: false,
      tabBarShowLabel: false,

      tabBarIcon: ({ focused, color, size }) => {
        if (route.name === 'Home') {
          return <Home size={size} color={focused ? '#EA7B0C' : '#52555A'} />

        } else if (route.name === 'Search') {
          return <SearchNormal1 size={size} color={focused ? '#EA7B0C' : '#52555A'} />
        } else if (route.name === 'Notification') {

          return <Notification size={size} color={focused ? '#EA7B0C' : '#52555A'} />

        } else {
          return <Profile size={size} color={focused ? '#EA7B0C' : '#52555A'} />
        }
      }
    })}

    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Search" component={SearchScreen} />
      <Tab.Screen name="Notification" component={NotificationScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
      
    </Tab.Navigator>
  )
}

export default TabNavigation

const styles = StyleSheet.create({})