import React from 'react';
import {Text, StyleSheet, View, Button} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import NavigationService from '../Navigation/NavigationService';

const Screen3 = () => {
  const Screen1Handler = () => {
    NavigationService.navigate('Screen1');
  };
  const HomeHandler = () => {
    NavigationService.navigate('Home');
  };
  const Screen2Handler = () => {
    NavigationService.navigate('Screen2');
  };


  return (
    <LinearGradient colors={['#FF6B6B', '#007AFF']} style={styles.container}>
      <Text style={styles.text}>Screen 3</Text>
      <View style={styles.buttons}>
        <Button style={styles.button} title="Screen 1" onPress={Screen1Handler} />
        <Button style={styles.button} title="Home" onPress={HomeHandler} />
        <Button style={styles.button} title="Screen 2" onPress={Screen2Handler} />
      </View>
    </LinearGradient>
  );
};
const styles = StyleSheet.create({
  container: {flex: 1, justifyContent: 'center'},
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: 'white',
    textAlign: 'center',
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  button: {
    backgroundColor: '#FF6B6B',
    color: 'white',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 10,
  },
});

export default Screen3;
