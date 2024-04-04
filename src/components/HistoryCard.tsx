import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { API_HISTORY } from '../../config/apiConfig';
import { COLORS, FONTFAMILY, FONTSIZE } from '../theme/theme';
import { Image } from 'react-native';

interface History {
    id : string,
    username: string,
    restaurant: string,
    numberphone: string,
    quantity : string,
    date : string,
    time : string,

}
const HistoryCard:React.FC = () => {

    const [history,setHistory] = useState<History[]>([]);

    useEffect(() => {
        
        fetchDataHistory();
    },[]);
    const fetchDataHistory = async () => {
      try {
          const response = await axios.get(API_HISTORY);
          setHistory(response.data);
      } catch (error) {
          console.log(error);
      }
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
    <Text style={styles.header}>Lịch sử đặt bàn</Text>
    <View style={styles.restaurantContainer}>
      {history.map((histories) => (
        <TouchableOpacity
          key={histories.id}
          
        >
          <View style={styles.restaurantItem}>
            {/* <Image source={{ uri: histories.imageUrl }} style={styles.restaurantImage} /> */}
            <View style={styles.detailsContainer}>
            <Text style={styles.restaurantAddress}>Nhà hàng : {histories.restaurant}</Text>
              <Text style={styles.restaurantName}>Tên người đặt : {histories.username}</Text>
              <Text style={styles.restaurantAddress}>SĐT : {histories.numberphone}</Text>
              <Text style={styles.restaurantOpeningTime}>Số người : {histories.quantity}</Text>
              <Text style={styles.restaurantOpeningTime}>Ngày : {histories.date}</Text>
              <Text style={styles.restaurantRating}>Giờ đến : {histories.time}</Text>

            </View>
          </View>
        </TouchableOpacity>
      ))}
    </View>
  </ScrollView>
  )
}

export default HistoryCard

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
        height:"100%",
        
      },
      restaurantItem: {
        width: 370,
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