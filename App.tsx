import React from 'react';
import { Provider } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Ionicons } from '@expo/vector-icons';
import { HomeScreen } from './src/screens/HomeScreen';
import { LoginScreen } from './src/screens/LoginScreen';
import { RegisterScreen } from './src/screens/RegisterScreen';
import { GroupsScreen } from './src/screens/GroupsScreen';
import { GroupDetailsScreen } from './src/screens/GroupDetailsScreen';
import { InventoryScreen } from './src/screens/InventoryScreen';
import { ProfileScreen } from './src/screens/ProfileScreen';
import { store } from './src/store/store';

const Stack = createNativeStackNavigator();
const Tabs = createBottomTabNavigator();

function MainTabs() {
  return (
    <Tabs.Navigator
      screenOptions={({ route }) => ({
        tabBarActiveTintColor: '#1C6E8C',
        tabBarInactiveTintColor: '#82909A',
        headerShown: false,
        tabBarIcon: ({ color, size }) => {
          const icons = { Inicio: 'home-outline', Grupos: 'people-outline', Materiales: 'document-text-outline', Perfil: 'person-outline' } as const;
          const iconName = icons[route.name as keyof typeof icons];
          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
    >
      <Tabs.Screen name="Inicio" component={HomeScreen} />
      <Tabs.Screen name="Grupos" component={GroupsScreen} />
      <Tabs.Screen name="Materiales" component={InventoryScreen} />
      <Tabs.Screen name="Perfil">
        {() => <ProfileScreen />}
      </Tabs.Screen>
    </Tabs.Navigator>
  );
}

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
          <Stack.Screen name="Register" component={RegisterScreen} options={{ title: 'Crear cuenta' }} />
          <Stack.Screen name="MainTabs" options={{ headerShown: false }}>
            {() => <MainTabs />}
          </Stack.Screen>
          <Stack.Screen name="GroupDetails" component={GroupDetailsScreen} options={{ title: 'Grupo de estudio' }} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
