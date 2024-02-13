import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Pressable } from 'react-native';
import PropTypes from 'prop-types';
import { useNavigation } from '@react-navigation/native';

const HeaderRightButton = ({ tintColor }) => {
  const navigation = useNavigation();

  return (
    <Pressable
      onPress={() => {
        console.log('click Settings');
        navigation.navigate('Settings');
      }}
      hitSlop={10}
    >
      <MaterialCommunityIcons
        name="cog"
        size={20}
        color={tintColor}
      ></MaterialCommunityIcons>
    </Pressable>
  );
};

HeaderRightButton.propTypes = {
  tintColor: PropTypes.string
};

export default HeaderRightButton;
