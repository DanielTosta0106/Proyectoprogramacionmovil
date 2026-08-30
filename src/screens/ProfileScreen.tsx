import { StyleSheet, Text, View } from 'react-native';
import { ScreenContainer } from '../components/ScreenContainer';

type ProfileScreenProps = {
  userEmail?: string;
};

export function ProfileScreen({ userEmail }: ProfileScreenProps) {
  return (
    <ScreenContainer>
      <Text style={styles.title}>Mi perfil</Text>

      <View style={styles.card}>
        <Text style={styles.label}>Correo registrado</Text>
        <Text style={styles.value}>{userEmail || 'Aún no has validado tus datos'}</Text>
      </View>

      <Text style={styles.body}>Estudiante de Ingeniería · 2 grupos activos</Text>
    </ScreenContainer>
  );
}

const styles = StyleSheet.create({
  title: { color: '#173042', fontSize: 28, fontWeight: '800' },
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 16,
    marginTop: 18,
    marginBottom: 18,
  },
  label: {
    color: '#64748B',
    fontSize: 12,
    fontWeight: '700',
    marginBottom: 6,
  },
  value: {
    color: '#173042',
    fontSize: 18,
    fontWeight: '700',
  },
  body: { color: '#667781', fontSize: 16, marginTop: 14 },
});
