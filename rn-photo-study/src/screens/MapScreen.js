import { StyleSheet, Text, View} from 'react-native'
import { WHITE } from '../colors'

const MapScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Map</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: WHITE
  }
})

export default MapScreen