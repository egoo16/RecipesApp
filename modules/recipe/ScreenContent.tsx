import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import ListCategories from './views/ListCategories';
import { RootStackParamList } from './types/navigation';
import { NativeStackScreenProps } from '@react-navigation/native-stack';


type Props = NativeStackScreenProps<RootStackParamList, 'Home'>;


export const ScreenContent = () => {


  return (
    <SafeAreaView style={styles.container}>

      <ListCategories />

      <View style={styles.navContainer}>
        <TouchableOpacity style={styles.navItem}>
          <Text style={styles.navIcon}>🏠</Text>
          <Text style={styles.navText}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Text style={styles.navIcon}>🔍</Text>
          <Text style={styles.navText}>Buscar</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fcf9f8' },
  navContainer: { flexDirection: 'row', borderTopWidth: 1, borderTopColor: '#f3eae7', backgroundColor: '#fcf9f8', paddingVertical: 8 },
  navItem: { flex: 1, alignItems: 'center' },
  navIcon: { fontSize: 24 },
  navText: { fontSize: 12, marginTop: 4, fontWeight: '500' },
});

export default ScreenContent;