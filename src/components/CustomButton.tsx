import { Pressable, StyleSheet, Text } from 'react-native';

type CustomButtonProps = {
  title: string;
  onPress: () => void;
  variant?: 'primary' | 'secondary';
};

export function CustomButton({ title, onPress, variant = 'primary' }: CustomButtonProps) {
  return (
    <Pressable
      accessibilityRole="button"
      onPress={onPress}
      style={({ pressed }) => [styles.button, variant === 'secondary' && styles.secondary, pressed && styles.pressed]}
    >
      <Text style={[styles.label, variant === 'secondary' && styles.secondaryLabel]}>{title}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: { alignItems: 'center', backgroundColor: '#1C6E8C', borderRadius: 10, padding: 14 },
  secondary: { backgroundColor: '#DDECEF' },
  label: { color: '#FFFFFF', fontSize: 16, fontWeight: '700' },
  secondaryLabel: { color: '#15546B' },
  pressed: { opacity: 0.75 },
});
