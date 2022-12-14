import React from 'react'
import { TextInput,StyleSheet } from 'react-native'

const Input = (props) => {
    const {styleProps}=props
  return (
    <TextInput {...props}  style={{...styles.input,...styleProps}} />
  )
}
export default Input
const styles = StyleSheet.create({
    input:{
        height:30,
        borderBottomColor:'grey',
        marginVertical:10
    }
})