import { StyleSheet, Text, View} from 'react-native'
import { WHITE } from '../colors'

const ListScreen = () => {
  return (
    <View style={styles.container}>
      <Text>List</Text>
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

export default ListScreen