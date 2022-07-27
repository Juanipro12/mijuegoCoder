
import { View,StyleSheet } from 'react-native'

const Card = ({children,styleProp}) => {
    return(<View style={{...styles.card,...styleProp}}>
        {children}
    </View>)
  
}

const styles = StyleSheet.create({
    card:{
        shadowColor: '#f7287b',
        shadowOffset: {
            width: 0,
            height: 12,
        },
        shadowOpacity: 0.58,
        shadowRadius: 16.00,

        elevation: 24,
    }
})
export default Card