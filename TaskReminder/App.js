import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Tugas from './src/components/Tugas'
const App = () => {
  return (
    <View style={styles.container}>

       {/* Tugas hari ini(Reyner Senduk dan Angelina Doringin)*/}
       <View style={styles.taksWrapper}>
         <Text style={styles.sectionTitle}>Tugas hari ini</Text>

         <View style={styles.items}>
           {/* Disini tempat tugas di input*/}
           <Tugas text={'Tugas 1'}/>
           <Tugas text={'Tugas 2'}/>
         </View>

       </View>
       
       
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
   flex: 1,
   backgroundColor: '#E8EAED',
  },
  taksWrapper: {
    paddingTop: 80,
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold'
  },
  items: {
    marginTop: 30,
  },
})

export default App