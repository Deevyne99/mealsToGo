import { StatusBar as ExpoStatusBar } from 'expo-status-bar'
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Platform,
  StatusBar,
} from 'react-native'

export default function App() {
  return (
    <>
      <SafeAreaView style={styles.container}>
        <View style={{ backgroundColor: 'green', padding: 16, color: 'white' }}>
          <Text>search</Text>
        </View>
        <View
          style={{
            flex: 1,
            backgroundColor: 'blue',
            padding: 16,
            color: 'white',
          }}
        >
          <Text>List</Text>
        </View>
      </SafeAreaView>
      <ExpoStatusBar />
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
    marginTop: StatusBar.currentHeight,
  },
})
