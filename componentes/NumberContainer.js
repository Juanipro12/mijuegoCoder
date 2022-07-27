import React, { Children } from 'react'
import colores from '../constantes/colores'
import { View,Text,StyleSheet } from 'react-native'

const NumberContainer = ({children}) => {
  return (
    <View style={styles.container}>
        <Text style={styles.number}>{children}</Text>
    </View>
  )
}
export default NumberContainer

const styles = StyleSheet.create({
    container:{
        borderWidth:2,
        borderColor:colores.accent,
        padding:10,
        borderRadius:10,
        marginVertical:10,
        alignItems:'center',
        justifyContent:'center'
    },
    number:{
        color:colores.accent,
        fontSize:22
    }
})
