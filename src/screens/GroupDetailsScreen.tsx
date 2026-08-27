import { StyleSheet, Text } from 'react-native';
import { CustomButton } from '../components/CustomButton';
import { ScreenContainer } from '../components/ScreenContainer';

export function GroupDetailsScreen({ route, navigation }: any) {
  return (
    <ScreenContainer>
      <Text style={styles.title}>{route.params.groupName}</Text>
      <Text style={styles.body}>Aquí podrás compartir apuntes, resolver dudas y coordinar la próxima actividad académica.</Text>
      <CustomButton title="Volver a mis grupos" onPress={() => navigation.goBack()} />
    </ScreenContainer>
  );
}

const styles = StyleSheet.create({
  title: { color: '#173042', fontSize: 28, fontWeight: '800' },
  body: { color: '#667781', fontSize: 16, lineHeight: 24, marginBottom: 24, marginTop: 14 },
});
