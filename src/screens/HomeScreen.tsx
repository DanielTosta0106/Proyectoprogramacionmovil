import { StyleSheet, Text } from 'react-native';
import { ScreenContainer } from '../components/ScreenContainer';

export function HomeScreen() {
  return (
    <ScreenContainer>
      <Text style={styles.eyebrow}>PLATAFORMA ACADÉMICA</Text>
      <Text style={styles.title}>Tu espacio para aprender en equipo</Text>
      <Text style={styles.body}>Encuentra compañeros, comparte apuntes y mantén tus reuniones organizadas.</Text>
    </ScreenContainer>
  );
}

const styles = StyleSheet.create({
  eyebrow: { color: '#E07A5F', fontSize: 12, fontWeight: '700', letterSpacing: 1 },
  title: { color: '#173042', fontSize: 30, fontWeight: '800', marginTop: 12 },
  body: { color: '#667781', fontSize: 16, lineHeight: 24, marginTop: 14 },
});
