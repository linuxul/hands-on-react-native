import { Button, StyleSheet, Text, View} from 'react-native'
import { useUserState } from '../contexts/UserContext'

const ProfileScreen = () => {
  const [user, setUser] = useUserState()

  return (
    <View style={styles.container}>
      <Text >Profile</Text>
      <Button title="로그아웃" onPress={() => setUser({})}></Button>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})

export default ProfileScreen