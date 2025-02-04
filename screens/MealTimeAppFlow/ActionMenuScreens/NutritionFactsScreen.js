import { View, Text,StyleSheet } from 'react-native'
import React from 'react'

const NutritionFactsScreen = () => {
  return (
    <View>
      <Text style={styles.heading}>Nutrition Facts</Text>
    </View>
  )
}

export default NutritionFactsScreen


const styles=StyleSheet.create({
    heading:{
        fontSize:24,
        fontWeight:'bold',
        marginTop:20,
        padding:10
    }
})
