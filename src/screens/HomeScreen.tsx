import { StyleSheet, Text, View } from 'react-native';
import { ScreenContainer } from '../components/ScreenContainer';
import { useAppSelector } from '../store/store';

export function HomeScreen() {
  const userEmail = useAppSelector((state) => state.user.email);
  const groups = [
    { name: 'Desarrollo móvil', detail: 'React Native y TypeScript', members: 8 },
    { name: 'Bases de datos', detail: 'SQL y modelado', members: 5 },
  ];

  return (
    <ScreenContainer>
      <Text style={styles.eyebrow}>PANEL ACADÉMICO</Text>
      <Text style={styles.title}>Hola, {userEmail || 'estudiante'}</Text>
      <Text style={styles.body}>Continúa trabajando con tus grupos de estudio y mantén tus actividades organizadas.</Text>

      <Text style={styles.sectionTitle}>Mis grupos</Text>
      {groups.map((group) => (
        <View key={group.name} style={styles.groupCard}>
          <Text style={styles.groupName}>{group.name}</Text>
          <Text style={styles.groupDetail}>{group.detail}</Text>
          <Text style={styles.groupMembers}>{group.members} integrantes activos</Text>
        </View>
      ))}

      <Text style={styles.sectionTitle}>Próximas actividades</Text>
      <View style={styles.noticeCard}>
        <Text style={styles.noticeTitle}>Reunión de Desarrollo móvil</Text>
        <Text style={styles.noticeDetail}>Hoy, 6:00 p. m. · Repaso de navegación</Text>
      </View>
      <View style={styles.noticeCard}>
        <Text style={styles.noticeTitle}>Material nuevo disponible</Text>
        <Text style={styles.noticeDetail}>Bases de datos · SQL avanzado</Text>
      </View>
    </ScreenContainer>
  );
}

const styles = StyleSheet.create({
  eyebrow: { color: '#E07A5F', fontSize: 12, fontWeight: '700', letterSpacing: 1 },
  title: { color: '#173042', fontSize: 30, fontWeight: '800', marginTop: 12 },
  body: { color: '#667781', fontSize: 16, lineHeight: 24, marginTop: 14 },
  sectionTitle: { color: '#173042', fontSize: 20, fontWeight: '800', marginBottom: 12, marginTop: 28 },
  groupCard: { backgroundColor: '#FFFFFF', borderRadius: 10, marginBottom: 10, padding: 16 },
  groupName: { color: '#1C6E8C', fontSize: 17, fontWeight: '800' },
  groupDetail: { color: '#425466', fontSize: 14, marginTop: 5 },
  groupMembers: { color: '#7B8A99', fontSize: 13, marginTop: 10 },
  noticeCard: { backgroundColor: '#EAF3F6', borderRadius: 10, marginBottom: 10, padding: 14 },
  noticeTitle: { color: '#173042', fontSize: 15, fontWeight: '700' },
  noticeDetail: { color: '#667781', fontSize: 14, marginTop: 5 },
});
