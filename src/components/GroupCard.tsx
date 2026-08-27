import { StyleSheet, Text, View } from 'react-native';
import { CustomButton } from './CustomButton';

type GroupCardProps = { name: string; subject: string; members: number; onOpen: () => void };

export function GroupCard({ name, subject, members, onOpen }: GroupCardProps) {
  return (
    <View style={styles.card}>
      <View style={styles.info}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.subject}>{subject}</Text>
        <Text style={styles.members}>{members} integrantes</Text>
      </View>
      <CustomButton title="Ver grupo" onPress={onOpen} variant="secondary" />
    </View>
  );
}

const styles = StyleSheet.create({
  card: { backgroundColor: '#FFFFFF', borderRadius: 12, marginBottom: 14, padding: 16 },
  info: { marginBottom: 12 },
  name: { color: '#173042', fontSize: 18, fontWeight: '700' },
  subject: { color: '#1C6E8C', fontSize: 15, marginTop: 4 },
  members: { color: '#667781', marginTop: 8 },
});
