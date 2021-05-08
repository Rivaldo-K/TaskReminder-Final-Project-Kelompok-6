import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Task from './src/components/Task'
const App = () => {
  return (
    <View style={styles.container}>

       {/* Tugas hari ini(Reyner Senduk dan Angelina Doringin)*/}
       <View style={styles.taksWrapper}>
         <Text style={styles.sectionTitle}>Tugas hari ini</Text>

         <View style={styles.items}>
           {/* Disini tempat tugas di input*/}
           <Task Text={'Task 1'}/>
           <Task Text={'Task 2'}/>
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
  items: {},
})

export default App