import React from 'react';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Octicons, SimpleLineIcons, AntDesign} from '@expo/vector-icons'
import { Link, Tabs } from 'expo-router';
import { Pressable } from 'react-native';

import Colors from '@/constants/Colors';
import { useColorScheme } from '@/components/useColorScheme';
import { useClientOnlyValue } from '@/components/useClientOnlyValue';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

// You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>['name'];
  color: string;
}) {
  return <FontAwesome size={28} style={{ marginBottom: -3 }} {...props} />;
}







export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        // Disable the static render of the header on web
        // to prevent a hydration error in React Navigation v6.
        headerShown: useClientOnlyValue(false, true),
      }}>
      <Tabs.Screen
        name="(uppertabs)"
        options={{
          title: 'Home',
          tabBarIcon: ({ color }) => <Octicons name="home" color={color} size={20}/>,
    
        }}
      />
      <Tabs.Screen
        name="WishList"
        options={{
          title: 'Wishlist',
          tabBarIcon: ({ color }) => <Octicons name="heart" color={color} size={20} />,
        }}
      />
      <Tabs.Screen
        name="location"
        options={{
          title: 'Location',
          tabBarIcon: ({ color }) => <SimpleLineIcons name='location-pin' color={color} size={20}/>,
        }}
      />
          <Tabs.Screen
        name="detailTest"
        options={{
          title: 'nnn',
          tabBarIcon: ({ color }) => <AntDesign name="user" color={color} />,
        }}
      />
    </Tabs>
  );
}
