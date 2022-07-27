import React, { useEffect, useState } from 'react'
import { View,Text,StyleSheet, Button } from 'react-native'
import Card from '../componentes/Card'
import NumberContainer from '../componentes/NumberContainer'

const GameScreen = ({userNumero}) => {
    const [NumeroAdivinar, setnumeroAdivinar] = useState()

    const generateRandomBetween = (min,max,userNumero) =>{
        min = Math.ceil(min)
        max = Math.floor(max)
        let randoNumero = Math.floor(Math.random()*(max-min)+min)
        if(randoNumero === userNumero){
            return generateRandomBetween(min,max,userNumero)
        }else setnumeroAdivinar(randoNumero)
    }
    useEffect(()=>{
        generateRandomBetween(1,100,userNumero)
    },[userNumero])
  return (
    <View style={styles.screen}>
        <Text>La suposicion del oponente</Text>
        <NumberContainer>{NumeroAdivinar}</NumberContainer>
        <Card styleProp={styles.buttonContainer}>
            <Button title='Menor' onPress={()=>{}}/>
            <Button title='Mayor' onPress={()=>{}}/>
        </Card>
    </View>
  )
}
export default GameScreen
const styles = StyleSheet.create({
    screen:{
        flex:1,
        padding:10,
        alignItems:'center'
    },
    buttonContainer:{
        flexDirection:'row',
        justifyContent:'space-around',
        marginTop:20,
        width:300,
        maxWidth:'80%'
    }
})