import { InputAccessoryView, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux';
import { BORDERRADIUS, COLORS, FONTFAMILY, FONTSIZE, SPACING } from '../theme/theme';
import { Back } from 'iconsax-react-native';


const BookingScreen = ({navigation} : any) => {

  const handleBackPress = () => {
    navigation.goBack();
}

  return (
    
    <ScrollView style={{backgroundColor:COLORS.primaryWhiteHex}}>
    <View style={styles.container}>
    <TouchableOpacity onPress={handleBackPress} style={styles.backButton}>
      <Back size={40} color={COLORS.cam} fontFamily={FONTFAMILY.poppins_semibold}  />
    </TouchableOpacity>
      <View>
        <Text style={styles.text1}>Make a booking</Text>
      </View>

      <View style={styles.input}>
        <Text style={styles.title}>Họ tên : </Text>
        <TextInput placeholder='Họ và tên' style={styles.textInput} keyboardType='name-phone-pad' />
        <Text style={styles.title}>SĐT : </Text>
        <TextInput placeholder='Số điện thoại' style={styles.textInput} keyboardType='phone-pad'  />
        <Text style={styles.title}>Email : </Text>
        <TextInput placeholder='Email' style={styles.textInput}  secureTextEntry={true} keyboardType='email-address' />
        <Text style={styles.title}>Số lượng người : </Text>
        <TextInput placeholder='Số lượng người' style={styles.textInput}  keyboardType='phone-pad'/>
        <Text style={styles.title}>Ngày : </Text>
        <TextInput placeholder='Ngày' style={styles.textInput} keyboardType='phone-pad'  />
        <Text style={styles.title}>Giờ : </Text>
        <TextInput placeholder='Giờ' style={styles.textInput}  keyboardType='phone-pad' />

        
      </View>

      

      <TouchableOpacity style={styles.button} >
        <Text style={styles.textButton}>Book now</Text>
      </TouchableOpacity>

      
      </View>
  </ScrollView>
  )
}


export default BookingScreen

const styles = StyleSheet.create({
  container: {
    padding:SPACING.space_10 *2,
  },
  text1: {
    fontSize:FONTSIZE.size_30,
    color:COLORS.cam,
    fontFamily:FONTFAMILY.poppins_semibold,
    textAlign:'center',
  },
  text2 : {
    fontSize:FONTSIZE.size_14,
    color:COLORS.primaryLightGreyHex,
    fontFamily: FONTFAMILY.poppins_bold,
    textAlign: 'center',
    
    
  },
  title : {
    fontSize:FONTSIZE.size_20,
    fontFamily : FONTFAMILY.poppins_semibold,
    color:COLORS.primaryBlackHex,
    marginLeft:SPACING.space_10
  },
  input: {
    marginVertical : SPACING.space_10 * 3,
  },
  textInput: {
    fontFamily: FONTFAMILY.poppins_regular,
    fontSize:FONTSIZE.size_12,
    padding:SPACING.space_12 * 2 ,
    backgroundColor:COLORS.xam,
    borderRadius: BORDERRADIUS.radius_20,
    marginVertical : SPACING.space_10,
    
  },
  text3: {
    fontSize:FONTSIZE.size_14,
    color:COLORS.cam,
    fontFamily: FONTFAMILY.poppins_bold,
    alignSelf:'flex-end',

  },
  button : {
    padding: SPACING.space_8 * 2,
    backgroundColor : COLORS.cam,
    marginVertical : SPACING.space_10 ,
    borderRadius : BORDERRADIUS.radius_20,
    
  },
  textButton: {
    fontFamily:FONTFAMILY.poppins_bold,
        color:COLORS.primaryWhiteHex,
        textAlign:'center',
        fontSize:FONTSIZE.size_20,
  },
  img :{
    width: SPACING.space_20 * 2,
    height: SPACING.space_20 * 2,
  },
  view1 : {
    marginTop : SPACING.space_10,
    flexDirection : 'row',
    justifyContent : 'center'
  },
  backButton: {
    position: 'absolute',
    top: 20,
    left: 10,
    zIndex: 1,
  },
});
