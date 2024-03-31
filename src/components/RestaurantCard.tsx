import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { API_GETRESTAURANT } from '../../config/apiConfig';
import { BORDERRADIUS, COLORS, FONTFAMILY, FONTSIZE, SPACING } from '../theme/theme';
import { useNavigation } from '@react-navigation/native';
import DetailScreen from '../screens/DetailScreen';
import { Like1, Star1 } from 'iconsax-react-native';


interface Restaurant {
    id: string;
    name: string;
    description: string;
    address: string;
    numberPhone: number;
    rating: number;
    closingTime: string,
    openingTime: string,
    imageUrl: string,
}
const RestaurantCard: React.FC = () => {

    const [restaurants, setRestaurants] = useState<Restaurant[]>([]);
    const navigation = useNavigation();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(API_GETRESTAURANT);
                setRestaurants(response.data);
            } catch (error) {
                console.log('Error fetch data', error);
            }
        }
        fetchData();

    }, []);

    const handleRestaurantPress = (restaurant: Restaurant) => {
        navigation.navigate('Detail', { restaurant });
      };
    


    return (
        <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.header}>Restaurant List</Text>
        <View style={styles.restaurantContainer}>
          {restaurants.map((restaurant) => (
            <TouchableOpacity
              key={restaurant.id}
              onPress={() => handleRestaurantPress(restaurant)}
            >
              <View style={styles.restaurantItem}>
                <Image source={{ uri: restaurant.imageUrl }} style={styles.restaurantImage} />
                <View style={styles.detailsContainer}>
                  <Text style={styles.restaurantName}>{restaurant.name}</Text>
                  <Text style={styles.restaurantAddress}>{restaurant.address}</Text>
                  <Text style={styles.restaurantNumberphone}>Hotline: {restaurant.numberPhone}</Text>
                  
                  <Text style={styles.restaurantOpeningTime}>{restaurant.openingTime} - {restaurant.closingTime}</Text>
                  <Text style={styles.restaurantRating}><Like1 size={25} color='blue' />({restaurant.rating})</Text>

                </View>
              </View>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    )
}

export default RestaurantCard

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        backgroundColor: '#fff',
      },
      header: {
        fontSize: FONTSIZE.size_28,
        color:COLORS.cam,
        fontFamily: FONTFAMILY.poppins_semibold,
        marginBottom: 20,
        textAlign: 'center',
      },
      restaurantContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        height:1000,
        
      },
      restaurantItem: {
        width: '100%',
        marginBottom: 20,
        borderRadius: 10,
        overflow: 'hidden',
        borderWidth: 1,
        borderColor: '#ccc',
        backgroundColor: '#f9f9f9',
        flexDirection: 'column', // Chỉnh sửa dòng này
      },
      restaurantImage: {
        width: '100%',
        height: 150,
        marginBottom: 10,
        borderRadius: 10,
      },
      detailsContainer: {
        padding: 10,
      },
      restaurantName: {
        fontSize: FONTSIZE.size_18,
        fontFamily : FONTFAMILY.poppins_semibold,
        color:COLORS.primaryBlackHex
      },
      restaurantDescription: {
        fontSize: 16,
        marginBottom: 5,
      },
      restaurantAddress: {
        fontSize: 16,
        marginBottom: 5,
        color:COLORS.primaryRedHex,
        fontFamily : FONTFAMILY.poppins_bold
      },
      restaurantNumberphone: {
        fontSize: 16,
        marginBottom: 5,
      },
      restaurantRating: {
        fontSize: 16,
       
       
      },
      restaurantOpeningTime: {
        fontSize: 16,
        marginBottom: 5,
      },
      restaurantClosingTime: {
        fontSize: 16,
        marginBottom: 5,
      },
})