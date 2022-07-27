import React from 'react'
import { View,Text,StyleSheet } from 'react-native'
import colores from '../constantes/colores'

export const Header = ({titulo}) => {

  return (
    <View style={styles.header}>
        <Text style={styles.headerTitle} >
            {titulo}
        </Text>
    </View>
  )
}


const styles = StyleSheet.create({
  header:{
    width : '100%',
    height:90,
    paddingTop:36,
    backgroundColor:colores.primary,
    alignItem:'center',
    justifyContent:'center'
  },
  headerTitle:{
    textAlign:'center',
    color:'#fff',
    fontSize:22
  }
})
export default Header