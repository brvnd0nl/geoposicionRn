import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Image,
} from 'react-native';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <>
      <View style={styles.thumbContainer}>
        <Image
          source={require('./src/assets/logo.png')}
          // style={styles.thumbnail}
          style={{width: '100%', height: 100}}
        />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  thumbContainer: {
    width: '100%',
    height: 400,
    paddingTop: 40,
  },
  thumbnail: {
    flex: 1,
    width: undefined,
    height: undefined,
    resizeMode: 'cover',
  },
});

export default App;
