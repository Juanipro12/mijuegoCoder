import React, { useState } from 'react'
import {View,Text,StyleSheet,Button,TouchableWithoutFeedback,Keyboard} from  'react-native'
import Card from '../componentes/Card'
import Input from '../componentes/input'
import NumberContainer from '../componentes/NumberContainer'
import colores from '../constantes/colores'

export const StarGameScreen = ({onStartGame}) => {
    const [Valor, setvalor] = useState('')
    const [Confirmado, setconfirmado] = useState(false)
    const [ValorConfirmado, setvalorConfirmado] = useState('')
    const inputNumero = (text) =>{
        setvalor(text.replace(/[^0-9]/g,''))
    }
    const resetInput = () =>{
        setconfirmado(false)
        setvalor('')
    }
    const comfirmarInput = ()=>{
        let numero = parseInt(Valor)
       if( numero <=0 || numero >99 ||numero.length <1 || numero.toString == 'NaN'){
        return
       }else{
           setconfirmado(true)
           setvalorConfirmado(numero)
           setvalor('')

       }
    }
    return (
    <TouchableWithoutFeedback onPress={()=>Keyboard.dismiss()}>
        <View style={styles.screen}>
            <Text style={styles.title}>StarGameScreen</Text>
            <View style={styles.inputContainer}>
                <Text style={styles.title}>Elija su numero</Text>
                <Input 
                bluOnSumbit
                autoCapitalize='none'
                autoCorrect={false}
                keyboardType='numeric'
                maxLength={2}
                styleProps={styles.input} 
                value={Valor}
                onChangeText={inputNumero }
                />
                <View style={styles.buttonContainer}>
                    <Button title='Limpiar'  onPress={()=>{resetInput()}} color={colores.accent}/>
                    <Button title='Confirmar' disabled={Valor.length<1} onPress={()=>{comfirmarInput()}} color={colores.primary}/>
                </View>
            </View>
                {Confirmado?
                <Card styleProp={styles.summaryContainer}>
                    <Text style={{textAlign:'center'}}>Tu seleccion:</Text>
                    <NumberContainer>{ValorConfirmado}</NumberContainer>
                    <Button onPress={()=>{onStartGame(ValorConfirmado)}} title='Empezar Juego'/>
                </Card>:
                <></>
                }
        </View>
    </TouchableWithoutFeedback>
  )
}

const styles = StyleSheet.create({
    screen:{
        flex:1,
        padding:10,
        alignItems:'center'
    },
    title:{
        fontSize:20,
        marginVertical:10,
        textAlign:'center',
        fontFamily:'OswaldBold'

    },
    input:{
        borderColor:'#000',
        textAlign:'center',
        borderWidth:2,
        height:50,
       
    },
    inputContainer:{
        width:300,
        maxWidth:'80%',
    },
    buttonContainer:{
        flexDirection:'row',
        width:'100%',
        justifyContent:'space-between',
        paddingHorizontal:15
    },
    summaryContainer:{
        marginTop:20,
        alignItems:'center',
        justifyContent:'space-evenly',
        width:'60%',
        height:'30%'
    }
})
export default StarGameScreen