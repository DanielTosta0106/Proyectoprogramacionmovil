import React, { useState } from 'react';
import { Alert, StyleSheet, Text } from 'react-native';
import { CustomButton } from '../components/CustomButton';
import { CustomInput } from '../components/CustomInput';
import { ScreenContainer } from '../components/ScreenContainer';
import { setProfile } from '../store/slices/userSlice';
import { useAppDispatch } from '../store/store';

type RegisterScreenProps = {
  navigation: any;
};

export function RegisterScreen({ navigation }: RegisterScreenProps) {
  const dispatch = useAppDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleRegister = () => {
    const normalizedName = name.trim();
    const normalizedEmail = email.trim();
    const validEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(normalizedEmail);

    if (!normalizedName || !validEmail || password.length < 6) {
      setError('Completa tu nombre, un correo válido y una contraseña de 6 caracteres como mínimo.');
      return;
    }

    dispatch(setProfile({ name: normalizedName, email: normalizedEmail }));
    console.log('[Redux] Usuario registrado:', { name: normalizedName, email: normalizedEmail });
    Alert.alert('Registro completado', 'Tu cuenta ya está lista para participar en grupos.');
    navigation.replace('MainTabs');
  };

  return (
    <ScreenContainer>
      <Text style={styles.eyebrow}>NUEVA CUENTA</Text>
      <Text style={styles.title}>Únete a tu comunidad académica</Text>
      <Text style={styles.body}>Crea tu perfil para compartir materiales y participar en grupos de estudio.</Text>

      <CustomInput label="Nombre completo" placeholder="Ej. Daniela Torres" value={name} onChangeText={setName} />
      <CustomInput label="Correo electrónico" placeholder="ejemplo@correo.com" keyboardType="email-address" autoCapitalize="none" value={email} onChangeText={setEmail} />
      <CustomInput label="Contraseña" placeholder="Mínimo 6 caracteres" secureTextEntry value={password} onChangeText={setPassword} error={error} />
      <CustomButton title="Crear cuenta" onPress={handleRegister} />
      <CustomButton title="Volver al inicio de sesión" variant="secondary" onPress={() => navigation.goBack()} />
    </ScreenContainer>
  );
}

const styles = StyleSheet.create({
  eyebrow: { color: '#E07A5F', fontSize: 12, fontWeight: '700', letterSpacing: 1 },
  title: { color: '#173042', fontSize: 30, fontWeight: '800', marginTop: 12 },
  body: { color: '#667781', fontSize: 16, lineHeight: 24, marginBottom: 24, marginTop: 14 },
});
