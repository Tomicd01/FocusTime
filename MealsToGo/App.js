import { StatusBar } from 'expo-status-bar';
import { Platform, SafeAreaView, StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.top}>
        <Text>Search</Text>
      </View>
      <View style={styles.bottom}>
        <Text>sth</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === 'android' ? 35: 0,
  },
  top: {
    backgroundColor: 'green',
    padding: 30,
  },
  bottom: {
    flex: 1,
    backgroundColor: 'blue',
  }
});
