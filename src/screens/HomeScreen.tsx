import { StyleSheet, Text, View ,TouchableOpacity,TextInput} from 'react-native'
import React from 'react'
import { SearchNormal1 } from 'iconsax-react-native'
import { FONTSIZE,COLORS,SPACING,FONTFAMILY,BORDERRADIUS } from '../theme/theme'
import RestaurantCard from '../components/RestaurantCard'
const HomeScreen = ({navigation} : any) => {
  return (
    <View style={styles.screenContainer}>
      <View style={styles.viewHeader}>
      <Text style={styles.textHeader}>Xin chào ! </Text>
      <Text style={styles.textOP}>Easily book a table for any occasion</Text>
      </View>
      

      <View style={styles.inputContainer}>
        <SearchNormal1 size={FONTSIZE.size_28} color={COLORS.cam}style={styles.icon}  />
        <TouchableOpacity onPress={() => {
          navigation.navigate('Search')
        }}>
          <TextInput placeholder='Search venues ....                  ' style={styles.inputText} editable={false}/>
        </TouchableOpacity>
      </View>


      <View>

        <RestaurantCard  />
      </View>
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  screenContainer : {
    flex : 1,
    backgroundColor:'#fff'
    
  },
  viewHeader : {

  },
  textHeader : {
    fontSize : FONTSIZE.size_30,
    color:COLORS.cam,
    fontFamily: FONTFAMILY.poppins_semibold,
    marginTop : SPACING.space_20,
    marginLeft : SPACING.space_20
    
  },
  textOP : {
    fontSize : FONTSIZE.size_20,
    color:COLORS.primaryBlackHex,
    fontFamily : FONTFAMILY.poppins_light,
    textAlign:'center'
  },
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
    marginHorizontal: SPACING.space_20,
  },
  inputText :{
    fontFamily:FONTFAMILY.poppins_medium,
    fontSize:FONTSIZE.size_14,
    color:COLORS.cam,
  }
})