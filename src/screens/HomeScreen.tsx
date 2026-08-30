import React, { useState } from 'react';
import { StyleSheet, Text, Button } from 'react-native';
import { ScreenContainer } from '../components/ScreenContainer';
import { CustomInput } from '../components/CustomInput';

export function HomeScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phone, setPhone] = useState('');

  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [phoneError, setPhoneError] = useState('');

  const handleValidation = () => {
    let isValid = true;

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.trim()) {
      setEmailError('El correo electrónico es obligatorio.');
      isValid = false;
    } else if (!emailRegex.test(email)) {
      setEmailError('Ingresa un correo electrónico válido.');
      isValid = false;
    } else {
      setEmailError('');
    }

    if (!password) {
      setPasswordError('La contraseña es obligatoria.');
      isValid = false;
    } else if (password.length < 6) {
      setPasswordError('La contraseña debe tener al menos 6 caracteres.');
      isValid = false;
    } else {
      setPasswordError('');
    }

    if (!phone.trim()) {
      setPhoneError('El teléfono es obligatorio.');
      isValid = false;
    } else {
      setPhoneError('');
    }

    if (isValid) {
      alert('¡Validación de datos exitosa!');
    }
  };

  return (
    <ScreenContainer>
      <Text style={styles.eyebrow}>PLATAFORMA ACADÉMICA</Text>
      <Text style={styles.title}>Tu espacio para aprender en equipo</Text>
      <Text style={styles.body}>Encuentra compañeros, comparte apuntes y mantén tus reuniones organizadas.</Text>

      <CustomInput
        label="Correo Electrónico"
        placeholder="ejemplo@correo.com"
        keyboardType="email-address"
        autoCapitalize="none"
        value={email}
        onChangeText={setEmail}
        error={emailError}
      />

      <CustomInput
        label="Contraseña"
        placeholder="••••••"
        secureTextEntry={true} 
        value={password}
        onChangeText={setPassword}
        error={passwordError}
      />

      <CustomInput
        label="Teléfono"
        placeholder="99999999"
        keyboardType="phone-pad"
        value={phone}
        onChangeText={setPhone}
        error={phoneError}
      />

      <Button title="Validar Datos" onPress={handleValidation} />
    </ScreenContainer>
  );
}

const styles = StyleSheet.create({
  eyebrow: { 
    color: '#E07A5F', 
    fontSize: 12, 
    fontWeight: '700', 
    letterSpacing: 1 
  },
  title: { 
    color: '#173042', 
    fontSize: 30, 
    fontWeight: '800', 
    marginTop: 12 
  },
  body: { 
    color: '#667781', 
    fontSize: 16, 
    lineHeight: 24, 
    marginTop: 14, 
    marginBottom: 24 
  },
});