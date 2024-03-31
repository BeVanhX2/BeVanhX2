import { ImageBackground, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { BORDERRADIUS, COLORS, FONTSIZE, SPACING } from '../theme/theme';
import { FONTFAMILY } from '../theme/theme';
const SplashScreen = ({navigation} : any) => {
  return (
    <SafeAreaView style={{flex: 1,backgroundColor:COLORS.primaryWhiteHex}}>
        <View>
            <ImageBackground source={require('../assets/images/cutlery.png')} resizeMode='contain' style={styles.img}  />
        </View>

        <View style={styles.view1}>
            <Text style={styles.text1}>
            Welcome back . Let's book a table
            </Text>

            <Text style={{fontSize:SPACING.space_15, marginTop:SPACING.space_8,textAlign:'center',fontFamily:FONTFAMILY.poppins_light}} >
            Choose for yourself the most relaxing space
            </Text>
        </View>

        <View style={{paddingHorizontal:SPACING.space_20,paddingTop:SPACING.space_12 * 6,flexDirection:'row'}}>
            <TouchableOpacity style={styles.button}  onPress={() => {
                navigation.navigate('SignIn')
            }}>
                <Text style={styles.textButton}>Sign in</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.button1} onPress={() => {
                navigation.navigate('SignUp')
            }}>
                <Text style={styles.textButton1}>Sign up</Text>
            </TouchableOpacity>

            
        </View>

        
    </SafeAreaView>
  )
}

export default SplashScreen

const styles = StyleSheet.create({
    img: {
        height: 300,
        marginTop:100,
    },
    view1: {
        paddingHorizontal: SPACING.space_16 * 4,
        paddingTop:SPACING.space_16,
    },
    text1 : {
        color: COLORS.cam,
        fontSize: FONTSIZE.size_30,
        textAlign:'center',
        fontFamily:FONTFAMILY.poppins_semibold,
       
    },
    button : {
        backgroundColor : COLORS.cam,
        paddingHorizontal :SPACING.space_8 *2,
        paddingVertical : SPACING.space_8 *2,
        width:'48%',
        borderRadius: BORDERRADIUS.radius_20,
        marginRight: SPACING.space_10,
       
    },
    textButton :{
        fontFamily:FONTFAMILY.poppins_bold,
        color:COLORS.primaryWhiteHex,
        textAlign:'center',
        fontSize:FONTSIZE.size_20,
    },
    button1 : {
        backgroundColor : COLORS.xam,
        paddingHorizontal :SPACING.space_8 *2,
        paddingVertical : SPACING.space_8 *2,
        width:'48%',
        borderRadius: BORDERRADIUS.radius_20,
    },
    textButton1 : {
        fontFamily:FONTFAMILY.poppins_bold,
        color:COLORS.primaryBlackHex,
        textAlign:'center',
        fontSize:FONTSIZE.size_20,
    }
})