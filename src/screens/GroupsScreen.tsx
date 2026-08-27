import { StyleSheet, Text } from 'react-native';
import { GroupCard } from '../components/GroupCard';
import { ScreenContainer } from '../components/ScreenContainer';

export function GroupsScreen({ navigation }: any) {
  return (
    <ScreenContainer>
      <Text style={styles.title}>Mis grupos</Text>
      <Text style={styles.subtitle}>Continúa aprendiendo con tu comunidad.</Text>
      <GroupCard name="Desarrollo móvil" subject="React Native y TypeScript" members={8} onOpen={() => navigation.navigate('GroupDetails', { groupName: 'Desarrollo móvil' })} />
      <GroupCard name="Bases de datos" subject="SQL y modelado" members={5} onOpen={() => navigation.navigate('GroupDetails', { groupName: 'Bases de datos' })} />
    </ScreenContainer>
  );
}

const styles = StyleSheet.create({
  title: { color: '#173042', fontSize: 28, fontWeight: '800' },
  subtitle: { color: '#667781', fontSize: 16, marginBottom: 24, marginTop: 8 },
});
