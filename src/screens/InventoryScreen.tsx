import React, { useEffect, useState } from 'react';
import { Alert, StyleSheet, Text, View } from 'react-native';
import { CustomButton } from '../components/CustomButton';
import { CustomInput } from '../components/CustomInput';
import { ScreenContainer } from '../components/ScreenContainer';
import { addProduct, removeProduct } from '../store/slices/inventorySlice';
import { useAppDispatch, useAppSelector } from '../store/store';

export function InventoryScreen() {
  const dispatch = useAppDispatch();
  const products = useAppSelector((state) => state.inventory.products);
  const [name, setName] = useState('');
  const [quantity, setQuantity] = useState('');
  const [price, setPrice] = useState('');

  useEffect(() => {
    console.log('[Redux] Estado del inventario:', products);
  }, [products]);

  const handleAddProduct = () => {
    const parsedQuantity = Number(quantity);
    const parsedPrice = Number(price);

    if (!name.trim() || parsedQuantity <= 0 || parsedPrice < 0 || !quantity || !price) {
      Alert.alert('Datos incompletos', 'Ingresa nombre, cantidad y un precio válido.');
      return;
    }

    dispatch(
      addProduct({
        name: name.trim(),
        quantity: parsedQuantity,
        price: parsedPrice,
      }),
    );
    setName('');
    setQuantity('');
    setPrice('');
  };

  return (
    <ScreenContainer>
      <Text style={styles.title}>Inventario</Text>
      <Text style={styles.subtitle}>Agrega productos y consúltalos desde cualquier pantalla.</Text>

      <CustomInput label="Nombre del producto" placeholder="Ej. Cuaderno" value={name} onChangeText={setName} />
      <CustomInput label="Cantidad" placeholder="Ej. 10" keyboardType="numeric" value={quantity} onChangeText={setQuantity} />
      <CustomInput label="Precio" placeholder="Ej. 25.50" keyboardType="decimal-pad" value={price} onChangeText={setPrice} />
      <CustomButton title="Agregar producto" onPress={handleAddProduct} />

      <Text style={styles.sectionTitle}>Productos almacenados: {products.length}</Text>
      {products.length === 0 ? (
        <Text style={styles.empty}>Todavía no hay productos en Redux.</Text>
      ) : (
        products.map((product) => (
          <View key={product.id} style={styles.productCard}>
            <View>
              <Text style={styles.productName}>{product.name}</Text>
              <Text style={styles.productDetails}>
                Cantidad: {product.quantity} · Precio: ${product.price.toFixed(2)}
              </Text>
            </View>
            <CustomButton title="Eliminar" variant="secondary" onPress={() => dispatch(removeProduct(product.id))} />
          </View>
        ))
      )}
    </ScreenContainer>
  );
}

const styles = StyleSheet.create({
  title: { color: '#173042', fontSize: 28, fontWeight: '800' },
  subtitle: { color: '#667781', fontSize: 16, lineHeight: 23, marginBottom: 20, marginTop: 8 },
  sectionTitle: { color: '#173042', fontSize: 18, fontWeight: '800', marginBottom: 12, marginTop: 28 },
  empty: { color: '#667781', fontSize: 15 },
  productCard: {
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
    padding: 14,
  },
  productName: { color: '#173042', fontSize: 16, fontWeight: '700' },
  productDetails: { color: '#667781', fontSize: 14, marginTop: 5 },
});
