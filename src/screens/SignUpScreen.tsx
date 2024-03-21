import { ImageBackground, SafeAreaView, StyleSheet, Text, TouchableOpacity, View ,TextInput} from 'react-native'
import React from 'react'
import { BORDERRADIUS, COLORS, FONTFAMILY, FONTSIZE, SPACING } from '../theme/theme'

const SignUpScreen = ({navigation} : any) => {
  return (
    <SafeAreaView style={{backgroundColor:COLORS.primaryWhiteHex}}>
    <View style={styles.container}>
      <View>
        <Text style={styles.text1}>Create Account</Text>
        <Text style={styles.text2}>Create an account so you can reserve a table to the fullest</Text>
      </View>

      <View style={styles.input}>
        <TextInput placeholder='Email' style={styles.textInput} />
        <TextInput placeholder='Password' style={styles.textInput} />
        <TextInput placeholder='Confirm Password' style={styles.textInput} />
      </View>

      <TouchableOpacity style={styles.button} onPress={() => {
        navigation.navigate('SignIn');
      }}>
        <Text style={styles.textButton}>Sign up</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => {
        navigation.navigate('SignIn')
      }}>
        <Text style={styles.text2}>Already have an account</Text>
      </TouchableOpacity>

      <View style={{marginVertical:SPACING.space_10 * 3}}>
      <Text style={styles.text2}>Or continue with</Text>

      <View style={styles.view1}>
        <TouchableOpacity style={styles.logo}>
        <ImageBackground source={require('../assets/images/google.png')} resizeMode='contain' style={styles.img}  />
        </TouchableOpacity>

        <TouchableOpacity style={styles.logo}>
        <ImageBackground source={require('../assets/images/facebook.png')} resizeMode='contain' style={styles.img}  />
        </TouchableOpacity>

        <TouchableOpacity style={styles.logo}>
        <ImageBackground source={require('../assets/images/apple-logo.png')} resizeMode='contain' style={styles.img}  />
        </TouchableOpacity>
      </View>
      </View>
    </View>
  </SafeAreaView>
  )
}

export default SignUpScreen

const styles = StyleSheet.create({
  container: {
    padding:SPACING.space_10 *2,
  },
  text1: {
    fontSize:FONTSIZE.size_30,
    color:COLORS.cam,
    fontFamily:FONTFAMILY.poppins_semibold,
    marginVertical: SPACING.space_10 * 3,
    textAlign:'center',
  },
  text2 : {
    fontSize:FONTSIZE.size_14,
    color:COLORS.primaryLightGreyHex,
    fontFamily: FONTFAMILY.poppins_bold,
    textAlign: 'center',
    
    
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
  logo : {
    padding : SPACING.space_18,
    
  }
})