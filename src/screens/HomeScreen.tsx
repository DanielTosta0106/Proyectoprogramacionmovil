import React, { useState } from 'react';
import { StyleSheet, Text, Button, View } from 'react-native';
import { ScreenContainer } from '../components/ScreenContainer';
import { CustomInput } from '../components/CustomInput';

type HomeScreenProps = {
  onValidEmail: (email: string) => void;
  navigation?: any;
};

export function HomeScreen({ onValidEmail, navigation }: HomeScreenProps) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phone, setPhone] = useState('');
  const [notifications, setNotifications] = useState<any[]>([]);
  const [isValidated, setIsValidated] = useState(false);

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
      const validEmail = email.trim();
      onValidEmail(validEmail);
      setNotifications([
        { title: 'Desarrollo móvil', message: 'Nueva tarea: práctica de navegación en React Native.', time: 'Hace 10 min' },
        { title: 'Bases de datos', message: 'Tu grupo subió un resumen de SQL avanzado.', time: 'Hace 1 hora' },
        { title: 'Cálculo', message: 'Se publicó la sesión de repaso para el examen.', time: 'Hoy' },
      ]);
      setIsValidated(true);
      navigation?.navigate('Grupos');
      alert('¡Validación de datos exitosa!');
    }
  };

  return (
    <ScreenContainer>
      {!isValidated && (
        <>
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
        </>
      )}

      {notifications.length > 0 && (
        <View style={styles.notificationsContainer}>
          <Text style={styles.notificationsTitle}>Notificaciones de tus grupos</Text>
          {notifications.map((item, index) => (
            <View key={`${item.title}-${index}`} style={styles.notificationCard}>
              <Text style={styles.notificationTitle}>{item.title}</Text>
              <Text style={styles.notificationMessage}>{item.message}</Text>
              <Text style={styles.notificationTime}>{item.time}</Text>
            </View>
          ))}
        </View>
      )}
    </ScreenContainer>
  );
}

const styles = StyleSheet.create({
  eyebrow: {
    color: '#E07A5F',
    fontSize: 12,
    fontWeight: '700',
    letterSpacing: 1,
  },
  title: {
    color: '#173042',
    fontSize: 30,
    fontWeight: '800',
    marginTop: 12,
  },
  body: {
    color: '#667781',
    fontSize: 16,
    lineHeight: 24,
    marginTop: 14,
    marginBottom: 24,
  },
  notificationsContainer: {
    marginTop: 26,
    backgroundColor: '#EAF3F6',
    borderRadius: 12,
    padding: 16,
  },
  notificationsTitle: {
    color: '#173042',
    fontSize: 18,
    fontWeight: '800',
    marginBottom: 12,
  },
  notificationCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    padding: 12,
    marginBottom: 10,
  },
  notificationTitle: {
    color: '#1C6E8C',
    fontWeight: '700',
    marginBottom: 4,
  },
  notificationMessage: {
    color: '#425466',
    fontSize: 14,
    marginBottom: 6,
  },
  notificationTime: {
    color: '#7B8A99',
    fontSize: 12,
  },
});