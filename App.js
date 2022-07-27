import { StyleSheet, Text, View } from 'react-native';
import Header from './componentes/Header';
import Card from './componentes/Card'
import StarGameScreen from './page/StarGameScreen';
import { useState } from 'react';
import GameScreen from './page/GameScreen';
import { useFonts } from 'expo-font'
import AppLoading from 'expo-app-loading'

export default function App() {
  const [loaded] = useFonts({OswaldBold:require('./assets/fonts/Oswald-Bold.ttf')})
  const [UserNumero, setuserNumero] = useState()
  const starGame = (num) =>{
    setuserNumero(num)
  }
  let content = <StarGameScreen onStartGame={starGame}/>
  if(UserNumero){
    content = <GameScreen userNumero={UserNumero}/>
  }
  if(!loaded)return <AppLoading/>
  return (
    <Card styleProp={styles.container}>
      <Header titulo={'Adivinar el numero'} />
      {content}
    </Card>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
});
