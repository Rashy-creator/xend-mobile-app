import { View, Text, StyleSheet, ScrollView } from 'react-native';

export default function Dashboard() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.greeting}>Hello, User!</Text>
        <Text style={styles.subtitle}>Welcome to your Xend Dashboard</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>Total Balance</Text>
        <Text style={styles.balance}>$1,250.00</Text>
      </View>

      <View style={styles.statsRow}>
        <View style={styles.miniCard}><Text>Income</Text></View>
        <View style={styles.miniCard}><Text>Expenses</Text></View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F5F5F5', padding: 20 },
  header: { marginTop: 40, marginBottom: 20 },
  greeting: { fontSize: 24, fontWeight: 'bold' },
  subtitle: { color: '#666' },
  card: { backgroundColor: '#007AFF', padding: 20, borderRadius: 15, marginBottom: 20 },
  cardTitle: { color: '#fff', opacity: 0.8 },
  balance: { color: '#fff', fontSize: 32, fontWeight: 'bold', marginTop: 10 },
  statsRow: { flexDirection: 'row', justifyContent: 'space-between' },
  miniCard: { backgroundColor: '#fff', width: '48%', padding: 15, borderRadius: 10, alignItems: 'center' }
});