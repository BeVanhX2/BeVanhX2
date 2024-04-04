import { FlatList, Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { Like1, SearchNormal1 } from 'iconsax-react-native'
import { BORDERRADIUS, COLORS, FONTFAMILY, FONTSIZE, SPACING } from '../theme/theme'
import { API_SEARCH } from '../../config/apiConfig';
import axios from 'axios';
import { ScrollView } from 'react-native';


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
const SearchScreen = ({navigation} : any) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [restaurants, setRestaurants] = useState<Restaurant[]>([]);

  const searchRestaurants = async () => {
    try {
      const response = await axios.get(`${API_SEARCH}?name=${searchTerm}`);
      setRestaurants(response.data);
      setSearchTerm('');
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
  const handleRestaurantPress = (restaurant: Restaurant) => {
    navigation.navigate('Detail', { restaurant });
  };

  // const handleSearch = (term: any) => {
  //   setSearchTerm(term);
  //   if (term.length > 0) {
  //     searchRestaurants(term);
  //   } else {
  //     setRestaurants([]); // Xóa danh sách nhà hàng nếu không có ký tự nào được nhập
  //   }
  // };
  return (
    <View style={styles.container} >
      <Text style={styles.header}>Search Restaurant </Text>
        
        <TouchableOpacity style={styles.inputContainer}>
          <TextInput placeholder='Search venues ....                  ' style={styles.inputText} value={searchTerm}
        onChangeText={setSearchTerm} />
        
        </TouchableOpacity>  
        <SearchNormal1 size={FONTSIZE.size_28} color={COLORS.cam}style={styles.icon} onPress={searchRestaurants} />

        <ScrollView>
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
    </View>


      

      

  )
}

export default SearchScreen

const styles = StyleSheet.create({
    inputContainer : {
        flexDirection:'row',
        margin:SPACING.space_36,
        padding:SPACING.space_8,
        borderRadius:BORDERRADIUS.radius_20,
        backgroundColor:COLORS.primaryWhiteHex,
        alignItems:'center',
        borderWidth : 4,
        borderColor : COLORS.xam,
        
      },
      icon : {
        bottom:88,
        left:330
        
      },
      inputText :{
        fontFamily:FONTFAMILY.poppins_medium,
        fontSize:FONTSIZE.size_14,
        color:COLORS.cam,
      },
      container: {
        flexGrow: 1,
        backgroundColor: '#fff',
      },
      header: {
        fontSize: FONTSIZE.size_28,
        color:COLORS.cam,
        marginTop : 10,
        fontFamily: FONTFAMILY.poppins_semibold,
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