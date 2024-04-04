import { StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { API_GETALLUSER } from '../../config/apiConfig';
import { BORDERRADIUS, COLORS, FONTFAMILY, FONTSIZE, SPACING } from '../theme/theme';


interface User {
  id: string;
  username: string;
  email: string;
  password: string;
  numberphone: string;
  role: string;
}
const InfomationScreen:React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios.get(API_GETALLUSER);
        setUsers(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchUser();
  }, []);
  return (
    <View style={styles.container}>
      {users.map((user) => (
        <View style={styles.inputContainer}>
              <Text style={styles.titleHeader}>Thông tin người dùng</Text>
             <Text style={styles.nameText}>Họ tên : {user.username}</Text>
            <Text style={styles.nameText}>Email : {user.email}</Text>
            <Text style={styles.nameText}>SĐT : {user.numberphone}</Text>
            <Text style={styles.nameText}>Role : {user.role}</Text>
        </View>
        
      ))}
    </View>
  )
}

export default InfomationScreen

const styles = StyleSheet.create({
  container:  {
    
  },
  titleHeader : {
    fontFamily :FONTFAMILY.poppins_semibold,
    color:COLORS.cam,
    fontSize : FONTSIZE.size_28,
    textAlign:'center',
    justifyContent:'center'
  },
  nameText : {
    fontFamily :FONTFAMILY.poppins_semibold,
    color:COLORS.primaryBlackHex,
    fontSize : FONTSIZE.size_24,
    marginLeft : SPACING.space_20,
},
inputContainer : {
  marginVertical : SPACING.space_10 * 3,
},
textInput: {
  fontFamily: FONTFAMILY.poppins_regular,
  fontSize:FONTSIZE.size_24,
  padding:SPACING.space_12 * 2 ,
  backgroundColor:COLORS.xam,
  borderRadius: BORDERRADIUS.radius_20,
  marginVertical : SPACING.space_10,
  
}
})