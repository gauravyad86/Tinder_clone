import { useNavigation } from 'expo-router';
import React from 'react';
import { View, Text, StyleSheet, Image, FlatList, SafeAreaView } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

const Card = ({ title, icon, userCount ,id}) => {
    const navigation = useNavigation()
    return (
        <TouchableOpacity style={styles.card} onPress={()=>{
            if(id==='1'){
                navigation.navigate("coffyDate")
            }
        }}>
            <Image source={icon} style={styles.icon} />
            <Text style={styles.title}>{title}</Text>
            <View style={styles.userCount}>
                <Text>{userCount}</Text>
            </View>
        </TouchableOpacity>
    );
};

const GridBox = () => {
    const DATA = [
        { id: '1', title: 'Coffee Date', userCount: 11 },
        { id: '2', title: 'Thrill Seekers', userCount: 15 },
        { id: '3', title: 'Creatives', userCount: 29 },
        { id: '4', title: 'Foodies', userCount: 20 },
        // { id: '5', title: 'Nature Lovers', userCount: 12 },
        // { id: '6', title: 'Gamers', userCount: 31 },
        // { id: '7', title: 'Gamers', userCount: 31 },
        // { id: '8', title: 'Gamers', userCount: 31 },
        // Add more items to ensure scrolling
    ];

    return (
        <SafeAreaView style={styles.container}>
            <FlatList
                data={DATA}
                renderItem={({ item }) => (
                    <Card title={item.title} icon={item.icon} userCount={item.userCount} id={item.id} />
                )}
                keyExtractor={(item) => item.id}
                numColumns={2} // Display items in two columns
                contentContainerStyle={styles.grid}
                showsVerticalScrollIndicator={false} // Hide vertical scroll indicator if needed
            />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000', // Black background
        paddingTop: 10,
        height:"100%"
    },
    grid: {
        justifyContent: 'center',
        paddingBottom: 20, // Add some padding at the bottom
    },
    card: {
        flex: 1,
        backgroundColor: '#f0f0f0', // Light gray background for each card
        borderRadius: 10,
        padding: 10,
        margin: 10,
        alignItems: 'center',
        justifyContent: 'center',
        width: 150,
        height: 200,
    },
    icon: {
        width: 50,
        height: 50,
        marginBottom: 10,
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#333',
    },
    userCount: {
        position: 'absolute',
        top: 10,
        right: 10,
        backgroundColor: 'white',
        borderRadius: 12,
        padding: 5,
    },
});

export default GridBox; // Change the export to HomeScreen
