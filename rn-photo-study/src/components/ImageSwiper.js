import { StyleSheet, View, Platform, Image } from 'react-native';
import Swiper from 'react-native-swiper';
import { BlurView } from 'expo-blur';
import { BLACK, PRIMARY } from '../colors';
import FastImage from './FastImage';
import PropTypes from 'prop-types';

const ImageSwier = ({ photos }) => {
  return (
    <Swiper
      loop={false}
      dot={<View style={styles.dot}></View>}
      activeDot={<View style={styles.activeDot}></View>}
    >
      {photos.map(({ uri }, idx) => (
        <View key={idx} style={styles.photo}>
          <FastImage
            source={{ uri }}
            style={StyleSheet.absoluteFill}
            resizeMode="cover"
          ></FastImage>
          <BlurView intensity={Platform.select({ ios: 10, android: 10 })}>
            <Image
              source={{ uri }}
              style={styles.photo}
              resizeMode="cover"
            ></Image>
          </BlurView>
        </View>
      ))}
    </Swiper>
  );
};

ImageSwier.propTypes = {
  photos: PropTypes.array.isRequired
};

const styles = StyleSheet.create({
  photo: {
    width: '100%',
    height: '100%'
  },
  dot: {
    backgroundColor: BLACK,
    width: 8,
    height: 8,
    borderRadius: 4,
    marginLeft: 3,
    marginRight: 3,
    margeinTop: 3,
    marginBottom: 3
  },
  activeDot: {
    backgroundColor: PRIMARY.DEFAULT,
    width: 8,
    height: 8,
    borderRadius: 4,
    marginLeft: 3,
    marginRight: 3,
    margeinTop: 3,
    marginBottom: 3
  }
});

export default ImageSwier;
