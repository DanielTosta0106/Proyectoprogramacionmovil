import { StyleSheet, Text } from 'react-native';
import { ScreenContainer } from '../components/ScreenContainer';

export function ProfileScreen() {
  return (
    <ScreenContainer>
      <Text style={styles.title}>Mi perfil</Text>
      <Text style={styles.body}>Estudiante de Ingeniería · 2 grupos activos</Text>
    </ScreenContainer>
  );
}

const styles = StyleSheet.create({
  title: { color: '#173042', fontSize: 28, fontWeight: '800' },
  body: { color: '#667781', fontSize: 16, marginTop: 14 },
});
