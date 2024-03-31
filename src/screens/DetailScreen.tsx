import { StyleSheet, Text, View ,TouchableOpacity,ScrollView,Image, BackHandler } from 'react-native'
import React from 'react'
import { Back, Call, Clock} from 'iconsax-react-native';
import { useNavigation } from '@react-navigation/native';
import { BORDERRADIUS, COLORS, FONTFAMILY, FONTSIZE } from '../theme/theme';

interface Restaurant {
    id: number;
    name: string;
    description: string;
    address: string;
    numberPhone: string;
    rating: number;
    closingTime: string;
    openingTime: string;
    imageUrl: string;
  }
const DetailScreen:React.FC<{route : any}> = ({route}) => {

    const {restaurant} = route.params;
    const navigation = useNavigation();

    const handleBackPress = () => {
        navigation.goBack();
    }

    const handleBookingPress = () => {
      navigation.navigate('Booking',{restaurant});
    }
  return (
    <ScrollView contentContainerStyle={styles.container}>
    <TouchableOpacity onPress={handleBackPress} style={styles.backButton}>
      <Back size={40} color={COLORS.cam} fontFamily={FONTFAMILY.poppins_semibold}  />
    </TouchableOpacity>
    <View>
        <Text style={{fontSize:FONTSIZE.size_30,left:50,fontFamily:FONTFAMILY.poppins_semibold,color:COLORS.primaryBlackHex}}>Overview</Text>
    </View>
    <View style={styles.imageContainer}>
      <Image source={{ uri: restaurant.imageUrl }} style={styles.restaurantImage} />
    </View>
    <View style={styles.detailsContainer}>
      <Text style={styles.textRestaurant}>{restaurant.name} - {restaurant.address}    </Text>
        
     <Text style={styles.textPhone}>Hotline : {restaurant.numberPhone} <Text style={styles.textClock}> <Clock size={20} color={COLORS.primaryBlackHex} fontFamily={FONTFAMILY.poppins_semibold} /> {restaurant.openingTime} - {restaurant.closingTime}</Text></Text>

      <Text style={styles.textDescription}>{restaurant.description}</Text>
      
      
    </View>

    <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.buttonBooking} onPress={handleBookingPress}>
            <Text style={styles.textBooking}>Make a booking</Text>
        </TouchableOpacity>
    </View>
  </ScrollView>
  )
}

export default DetailScreen

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        backgroundColor: '#fff',
        paddingVertical: 20,
        paddingHorizontal: 10,
      },
      backButton: {
        position: 'absolute',
        top: 20,
        left: 10,
        zIndex: 1,
      },
      backButtonText: {
        fontSize: 18,
        color: 'blue',
      },
      imageContainer: {
        alignItems: 'center',
        marginBottom: 20,
      },
      restaurantImage: {
        width: 500,
        height: 200,
        borderRadius: 10,
      },
      detailsContainer: {},
      label: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 5,
      },
      text: {
        fontSize: 16,
        marginBottom: 10,
      },
      buttonContainer: {
        alignItems:'center',
        flex : 1,
      },
      buttonBooking : {
        width:350,
        height:60,
        backgroundColor:COLORS.cam,
        borderRadius : BORDERRADIUS.radius_20,
        alignItems:'center',
        justifyContent:'center'
      },
      textBooking : {
        color:COLORS.primaryWhiteHex,
        fontSize:FONTSIZE.size_20,
        fontFamily:FONTFAMILY.poppins_semibold
      },
      textRestaurant : {
        color:COLORS.cam,
        fontSize:FONTSIZE.size_30,
        fontFamily:FONTFAMILY.poppins_semibold
      },
      textPhone : {
        color:COLORS.primaryBlackHex,
        fontSize:FONTSIZE.size_20,
        fontFamily:FONTFAMILY.poppins_semibold,
        
      },
      textDescription :{
        fontFamily:FONTFAMILY.poppins_regular,
        fontSize:FONTSIZE.size_16,
        
      },
      textClock : {
        color:COLORS.primaryBlackHex,
        fontSize:FONTSIZE.size_20,
        fontFamily:FONTFAMILY.poppins_semibold,
       
      }
      
})