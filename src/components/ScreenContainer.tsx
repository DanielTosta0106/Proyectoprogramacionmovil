import { PropsWithChildren } from 'react';
import { ScrollView, StyleSheet } from 'react-native';

export function ScreenContainer({ children }: PropsWithChildren) {
  return <ScrollView contentContainerStyle={styles.content}>{children}</ScrollView>;
}

const styles = StyleSheet.create({
  content: {
    flexGrow: 1,
    padding: 24,
    backgroundColor: '#F4F7F8',
  },
});
