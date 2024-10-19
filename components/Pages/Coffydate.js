// App.js
import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity , Dimensions} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Fontisto } from '@expo/vector-icons';
import { useNavigation } from 'expo-router';
const { width, height } = Dimensions.get('window');

export default function CoffyDate() {
    const navigation = useNavigation();
  return (
    <LinearGradient
      colors={['#240028', '#2c003e']}
      style={styles.container}
    >
      {/* Neon Coffee Cup Image */}
      <Fontisto name="coffeescript" size={150} color="purple" />
      
      {/* Title */}
      <Text style={styles.title}>Coffee Date</Text>
      
      {/* Subtitle */}
      <Text style={styles.subtitle}>Find someone to get coffee with</Text>
      
      {/* Join Now Button */}
      <TouchableOpacity style={styles.joinButton} onPress={()=>navigation.navigate('joincoffedate')}>
        <LinearGradient
          colors={['#fc00ff', '#00dbde']}
          style={styles.joinButtonGradient}
        >
          <Text style={styles.joinButtonText}>JOIN NOW</Text>
        </LinearGradient>
      </TouchableOpacity>
      
      {/* No Thanks Button */}
      <TouchableOpacity style={styles.noThanksButton} onPress={()=>{
        nav
      }}>
        <Text style={styles.noThanksText} onPress={()=>{
            navigation.goBack()
        }}>NO THANKS</Text>
      </TouchableOpacity>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  coffeeImage: {
    width: 200,
    height: 200,
    marginBottom: 40,
  },
  title: {
    fontSize: 40,
    fontWeight: '500',
    color: '#fff',
    marginTop: height*.01,
  },
  subtitle: {
    fontSize: 17,
    color: '#ddd',
    marginBottom: 40,
    fontWeight:"500"
  },
  joinButton: {
    borderRadius: 30,
    overflow: 'hidden',
    marginBottom: 20,
  },
  joinButtonGradient: {
    paddingVertical: 15,
    paddingHorizontal: 60,
  },
  joinButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  noThanksButton: {
    padding: 10,
  },
  noThanksText: {
    color: '#fff',
    fontSize: 18,
  },
});