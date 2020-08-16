import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';

const Welcome = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text>Welcome</Text>
      <Text onPress={() => navigation.navigate('App')}>Go To Home</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.lighter,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Welcome;
