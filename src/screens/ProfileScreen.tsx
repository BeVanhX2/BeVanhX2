import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { COLORS, FONTFAMILY, FONTSIZE, SPACING } from '../theme/theme'
import { Heart, Logout, User } from 'iconsax-react-native'
import axios from 'axios'
import { useNavigation } from '@react-navigation/native'
import InfomationScreen from './InfomationScreen'
import { API_GETALLUSER, API_GETUSER } from '../../config/apiConfig'
import AsyncStorage from '@react-native-async-storage/async-storage'

interface User {
    id: string;
    username: string;
    email: string;
    password: string;
    numberphone: string;
    role: string;
  }

const Profile:React.FC = ({navigation} : any) => {
    const [users, setUsers] = useState<User[]>([]);
    const [authInfo, setAuthInfo] = useState();
    // const navigation = useNavigation();

       // Funtion lấy data login từ AsyncStorage
       const retrieveData = async () => {
        try {
            const authInfo = await AsyncStorage.getItem('authInfo');
            if (authInfo !== null) {
                console.log('====> authInfo from AsyncStorage', authInfo);
                setAuthInfo(JSON.parse(authInfo));
            }
        } catch (error) {
            console.log(error);
        }
    };
    useEffect(() => {
       
        retrieveData();
        fetchUser();
      }, []);
      const fetchUser = async () => {
        try {
          const response = await axios.get(API_GETALLUSER);
          setUsers(response.data);
        } catch (error) {
          console.error(error);
        }
      };
      

  return (
    <View style={styles.screenContainer}>
    <View>
      <Image style={styles.img}  source={{uri:'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Yasuo_68.jpg'}}/>
    </View>

  <View style={styles.profileIContainer}>
      <Image style={styles.profileImg} source={{uri : 'https://cdn.khgames.co.kr/news/photo/202205/200697_201274_2723.png'}} />
      {users.map((user) => (
        <View>
            <Text style={styles.nameText}>{user.username}</Text>
            {/* <Text style={styles.nameText}>{user.email}</Text> */}
        </View>
        
      ))}
      

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
    fontSize : FONTSIZE.size_24,
    textAlign:'center',
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