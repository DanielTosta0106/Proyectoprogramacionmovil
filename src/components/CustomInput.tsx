import React, { useState } from 'react';
import { TextInput, StyleSheet, Text, View, TextInputProps, TouchableOpacity, Image } from 'react-native';

interface CustomInputProps extends TextInputProps {
  label?: string;
  error?: string;
}

export function CustomInput({ label, error, style, secureTextEntry, ...props }: CustomInputProps) {
  const [isHide, setIsHide] = useState(secureTextEntry);

  return (
    <View style={styles.container}>
      {label && <Text style={styles.label}>{label}</Text>}
      
      <View style={styles.inputContainer}>
        <TextInput
          style={[styles.input, error ? styles.inputError : null, style]}
          placeholderTextColor="#9A9A9A"
          secureTextEntry={isHide}
          {...props}
        />
        
        {secureTextEntry && (
          <TouchableOpacity onPress={() => setIsHide(!isHide)} style={styles.eyeButton}>
            <Image 
              source={isHide ? require('../../assets/no_mostrar.png') : require('../../assets/mostrar.png')} 
              style={styles.eyeIcon} 
            />
          </TouchableOpacity>
        )}
      </View>

      {error ? <Text style={styles.errorText}>{error}</Text> : null}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { 
    marginBottom: 16, 
    width: '100%' 
  },
  label: { 
    fontSize: 14, 
    fontWeight: '700', 
    color: '#173042', 
    marginBottom: 6 
  },
  inputContainer: { 
    position: 'relative', 
    justifyContent: 'center' 
  },
  input: {
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 16,
    paddingVertical: 12,
    paddingRight: 50, 
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#E2E8F0',
    fontSize: 16,
    color: '#173042',
  },
  inputError: { 
    borderColor: '#EF4444' 
  },
  eyeButton: { 
    position: 'absolute', 
    right: 15, 
    padding: 4 
  },
  eyeIcon: { 
    width: 22, 
    height: 22, 
    resizeMode: 'contain',
    tintColor: '#64748B'
  },
  errorText: { 
    color: '#EF4444', 
    fontSize: 12, 
    marginTop: 4 
  },
});