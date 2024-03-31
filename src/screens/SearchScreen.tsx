import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { SearchNormal1 } from 'iconsax-react-native'
import { BORDERRADIUS, COLORS, FONTFAMILY, FONTSIZE, SPACING } from '../theme/theme'

const SearchScreen = () => {
  return (
    <View style={styles.inputContainer}>
        <SearchNormal1 size={FONTSIZE.size_28} color={COLORS.cam}style={styles.icon} />
        <TouchableOpacity>
          <TextInput placeholder='Search venues ....                  ' style={styles.inputText} />
        </TouchableOpacity>
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
        marginHorizontal: SPACING.space_20,
      },
      inputText :{
        fontFamily:FONTFAMILY.poppins_medium,
        fontSize:FONTSIZE.size_14,
        color:COLORS.cam,
      }
})