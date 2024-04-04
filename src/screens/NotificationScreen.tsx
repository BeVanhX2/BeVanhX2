import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import HistoryCard from '../components/HistoryCard'



const NotificationScreen = ({route}: any) => {
 
  return (
    <View style={styles.container}>
        <HistoryCard />
    </View>
  )
}

export default NotificationScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
 
  },
  
})