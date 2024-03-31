import { Button, FlatList, Image, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'

interface Booking {
  id: string;
  customerName: string;
  restaurantName: string;
  time: string;
  quantity: number;
  phoneNumber: string;
  image: string;
}
const Notification:React.FC = () => {
  const [bookings, setBookings] = useState<Booking[]>([]);

   // Function to mock adding a booking
   const addBooking = () => {
    const newBooking: Booking = {
      id: Math.random().toString(),
      customerName: 'John Doe',
      restaurantName: 'Restaurant XYZ',
      time: '2024-03-31 19:00',
      quantity: 2,
      phoneNumber: '1234567890',
      image: 'https://d1hjkbq40fs2x4.cloudfront.net/2017-08-21/files/landscape-photography_1645.jpg', // Example URL for restaurant image
    };
    setBookings([...bookings, newBooking]);
  };
  return (
    <View>
      <Button title="Add Booking" onPress={addBooking} />
      <FlatList
        data={bookings}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.bookingContainer}>
            <Image source={{ uri: item.image }} style={styles.restaurantImage} />
            <View style={styles.bookingDetails}>
              <Text>{`Customer: ${item.customerName}`}</Text>
              <Text>{`Restaurant: ${item.restaurantName}`}</Text>
              <Text>{`Time: ${item.time}`}</Text>
              <Text>{`Quantity: ${item.quantity}`}</Text>
              <Text>{`Phone: ${item.phoneNumber}`}</Text>
            </View>
          </View>
        )}
      />
    </View>
  )
}

export default Notification

const styles = StyleSheet.create({
  bookingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    paddingBottom: 10,
    marginBottom: 10,
  },
  restaurantImage: {
    width: 80,
    height: 80,
    marginRight: 10,
    borderRadius: 5,
  },
  bookingDetails: {
    flex: 1,
  },
})