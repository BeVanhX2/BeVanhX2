import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { COLORS, FONTFAMILY, FONTSIZE, SPACING } from '../theme/theme'
import { Heart, Logout, User } from 'iconsax-react-native'

const Profile = ({navigation} : any) => {
  return (
    <View style={styles.screenContainer}>
    <View>
      <Image style={styles.img}  source={{uri:'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Yasuo_68.jpg'}}/>
    </View>

  <View style={styles.profileIContainer}>
      <Image style={styles.profileImg} source={{uri : 'https://cdn.khgames.co.kr/news/photo/202205/200697_201274_2723.png'}} />
      <Text style={styles.nameText}>Ngô Tuấn Anh</Text>

      <View style={styles.menuContainer}>
      <TouchableOpacity>
          <View style={styles.menuItem}>
              <Heart style={styles.icon}  size={FONTSIZE.size_20} color={COLORS.cam}/>
              <Text style={styles.menuText}>Nhà hàng yêu thích</Text>
          </View>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => {
        navigation.navigate('Info')
      }}>
          <View style={styles.menuItem}>
              <User style={styles.icon}  size={FONTSIZE.size_20} color={COLORS.cam}/>
              <Text style={styles.menuText}>Thông tin người dùng</Text>
          </View>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => {
          navigation.navigate('SignIn')
      }}>
          <View style={styles.menuItem}>
              <Logout style={styles.icon}  size={FONTSIZE.size_20} color={COLORS.cam}/>
              <Text style={styles.menuText}>Đăng xuất</Text>
          </View>
      </TouchableOpacity>
  </View>

  

 

  
  </View>

  
  </View>
  )
}

export default Profile

const styles = StyleSheet.create({
  screenContainer: {
    flex : 1,

},
img : {
    height:"60%",
    width: "100%",
    resizeMode:'cover'
},
profileIContainer : {
    flex : 1,
    alignItems : 'center',

},
profileImg : {
    height : 155,
    width: 155,
    borderRadius : 999,
    borderColor  : COLORS.primaryWhiteHex,
    resizeMode: 'cover',
    marginTop: -260,
    borderWidth : 2,

},
nameText : {
    fontFamily :FONTFAMILY.poppins_semibold,
    color:COLORS.primaryBlackHex,
    fontSize : FONTSIZE.size_24
},
menuContainer :{
    marginTop : SPACING.space_20,
    
},
menuItem : {
    borderBottomWidth : 1,
    flexDirection : 'row',
    paddingVertical : 15,
    paddingHorizontal : 60,
    borderColor : COLORS.primaryBlackRGBA

},
icon : {
    right : 10,
    top: 5,
}
,
menuText : {
    fontFamily:FONTFAMILY.poppins_regular,
    color: COLORS.primaryBlackHex,
    fontSize : FONTSIZE.size_20
}
})