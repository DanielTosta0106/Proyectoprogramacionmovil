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

function MainTabs() {
  return (
    <Tabs.Navigator
      screenOptions={({ route }) => ({
        tabBarActiveTintColor: '#1C6E8C',
        tabBarInactiveTintColor: '#82909A',
        headerShown: false,
        tabBarIcon: ({ color, size }) => {
          const icons = { Inicio: 'home-outline', Grupos: 'people-outline', Perfil: 'person-outline' } as const;
          return <Ionicons name={icons[route.name]} size={size} color={color} />;
        },
      })}
    >
      <Tabs.Screen name="Inicio" component={HomeScreen} />
      <Tabs.Screen name="Grupos" component={GroupsScreen} />
      <Tabs.Screen name="Perfil" component={ProfileScreen} />
    </Tabs.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="MainTabs" component={MainTabs} options={{ headerShown: false }} />
        <Stack.Screen name="GroupDetails" component={GroupDetailsScreen} options={{ title: 'Grupo de estudio' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
