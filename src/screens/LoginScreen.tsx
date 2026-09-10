import React, { useState } from 'react';
import { Alert, StyleSheet, Text } from 'react-native';
import { CustomButton } from '../components/CustomButton';
import { CustomInput } from '../components/CustomInput';
import { ScreenContainer } from '../components/ScreenContainer';
import { setEmail } from '../store/slices/userSlice';
import { useAppDispatch } from '../store/store';

type LoginScreenProps = {
  navigation: any;
};

export function LoginScreen({ navigation }: LoginScreenProps) {
  const dispatch = useAppDispatch();
  const [email, setEmailInput] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const handleLogin = () => {
    const normalizedEmail = email.trim();
    const emailIsValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(normalizedEmail);
    const passwordIsValid = password.length >= 6;

    setEmailError(emailIsValid ? '' : 'Ingresa un correo electrónico válido.');
    setPasswordError(passwordIsValid ? '' : 'La contraseña debe tener al menos 6 caracteres.');

    if (!emailIsValid || !passwordIsValid) {
      return;
    }

    dispatch(setEmail(normalizedEmail));
    console.log('[Redux] Inicio de sesión:', normalizedEmail);
    Alert.alert('Bienvenido', 'Has iniciado sesión correctamente.');
    navigation.replace('MainTabs');
  };

  return (
    <ScreenContainer>
      <Text style={styles.eyebrow}>PLATAFORMA ACADÉMICA</Text>
      <Text style={styles.title}>Conecta con tu grupo de estudio</Text>
      <Text style={styles.body}>Comparte apuntes, organiza reuniones y aprende junto a tus compañeros.</Text>

      <CustomInput
        label="Correo electrónico"
        placeholder="ejemplo@correo.com"
        keyboardType="email-address"
        autoCapitalize="none"
        value={email}
        onChangeText={setEmailInput}
        error={emailError}
      />
      <CustomInput
        label="Contraseña"
        placeholder="Mínimo 6 caracteres"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
        error={passwordError}
      />
      <CustomButton title="Iniciar sesión" onPress={handleLogin} />
    </ScreenContainer>
  );
}

const styles = StyleSheet.create({
  eyebrow: { color: '#E07A5F', fontSize: 12, fontWeight: '700', letterSpacing: 1 },
  title: { color: '#173042', fontSize: 30, fontWeight: '800', marginTop: 12 },
  body: { color: '#667781', fontSize: 16, lineHeight: 24, marginBottom: 24, marginTop: 14 },
});
