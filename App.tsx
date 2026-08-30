import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Ionicons } from '@expo/vector-icons';
import { HomeScreen } from './src/screens/HomeScreen';
import { GroupsScreen } from './src/screens/GroupsScreen';
import { GroupDetailsScreen } from './src/screens/GroupDetailsScreen';
import { ProfileScreen } from './src/screens/ProfileScreen';

const Stack = createNativeStackNavigator();
const Tabs = createBottomTabNavigator();

function MainTabs({ userEmail, setUserEmail }: { userEmail: string; setUserEmail: (email: string) => void }) {
  return (
    <Tabs.Navigator
      screenOptions={({ route }) => ({
        tabBarActiveTintColor: '#1C6E8C',
        tabBarInactiveTintColor: '#82909A',
        headerShown: false,
        tabBarIcon: ({ color, size }) => {
          const icons = { Inicio: 'home-outline', Grupos: 'people-outline', Perfil: 'person-outline' } as const;
          const iconName = icons[route.name as keyof typeof icons];
          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
    >
      <Tabs.Screen name="Inicio">
        {() => <HomeScreen onValidEmail={setUserEmail} />}
      </Tabs.Screen>
      <Tabs.Screen name="Grupos" component={GroupsScreen} />
      <Tabs.Screen name="Perfil">
        {() => <ProfileScreen userEmail={userEmail} />}
      </Tabs.Screen>
    </Tabs.Navigator>
  );
}

export default function App() {
  const [userEmail, setUserEmail] = useState('');

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="MainTabs" options={{ headerShown: false }}>
          {() => <MainTabs userEmail={userEmail} setUserEmail={setUserEmail} />}
        </Stack.Screen>
        <Stack.Screen name="GroupDetails" component={GroupDetailsScreen} options={{ title: 'Grupo de estudio' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
