import { StyleSheet, Text, View } from 'react-native';
import { ScreenContainer } from '../components/ScreenContainer';
import { useAppSelector } from '../store/store';

export function ProfileScreen() {
  const userEmail = useAppSelector((state) => state.user.email);
  const products = useAppSelector((state) => state.inventory.products);
  return (
    <ScreenContainer>
      <Text style={styles.title}>Mi perfil</Text>

      <View style={styles.card}>
        <Text style={styles.label}>Correo registrado</Text>
        <Text style={styles.value}>{userEmail || 'Aún no has validado tus datos'}</Text>
      </View>

      <Text style={styles.body}>Estudiante de Ingeniería · 2 grupos activos</Text>
      <Text style={styles.inventoryTitle}>Materiales compartidos: {products.length}</Text>
      {products.map((product) => (
        <View key={product.id} style={styles.productRow}>
          <Text style={styles.productName}>{product.name}</Text>
          <Text style={styles.productDetails}>Archivos: {product.quantity} · Referencia: {product.price.toFixed(2)}</Text>
        </View>
      ))}
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
  inventoryTitle: { color: '#173042', fontSize: 18, fontWeight: '800', marginTop: 28, marginBottom: 10 },
  productRow: { backgroundColor: '#FFFFFF', borderRadius: 10, marginBottom: 8, padding: 12 },
  productName: { color: '#173042', fontSize: 16, fontWeight: '700' },
  productDetails: { color: '#667781', fontSize: 14, marginTop: 4 },
});
